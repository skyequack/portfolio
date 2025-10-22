"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Instagram } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate form submission
    // Replace with actual form handling logic (e.g., emailjs, formspree, etc.)
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white text-center tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
            Working on something interesting? Need a technical collaborator? Let&apos;s build it together.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white tracking-tight">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 tracking-wide"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 tracking-wide"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white outline-none transition-all resize-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : status === "sent" ? (
                    <>
                      <span className="text-lg">✓</span>
                      <span>Message sent</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">
                Connect Directly
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Open to discussing robotics projects, technical challenges, research collaboration, or just trading notes on the latest in mechatronics.
              </p>

              <div className="space-y-3">
                {/* Email */}
                <motion.a
                  href="mailto:omer.mohammd.m@gmail.com"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-900/50 transition-all duration-200 group shadow-sm hover:shadow"
                >
                  <div className="w-11 h-11 bg-red-50 dark:bg-red-950/30 rounded-lg flex items-center justify-center group-hover:bg-red-100 dark:group-hover:bg-red-950/50 transition-colors">
                    <Mail className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                      Email
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white truncate text-sm">
                      omer.mohammd.m@gmail.com
                    </div>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/skyequack"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-900/50 transition-all duration-200 group shadow-sm hover:shadow"
                >
                  <div className="w-11 h-11 bg-gray-100 dark:bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <Github className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                      GitHub
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white truncate text-sm">
                      @skyequack
                    </div>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://in.linkedin.com/in/omermohammed-"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-900/50 transition-all duration-200 group shadow-sm hover:shadow"
                >
                  <div className="w-11 h-11 bg-blue-50 dark:bg-blue-950/30 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-950/50 transition-colors">
                    <Linkedin className="w-5 h-5 text-[#0A66C2] dark:text-[#0A66C2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                      LinkedIn
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white truncate text-sm">
                      Omer Mohammed
                    </div>
                  </div>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/skye2_d2"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-900/50 transition-all duration-200 group shadow-sm hover:shadow"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-orange-600 transition-all">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                      Instagram
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white truncate text-sm">
                      @skye2_d2
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
