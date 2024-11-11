import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative bg-white h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/path/to/your-image.jpg)' }}></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-white text-center z-10">
        {/* Navigation Bar */}
        <header className="flex fixed top-0 left-0 w-full bg-blue-500 p-4 z-50">
          <nav className="flex justify-between items-center w-full">
            <a href="#" className="text-white font-semibold">Home</a>
            <a href="#" className="text-white font-semibold">About</a>
            <a href="#" className="text-white font-semibold">Services</a>
            <a href="#" className="text-white font-semibold">Contact</a>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="max-w-lg mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-500">Welcome to my Portfolio!</h1>
          <div>
            <Link href="#contact">
              <button className="bg-gray-200 font-semibold text-gray-500 py-3 px-6 rounded-full text-xl shadow-2xl">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-full w-[75%] bg-white flex items-center justify-center">
          <div className='rounded-xl bg-gray-200 h-1/2 w-1/2 flex items-center justify-center shadow-2xl'> 
            insert img
          </div>
        </div>

    </section>
  );
}


  

