import DefaultLayout from "@layouts/DefaultLayout";
import Jumbotron from "@mods/LandingPage/Jumbotron";
import SectionEnjoy from "@mods/LandingPage/SectionContents/SectionEnjoy";
import SectionDownload from "@mods/LandingPage/SectionContents/SectionDownload";
import SectionWatch from "@mods/LandingPage/SectionContents/SectionWatch";
import SectionProfile from "@mods/LandingPage/SectionContents/SectionProfile";
import SectionFAQ from "@mods/LandingPage/SectionContents/SectionFAQ";
import Footer from "@mods/LandingPage/Footer";


function Landing() {
  return (
    <DefaultLayout>
      <Jumbotron />
      <SectionEnjoy />
      <SectionDownload />
      <SectionWatch />
      <SectionProfile />
      <SectionFAQ />
      <Footer />
    </DefaultLayout>
  );
}

export default Landing;
