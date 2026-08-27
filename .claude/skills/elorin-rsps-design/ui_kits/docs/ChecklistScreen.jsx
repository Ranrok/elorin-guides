/* Elorin docs - Starting Out checklist screen.
   Loaded in the browser as text/babel, so: no imports, no export keyword.
   Design-system components come off the compiled bundle's global namespace. */
function ChecklistScreen({ done, onToggle, onReset }) {
  const { ProgressHeader, SectionCard, ChecklistItem, Callout, Badge, Tag, Button, Accordion, Icon } = window.ElorinRSPSDesignSystem_44a46d;

  const sections = [
    {
      label: 'Step 01', title: 'First hour',
      description: 'Get off Tutorial Island and into the game proper.',
      items: [
        { id: 'tutorial', title: 'Finish the tutorial', description: 'Skip it if you have played before. You keep the starter kit either way.' },
        { id: 'pin', title: 'Set a bank PIN', description: 'Do it before your first trip out of Edgeville.' },
        { id: 'vote', title: 'Vote for the first time', subSteps: ['Claim points at the Vote shop', 'Buy a Vote mystery box'], meta: <Badge tone="easy" bar>Easy</Badge> },
        { id: 'starter', title: 'Claim the starter package from the Grand Exchange clerk', meta: <Tag tone="gold" diamond>One-off</Tag> },
        { id: 'teleports', title: 'Learn the teleport hub', description: 'Home teleport first, then the ::train and ::shops commands.' },
      ],
    },
    {
      label: 'Step 02', title: 'Gear and combat',
      description: 'Combat is pre-EOC. Rune gear carries you further here than it does on OSRS.',
      items: [
        { id: 'rune', title: 'Buy a full rune set', meta: <Badge tone="skill" level={40}>Defence</Badge> },
        { id: 'scimmy', title: 'Get a dragon scimitar and a dragon defender', description: 'Defender drops from the Warriors guild cyclops at 1/12.' },
        { id: 'prayer', title: 'Train Prayer to 43 for Protect from Melee', subSteps: ['Bury big bones at the Chaos Temple', 'Or use a gilded altar in the donator zone'] },
        { id: 'slayer', title: 'Unlock your first Slayer task', meta: <Badge tone="medium" bar>Medium</Badge> },
        { id: 'whip', title: 'Bank an Abyssal whip', description: 'Abyssal demons at Slayer 85, or buy one off another player.', meta: <Badge tone="hard" bar>Hard</Badge> },
      ],
    },
    {
      label: 'Step 03', title: 'First gold',
      description: 'Two methods that work from scratch with no requirements.',
      items: [
        { id: 'thieve', title: 'Thieve the Ardougne stalls until 5m', description: 'Silk, then master farmer runs. Bring food, not armour.' },
        { id: 'gwd', title: 'Open a God Wars dungeon killcount on a bandos task' },
        { id: 'flip', title: 'Flip one item on the Grand Exchange clone', subSteps: ['Check the ::prices board', 'Buy 100 blood runes, resell in the shop'] },
        { id: 'daily', title: 'Set a daily loop: vote, dailies, then a Slayer task' },
      ],
    },
    {
      label: 'Step 04', title: 'Endgame on the horizon',
      description: 'None of this is required. It is what the next month looks like.',
      items: [
        { id: 'nex', title: 'Duo Nex for the first time', meta: <Badge tone="elite" bar>Elite</Badge> },
        { id: 'raid', title: 'Clear the Elorin raid on normal mode', meta: <Tag tone="gold" diamond>Custom</Tag> },
        { id: 'wyrm', title: 'Kill the Elorin Wyrm solo', description: 'Custom boss. Magic-weak, drops the wyrm shield shards.' },
        { id: 'cape', title: 'Earn a max cape' },
      ],
    },
  ];

  const all = sections.flatMap((s) => s.items);
  const count = all.filter((i) => done[i.id]).length;

  return (
    <div>
      <ProgressHeader title="Starting out" value={count} total={all.length}>
        <Button variant="ghost" size="sm" onClick={onReset}>Reset</Button>
      </ProgressHeader>
      <div className="el-page" style={{ paddingBlock: '48px 64px' }}>
        <span className="el-label">[ getting started &middot; updated for launch ]</span>
        <h1 style={{ marginTop: 12, maxWidth: '18ch' }}><span className="el-metal-silver">Starting out</span></h1>
        <p style={{ marginTop: 20, maxWidth: '62ch' }}>
          Work down the list. Tick things off as you go. Progress is saved on this device, so
          nobody sees your list but you. Nothing here is timed and nothing is missable.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
          <Button variant="primary" href="#step-01">Start the list</Button>
          <Button variant="discord" icon="message-circle" href="#">Ask in Discord</Button>
        </div>
        <div style={{ marginTop: 40, display: 'grid', gap: 20 }}>
          <Callout tone="tip">
            Bank at Edgeville. The Grand Exchange clone, the fairy ring and the Slayer master are
            all one click from the bank chest.
          </Callout>
          {sections.map((section, si) => (
            <SectionCard
              key={section.title}
              id={si === 0 ? 'step-01' : undefined}
              label={section.label}
              title={section.title}
              description={section.description}
              value={section.items.filter((i) => done[i.id]).length}
              total={section.items.length}
            >
              {section.items.map((item) => (
                <ChecklistItem key={item.id} {...item} checked={!!done[item.id]} onChange={onToggle} />
              ))}
            </SectionCard>
          ))}
          <Callout tone="warning">
            The Wilderness is live everywhere north of the ditch, Revenant caves included. Take
            nothing you would mind losing.
          </Callout>
          <Accordion title="Coming from OSRS?" tag="Optional">
            <p>
              No EOC, no OSRS accuracy formulas. Prayer switching matters more, tick eating matters
              less. Drop tables follow the revision each boss came from, so read the table on the
              boss page rather than the OSRS wiki.
            </p>
          </Accordion>
          <div className="el-rule" style={{ marginTop: 24 }}><span className="el-diamond"></span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
            <Icon name="arrow-right" style={{ color: 'var(--gold-400)' }} />
            <a href="#nex" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em', border: 0 }}>Next: your first boss</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ChecklistScreen });
