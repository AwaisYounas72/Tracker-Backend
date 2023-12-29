 

const Footer = () => {
  return (
    <footer className="bg-white text-gary-500 py-4">
      <div className="container mx-auto flex md:flex-wrap flex-col gap-2 md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="../src/tracker.png" alt="Logo" className="h-12" />
        
        </div>
        
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        
        <div className="mt-4 sm:mt-0">
          <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
