
import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";
import InfoSidebar from "@/components/InfoSidebar";
import Description from "@/components/Description";
import AdBox from "@/components/AdBox";
import TaboolaSection from "@/components/TaboolaSection";
import InterestBox from "@/components/InterestBox";
import RecentlyUploaded from "@/components/RecentlyUploaded";
import PopularSection from "@/components/PopularSection";
import Footer from "@/components/Footer";
import Chart from "@/components/Chart";
import SectionHeading from "@/components/SectionHeading";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Ad Banner Section */}
        <AdBanner />
        
        {/* Chart and Info Section */}
        <div className="section-container py-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-3">
              <div className="w-full animate-fade-up animation-delay-200">
                <div className="section-container py-4">
                  <SectionHeading title="Website Analytics" accent={true} />
                  <div className="bg-background rounded-lg border shadow-sm p-4">
                    <Chart className="h-[350px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <InfoSidebar />
            </div>
          </div>
        </div>
        
        {/* Description and Ad Box Section */}
        <div className="section-container py-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-3">
              <Description />
            </div>
            <div className="col-span-1">
              <AdBox />
            </div>
          </div>
        </div>
        
        {/* Taboola and Interest Box Section */}
        <div className="section-container py-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-3">
              <TaboolaSection />
            </div>
            <div className="col-span-1">
              <InterestBox />
            </div>
          </div>
        </div>
        
        {/* Recently Uploaded and Popular Section */}
        <div className="section-container py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <RecentlyUploaded />
            </div>
            <div className="col-span-1">
              <PopularSection />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
