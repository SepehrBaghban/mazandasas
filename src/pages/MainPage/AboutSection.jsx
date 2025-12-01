import {SECTION_HEADER_STYLES, SECTION_X_PADDING, SECTION_Y_PADDING} from "@constants/styles.js";
import {ABOUT_DESCRIPTION, BRAND_TITLE_FA} from "@constants/info.js";
import about_img from "@media/images/about-img.webp";
import {motion} from "motion/react";
import {useRef} from "react";
import {useInView} from "react-intersection-observer";

function AboutSection() {

    const textRef = useRef(null);
    const imgRef = useRef(null);

    // detect scroll in/out
    const { ref: textInViewRef, inView: textInView } = useInView({ threshold: 0.3 });
    const { ref: imgInViewRef, inView: imgInView } = useInView({ threshold: 0.3 });

    const textVariants = {
        hidden: { x: -80, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" }},
        exit: { x: -80, opacity: 0, transition: { duration: 0.5 }}
    };

    const imgVariants = {
        hidden: { x: 80, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" }},
        exit: { x: 80, opacity: 0, transition: { duration: 0.5 }}
    };

    return (
        <section
            id="about"
            className={`${SECTION_X_PADDING} ${SECTION_Y_PADDING} max-[500px]:mt-[40px]`}
        >
            <h2 className={`${SECTION_HEADER_STYLES} text-center`}>درباره ی ما</h2>

            <div
                id="about-inner"
                className="overflow-hidden flex max-[700px]:flex-col-reverse gap-6 max-[800px]:mt-6 mt-10"
            >

                {/* TEXT */}
                <motion.div
                    ref={el => {
                        textRef.current = el;
                        textInViewRef(el);   // merge refs
                    }}
                    className="flex flex-col gap-2 basis-1/2"
                    variants={textVariants}
                    initial="hidden"
                    animate={textInView ? "visible" : "exit"}
                >
                    <h3 className="max-[800px]:text-[16px] max-[1000px]:text-[18px] text-[20px] font-500">
                        مازند اثاث؛ ارائه‌دهنده خدمات استاندارد حمل بار و جابه‌جایی
                    </h3>
                    <p className="max-[800px]:text-[14px] max-[1000px]:text-[16px] text-[18px] font-400">
                        {ABOUT_DESCRIPTION}
                    </p>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                    ref={el => {
                        imgRef.current = el;
                        imgInViewRef(el);  // merge refs
                    }}
                    className="basis-1/2 overflow-hidden"
                    variants={imgVariants}
                    initial="hidden"
                    animate={imgInView ? "visible" : "exit"}
                >
                    <img
                        className="w-full h-full object-contain"
                        src={about_img}
                        alt={BRAND_TITLE_FA}
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default AboutSection;
