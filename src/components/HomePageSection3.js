const plans = [
  {
    title: "Starter",
    price: "$99",
    description: "Everything you need to start selling.",
    features: [
      "Up to 3 team members",
      "Up to 5 deal progress boards",
      "Source leads from select platforms",
      "RadiantAI integrations",
      "Competitor analysis",
    ],
  },
  {
    title: "Growth",
    price: "$149",
    description: "All the extras for your growing team.",
    features: [
      "Up to 10 team members",
      "Unlimited deal progress boards",
      "Source leads from over 50 verified platforms",
      "RadiantAI integrations",
      "5 competitor analyses per month",
    ],
  },
  {
    title: "Enterprise",
    price: "$299",
    description: "Added flexibility to close deals at scale.",
    features: [
      "Unlimited active team members",
      "Unlimited deal progress boards",
      "Source leads from over 100 verified platforms",
      "RadiantAI integrations",
      "Unlimited competitor analyses",
    ],
  },
];

const HomePageSection3 = () => {
  return (
    <div>
      <section className="relative">
        {/* Heading */}
        <div className="text-center py-20 px-6 bg-white relative">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing that grows with your team size.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Companies all over the world have closed millions of deals with
            Radiant. Sign up today and start selling smarter.
          </p>
        </div>

        {/* Gradient Background Area */}
        <div className="relative z-0 bg-gradient-to-r from-[#FBF2C5] via-[#FFCCCC] to-[#925FEA] pt-24 pb-16">
          {/* Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 -mt-40">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="bg-white shadow-md rounded-2xl p-8 text-left flex flex-col justify-between border"
              >
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500">
                    {plan.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    {plan.description}
                  </p>
                  <p className="mt-6 text-3xl font-bold text-gray-900">
                    {plan.price}{" "}
                    <span className="text-sm font-medium text-gray-500">
                      USD per month
                    </span>
                  </p>
                  <button className="mt-6 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 text-sm">
                    Start a free trial
                  </button>
                  <ul className="mt-6 space-y-3 text-sm text-gray-700">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="mr-2 text-lg">+</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Logos */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 px-6">
            {["SavvyCal", "Laravel", "TUPLE", "Transistor", "Statamic"].map(
              (brand) => (
                <div
                  key={brand}
                  className="text-gray-900 font-semibold text-sm"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageSection3;
