"use client"

interface ActionItemProps {
  title: string
  subtext: string
  isLast?: boolean
}

function ActionItem({ title, subtext, isLast = false }: ActionItemProps) {
  return (
    <div 
      className="flex h-14 items-center justify-between py-2"
      style={{
        borderBottom: isLast ? 'none' : '1px solid rgba(15,23,42,0.05)'
      }}
    >
      {/* Left Side */}
      <div className="flex flex-col">
        <span 
          className="text-sm"
          style={{ color: '#0F172A' }}
        >
          {title}
        </span>
        <span 
          className="text-xs"
          style={{ color: '#64748B' }}
        >
          {subtext}
        </span>
      </div>

      {/* Right Side Button */}
      <button
        className="h-8 cursor-pointer rounded-lg px-3 text-sm font-medium transition-all duration-[120ms]"
        style={{
          background: '#1D4ED8',
          color: '#FFFFFF'
        }}
      >
        Do it
      </button>
    </div>
  )
}

export function NextActions() {
  // Max 3 items, sorted by impact, always show time estimate
  const actions = [
    {
      title: "Follow up with Acme Corp",
      subtext: "5 min"
    },
    {
      title: "Follow up with TechStart",
      subtext: "5 min"
    },
    {
      title: "Update resume keywords",
      subtext: "10 min"
    }
  ]

  return (
    <section className="mt-10">
      {/* Section Header */}
      <h3 
        className="mb-4 text-lg font-semibold"
        style={{ color: '#0F172A' }}
      >
        What to do next
      </h3>

      {/* Action List Container */}
      <div 
        className="rounded-2xl p-4"
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB'
        }}
      >
        {actions.map((action, index) => (
          <ActionItem
            key={action.title}
            title={action.title}
            subtext={action.subtext}
            isLast={index === actions.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
