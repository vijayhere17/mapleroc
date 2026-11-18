import ContactHero from '../components/sections/contact/ContactHero';
import ContactLiaisonDesks from '../components/sections/contact/ContactLiaisonDesks';
import ContactFormCard from '../components/sections/contact/ContactFormCard';

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAFCF9]">
      <ContactHero />

      {/* Main 2-Column Contact Section */}
      <section id="contact-grid" className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Direct Helplines, Office Address, Map & Director */}
            <div className="lg:col-span-5">
              <ContactLiaisonDesks />
            </div>

            {/* Right Column: Clean, Elegant Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactFormCard />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
