export default function AboutUs() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-6 text-green-800">About Us</h1>
      <p className="text-lg text-gray-700 mb-8">
        Welcome to Laptop-Mart, your trusted source for premium laptops and accessories. We are dedicated to providing high-quality products with excellent customer service to meet all your computing needs.
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Mission</h2>
          <p className="text-gray-700">
            To empower our customers with the latest technology and reliable products that enhance productivity and creativity.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Vision</h2>
          <p className="text-gray-700">
            To be the leading provider of innovative computing solutions, recognized for quality, trust, and customer satisfaction.
          </p>
        </div>
      </div>
      <div className="mt-12 bg-green-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-green-900">Contact Details</h2>
        <ul className="text-gray-700 space-y-3 text-lg">
          <li><strong>Address:</strong> 123 Tech Avenue, Silicon City, CA 94000</li>
          <li><strong>Phone:</strong> (123) 456-7890</li>
          <li><strong>Email:</strong> support@laptopmart.com</li>
          <li><strong>Business Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</li>
        </ul>
      </div>
    </section>
  );
}
