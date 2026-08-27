/* Elorin docs - guides hub / index. Browser-loaded: no imports, no export. */
function GuidesHubScreen({ onOpenChecklist, onOpenBoss }) {
  const { SidebarNav, Badge, Tag, Button, Icon, Callout } = window.ElorinRSPSDesignSystem_44a46d;

  const cards = [
    { label: 'Getting started', title: 'Starting out', desc: 'A tickable list from tutorial to your first boss trip.', meta: <Badge tone="easy" bar>Easy</Badge>, open: onOpenChecklist },
    { label: 'Boss guide', title: 'Nex', desc: 'Four phases, one prayer switch each, 2011 drop table.', meta: <Badge tone="elite" bar>Elite</Badge>, open: onOpenBoss },
    { label: 'Boss guide', title: 'Elorin Wyrm', desc: 'Custom boss. Magic-weak, drops the wyrm shield shards.', meta: <Tag tone="gold" diamond>Custom</Tag> },
    { label: 'Raid', title: 'Vault of Elorin', desc: 'Three rooms, a team of five, and a hard mode nobody has cleared yet.', meta: <Badge tone="hard" bar>Hard</Badge> },
    { label: 'Money making', title: 'First 10m', desc: 'Two methods with no requirements and no risk.', meta: <Badge tone="easy" bar>Easy</Badge> },
    { label: 'Skilling', title: 'Fastest 99 Slayer', desc: 'Task blocks, cannon spots and the point breakpoints that matter.', meta: <Badge tone="medium" bar>Medium</Badge> },
  ];

  return (
    <div className="el-page" style={{ display: 'grid', gridTemplateColumns: 'var(--sidebar-w) minmax(0,1fr)', gap: 40, paddingBlock: 40 }}>
      <div>
        <SidebarNav
          current="Starting out"
          categories={[
            { label: 'Getting started', items: [{ label: 'Starting out', href: '#' }, { label: 'Money making', href: '#' }, { label: 'Daily loop', href: '#' }] },
            { label: 'Bosses', items: [{ label: 'Nex', href: '#' }, { label: 'Corporeal Beast', href: '#' }, { label: 'Elorin Wyrm', href: '#' }] },
            { label: 'Raids', items: [{ label: 'Vault of Elorin', href: '#' }, { label: 'Hard mode', href: '#' }] },
            { label: 'Skilling', items: [{ label: 'Fastest 99 Slayer', href: '#' }, { label: 'Runecrafting', href: '#' }] },
          ]}
        />
      </div>
      <div>
        <span className="el-label">[ guides ]</span>
        <h1 style={{ marginTop: 12 }}><span className="el-metal-silver">Player guides</span></h1>
        <p style={{ marginTop: 20, maxWidth: '62ch' }}>
          Written by the people who tested the content. If a guide is wrong, say so in Discord and
          it gets fixed the same day.
        </p>
        <div style={{ marginTop: 32 }}>
          <Callout tone="note">
            Every drop table lists the revision it came from. Mixed-revision data means the OSRS
            wiki is right about the mechanics and wrong about the rates.
          </Callout>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20, marginTop: 28 }}>
          {cards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="el-surface"
              onClick={(e) => { e.preventDefault(); if (card.open) card.open(); }}
              style={{ display: 'block', padding: 20, border: '1px solid var(--border-subtle)', textDecoration: 'none' }}
            >
              <span className="el-label">[ {card.label} ]</span>
              <h3 style={{ marginTop: 8 }}>{card.title}</h3>
              <p style={{ marginTop: 10, fontSize: 15 }}>{card.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
                {card.meta}
                <Icon name="arrow-right" style={{ marginLeft: 'auto', color: 'var(--gold-400)', fontSize: 16 }} />
              </div>
            </a>
          ))}
        </div>
        <div className="el-rule" style={{ marginTop: 40 }}><span className="el-diamond"></span></div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
          <Button variant="secondary" icon="message-circle" href="#">Request a guide</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { GuidesHubScreen });
