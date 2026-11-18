import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const scopeOptions = [
  'Turnkey Fitout',
  'Modular Workstations',
  'Integrated MEP',
  'General Consultation',
];

export default function ContactFormCard() {
  const [formData, setFormData] = useState({
    fullName: '',
    enterprise: '',
    email: '',
    phone: '',
    scope: 'Turnkey Fitout',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 lg:p-9 shadow-xs">
      {/* Header */}
      <div className="border-b border-stone-100 pb-5 mb-5 sm:mb-6">
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
          Direct Project Inquiry
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#0D3B2E]">
          Send Us a Message
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
          Direct review by principal director Dharmendra Surelia within 24 working hours.
        </p>
      </div>

      {submitted ? (
        <div className="py-12 px-6 text-center rounded-2xl bg-[#F4F8F5] border border-emerald-200/80">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3.5 shadow-xs border border-emerald-300">
            <CheckCircle2 className="w-6 h-6 text-emerald-700" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-[#0D3B2E] font-semibold mb-2">
            Inquiry Received
          </h3>
          <p className="text-stone-700 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-6">
            Thank you, <strong className="text-[#0D3B2E]">{formData.fullName}</strong>. Your project mandate for{' '}
            <strong className="text-emerald-800">{formData.enterprise || 'your practice'}</strong> has been transmitted directly to our directorate. We will reach out within 24 working hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                enterprise: '',
                email: '',
                phone: '',
                scope: 'Turnkey Fitout',
                message: '',
              });
            }}
            className="cursor-pointer px-6 py-2.5 rounded-full bg-[#0D3B2E] text-white text-xs font-semibold hover:bg-[#08281E] transition-all"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          
          {/* Quick Scope Pills */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-2">
              Select Execution Scope
            </label>
            <div className="flex flex-wrap gap-2">
              {scopeOptions.map((item) => {
                const isSelected = formData.scope === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, scope: item }))}
                    className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                      isSelected
                        ? 'border border-[#0D3B2E] bg-[#0D3B2E] text-white shadow-xs'
                        : 'border border-stone-200 bg-[#F8FAF9] text-stone-700 hover:border-emerald-600 hover:bg-white'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row: Name & Enterprise */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Dharmendra Patel"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-700 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Enterprise / Practice *
              </label>
              <input
                type="text"
                required
                name="enterprise"
                value={formData.enterprise}
                onChange={handleChange}
                placeholder="e.g. Adani Logistics / Architect Associates"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-700 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Row: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="director@enterprise.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-700 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98250 XXXXX"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-700 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Message / Scope Textarea */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Project Details / Floorplate Requirements
            </label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project location, estimated carpet area, target completion timeline, or any specific workstation requirements..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-700 focus:bg-white transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer group relative w-full rounded-full bg-[#0D3B2E] py-3.5 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#08281E] hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                <span>Sending Message...</span>
              </span>
            ) : (
              <>
                <span>Send Inquiry to Directorate</span>
                <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          {/* Simple Reassurance */}
          <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-stone-400 text-center">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
            <span>100% Client Confidentiality · Direct directorate review within 24 hours</span>
          </div>

        </form>
      )}

    </div>
  );
}
