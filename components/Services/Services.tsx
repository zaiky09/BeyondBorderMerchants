"use client";

import { useState } from "react";
// import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import freightImage from "../../public/Images/freight.jpg";
import warehouseImage from "../../public/Images/warehouse.jpg";
import airfreightImage from "../../public/Images/airfreight.jpg";

// Define a TypeScript interface for services
interface Service {
  image: StaticImageData;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    image: freightImage,
    title: "Freight Forwarding",
    description: "Beyond Border Merchants simplifies global shipping with expert freight forwarding solutions. We handle every step—customs clearance, documentation, and logistics—so your cargo moves seamlessly across borders with advanced tracking systems. Partner with us and move beyond limits!",
  },
  {
    image: warehouseImage,
    title: "Warehousing",
    description: "Whether you need short-term storage or a long-term logistics hub, we offer flexible, scalable solutions tailored to your needs. With a dedicated team, we ensure your goods are always accounted for and ready for dispatch. Store smarter, ship faster—partner with Beyond Border Merchants for warehousing that works for you!",
  },
  {
    image: airfreightImage,
    title: "Air Freight",
    description: "At Beyond Border Merchants, we offer reliable and efficient air freight services to ensure your goods reach their destination quickly and safely. Whether you're shipping high-value electronics, time-sensitive documents, or perishable items, our air freight solutions are designed to meet your needs with speed and precision.",
  },
];

const Services = () => {
  // Use the defined Service type or null for state
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-beige to-white" id="services">
      <div className="max-container padding-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-turquoise p-8 rounded-lg shadow-lg text-center overflow-hidden 
              transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container with Hover Effect */}
              <div className="w-full h-56 relative rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold mt-6 mb-4 group-hover:text-beige transition-all duration-300">
                {service.title}
              </h3>
              <button
                onClick={() => setSelectedService(service)}
                className="inline-block text-black font-semibold border-b-2 border-transparent transition-all duration-300 
                group-hover:border-white group-hover:scale-105"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Service Description */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
            >
              <h2 className="text-3xl font-bold mb-4">{selectedService.title}</h2>
              <p className="text-gray-700 mb-4">{selectedService.description}</p>
              <button
                onClick={() => setSelectedService(null)}
                className="bg-turquoise text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
