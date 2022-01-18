

export const AppShell = ({ children }) => {

  return (
    <>
      <header className="md:sticky md:top-0 bg-white-700 md:z-10">
        <div className="px-4">
          <div className="flex justify-between items-center py-2 max-w-7xl mx-auto border-b border-gray-200">
          <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between">
                <div className="flex space-x-7">
                  <div>
                    <a href="www.google.com" class="flex items-center py-4 px-2">
                    <img className ='h-10 w-10 mr-2' src='logo.png' alt='' />
                    </a>
                  </div>
                  <div class="hidden md:flex items-center space-x-1">
                    <a href="w" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
                    <a href="www.google.com" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Products</a>
                    <a href="www.google.com" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About Me!</a>
                    <a href="www.google.com" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Me!</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
            
          </div>
        </div>
      </header>
      <main>{children}</main>
     
    </>
  );
};