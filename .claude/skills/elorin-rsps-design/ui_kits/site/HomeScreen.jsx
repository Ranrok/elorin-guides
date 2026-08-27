/* Elorin main site - homepage, approximated from the supplied screenshot only
   (no source code or Figma was available). Browser-loaded: no imports, no export. */
function HomeScreen() {
  const { Button, Icon } = window.ElorinRSPSDesignSystem_44a46d;
  const parts = [['01', 'Days'], ['00', 'Hours'], ['16', 'Minutes'], ['29', 'Seconds']];
  const cards = [
    { label: 'Concept art · Pre-EOC combat', title: 'Pre-EOC combat', desc: 'Special attacks, prayer switching and the movement you remember. No EOC, no compromises.' },
    { label: 'Concept art · Mixed revisions', title: 'Mixed revisions', desc: 'Content pulled from the golden age of RS, with OSRS additions where they earn their place.' },
    { label: 'Concept art · Custom content', title: 'Custom content', desc: 'Bosses, raids and minigames built for this server, balanced around the pre-EOC combat triangle.' },
  ];

  return (
    <div>
      <div className="el-page" style={{ paddingBlock: '72px 96px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <span style={{ flex: '0 1 120px', height: 1, background: 'var(--grad-rule)' }}></span>
          <span className="el-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', border: '1px solid var(--border-gold-soft)', borderRadius: 'var(--radius-chip)', background: 'rgba(200,164,90,.06)', color: 'var(--gold-200)' }}>
            <span className="el-diamond" style={{ width: 5, height: 5, background: 'var(--gold-200)' }}></span>
            Elorin RSPS is coming soon
          </span>
          <span style={{ flex: '0 1 120px', height: 1, background: 'var(--grad-rule)' }}></span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 32 }}>
          {parts.map(([n, unit], i) => (
            <div key={unit} className="el-surface" style={{ width: 96, padding: '14px 0 10px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 700, letterSpacing: '0.04em', color: i === 0 ? 'var(--gold-200)' : 'var(--text-primary)' }}>{n}</div>
              <div className="el-label" style={{ marginTop: 4, fontSize: 9 }}>{unit}</div>
            </div>
          ))}
        </div>

        <img src="../../assets/elorin-logo.png" alt="Elorin" style={{ width: 'min(490px, 82%)', margin: '48px auto 0', filter: 'drop-shadow(0 0 60px rgba(74,127,193,.4))' }} />

        <h1 style={{ marginTop: 40, fontSize: 'clamp(34px, 5.4vw, 56px)', lineHeight: 1.02 }}>
          <span className="el-metal-silver">A Pre-EOC RSPS,</span><br />
          <span className="el-metal-gold">reforged.</span>
        </h1>

        <p className="el-intro" style={{ marginTop: 28 }}>
          Mixed-revision data spanning the golden age of RS with <a href="#">OSRS content</a> woven
          in, plus an arsenal of <a href="#">carefully crafted custom content</a>. Fast-paced,
          exciting, and built for players who want the best experience.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 14, marginTop: 36 }}>
          <Button variant="primary" size="lg" href="#">Start your adventure</Button>
          <Button variant="discord" size="lg" icon="message-circle" href="#">Join the Discord</Button>
        </div>
      </div>

      <div className="el-page" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, paddingBottom: 96 }}>
        {cards.map((card) => (
          <article key={card.title} className="el-surface" style={{ overflow: 'hidden' }}>
            <div style={{ position: 'relative', aspectRatio: '16 / 10', display: 'grid', placeItems: 'center', background: 'radial-gradient(300px 200px at 50% 40%, #1d2b49 0%, #0d1526 75%)', borderBottom: '1px solid var(--border-gold-soft)' }}>
              <span className="el-diamond" style={{ width: 34, height: 34, background: 'rgba(127,178,229,.32)' }}></span>
              <span className="el-label" style={{ position: 'absolute', left: 16, bottom: 12, fontSize: 9 }}>[ {card.label} ]</span>
            </div>
            <div style={{ padding: 24 }}>
              <h3>{card.title}</h3>
              <p style={{ marginTop: 12, fontSize: 15 }}>{card.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18 }}>
                <span className="el-label" style={{ color: 'var(--text-gold)' }}>Read more</span>
                <Icon name="arrow-right" style={{ color: 'var(--gold-400)', fontSize: 15 }} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen });
