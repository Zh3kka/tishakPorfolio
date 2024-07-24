import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-8 border-t border-gray-300">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0 text-center lg:text-left">
          <h2 className="text-lg font-bold uppercase">Contact</h2>
          <div className="flex items-center justify-center lg:justify-start my-2">
            <hr className="w-8 border-black border-t-2 mr-2" />
          </div>
          <a href="mailto:tishak@gmail.com" className="text-gray-600">
            tishak@gmail.com
          </a>
        </div>
        <div className="mb-4 lg:mb-0 flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="text-center lg:text-right">
          <p className="text-gray-600">Copyright 2024 © Tishkevich Danila</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
