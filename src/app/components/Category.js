"use client";

import { useState } from 'react';

export default function Category() {
  const [selectedLaptop, setSelectedLaptop] = useState(null);

  const categories = [
    {
      title: 'Gaming Laptops',
      laptops: [
        {
          id: 1,
          name: 'Gaming Laptop A',
          image: '/one.png',
          description: 'High performance gaming laptop',
          price: '$1499',
          rating: 4.8,
          availableDetails: 'In stock',
          warrantyDetails: '2 years manufacturer warranty',
          modelNo: 'GLA-2023',
          processor: 'Intel Core i7-12700H',
          GPU: 'NVIDIA RTX 3070',
          RAM: '16GB DDR4',
          storage: '1TB NVMe SSD',
          displaySize: '15.6 inch FHD',
          keyboard: 'RGB backlit keyboard',
          audio: 'Dolby Atmos speakers',
          wifi: 'Wi-Fi 6',
          battery: '6-cell 80Wh',
          bluetooth: 'Bluetooth 5.2',
        },
        {
          id: 2,
          name: 'Gaming Laptop B',
          image: '/two.png',
          description: 'Powerful GPU for immersive gaming',
          price: '$1799',
          rating: 4.6,
          availableDetails: 'Limited stock',
          warrantyDetails: '1 year manufacturer warranty',
          modelNo: 'GLB-2023',
          processor: 'AMD Ryzen 9 5900HX',
          GPU: 'NVIDIA RTX 3080',
          RAM: '32GB DDR4',
          storage: '2TB NVMe SSD',
          displaySize: '17.3 inch QHD',
          keyboard: 'Mechanical keyboard',
          audio: 'Stereo speakers',
          wifi: 'Wi-Fi 6E',
          battery: '8-cell 90Wh',
          bluetooth: 'Bluetooth 5.1',
        },
        {
          id: 3,
          name: 'Gaming Laptop B',
          image: '/two.png',
          description: 'Powerful GPU for immersive gaming',
          price: '$1799',
          rating: 4.6,
          availableDetails: 'Limited stock',
          warrantyDetails: '1 year manufacturer warranty',
          modelNo: 'GLB-2023',
          processor: 'AMD Ryzen 9 5900HX',
          GPU: 'NVIDIA RTX 3080',
          RAM: '32GB DDR4',
          storage: '2TB NVMe SSD',
          displaySize: '17.3 inch QHD',
          keyboard: 'Mechanical keyboard',
          audio: 'Stereo speakers',
          wifi: 'Wi-Fi 6E',
          battery: '8-cell 90Wh',
          bluetooth: 'Bluetooth 5.1',
        },
        {
          id: 4,
          name: 'Gaming Laptop B',
          image: '/two.png',
          description: 'Powerful GPU for immersive gaming',
          price: '$1799',
          rating: 4.6,
          availableDetails: 'Limited stock',
          warrantyDetails: '1 year manufacturer warranty',
          modelNo: 'GLB-2023',
          processor: 'AMD Ryzen 9 5900HX',
          GPU: 'NVIDIA RTX 3080',
          RAM: '32GB DDR4',
          storage: '2TB NVMe SSD',
          displaySize: '17.3 inch QHD',
          keyboard: 'Mechanical keyboard',
          audio: 'Stereo speakers',
          wifi: 'Wi-Fi 6E',
          battery: '8-cell 90Wh',
          bluetooth: 'Bluetooth 5.1',
        },
      ],
    },
    {
      title: 'Notebooks',
      laptops: [
        {
          id: 3,
          name: 'Notebook A',
          image: '/three.png',
          description: 'Lightweight and portable notebook',
          price: '$899',
          rating: 4.3,
        },
        {
          id: 4,
          name: 'Notebook B',
          image: '/one.png',
          description: 'Compact design with long battery life',
          price: '$999',
          rating: 4.5,
        },
      ],
    },
    {
      title: 'Personal Laptops',
      laptops: [
        {
          id: 5,
          name: 'Personal Laptop A',
          image: '/two.png',
          description: 'Reliable laptop for everyday use',
          price: '$799',
          rating: 4.1,
        },
        {
          id: 6,
          name: 'Personal Laptop B',
          image: '/three.png',
          description: 'Affordable and efficient',
          price: '$699',
          rating: 4.0,
        },
      ],
    },
    {
      title: 'Laptop Accessories',
      laptops: [
        {
          id: 7,
          name: 'Wireless Mouse',
          image: '/one.png',
          description: 'Ergonomic wireless mouse',
          price: '$49',
          rating: 4.7,
        },
        {
          id: 8,
          name: 'Laptop Bag',
          image: '/two.png',
          description: 'Durable and stylish laptop bag',
          price: '$79',
          rating: 4.4,
        },
      ],
    },
    {
      title: 'MacBook',
      laptops: [
        {
          id: 9,
          name: 'MacBook Air',
          image: '/three.png',
          description: 'Light and powerful MacBook Air',
          price: '$999',
          rating: 4.8,
        },
        {
          id: 10,
          name: 'MacBook Pro',
          image: '/one.png',
          description: 'High performance MacBook Pro',
          price: '$1999',
          rating: 4.9,
        },
      ],
    },
  ];

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-12">
        {categories.map((category) => (
          <div key={category.title} id={category.title.toLowerCase().replace(/ /g, '-')} className="mb-12 border-t border-gray-300 pt-8">
            <h3 className="text-2xl font-extrabold mb-6">{category.title}</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.laptops.map((laptop) => (
                <div
                  key={laptop.id}
                  className="aspect-[3/4] bg-white rounded-md shadow-md p-4 flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={laptop.image}
                      alt={laptop.name}
                      className="w-full h-[210px] object-fill rounded mb-4"
                    />
                    <h4 className="text-lg font-semibold mb-2">{laptop.name}</h4>
                    <p className="text-sm text-gray-500 mb-1 font-medium">{category.title}</p>
                    <p className="text-gray-600 mb-2">{laptop.description}</p>
                    <p className="text-green-600 font-bold mb-2">{laptop.price}</p>
                    <p className="text-yellow-500 mb-2">
                      {'★'.repeat(Math.floor(laptop.rating))}
                      {'☆'.repeat(5 - Math.floor(laptop.rating))}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedLaptop(laptop)}
                    className="mt-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                    See details
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Popup window for laptop details */}
      {selectedLaptop && (
        <div className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedLaptop(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedLaptop.image}
              alt={selectedLaptop.name}
              className="w-full h-72 object-fill rounded mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">{selectedLaptop.name}</h4>
            <p className="text-sm text-gray-500 mb-1 font-medium">{categories.find(cat => cat.laptops.includes(selectedLaptop))?.title}</p>
            <p className="text-gray-600 mb-2">{selectedLaptop.description}</p>

            <div className="flex flex-col gap-6">
              {/* Left division: available details, warranty details, price */}
              <div className="flex-1 border p-4 rounded bg-green-50">
                <p className="font-semibold mb-2">Available Details:</p>
                <p className="mb-4">{selectedLaptop.availableDetails}</p>
                <p className="font-semibold mb-2">Warranty Details:</p>
                <p className="mb-4">{selectedLaptop.warrantyDetails}</p>
                <p className="font-bold text-green-700 text-lg">Price: {selectedLaptop.price}</p>
              </div>
  
              {/* Right division: specification list */}
              <div className="flex-1 border p-4 rounded bg-gray-50">
                <p className="font-semibold mb-2">Specifications:</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li><strong>Model No:</strong> {selectedLaptop.modelNo}</li>
                  <li><strong>Processor:</strong> {selectedLaptop.processor}</li>
                  <li><strong>GPU:</strong> {selectedLaptop.GPU}</li>
                  <li><strong>RAM:</strong> {selectedLaptop.RAM}</li>
                  <li><strong>Storage:</strong> {selectedLaptop.storage}</li>
                  <li><strong>Display Size:</strong> {selectedLaptop.displaySize}</li>
                  <li><strong>Keyboard:</strong> {selectedLaptop.keyboard}</li>
                  <li><strong>Audio:</strong> {selectedLaptop.audio}</li>
                  <li><strong>WiFi:</strong> {selectedLaptop.wifi}</li>
                  <li><strong>Battery:</strong> {selectedLaptop.battery}</li>
                  <li><strong>Bluetooth:</strong> {selectedLaptop.bluetooth}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
