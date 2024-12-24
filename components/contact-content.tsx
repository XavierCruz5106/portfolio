"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";

export function ContactContent() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const emailSentStatus = sessionStorage.getItem("emailSent");
    if (emailSentStatus === "true") {
      setEmailSent(true);
    }
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_rv1bndd",
        "template_ub0auka",
        e.target as HTMLFormElement,
        "0JVaE9F-L1UtKagt_"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setEmailSent(true);
          sessionStorage.setItem("emailSent", "true");
        },
        (error) => {
          console.error("EmailJS error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        Get in Touch
      </motion.h1>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
        onSubmit={sendEmail}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white/80 mb-2"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            className="bg-white/5 border-white/10 text-white"
            disabled={emailSent} // Disable if email already sent
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white/80 mb-2"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-white/5 border-white/10 text-white"
            disabled={emailSent} // Disable if email already sent
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white/80 mb-2"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            required
            className="bg-white/5 border-white/10 text-white"
            disabled={emailSent} // Disable if email already sent
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={loading || emailSent} // Disable button if email already sent
        >
          <Send className="mr-2 h-4 w-4" />
          {loading ? "Sending..." : emailSent ? "Email Sent" : "Send Message"}
        </Button>
        {success && (
          <p className="text-green-500 mt-4">Message sent successfully!</p>
        )}
        {emailSent && !success && (
          <p className="text-yellow-500 mt-4">
            You have already sent a message.
          </p>
        )}
      </motion.form>
    </div>
  );
}
