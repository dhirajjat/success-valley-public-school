import React from "react";
import { Play, CheckCircle2 } from "lucide-react";
import img  from "@/app/assets/img1.jpg";
import imge  from "@/app/assets/img2.jpg";
import imag  from "@/app/assets/img.jpg";

function AboutUs() {
  return (
    <div>
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Our Journey */}
            <div className="space-y-6">
              <div>
                <h2
                  className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Our Journey
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2021 with a vision to transform education, <b>Success
                Valley Public School </b> has grown from a small institution with 100
                students to a thriving educational community of over 300 bright
                minds.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our philosophy is simple yet profound: every child deserves an
                education that nurtures their unique talents while preparing
                them for the challenges of tomorrow. We blend traditional values
                with modern pedagogical approaches, ensuring our students are
                equipped with knowledge, character, and confidence.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    State-of-the-art infrastructure with smart classrooms
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Highly qualified and passionate teaching faculty
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Holistic curriculum focusing on academics, sports, and arts
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#F59E0B] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Safe and nurturing environment for all students
                  </p>
                </div>
              </div>

              {/* Principal Signature */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Education is not the filling of a pail, but the lighting of a
                  fire."
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p
                      className="font-bold text-[#1E3A8A]"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      Dr. Sandeep Pawar
                    </p>
                    <p className="text-sm text-gray-600">Principal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Campus Heritage / Video Placeholder */}
            <div className="space-y-6">
              {/* Video Placeholder */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <img
                  src={img} alt="Campus Heritage"
                  className="w-full h-[400px] object-cover"
                />
               
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-semibold text-lg">
                     Our Story
                  </p>
                  <p className="text-white/80 text-sm">A legacy of 5 years</p>
                </div>
              </div>

              {/* Campus Collage */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={imag}
                    alt="Library"
                    className="w-full h-48 object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={imge} alt="Lab"
                    className="w-full h-48 object-cover hover:scale-110 transition duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
