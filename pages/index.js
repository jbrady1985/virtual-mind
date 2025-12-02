export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#000',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: 900,
        width: '100%',
        textAlign: 'center',
        background: '#1a1a1a',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
      }}>
        <h1 style={{ fontSize: '48px', margin: 0, lineHeight: 1.1 }}>
          <span style={{ color: '#d4af37' }}>Virtual-Mind</span>.ai
        </h1>
        <p style={{ opacity: 0.9, marginTop: 12, fontSize: '18px' }}>
          Create a cloud-hosted AI that thinks like <strong>you</strong>.
        </p>

        <div style={{
          marginTop: 28,
          display: 'inline-flex',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href="#" style={{
            background: '#d4af37',
            color: '#000',
            padding: '12px 18px',
            borderRadius: '12px',
            fontWeight: 700,
            textDecoration: 'none'
          }}>Create your virtual mind</a>

          <a href="#how" style={{
            border: '1px solid #333',
            color: '#fff',
            padding: '12px 18px',
            borderRadius: '12px',
            textDecoration: 'none'
          }}>How it works</a>
        </div>

        <section id="how" style={{ textAlign: 'left', marginTop: 36 }}>
          <h2 style={{ fontSize: '22px', marginBottom: 8 }}>How it works</h2>
          <ol style={{ lineHeight: 1.7, paddingLeft: '20px' }}>
            <li>Answer a short psychology-backed quiz.</li>
            <li>We generate a persona JSON that mirrors your decision style.</li>
            <li>Chat with your digital twin — refine anytime.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
