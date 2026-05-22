import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import HomeVideo from "@/components/HomeVideo";
import TrustBadges from "@/components/TrustBadges";
import SiteFooter from "@/components/SiteFooter";
import NewsletterPopup from "@/components/NewsletterPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />
      <HomeVideo />
      <TrustBadges />
      <SiteFooter />
      <NewsletterPopup />
    </div>
  );
};

export default Index;
