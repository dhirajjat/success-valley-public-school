import React from "react";
import { motion } from "framer-motion";

import img from "@/app/assets/sports.jpg";
import science from "@/app/assets/science.jpg";
import lab from "@/app/assets/lab.jpg";
import lib from "@/app/assets/lib.jpg";
import annual from "@/app/assets/annual.jpg";
import foundation from "@/app/assets/foundation.jpg";
import sciencelab from "@/app/assets/sciencelab.jpg";

function Gallery() {
  const galleryImages = [
    { url: img, title: "Sports Activities", span: "lg:col-span-2 lg:row-span-2" },
    { url: annual, title: "Annual Function", span: "lg:row-span-2" },
    { url: science, title: "Science Fair", span: "lg:row-span-2" },
    { url: foundation, title: "Foundation Wing" },
    { url: lib, title: "Library" },
    { url: sciencelab, title: "Science Laboratory" },
    { url: lab, title: "Tech Lab" },
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Campus Life
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Moments that define our vibrant school community
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            auto-rows-[200px]
          "
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              className={`
                relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer
                ${item.span || ""}
              `}
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="
                absolute inset-0 
                bg-gradient-to-t from-black/70 via-black/20 to-transparent
                opacity-0 group-hover:opacity-100
                transition duration-500
              ">
                <div className="absolute bottom-5 left-5">
                  <p
                    className="text-white font-semibold text-lg"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
