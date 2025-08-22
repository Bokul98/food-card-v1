import { FaBowlFood, FaHeadset } from 'react-icons/fa6';
import { MdOutlineVerified } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

const features = [
    {
        icon: <FaBowlFood className="text-4xl md:text-5xl text-white mb-4" />,
        title: "Serve Healthy Food",
        desc: "We serve all healthy food here. You can choose any food you like.",
        gradient: "from-green-500 to-emerald-600"
    },
    {
        icon: <MdOutlineVerified className="text-4xl md:text-5xl text-white mb-4" />,
        title: "Best Quality",
        desc: "Our food quality is excellent. You will get exactly what you want here.",
        gradient: "from-blue-500 to-cyan-600"
    },
    {
        icon: <TbTruckDelivery className="text-4xl md:text-5xl text-white mb-4" />,
        title: "Fast Delivery",
        desc: "You can rely on the main goal of our delivery team: to deliver orders quickly. You will receive it shortly after ordering.",
        gradient: "from-purple-500 to-violet-600"
    },
    {
        icon: <FaHeadset className="text-4xl md:text-5xl text-white mb-4" />,
        title: "Customer Support",
        desc: "Our friendly team is always ready to assist you with any questions or concerns you may have.",
        gradient: "from-orange-500 to-red-600"
    }
];

const WhyChoose = () => {
    return (
        <section className="w-full py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100/20 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Why Choose Us
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            WHY CHOOSE US?
                        </span>
                    </h2>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                    
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        You will choose us because you get the best quality food from us and we deliver fast. 
                        Experience excellence in every bite with our premium services.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-gray-200"
                        >
                            {/* Icon Container */}
                            <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                {item.icon}
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {item.title}
                            </h3>
                            
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {item.desc}
                            </p>

                            {/* Decorative Element */}
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center mt-16">
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                        Experience the Difference Today!
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-20 left-20 w-5 h-5 bg-green-300/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-40 right-10 w-3 h-3 bg-orange-300/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        </section>
    );
};

export default WhyChoose;