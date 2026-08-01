const plans = [
  { name: "Free", price: "$0", features: ["5 AI generations / month", "1 platform", "Basic calendar"] },
  { name: "Pro", price: "$15/mo", features: ["Unlimited AI generations", "All platforms", "Analytics", "2 team members"], highlight: true },
  { name: "Agency", price: "$49/mo", features: ["Everything in Pro", "10 team members", "Client workspaces", "Priority support"] },
];

export default function PricingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Billing & Plans</h1>
      <p className="text-gray-500 mb-8">
        Upgrade any time. Connect Stripe test mode to make these buttons real.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-xl p-6 border ${
              p.highlight ? "border-brand-500 bg-white shadow-md" : "border-gray-100 bg-white"
            }`}
          >
            <h3 className="font-semibold mb-1">{p.name}</h3>
            <p className="text-2xl font-bold mb-4">{p.price}</p>
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              {p.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-lg text-sm font-medium ${
                p.highlight ? "bg-brand-500 text-white" : "border border-gray-300"
              }`}
            >
              {p.name === "Free" ? "Current plan" : "Upgrade"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
