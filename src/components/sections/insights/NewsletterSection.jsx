import { useState } from 'react';
import { Mail, Check, ShieldCheck } from 'lucide-react';
import Reveal from '../../common/Reveal';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="py-16 sm:py-20 bg-[#FAFCF9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal
          direction="zoom"
          className="relative overflow-hidden bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 lg:p-16 text-center shadow-lg"
        >
          {/* Subtle ambient lighting */}
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

          {/* Top Icon */}
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-6 shadow-xs">
            <Mail className="w-6 h-6 text-emerald-700" />
          </div>

          {/* Heading */}
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0D3B2E] font-medium tracking-tight mb-3">
            Receive MapleRoc&apos;s Quarterly{' '}
            <span className="italic text-emerald-700">Spatial Engineering Dossier</span>
          </h3>

          {/* Subtitle */}
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto mb-8">
            Join 1,200+ facility directors, corporate real estate heads, and principal architects who receive our quarterly research compendium directly in their inbox. Purely peer-reviewed spatial insights.
          </p>

          {/* Form */}
          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0D3B2E] text-xs sm:text-sm font-semibold shadow-xs">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Thank you! You are subscribed to our quarterly research dossier.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your corporate email address..."
                className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-stone-50 border border-stone-300 text-stone-900 placeholder:text-stone-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white shadow-xs transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0D3B2E] hover:bg-[#08281E] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                Subscribe to Dossier
              </button>
            </form>
          )}

          <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Strict confidentiality guaranteed. We never share your corporate email.</span>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
