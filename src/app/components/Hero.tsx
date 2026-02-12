import React from "react";
import hero from "@/app/assets/home.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import WhatsAppButton from "./WhatsAppButton";

<Helmet>
  <title>Success Valley Public School | Best School in Kumhariya Rao</title>

  <meta
    name="description"
    content="Success Valley Public School provides quality education, expert faculty, modern labs, and excellent academic results."
  />

  <meta name="keywords" content="Best school in Kumhariya Rao, CBSE School, English Medium School" />

  {/* Open Graph */}
  <meta property="og:title" content="Success Valley Public School" />
  <meta property="og:description" content="Nurturing minds and shaping futures." />
  <meta property="og:type" content="website" />
</Helmet>


function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / (duration / 30));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-16 md:pt-20 pb-16">
      <div className="relative overflow-hidden shadow-2xl">
        {/* Background Image */}
        <img
          src={hero}
          alt="School Campus"
          className="w-full h-[70vh] sm:h-[80vh] lg:h-screen object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10">
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-10 flex items-center">
            <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
              {/* Left Content */}
              <div className="space-y-6 text-center lg:text-left">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block px-4 py-2 bg-[#F59E0B]/80 rounded-full"
                >
                  <span className="text-[#efe7d9] text-sm font-semibold">
                    Est. 2021 • A Legacy of Excellence
                  </span>
                </motion.div>

                {/* Heading */}
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <span className="text-[#e5e5e5]">Nurturing Minds,</span>
                  <br />
                  <span
                    className="bg-gradient-to-r from-[#ffffff] via-[#fbbf24] to-[#f59e0b] 
                   bg-clip-text text-transparent"
                  >
                    Shaping Futures
                  </span>
                </h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-base md:text-lg text-gray-200 max-w-xl"
                >
                  Success Valley Public School is committed to academic
                  excellence, character building, and holistic development —
                  empowering students to thrive in a changing world.
                </motion.p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6 max-w-md mx-auto lg:mx-0">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#fbbf24]">
                      <Counter end={300} suffix="+" />
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300">Students</p>
                  </div>

                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#fbbf24]">
                      <Counter end={20} suffix="+" />
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Expert Faculty
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#fbbf24]">
                      <Counter end={98} suffix="%" />
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Success Rate
                    </p>
                    <WhatsAppButton />
                  </div>
                </div>
              </div>

              {/* Right side can be used later for image / award card */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
