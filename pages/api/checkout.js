// pages/api/checkout.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let { priceId } = req.body || {};
    if (!priceId) return res.status(400).json({ error: "Missing priceId" });

    // If the caller accidentally sends a Product ID (prod_...), convert it to a Price ID (price_...)
    if (typeof priceId === "string" && priceId.startsWith("prod_")) {
      // Try default_price first
      const product = await stripe.products.retrieve(priceId);
      if (product?.default_price) {
        priceId =
          typeof product.default_price === "string"
            ? product.default_price
            : product.default_price.id;
      } else {
        // Fallback: fetch an active recurring price for the product
        const prices = await stripe.prices.list({
          product: priceId,
          active: true,
          limit: 1,
        });
        if (!prices.data.length) {
          throw new Error("No active prices found for that product.");
        }
        priceId = prices.data[0].id;
      }
    }

    // Final sanity check
    if (!String(priceId).startsWith("price_")) {
      return res.status(400).json({ error: "Invalid priceId (must start with price_...)" });
    }

    const origin =
      req.headers.origin ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://virtual-mind.ai";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url:
        process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL ||
        `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:
        process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL || `${origin}/pricing`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return res.status(500).json({ error: err.message || "Checkout failed" });
  }
}
