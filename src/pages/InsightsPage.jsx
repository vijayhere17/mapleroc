import InsightsHero from '../components/sections/insights/InsightsHero';
import FeaturedInsightCard from '../components/sections/insights/FeaturedInsightCard';
import PublicationsGrid from '../components/sections/insights/PublicationsGrid';
import NewsletterSection from '../components/sections/insights/NewsletterSection';
import InsightsCtaBanner from '../components/sections/insights/InsightsCtaBanner';

export default function InsightsPage() {
  return (
    <div className="w-full">
      <InsightsHero />
      <FeaturedInsightCard />
      <PublicationsGrid />
      <NewsletterSection />
      <InsightsCtaBanner />
    </div>
  );
}
