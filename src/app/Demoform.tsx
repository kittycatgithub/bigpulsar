"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Building2, Link, User, Phone, Mail, Zap, Lightbulb, Globe } from "lucide-react";


export default function DemoForm() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", mobile: "", companyName: "", website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("🚀 Form submitted successfully!");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gray Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute inset-0 backdrop-blur-3xl" />

     {/* Floating Icons for Decoration */}

{/* /* 🚀 Rocket with glow + rotate */ }
<motion.div
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: [0, -25, 0], opacity: 1, rotate: [0, 10, -10, 0] }}
  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
  className="absolute top-20 left-20 text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]"
>
  <Rocket size={50} />
</motion.div>

{/* /* ✨ Sparkles with glowing pulse */ }
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.4, 1, 0.4] }}
  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  className="absolute bottom-24 right-28 text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.9)]"
>
  <Sparkles size={40} />
</motion.div>

{/* /* 🌐 Globe Icon with slow floating + rotate */ }
<motion.div
  initial={{ y: 0, opacity: 0 }}
  animate={{ y: [0, -15, 0], rotate: [0, 360] }}
  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
  className="absolute top-1/2 left-10 text-cyan-400 drop-shadow-[0_0_18px_rgba(6,182,212,0.7)]"
>
  <Globe size={45} />
</motion.div>

{/* /* ⚡ Lightning with pulse + bounce */ }
<motion.div
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: [10, -10, 10], opacity: [0.3, 1, 0.3] }}
  transition={{ repeat: Infinity, duration: 4 }}
  className="absolute top-1/3 right-14 text-yellow-400 drop-shadow-[0_0_18px_rgba(250,204,21,0.8)]"
>
  <Zap size={42} />
</motion.div>

{/* /* 💡 Lightbulb with glowing pulse */ }
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
  className="absolute bottom-12 left-1/3 text-pink-400 drop-shadow-[0_0_25px_rgba(236,72,153,0.9)]"
>
  <Lightbulb size={40} />
</motion.div>


      {/* Foreground */}
      <div className="relative z-10 flex items-center justify-center p-6 min-h-screen">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="w-full max-w-4xl grid md:grid-cols-2 rounded-3xl border border-green-400/40 
                     bg-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden"
        >
          {/* Left image + overlay */}
          <div className="relative hidden md:block">
            <Image
              src="https://uspayme.com/images/illustration/about_us_why_us.svg"
              alt="Tech Illustration"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              {/* <h3 className="text-2xl font-bold">Next-Gen Solutions</h3>
              <p className="text-sm text-gray-300">Empower your business with AI-driven tools.</p> */}
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-extrabold text-green-400 drop-shadow-lg text-center md:text-left flex items-center gap-2"
            >
              <Sparkles className="text-yellow-400" /> Get Your Demo 🚀
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-green-200 mb-6 text-center md:text-left"
            >
              Transform your workflow with innovation & technology.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "First Name", name: "firstName", required: true, icon: <User size={18}/> },
                { label: "Last Name", name: "lastName", required: true, icon: <User size={18}/> },
                { label: "Email", name: "email", type: "email", required: true, icon: <Mail size={18}/> },
                { label: "Mobile Number", name: "mobile", type: "tel", required: true, icon: <Phone size={18}/> },
                { label: "Company Name", name: "companyName", icon: <Building2 size={18}/> },
                { label: "Website Link", name: "website", type: "url", icon: <Link size={18}/> }
              ].map((field, idx) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <div className="relative group">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-300 group-focus-within:text-green-500">
                      {field.icon}
                    </span>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      required={field.required || false}
                      onChange={handleChange}
                      className="peer w-full rounded-xl border border-white/20 bg-white/10 text-white 
                                 placeholder-transparent px-10 py-3 
                                 focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur-md
                                 transition-all duration-300 group-hover:border-green-400"
                      placeholder={field.label}
                    />
                    <label
                      className="absolute left-10 top-3 text-gray-300 text-sm transition-all
                        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                        peer-focus:top-1 peer-focus:text-green-400 peer-focus:text-sm"
                    >
                      {field.label} {field.required && <span className="text-red-400">*</span>}
                    </label>
                  </div>
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(16, 185, 129, 0.9)" }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 
                           text-white py-3 rounded-xl font-bold shadow-lg transition mt-2"
              >
                🚀 Submit & Boost
              </motion.button>

              <p className="text-xs text-gray-300/80 text-center mt-3">
                🔒 We respect your privacy and keep your data safe.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
