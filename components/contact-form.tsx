"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Reset status when user starts typing again
    if (status.submitted || status.error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: false,
        message: "",
      })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus((prev) => ({ ...prev, submitting: true }))

    try {
      // Replace with your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: "Thank you for your message! I'll get back to you within 24 hours.",
        })
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: "Sorry, there was an error sending your message. Please try again or email me directly.",
      })
    }
  }

  if (status.submitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent!</h3>
          <p className="text-green-700">{status.message}</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setStatus({ submitting: false, submitted: false, error: false, message: "" })}
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send me a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Select onValueChange={handleSelectChange} required>
              <SelectTrigger>
                <SelectValue placeholder="What would you like to discuss?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consulting">Product Strategy Consulting</SelectItem>
                <SelectItem value="mentoring">Mentoring & Career Guidance</SelectItem>
                <SelectItem value="speaking">Speaking Engagement</SelectItem>
                <SelectItem value="advisory">Advisory Opportunity</SelectItem>
                <SelectItem value="collaboration">Collaboration</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me more about what you'd like to discuss..."
              rows={5}
            />
          </div>

          {status.error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700 text-sm">{status.message}</p>
            </div>
          )}

          <Button type="submit" disabled={status.submitting} className="w-full bg-gray-900 hover:bg-gray-800">
            {status.submitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
