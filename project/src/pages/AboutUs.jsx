import Pricing from "../components/Pricing";

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">About Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                    We are a team of passionate individuals dedicated to providing the best services to our customers. Our mission is to deliver high-quality products and exceptional customer service.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    With years of experience in the industry, we strive to innovate and improve continuously. Our team works tirelessly to ensure that we meet and exceed your expectations.
                </p>
                <Pricing />
            </div>
        </div>
    );
}
export default AboutUs;