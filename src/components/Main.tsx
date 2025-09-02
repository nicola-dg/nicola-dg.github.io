
import ContactsSection from "./sections/ContactsSection";
import DoveSection from "./sections/DoveSection";
import HeroSection from "./sections/HeroSection"
import HistorySection from "./sections/HistorySection";
import PromozioniSection from "./sections/PromozioniSection";
import WorksSection from "./sections/WorksSection";
import WorkWithUsSection from "./sections/WorkWithUsSection";

const Main = () => {
    return (
        <div className="flex flex-col">
            <HeroSection></HeroSection>
            <HistorySection></HistorySection>
            <WorksSection></WorksSection>
            <ContactsSection></ContactsSection>
            <DoveSection></DoveSection>
            <WorkWithUsSection></WorkWithUsSection>
            <PromozioniSection></PromozioniSection>
        </div>
    )
}

export default Main;