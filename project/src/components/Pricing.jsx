const Pricing = () => {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
                        <p className="text-gray-700 mb-4">$10/month</p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Choose Plan</button>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
                        <p className="text-gray-700 mb-4">$20/month</p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Choose Plan</button>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
                        <p className="text-gray-700 mb-4">$50/month</p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Choose Plan</button>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-gray-600">Need help choosing a plan? <a href="/contact" className="text-blue-500">Contact us</a></p>
                </div>
            </div>
        </div>
    );
}
export default Pricing;