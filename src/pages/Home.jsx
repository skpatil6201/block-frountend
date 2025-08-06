import Header from "../componant/Header";

export default function Home() {
  return (
    <>
      <Header/>
      
      {/* Hero Section */}
      <section className="bg-gray-100  py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Our Website</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Discover amazing content and features that will transform your experience</p>
       
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Lightning Fast</h3>
              <p className="text-gray-600">Experience blazing fast performance with our optimized platform</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Reliable</h3>
              <p className="text-gray-600">Count on our robust infrastructure for 99.9% uptime</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Customizable</h3>
              <p className="text-gray-600">Tailor the experience to match your unique needs</p>
            </div>
          </div>
        </div>
      </main>

     

      
    </>
  )
}