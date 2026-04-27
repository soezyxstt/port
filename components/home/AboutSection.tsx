"use client";

import experienceData from "@/data/experience.json";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function AboutSection() {
  return (
    <section id="about" className="w-full max-w-4xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4 transition-all duration-1000 starting:opacity-0 starting:translate-y-8">
          <h2 className="text-3xl font-bold tracking-tight sticky top-32">About</h2>
        </div>

        <div className="md:col-span-8 flex flex-col gap-16 transition-all duration-1000 delay-100 starting:opacity-0 starting:translate-y-8">
          
          {/* Bio section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bio</h3>
            <p className="text-[var(--foreground)]/80 leading-relaxed text-lg">
              I am a Generalist at the intersection of Mechanical Engineering and Software. 
              My background engineering physical systems has fostered a deep appreciation for structure and logic, 
              which I now apply to crafting robust, high-performance digital experiences. 
              I specialize in bridging the gap between hardware constraints and software scalability.
            </p>
          </div>

          {/* Education section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Education</h3>
            <div className="border-l border-[var(--foreground)]/20 pl-6 relative">
              <div className="absolute w-2 h-2 bg-[var(--accent)] rounded-full -left-[4.5px] top-2" />
              <h4 className="text-lg font-bold">Institut Teknologi Bandung</h4>
              <p className="text-sm font-medium mb-2 opacity-60">Mechanical Engineering</p>
              <p className="text-[var(--foreground)]/80 text-sm">
                Focus on thermodynamics, fluid mechanics, and system design, establishing a rigorous 
                analytical framework used throughout my career.
              </p>
            </div>
          </div>

          {/* Experience section */}
          <div>
            <h3 className="text-xl font-bold mb-10">Experience</h3>
            <div className="flex flex-col gap-14">
              {experienceData.map((exp, index) => (
                <div key={index} className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-2xl font-bold tracking-tight">{exp.company}</h4>
                    {exp.location && (
                      <p className="text-sm font-medium opacity-60 mt-1">{exp.location}</p>
                    )}
                  </div>
                  
                  <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex flex-col gap-8 ml-2 ${
                      exp.positions.length > 1 ? "border-l border-[#8E8D7A]/40 pl-8" : "pl-8"
                    }`}
                  >
                    {exp.positions.map((pos, posIndex) => (
                      <motion.div key={posIndex} variants={item} className="relative group">
                        {/* Timeline dot */}
                        <div className={`absolute w-2.5 h-2.5 bg-[#8E8D7A] rounded-full top-2 transition-transform duration-300 group-hover:scale-150 ${
                          exp.positions.length > 1 ? "-left-[37px]" : "-left-[37px]"
                        }`} />
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                          <h5 className="text-lg font-bold">{pos.role}</h5>
                          <span className="text-sm font-medium text-[var(--accent)] whitespace-nowrap bg-[var(--foreground)]/5 px-2 py-1 rounded-sm">
                            {pos.period}
                          </span>
                        </div>
                        <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                          {pos.glimpse}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
