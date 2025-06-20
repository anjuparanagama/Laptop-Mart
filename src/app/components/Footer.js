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
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/help" className="hover:text-white">Help Center</a></li>
            <li><a href="/returns" className="hover:text-white">Returns</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping</a></li>
            <li><a href="/warranty" className="hover:text-white">Warranty</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l bg-green-700 text-gray-200 placeholder-gray-400 focus:outline-none"
              aria-label="Email for newsletter subscription"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-4 rounded-r text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-green-700 text-center py-4 text-xs text-green-300">
        © {new Date().getFullYear()} Laptop-Mart. All rights reserved.
      </div>
    </footer>
  );
}
