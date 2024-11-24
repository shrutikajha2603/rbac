import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">VRV Security</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Protecting digital assets with AI-powered cybersecurity solutions.
          </p>
          <Link
            to="/dashboard"
            className="bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose <span className="text-blue-400">Us</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="text-yellow-300 text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold mb-2">AI-Powered Security</h3>
              <p className="text-gray-400">
                Our AI-driven solutions proactively protect your systems from threats.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="text-yellow-300 text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-semibold mb-2">Cloud Protection</h3>
              <p className="text-gray-400">
                Safeguard your cloud infrastructure with our advanced VAPT services.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="text-yellow-300 text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold mb-2">End-to-End Security</h3>
              <p className="text-gray-400">
                From endpoints to servers, we provide comprehensive protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Systems?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Join the hundreds of organizations who trust VRV Security.
          </p>
          <Link
            to="/dashboard"
            className="bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
