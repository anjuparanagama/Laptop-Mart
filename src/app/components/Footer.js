import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Laptop-Mart</h4>
          <p className="text-sm">
            Your trusted source for laptops and accessories. Quality products and excellent service.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/aboutus" className="hover:text-white">About Us</a></li>
            <li><a href="/category" className="hover:text-white">Products</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-green-700 text-center py-4 text-xs text-green-300">
        © {new Date().getFullYear()} Laptop-Mart. All rights reserved.
      </div>
    </footer>
  );
}
