"use client";
import { motion } from "framer-motion";

const roadmapItems = [
  {
    title: "Our Values",
    description:
      "We uphold the highest standards of honesty and transparency in every interaction, fostering trust and integrity with both our clients and suppliers.",
  },
  {
    title: "Our Goals",
    description:
      "We aim to be the top choice for reliable supply solutions, delivering swift, efficient, and cost-effective services. By adapting to industry needs, we cater to individuals and businesses of all sizes worldwide.",
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to exceed expectations with cost-effective, high-quality logistics solutions. Backed by skilled professionals, we ensure excellence while fostering growth and career development.",
  },
  
];

const Roadmap = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-beige to-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-turquoise p-8 rounded-lg shadow-lg text-center overflow-hidden 
              transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-4xl font-semibold text-beige mb-4 transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-white text-xl transition-opacity duration-300 group-hover:opacity-80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
