// BackgroundOrbs.jsx — orbs + floating molecule clusters
const MOLECULES = [
  // top-left — purple
  {
    id: 'm1',
    style: { top: '8%', left: '5%' },
    anim: 'molFloat1 28s ease-in-out infinite',
    color: '#7c6af7',
    nodes: [
      { cx: 40, cy: 20 },
      { cx: 10, cy: 50 },
      { cx: 70, cy: 55 },
      { cx: 45, cy: 80 },
    ],
    bonds: [[0,1],[0,2],[1,3],[2,3]],
  },
  // top-right — teal
  {
    id: 'm2',
    style: { top: '12%', right: '7%' },
    anim: 'molFloat2 22s ease-in-out infinite',
    color: '#2dd4bf',
    nodes: [
      { cx: 30, cy: 15 },
      { cx: 70, cy: 30 },
      { cx: 15, cy: 65 },
      { cx: 60, cy: 75 },
      { cx: 85, cy: 60 },
    ],
    bonds: [[0,1],[0,2],[1,4],[2,3],[3,4]],
  },
  // mid-left — accent2
  {
    id: 'm3',
    style: { top: '42%', left: '2%' },
    anim: 'molFloat3 32s ease-in-out infinite',
    color: '#a594ff',
    nodes: [
      { cx: 50, cy: 10 },
      { cx: 15, cy: 45 },
      { cx: 85, cy: 45 },
      { cx: 50, cy: 80 },
    ],
    bonds: [[0,1],[0,2],[1,3],[2,3]],
  },
  // mid-right — purple
  {
    id: 'm4',
    style: { top: '55%', right: '4%' },
    anim: 'molFloat1 26s ease-in-out infinite reverse',
    color: '#7c6af7',
    nodes: [
      { cx: 20, cy: 30 },
      { cx: 65, cy: 15 },
      { cx: 80, cy: 60 },
      { cx: 35, cy: 75 },
    ],
    bonds: [[0,1],[1,2],[2,3],[3,0]],
  },
  // bottom-left — teal
  {
    id: 'm5',
    style: { bottom: '12%', left: '10%' },
    anim: 'molFloat2 24s ease-in-out infinite reverse',
    color: '#2dd4bf',
    nodes: [
      { cx: 50, cy: 15 },
      { cx: 15, cy: 55 },
      { cx: 85, cy: 55 },
    ],
    bonds: [[0,1],[0,2],[1,2]],
  },
  // bottom-right — accent2
  {
    id: 'm6',
    style: { bottom: '18%', right: '8%' },
    anim: 'molFloat3 30s ease-in-out infinite',
    color: '#a594ff',
    nodes: [
      { cx: 45, cy: 10 },
      { cx: 10, cy: 40 },
      { cx: 80, cy: 35 },
      { cx: 25, cy: 80 },
      { cx: 70, cy: 75 },
    ],
    bonds: [[0,1],[0,2],[1,3],[2,4],[3,4]],
  },
]

function Molecule({ id, style, anim, color, nodes, bonds }) {
  return (
    <svg
      key={id}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className="mol"
      style={{
        position: 'absolute',
        width: 90,
        height: 90,
        opacity: 0.22,
        animation: anim,
        ...style,
      }}
      aria-hidden="true"
    >
      {bonds.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.7"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.cx} cy={n.cy} r={i === 0 ? 4 : 2.5}
          fill={color}
          fillOpacity="0.9"
        />
      ))}
    </svg>
  )
}

export default function BackgroundOrbs() {
  return (
    <div aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <span className="orb orb-1" />
      <span className="orb orb-2" />
      <span className="orb orb-3" />
      <span className="orb orb-4" />

      {MOLECULES.map(m => <Molecule key={m.id} {...m} />)}
    </div>
  )
}
