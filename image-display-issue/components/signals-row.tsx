interface SignalCardProps {
  label: string
  value: string | number
  context: string
}

function SignalCard({ label, value, context }: SignalCardProps) {
  return (
    <div 
      className="rounded-xl p-4"
      style={{
        background: '#FFFFFF',
        border: '1px solid #F1F5F9'
      }}
    >
      <p 
        className="mb-1 text-[11px] font-medium"
        style={{ color: '#94A3B8' }}
      >
        {label}
      </p>
      <p 
        className="text-lg font-semibold"
        style={{ color: '#0F172A' }}
      >
        {value}
      </p>
      <p 
        className="mt-1 text-[11px]"
        style={{ color: '#94A3B8' }}
      >
        {context}
      </p>
    </div>
  )
}

export function SignalsRow() {
  const signals = [
    {
      label: "Active applications",
      value: 6,
      context: "Room to improve"
    },
    {
      label: "Response rate",
      value: "12%",
      context: "Target ~25%"
    },
    {
      label: "Strong fits",
      value: 2,
      context: "Focus here"
    }
  ]

  return (
    <div className="mt-6 grid grid-cols-3 gap-4">
      {signals.map((signal) => (
        <SignalCard
          key={signal.label}
          label={signal.label}
          value={signal.value}
          context={signal.context}
        />
      ))}
    </div>
  )
}
