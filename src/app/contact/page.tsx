"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simple validation
        if (!formData.name || !formData.phone || !formData.message) {
            alert("Please fill in all required fields.");
            setStatus("error");
            return;
        }

        // Simulate API Call
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1000);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <section className="bg-slate-900 py-16 text-white text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-slate-300">Get in touch with Razin Tooling Services for expert industrial solutions.</p>
            </section>

            <section className="py-20 flex-grow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

                        {/* Contact Information */}
                        <div className="bg-slate-800 text-white p-8 sm:p-12">
                            <h2 className="text-3xl font-bold mb-8">Corporate Headquarters</h2>

                            <ul className="space-y-8 mb-12">
                                <li className="flex items-start gap-4">
                                    <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Address</h3>
                                        <p className="text-slate-300">Akurdi, Pune – 411035<br />Maharashtra, India</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Phone className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Phone</h3>
                                        <a href="tel:+919922957006" className="text-slate-300 hover:text-white transition">+91-9922957006</a>
                                        <p className="text-sm text-slate-400 mt-1">Contact: Asif N Shaikh</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Mail className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email</h3>
                                        <a href="mailto:shaikhasifn@rediffmail.com" className="text-slate-300 hover:text-white transition">shaikhasifn@rediffmail.com</a>
                                    </div>
                                </li>
                            </ul>

                            <div className="pt-8 border-t border-slate-700">
                                <h3 className="font-bold mb-4">Registration Details</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                                    <div className="bg-slate-700/50 p-3 rounded">
                                        <strong>GSTIN</strong><br />27NPAPS0212C1Z7
                                    </div>
                                    <div className="bg-slate-700/50 p-3 rounded">
                                        <strong>UDYAM</strong><br />UDYAM-MH-26-0222848
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-8 sm:p-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h2>

                            {status === "success" ? (
                                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                                    <p>Thank you for reaching out. Our team will contact you shortly.</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                                placeholder="+91 99999 99999"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                                placeholder="john@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Project Details / Inquiry *</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-y"
                                            placeholder="Tell us about your requirements..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition disabled:opacity-70 flex justify-center items-center"
                                    >
                                        {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.634125301886!2d73.7667232252533!3d18.647161860000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sAkurdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Razin Tooling Services Map"
                ></iframe>
            </section>
        </div>
    );
}
