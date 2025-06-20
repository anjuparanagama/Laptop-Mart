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
          name: 'MSI Katana 15',
          image: '/katanaa.jpg',
          description: 'tep into the realm of ultimate performance with the MSI Katana 15 B14WEK, a gaming powerhouse crafted for serious players and creators. Featuring the latest Intel Core i9 14900HX processor.',
          price: 'Rs. 399,999.00',
          rating: 4.8,
          availableDetails: 'In stock',
          warrantyDetails: '2 years manufacturer warranty',
          modelNo: 'Katana 15 B13VEK',
          processor: 'Intel Core i7-13620H',
          GPU: 'NVIDIA RTX 2050',
          RAM: '16GB DDR4',
          storage: '1TB NVMe SSD',
          displaySize: '15.6 inch FHD',
          keyboard: 'RGB backlit keyboard',
          audio: 'hi Res Audio Certified(Nahimic)',
          wifi: 'Wi-Fi 6',
          battery: '3-cell 53.5Wh',
          bluetooth: 'Bluetooth 5.2',
        },
        {
          id: 2,
          name: 'Acer Nitro 5',
          image: '/nitro.jpg',
          description: 'Explore games in greater detail with the sharp visuals of a 15.6-inch FHD IPS display.Enjoy smooth, blur-freegameplay with a 144Hz refresh rate and a 3ms response time. ',
          price: 'Rs. 327,000.00',
          rating: 4.6,
          availableDetails: 'Limited stock',
          warrantyDetails: '1 year manufacturer warranty',
          modelNo: 'Nitro 5 AN515',
          processor: 'Intel Core i5-12500H Processor',
          GPU: 'NVIDIA GeForce RTX 3050 with 4GB of dedicated GDDR6 VRAM',
          RAM: '8GB 3200Mhz DDR4 RAM',
          storage: '512GB, PCIe Gen4, 16 Gb/s, NVMe SSD',
          displaySize: '15.6″ display with IPS',
          keyboard: 'Single Backlit',
          audio: 'Stereo speakers',
          wifi: 'Wi-Fi 6E',
          battery: '8-cell 90Wh',
          bluetooth: 'Bluetooth 5.1',
        },
        {
          id: 3,
          name: 'Hp Victus 15',
          image: '/victus.png',
          description: 'The HP Victus 15 fb2132Ax Gaming Laptop delivers exceptional performance for gamers and power users alike. With an AMD Ryzen 7-8845HS processor, ample storage Powerful AMD Ryzen 7 Processor for Smooth.',
          price: 'Rs. 310,000.00',
          rating: 4.6,
          availableDetails: 'Limited stock',
          warrantyDetails: '1 year manufacturer warranty',
          modelNo: 'GLB-2023',
          processor: '6GB NVIDIA GeForce RTX 3050 Laptop GPU GDDR6',
          GPU: 'NVIDIA RTX 3080',
          RAM: '16GB DDR4',
          storage: '1TB NVMe SSD',
          displaySize: '15.6″ Full HD IPS',
          keyboard: 'Mechanical keyboard',
          audio: 'Stereo speakers',
          wifi: 'Wi-Fi 6E',
          battery: '4-cell, 70 Wh Li-ion polymer',
          bluetooth: 'Bluetooth 5.1',
        },
        {
          id: 4,
          name: 'Asus TUF Gaming F15',
          image: '/tuf.jpg',
          description: 'Experience top-tier gaming and performance with the Asus TUF Gaming F15 FX507VU – i7. This powerful gaming laptop is equipped with cutting-edge components and features, making it the ideal choice for gamers.',
          price: 'Rs. 345,000.00',
          rating: 4.6,
          availableDetails: 'Limited stock',
          warrantyDetails: '2 year manufacturer warranty',
          modelNo: 'FX507VU',
          processor: 'AMD Ryzen 9 5900HX',
          GPU: 'NVIDIA RTX 3080',
          RAM: '16GB DDR4',
          storage: '2TB NVMe SSD',
          displaySize: '15.6 inch QHD',
          keyboard: 'Backlit Chiclet Keyboard 1-Zone RGB ,Touchpad',
          audio: 'Backlit Chiclet Keyboard 1-Zone RGB ,Touchpad',
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
          id: 11,
          name: 'ASUS Vivobook 15',
          image: '/vivo15.jpg',
          description: 'Lightweight and portable notebook',
          price: 'Rs. 244,999.00',
          rating: 4.3,
          availableDetails: 'Limited stock',
          warrantyDetails: '2 year manufacturer warranty',
          modelNo: '	X1504VA-NJ5656WS',
          processor: 'Intel® Core™ i5-1334U Processor 1.3 GHz',
          GPU: 'Intel Iris X Graphics',
          RAM: '8GB DDR4',
          storage: '2TB NVMe SSD',
          displaySize: '16:9 aspect ratio (FHD)',
          keyboard: 'Mechanical keyboard',
          audio: 'Stereo speakers',
          wifi: 'Wi-Fi 6E',
          battery: '8-cell 90Wh',
          bluetooth: 'Bluetooth 5.1',
        },
        {
          id: 12,
          name: 'Dell Inspiron 3530',
          image: '/dell3590.jpg',
          description: 'Compact design with long battery life',
          price: 'Rs. 174,999.00',
          rating: 4.5,
          availableDetails: 'Out of stock',
          warrantyDetails: '2 year manufacturer warranty',
          modelNo: 'DELL Inspiron 3530 i3,8GB RAM, 512 SSD, 15.6" Display',
          processor: 'Intel® Core™ i5-1334U Processor 1.3 GHz',
          GPU: 'Intel Iris X Graphics',
          RAM: '8GB DDR4',
          storage: '512GB NVMe SSD',
          displaySize: '15.6 inch',
          keyboard: 'English International Non-Backlit Keyboard with Numeric Keypad',
          audio: 'Stereo speakers',
          wifi: 'Wi-Fi 6E',
          battery: '4-cell 50Wh',
          bluetooth: 'Bluetooth 5.1',
        },
        {
          id: 13,
          name: 'ASUS ZenBook 14',
          image: '/zenbook.jpg',
          description: 'Compact design with long battery life',
          price: 'Rs. 449,999.00',
          rating: 4.5,
          availableDetails: 'Available',
          warrantyDetails: '2 year manufacturer warranty',
          modelNo: 'UX3405MA-QD581WS',
          processor: 'Intel® Core™ Ultra 5 Processor 125H 1.2 GHz ',
          GPU: 'Intel® Arc™ Graphics',
          RAM: '16GB DDR5',
          storage: '512GB NVMe SSD',
          displaySize: 'FHD (1920 x 1200) OLED 16:10 aspect ratio',
          keyboard: 'Backlit Chiclet Keyboard',
          audio: 'Smart Amp Technology,Built-in speaker, Built-in array microphone harman/kardon (Premium)',
          wifi: 'Wi-Fi 6E',
          battery: '4-cell 50Wh',
          bluetooth: 'Bluetooth 5.1',
        },
      ],
    },
    {
      title: 'Personal Laptops',
      laptops: [
        {
          id: 5,
          name: 'Acer Aspire 5',
          image: '/aspire.jpg',
          description: 'Reliable laptop for everyday use',
          price: '$799',
          rating: 4.1,
        },
        {
          id: 6,
          name: 'Lenovo thinkpad',
          image: '/think.jpg',
          description: 'Affordable and efficient',
          price: 'Rs. 149,999.00',
          rating: 4.0,
        },
      ],
    },
    {
      title: 'Laptop Accessories',
      laptops: [
        {
          id: 7,
          name: 'BT3 Rechargeable silent click Wireless Mouse',
          image: '/mouse.jpg',
          description: 'Ergonomic wireless mouse',
          price:'Rs. 3,500.00',
          rating: 4.7,
        },
        {
          id: 8,
          name: 'WiWU Minimalist Laptop Shoulder Side Bag | 14″ Inch',
          image: '/bag.jpg',
          description: 'Durable and stylish laptop bag',
          price: 'Rs. 2500.00',
          rating: 4.4,
        },
        {
          id: 14,
          name: 'Logitech MK345 Wireless Keyboard and Mouse Combo',
          image: '/mk.jpg',
          description: 'Durable and stylish laptop bag',
          price: 'Rs. 14,900.00',
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
          image: '/mac.jpg',
          description: 'Light and powerful MacBook Air',
          price: 'Rs. 350,999.00',
          rating: 4.8,
        },
        {
          id: 10,
          name: 'MacBook Pro',
          image: '/mpro.jpg',
          description: 'High performance MacBook Pro',
          price: 'Rs. 589,999.00',
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
