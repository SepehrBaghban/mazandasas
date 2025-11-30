import hero from "@media/images/hero.webp"
import HeroFeatures from "@pages/MainPage/Hero/HeroFeatures.jsx";
import {BRAND_TITLE_FA} from "@constants/info.js";
import HeroDescription from "@pages/MainPage/Hero/HeroDescription.jsx";
import {SECTION_X_PADDING} from "@constants/styles.js";

function Hero() {
    return (
        <section id="hero" className={`relative max-[500px]:h-[500px] max-[500px]:overflow-visible overflow-x-hidden`}>
            <img
                id={"hero-image"}
                className={`w-full h-full object-cover absolute inset-0 z-[-1]`}
                src={hero}
                alt={BRAND_TITLE_FA}
            />
            <div
                id={"hero-inner"}
                className={`${SECTION_X_PADDING}
                             max-[500px]:flex-col flex items-center justify-between pb-[58px] max-[500px]:pt-[90px] max-[600px]:pt-[100px] pt-[144px]`}
            >
                <HeroDescription/>
                <HeroFeatures/>
            </div>
        </section>
    );
}

export default Hero;