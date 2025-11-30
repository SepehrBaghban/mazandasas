import hero from "@media/images/hero.webp"

function Hero() {
    return (
        <section  id="hero">
            <img
                className={`w-full h-full object-contain`}
                src={hero} alt="hero"
            />
        </section>
    );
}

export default Hero;