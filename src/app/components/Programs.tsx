import React from "react";
import {
  Baby,
  BookOpen,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";

import { Card, CardContent } from "@/app/components/ui/card";

function Programs() {
  const programs = [
    {
      id: 1,
      icon: Baby,
      title: "Foundation Wing",
      subtitle: "Nursery - UKG",
      description:
        "Play-based learning with a focus on creativity, motor skills, and social development",
      color: "from-pink-500 to-rose-500",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      id: 2,
      icon: BookOpen,
      title: "Primary",
      subtitle: "Grades 1-5",
      description:
        "Building strong academic foundations with interactive learning and character development",
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      icon: Users,
      title: "Middle School",
      subtitle: "Grades 6-8",
      description:
        "Comprehensive curriculum preparing students for critical thinking and leadership",
      color: "from-purple-500 to-indigo-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: 4,
      icon: Award,
      title: "Senior Secondary",
      subtitle: "Grades 9-12",
      description:
        "Specialized streams (Science, Commerce, Humanities) with college preparation",
      color: "from-amber-500 to-orange-500",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
  ];
  return (
    <div>
      {" "}
      <section
        id="programs"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive curriculum designed for every stage of your child's
              educational journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <Card
                key={program.id}
                className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl ${program.iconBg} flex items-center justify-center group-hover:scale-110 transition`}
                  >
                    <program.icon className={`h-8 w-8 ${program.iconColor}`} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-[#1E3A8A] mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {program.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#F59E0B] mb-3">
                      {program.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 text-[#1E3A8A] font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs;
