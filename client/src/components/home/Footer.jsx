function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-red-500">
              🍕 PizzaHub
            </h2>

            <p className="mt-4 text-gray-400">
              Fresh pizza delivered hot and fast to your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Home</li>
              <li>Menu</li>
              <li>Orders</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Contact</h3>

            <p className="mt-4 text-gray-400">
              📍 Hyderabad, India
            </p>

            <p className="text-gray-400">
              📞 +91 9876543210
            </p>

            <p className="text-gray-400">
              ✉ support@pizzahub.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-4 mt-5 text-3xl">
              <span>📘</span>
              <span>📷</span>
              <span>🐦</span>
              <span>▶</span>
            </div>

          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-500">
          © 2026 PizzaHub. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;