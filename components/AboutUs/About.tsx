"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Transport from "../../public/Images/Transport.jpg";
import Mandem from "../../public/Images/Mandem.jpg"; // Second image

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  return (
    <motion.section
      id="about"
      className="py-16 bg-gradient-to-b from-white to-beige"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-container padding-container flex flex-col lg:flex-row gap-12">
        {/* Text Section */}
        <motion.div className="lg:w-1/2" variants={fadeInUp}>
          <h2 className="text-5xl font-bold mb-6 text-black">About Us</h2>
          <p className="text-black text-xl mb-4 leading-relaxed">
            Beyond Border Merchants is a dynamic small and medium-sized enterprise specializing in the delivery, supply, and transportation of goods across Central, East, and Southern Africa. Established in 1998 and officially registered in 2006, we have built a strong reputation for providing reliable, high-quality services to individuals, businesses, and organizations in both the public and private sectors of Kenya.
            <br /><br />
            With over 15 years of industry expertise, we offer a comprehensive range of business and general supply solutions, earning the trust and satisfaction of our clients. Our highly skilled team—including experienced drivers and logistics personnel—ensures seamless, efficient, and professional service.
            <br /><br />
            To enhance efficiency and flexibility, we operate a diverse fleet, including pickups, 4-ton, 8-ton, and 26-ton trucks. Additionally, we maintain strategic partnerships with truck rental companies across East and Central Africa, ensuring swift responses to urgent transportation needs.
            <br /><br />
            Our commitment to innovation, professionalism, and exceptional service continues to position Beyond Border Merchants as a trusted leader in the logistics and supply industry.
          </p>
          
          {/* Enhanced Button with Interactive Hover Effect */}
          <Link
            href="#whyus"
            className="bg-black text-beige px-6 py-2 rounded-full font-semibold transition-all duration-300 
            hover:bg-turquoise hover:text-black hover:scale-110 hover:shadow-lg"
          >
            Why Us?
          </Link>
        </motion.div>

        {/* Stacked Images Section */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-6"
          variants={fadeInUp}
        >
          {/* First Image */}
          <div className="relative rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <Image
              src={Transport}
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Second Image */}
          <div className="relative rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <Image
              src={Mandem}
              alt="Our Logistics"
              width={600}
              height={400}
              className="rounded-lg transition-transform duration-500 hover:scale-110"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
