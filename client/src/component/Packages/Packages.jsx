import React from 'react';


const  Packages = () => {

    const PricingCard = ({ title, description, monthlyPrice, features, isPopular}) => (

        <div className={`rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 ${isPopular ? 'bg-gradient-to-br from-[#15588D] to-[#15588D] text-white' : 'bg-white'}`}>
            {isPopular && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">Most Popular</span>
            )}
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-4">{description}</p>
            <div className="mt-6">
                <span className={`text-4xl font-bold ${isPopular ? '' : 'text-gray-900'}`}>
                    ${monthlyPrice}
                </span>
                <span className={isPopular ? '' : 'text-gray-600'}>/month</span>
            </div>
            <ul className="mt-6 space-y-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg className={`h-5 w-5 ${isPopular ? 'text-green-300' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={`ml-3 ${isPopular ? '' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                ))}
            </ul>
            <a
                href="#"
                className={`mt-8 block w-full text-center py-3 rounded-lg font-medium transition ${
                    isPopular ? 'bg-white text-blue-700 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
            >
                Get Started
            </a>
        </div>
    );

    const plans = [
        {
            title: 'Basic',
            description: 'Perfect for individuals starting out.',
            monthlyPrice: 10,
            yearlyPrice: 8,
            features: ['1 User', '5GB Storage', 'Basic Support'],
            isPopular: false,
        },
        {
            title: 'Pro',
            description: 'Ideal for growing businesses.',
            monthlyPrice: 25,
            yearlyPrice: 20,
            features: ['5 Users', '50GB Storage', 'Priority Support', 'Analytics Dashboard'],
            isPopular: true,
        },
        {
            title: 'Enterprise',
            description: 'For large organizations with advanced needs.',
            monthlyPrice: 50,
            yearlyPrice: 40,
            features: ['Unlimited Users', '500GB Storage', '24/7 Support', 'Custom Integrations'],
            isPopular: false,
        },
    ];


    return (
        <>

            <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1
                            className='text-4xl text-center font-semibold text-[#15588D]  mb-20'
                        >
                            Affordable pricing
                        </h1>
                        
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {plans.map((plan, index) => (
                                <PricingCard key={index} {...plan} />
                            ))}
                        </div>
                    </div>
            </section>
        </>
    );
};

export default Packages;