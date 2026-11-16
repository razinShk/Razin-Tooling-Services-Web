"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [helpMessage, setHelpMessage] = useState("");
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});

    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const validateField = (field: string, value: string) => {
        if (field === "name" && !value.trim()) {
            return "Enter your full name and company.";
        }
        if (field === "phone" && !value.trim()) {
            return "Enter a valid 10-digit phone number.";
        }
        if (field === "email" && value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
            return "Write the address as name@company.com.";
        }
        if (field === "message" && !value.trim()) {
            return "Describe your tool count, material grade, or manpower requirement.";
        }
        return "";
    };

    const handleBlur = (field: string, value: string) => {
        if (!touched[field] && !value) return;
        const err = validateField(field, value);
        setErrors((prev) => ({ ...prev, [field]: err }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const nextErrors = {
            name: validateField("name", formData.name),
            phone: validateField("phone", formData.phone),
            email: validateField("email", formData.email),
            message: validateField("message", formData.message),
        };
        setErrors(nextErrors);

        if (nextErrors.name) {
            setStatus("error");
            setHelpMessage(nextErrors.name);
            nameRef.current?.focus();
            return;
        }
        if (nextErrors.phone) {
            setStatus("error");
            setHelpMessage(nextErrors.phone);
            phoneRef.current?.focus();
            return;
        }
        if (nextErrors.email) {
            setStatus("error");
            setHelpMessage(nextErrors.email);
            emailRef.current?.focus();
            return;
        }
        if (nextErrors.message) {
            setStatus("error");
            setHelpMessage(nextErrors.message);
            messageRef.current?.focus();
            return;
        }

        setStatus("submitting");
        setHelpMessage(
            "Nothing was sent: this form is not connected yet. Use the direct WhatsApp or phone buttons on the left to reach Asif N Shaikh immediately."
        );
    };

    return (
        <div className="flex flex-col">
            <section className="band--cast py-16 lg:py-20">
                <div className="container space-y-4">
                    <h1>Contact &amp; RFQ dispatch</h1>
                    <p className="lead text-ink-2">
                        Reach Asif N Shaikh in Pune for tool proving and manpower.
                    </p>
                </div>
            </section>

            <section className="py-20 lg:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* Corporate Dossier & Direct Contact */}
                        <div className="lg:col-span-5 plate space-y-8">
                            <div className="border-b-2 border-ink pb-4">
                                <h2>Corporate Headquarters</h2>
                                <p className="text-sm text-ink-2 mt-1">
                                    Direct dispatch for Maharashtra, Gujarat, Uttarakhand, Tamil Nadu, and NCR plants
                                </p>
                            </div>

                            <ul className="space-y-6 list-none p-0 m-0">
                                <li className="flex items-start gap-4">
                                    <MapPin className="text-ink flex-shrink-0 mt-1" size={22} aria-hidden="true" />
                                    <div>
                                        <h3 className="text-lg">Address</h3>
                                        <p className="text-ink-2">
                                            Akurdi, Pune 411035
                                            <br />
                                            Maharashtra, India
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Phone className="text-ink flex-shrink-0 mt-1" size={22} aria-hidden="true" />
                                    <div>
                                        <h3 className="text-lg">Direct Phone &amp; WhatsApp</h3>
                                        <a href="tel:+919922957006" className="figure-num font-bold text-lg text-ink">
                                            +91-9922957006
                                        </a>
                                        <p className="text-sm text-ink-2 mt-1">Contact: Asif N Shaikh</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Mail className="text-ink flex-shrink-0 mt-1" size={22} aria-hidden="true" />
                                    <div>
                                        <h3 className="text-lg">Email</h3>
                                        <a href="mailto:shaikhasifn@rediffmail.com" className="text-ink font-medium">
                                            shaikhasifn@rediffmail.com
                                        </a>
                                    </div>
                                </li>
                            </ul>

                            <div className="pt-6 border-t-2 border-ink space-y-3">
                                <h3 className="text-lg">Vendor Registration Details</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                    <div className="bg-paper-2 p-3 border-2 border-ink">
                                        <strong className="text-ink">GSTIN</strong>
                                        <br />
                                        <span className="figure-num text-ink-2">27NPAPS0212C1Z7</span>
                                    </div>
                                    <div className="bg-paper-2 p-3 border-2 border-ink">
                                        <strong className="text-ink">UDYAM</strong>
                                        <br />
                                        <span className="figure-num text-ink-2">UDYAM-MH-26-0222848</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RFQ Form */}
                        <div className="lg:col-span-7 well border-2 border-ink p-8 sm:p-10">
                            <h2 className="mb-6">Prepare Project Scope</h2>

                            <form
                                onSubmit={handleSubmit}
                                data-endpoint=""
                                noValidate
                                aria-labelledby="rfq-form-heading"
                            >
                                <p id="rfq-form-heading" className="text-sm text-ink-2 mb-6">
                                    Fields marked with * are required.
                                </p>

                                <div className="field-group">
                                    <label htmlFor="name">
                                        Full Name &amp; Company <span aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        ref={nameRef}
                                        type="text"
                                        id="name"
                                        name="name"
                                        autoComplete="name"
                                        enterKeyHint="next"
                                        className="field-input"
                                        value={formData.name}
                                        aria-invalid={errors.name ? "true" : undefined}
                                        aria-describedby="name-help"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        onInput={() => {
                                            setTouched((prev) => ({ ...prev, name: true }));
                                            if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                                        }}
                                        onBlur={(e) => handleBlur("name", e.target.value)}
                                        required
                                    />
                                    <span id="name-help" className="field-help">
                                        {errors.name || "Include your plant or OEM division name."}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="field-group">
                                        <label htmlFor="phone">
                                            Phone Number <span aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            ref={phoneRef}
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            autoComplete="tel"
                                            inputMode="tel"
                                            enterKeyHint="next"
                                            className="field-input"
                                            value={formData.phone}
                                            aria-invalid={errors.phone ? "true" : undefined}
                                            aria-describedby="phone-help"
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            onInput={() => {
                                                setTouched((prev) => ({ ...prev, phone: true }));
                                                if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                                            }}
                                            onBlur={(e) => handleBlur("phone", e.target.value)}
                                            required
                                        />
                                        <span id="phone-help" className="field-help">
                                            {errors.phone || "10-digit mobile or plant extension."}
                                        </span>
                                    </div>

                                    <div className="field-group">
                                        <label htmlFor="email">Work Email Address</label>
                                        <input
                                            ref={emailRef}
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            autoCapitalize="none"
                                            spellCheck={false}
                                            enterKeyHint="next"
                                            className="field-input"
                                            value={formData.email}
                                            aria-invalid={errors.email ? "true" : undefined}
                                            aria-describedby="email-help"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            onInput={() => {
                                                setTouched((prev) => ({ ...prev, email: true }));
                                                if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                                            }}
                                            onBlur={(e) => handleBlur("email", e.target.value)}
                                        />
                                        <span id="email-help" className="field-help">
                                            {errors.email || "Optional, for formal RFQ PDFs."}
                                        </span>
                                    </div>
                                </div>

                                <div className="field-group">
                                    <label htmlFor="message">
                                        Project Details / Tooling Scope <span aria-hidden="true">*</span>
                                    </label>
                                    <textarea
                                        ref={messageRef}
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="field-input resize-y"
                                        value={formData.message}
                                        aria-invalid={errors.message ? "true" : undefined}
                                        aria-describedby="message-help"
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        onInput={() => {
                                            setTouched((prev) => ({ ...prev, message: true }));
                                            if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                                        }}
                                        onBlur={(e) => handleBlur("message", e.target.value)}
                                        required
                                    ></textarea>
                                    <span id="message-help" className="field-help">
                                        {errors.message || "Mention tool count, draw depth, material grade (e.g. DP-790), or manpower roles."}
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 pt-2">
                                    <button type="submit" className="btn btn--primary whitespace-nowrap">
                                        Validate Scope
                                    </button>
                                    {status !== "idle" && (
                                        <button
                                            type="button"
                                            onClick={() => setStatus("idle")}
                                            className="btn btn--secondary whitespace-nowrap"
                                        >
                                            Clear Notice
                                        </button>
                                    )}
                                </div>

                                <p className="field-help mt-4" role="status" aria-live="polite">
                                    {status !== "idle" ? helpMessage : ""}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t-[3px] border-ink h-[400px] w-full">
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
