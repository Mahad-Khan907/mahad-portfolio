"use client";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

function ContactForm() {
  const [state, handleSubmit] = useForm("xeozbbdj");
  const [showForm, setShowForm] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSuccess(true);
      setShowForm(false);
      const timer = setTimeout(() => {
        setSuccess(false);
        setShowForm(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  if (success) {
    return (
      <p className="text-center text-green-500 font-semibold">
        ✅ Thanks for joining!
      </p>
    );
  }
  return (
    <div id="contact" className="flex items-center justify-center px-6 py-16">
      <motion.form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="w-full max-w-2xl space-y-6 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold">Contact Me</h1>
          <p className="text-gray-400 mt-2 text-sm">
            I’m always excited to hear from you! Fill out the form below 👇
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300  focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300  focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            type="submit"
            disabled={state.submitting}
            className="w-full md:w-auto px-8 py-3 bg-gray-900 hover:bg-gray-950 text-white font-medium rounded-md transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
}

export default ContactForm;
