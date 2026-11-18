import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, Navigation, ShieldCheck } from 'lucide-react';

export default function ContactLiaisonDesks() {
  const mapSearchUrl =
    'https://www.google.com/maps/search/?api=1&query=Alpha+Arcades+MIPCO+Chowkdi+GIDC+Bharuch+Gujarat+392015';

  return (
    <div className="space-y-5">
      
      {/* 1. Director Contact Card */}
      <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
              Technical Directorate
            </span>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200/60">
            Direct Access
          </span>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0D3B2E] text-gold font-serif text-base font-bold shadow-xs">
            DS
          </div>
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#0D3B2E]">
              Dharmendra Surelia
            </h3>
            <p className="text-xs text-stone-500 font-medium">
              Principal Technical Director & Turnkey Lead
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-stone-600">
              Direct technical oversight for turnkey fitouts, line-item BOQs, and OEM workstation specifications.
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-stone-100">
          <a
            href="tel:+917359551555"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#0D3B2E] py-2 px-3 text-xs font-semibold text-white transition-all hover:bg-[#08281E]"
          >
            <Phone className="h-3.5 w-3.5 text-gold" />
            <span>+91 73595 51555</span>
          </a>

          <a
            href="https://wa.me/917359551555"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 py-2 px-3 text-xs font-semibold text-emerald-800 transition-all hover:bg-emerald-100"
          >
            <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>

      {/* 2. Registered Office & Studio with Google Map */}
      <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-emerald-700" />
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#0D3B2E]">
              Bharuch Corporate Studio
            </h3>
          </div>
          <span className="text-[11px] font-mono text-stone-400">
            Gujarat HQ
          </span>
        </div>

        <p className="text-xs sm:text-[13px] leading-relaxed text-stone-600 mb-3.5">
          B-311, Alpha Arcades, MIPCO Chowkdi, G.I.D.C.,<br />
          Bharuch – 392015, Gujarat, India
        </p>

        {/* Real Google Maps Iframe */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
          <iframe
            title="MapleRoc Registered Office Location"
            src="https://maps.google.com/maps?q=Alpha+Arcades,+MIPCO+Chowkdi,+GIDC,+Bharuch,+Gujarat+392015&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-full w-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 rounded-xl border border-white/80 bg-white/95 p-2 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-stone-800 truncate">
              <Navigation className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
              <span className="truncate">NH-48 Connectivity</span>
            </div>
            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-950 shrink-0"
            >
              <span>Route</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Essential Operating Details & Email */}
      <div className="rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white p-5 sm:p-6 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 mb-4 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
              <Mail className="h-3 w-3 text-emerald-700" />
              General Inquiries
            </div>
            <a
              href="mailto:contact@mapleroc.com"
              className="text-xs font-semibold text-[#0D3B2E] hover:text-emerald-700 break-all transition-colors"
            >
              contact@mapleroc.com
            </a>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
              <ShieldCheck className="h-3 w-3 text-emerald-700" />
              Tenders & RFPs
            </div>
            <a
              href="mailto:procurement@mapleroc.com"
              className="text-xs font-semibold text-[#0D3B2E] hover:text-emerald-700 break-all transition-colors"
            >
              procurement@mapleroc.com
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-emerald-700" />
            <span>Mon – Sat: <strong>09:00 AM – 07:00 PM</strong></span>
          </div>
          <span className="text-[11px] text-stone-400 font-mono">IST (UTC+05:30)</span>
        </div>
      </div>

    </div>
  );
}
