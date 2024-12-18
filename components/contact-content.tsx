"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from 'lucide-react'

export function ContactContent() {
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
        onSubmit={(e) => {
          e.preventDefault()
          // Handle form submission
        }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
            Name
          </label>
          <Input id="name" name="name" required className="bg-white/5 border-white/10 text-white" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
            Email
          </label>
          <Input id="email" name="email" type="email" required className="bg-white/5 border-white/10 text-white" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            required
            className="bg-white/5 border-white/10 text-white"
          />
        </div>
        <Button type="submit" className="w-full">
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </Button>
      </motion.form>
    </div>
  )
}

