import Hero from "@pages/MainPage/Hero/Hero.jsx";
import AboutSection from "@pages/MainPage/AboutSection.jsx";
import ServicesSection from "@pages/MainPage/Services/ServicesSection.jsx";

function MainPageLayout() {
    return (
        <>
            <Hero/>
            <AboutSection/>
            <ServicesSection/>
        </>
    );
}

export default MainPageLayout;