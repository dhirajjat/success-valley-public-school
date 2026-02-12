import React, { useState, useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const validateForm = () => {
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");

      // Reset form state properly
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      form.current?.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div>
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Start your child's journey with us today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Form with Floating Labels */}
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] p-8">
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Send us a Message
                </h3>
                <p className="text-blue-100">We'll respond within 24 hours</p>
              </div>
              <CardContent className="p-8">
                {status === "success" && (
                  <div className="mb-4 p-4 rounded-xl bg-green-100 text-green-700 font-medium text-center">
                    ✅ Message sent successfully!
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-4 p-4 rounded-xl bg-red-100 text-red-700 font-medium text-center">
                    ❌ Failed to send message. Try again.
                  </div>
                )}

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  {/* Floating Label Input - Name */}
                  <div className="relative">
                    <Input
                      id="name"
                      name="from_name"
                      type="text"
                      placeholder=" "
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="peer h-14 rounded-2xl border-2 border-gray-200 focus:border-[#1E3A8A] pt-6 px-4"
                    />

                    <label
                      htmlFor="name"
                      className="absolute left-4 top-1 text-xs text-gray-500 transition-all
                        peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                        peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#1E3A8A]"
                    >
                      Full Name *
                    </label>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Floating Label Input - Email */}
                  <div className="relative">
                    <Input
                      id="email"
                      name="from_email"
                      type="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="peer h-14 rounded-2xl border-2 border-gray-200 focus:border-[#1E3A8A] pt-6 px-4"
                    />

                    <label
                      htmlFor="email"
                      className="absolute left-4 top-1 text-xs text-gray-500 transition-all
                        peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                        peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#1E3A8A]"
                    >
                      Email Address *
                    </label>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Floating Label Input - Phone */}
                  <div className="relative">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      placeholder=" "
                      pattern="[0-9]*"
                      maxLength={10}
                      className="peer h-14 rounded-2xl border-2 border-gray-200 focus:border-[#1E3A8A] pt-6 px-4"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setFormData({ ...formData, phone: value });
                      }}
                    />

                    <label
                      htmlFor="phone"
                      className="absolute left-4 top-1 text-xs text-gray-500 transition-all
                        peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                        peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#1E3A8A]"
                    >
                      Phone Number *
                    </label>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Floating Label Textarea - Message */}
                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      placeholder=" "
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="peer rounded-2xl border-2 border-gray-200 focus:border-[#1E3A8A] pt-6 px-4 resize-none"
                    />

                    <label
                      htmlFor="message"
                      className="absolute left-4 top-1 text-xs text-gray-500 transition-all
                        peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                        peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#1E3A8A]"
                    >
                      Your Message *
                    </label>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-white rounded-2xl shadow-lg text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Right - Map and Contact Buttons */}
            <div className="space-y-6">
              {/* Google Map */}
              <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
                <div className="h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.524471787264!2d76.32402422195351!3d22.991245716344352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396331000be72ffb%3A0x364092a68eeb05ec!2sKumariya%20rav!5e0!3m2!1sen!2sin!4v1770154329810!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(0.3)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location Map"
                  ></iframe>
                </div>
              </Card>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-none shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Call Office</p>
                    <p className="font-bold text-[#1E3A8A]">8224009936</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Email Admissions
                    </p>
                    <p className="font-bold text-[#1E3A8A] text-sm">
                      successvalleypublicschool@gmail.com
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Address Card */}
              <Card className="border-none shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <h4
                        className="font-bold text-[#1E3A8A] mb-2"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Visit Our Campus
                      </h4>
                      <p className="text-gray-600">
                        Kumhariya Rao,
                        <br />
                        Success Valley Public School , Sonkatch 455118 <br />
                        Madhya Pradesh, India
                      </p>
                      <p className="text-sm text-gray-500 mt-3">
                        <span className="font-semibold">Office Hours:</span>
                        <br />
                        Monday - Friday: 8:00 AM - 4:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
