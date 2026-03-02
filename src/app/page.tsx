import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, Settings, Users, Factory, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 border-b border-slate-800 text-white py-24 sm:py-32 overflow-hidden bg-industrial-grid">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10"></div>
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <ShieldCheck size={16} />
            <span>Premium Tooling & Manpower Solutions in India</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Precision Engineering. <br />
            <span className="text-blue-500">Unmatched Expertise.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            Razin Tooling Services provides industry-leading tool installation, critical die proving, modifying services, and highly skilled industrial manpower for India's largest OEMs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/services"
              className="inline-flex justify-center items-center gap-2 px-8 py-3.5 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
            >
              Explore Services
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2 px-8 py-3.5 border border-slate-700 text-base font-bold rounded-md text-white bg-slate-800 hover:bg-slate-700 transition"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-slate-800 py-8 border-b border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-700">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white mb-2">5-20</span>
              <span className="text-slate-400 text-sm uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white mb-2">100+</span>
              <span className="text-slate-400 text-sm uppercase tracking-wider">Tools Commissioned</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white mb-2">Tier-1</span>
              <span className="text-slate-400 text-sm uppercase tracking-wider">OEM Partners</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white mb-2">24/7</span>
              <span className="text-slate-400 text-sm uppercase tracking-wider">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Core Industrial Services</h2>
            <p className="text-lg text-slate-600">Comprehensive tooling and manpower solutions tailored for the demanding automotive and sheet metal manufacturing sectors.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-500/30 transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tool Installation & Commissioning</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Expert installation and rigorous commissioning of large-scale press tools to ensure zero-defect production readiness.
              </p>
              <Link href="/services/tool-installation-india" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-500/30 transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Settings size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Critical Die Proving</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Specialized in proving highly critical draws (up to 210mm depth) and processing high-tensile materials like DP-790.
              </p>
              <Link href="/services/die-proving-india" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-500/30 transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Skilled Industrial Manpower</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Supply of highly trained professionals with 5-20 years of hands-on experience in press tool operations.
              </p>
              <Link href="/services/industrial-skilled-manpower" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-colors">
              View all services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proven Track Record</h2>
              <p className="text-lg text-slate-400">Successfully delivered critical automotive projects with uncompromising quality.</p>
            </div>
            <Link href="/projects" className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-md text-white hover:bg-slate-800 transition">
              See All Case Studies
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Factory size={120} />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider rounded mb-4">Tata Motors Ltd</span>
                <h3 className="text-2xl font-bold mb-3">Project X104 (Nexon)</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">Commissioned 10 parts comprising 33 total tools.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">Successfully executed critical draw proving up to 210mm depth.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Factory size={120} />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider rounded mb-4">GE Stamp Ltd</span>
                <h3 className="text-2xl font-bold mb-3">Project MQB-Kushaq</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">Proved 6 parts spanning 33 complex tools.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">Expert handling of High Tensile DP-790 material up to 3.7mm thickness.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-md text-white w-full justify-center bg-slate-800 hover:bg-slate-700 transition">
              See All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Embedded Map & CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Headquartered in Pune's Industrial Hub</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Strategically located in Akurdi, Pune, we are perfectly positioned to serve the automotive and manufacturing ecosystems across Maharashtra and Pan-India.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Award className="text-blue-600" size={24} />
                  <span className="text-slate-700 font-medium">UDYAM Registered Enterprise</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="text-blue-600" size={24} />
                  <span className="text-slate-700 font-medium">GST Compliant Operations</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition">
                Contact Our Experts
              </Link>
            </div>
            <div className="h-[400px] bg-slate-200 rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.634125301886!2d73.7667232252533!3d18.647161860000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sAkurdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location of Razin Tooling Services"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
