import AboutHero from '../components/sections/about/AboutHero';
import AboutStory from '../components/sections/about/AboutStory';
import TimelineSection from '../components/sections/about/TimelineSection';
import FourDisciplinesAbout from '../components/sections/about/FourDisciplinesAbout';
import AccountabilityAbout from '../components/sections/about/AccountabilityAbout';
import FounderQuoteSection from '../components/sections/about/FounderQuoteSection';
import AboutCtaBanner from '../components/sections/about/AboutCtaBanner';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <TimelineSection />
      <FourDisciplinesAbout />
      <AccountabilityAbout />
      <FounderQuoteSection />
      <AboutCtaBanner />
    </>
  );
}
