export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 mt-10 font-sans">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">About Us</h3>
          <p className="text-sm leading-relaxed">
            FashionBrand brings you timeless fashion for every season, blending comfort with modern style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition-colors cursor-pointer">Shop</li>
            <li className="hover:text-white transition-colors cursor-pointer">About</li>
            <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition-colors cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-white transition-colors cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 flex-1 rounded-l-md text-black outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 text-black px-4 py-3 rounded-r-md hover:bg-yellow-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-5 border-t border-gray-800 text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white">FashionBrand</span>. All rights reserved.
      </div>
    </footer>
  );
}
