import {ICON_STYLES, SECTION_HEADER_STYLES, SECTION_X_PADDING, SECTION_Y_PADDING} from "@constants/styles.js";
import vanet from "@media/images/vanet.png"
import miniTruck from "@media/images/mini-truck.png"
import bigTruck from "@media/images/bg-truck.png"
import Check from "@media/icons/tick-circle.svg?react"
import {motion} from "motion/react";
import {useInView} from "react-intersection-observer";

const services = [
    {
        image: vanet,
        title: "وانت",
        description: "برای حمل سبک",
        features: [
            {title: "ظرفیت 1 تن"},
            {title: "مناسب برای اسباب کوچک"},
            {title: "بارگیری"},
            {title: "بیمه کامل"},
        ]
    },
    {
        image: vanet,
        title: "نیسان",
        description: "برای حمل سنگین",
        features: [
            {title: "ظرفیت 3 تن"},
            {title: "مناسب برای اسباب چند تکه"},
            {title: "بارگیری"},
            {title: "بیمه کامل"},
        ]
    },
    {
        image: miniTruck,
        title: "کامیونت",
        description: "برای حمل سنگین",
        features: [
            {title: "ظرفیت  بالای 3 تن"},
            {title: "مناسب برای اسباب کشی منزل"},
            {title: "بارگیری"},
            {title: "بیمه کامل"},
        ]
    },
    {
        image: bigTruck,
        title: "کامیون",
        description: "برای حمل سنگین",
        features: [
            {title: "ظرفیت  بالای 10 تن"},
            {title: "مناسب برای اسباب کشی منزل، ادارات و شرکت ها"},
            {title: "بارگیری"},
            {title: "بیمه کامل"},
        ]
    }
];


function ServicesSection() {

    const serviceVariants = {
        hidden: {x: -80, opacity: 0},
        visible: (delayIndex) => ({
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: delayIndex * 0.2   // stagger delay
            }
        }),
        exit: {x: -100, opacity: 0, transition: {duration: 0.4}}
    };
    const {ref, inView} = useInView({
        threshold: 0.3,
        triggerOnce: false
    });
    return (
        <section
            ref={ref}
            id="services"
            className={`${SECTION_X_PADDING} ${SECTION_Y_PADDING}  bg-[#CEB08A]`}
        >
            <h2 className={`text-white text-center ${SECTION_HEADER_STYLES}`}>خدمات ما</h2>
            <div className={`grid max-[1000px]:grid-cols-2 grid-cols-4 max-[500px]:gap-4 gap-6 overflow-hidden max-[500px]:mt-4 max-[800px]:mt-6 mt-10`}>
                {
                    services.map((service, index) => {
                        return (
                            <motion.div
                                key={service.title}
                                id="service-item"
                                className=" flex flex-col justify-center items-center font-400 glass-blur-bg rounded-lg max-[500px]:p-3 p-6"
                                variants={serviceVariants}
                                initial="hidden"
                                animate={inView ? "visible" : "exit"}
                                custom={index}
                            >
                                <div className="max-[500px]:w-[75] w-[115px] max-[500px]:h-[32px]  h-[50px]">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={service.image}
                                        alt={service.description}
                                    />
                                </div>

                                <p className="max-[500px]:text-[14px] text-[16px] max-[500px]:mt-2 mt-5">{service.title}</p>
                                <p className="text-white text-[12px] mt-1">{service.description}</p>

                                <div className="flex flex-col ml-auto gap-2  max-[500px]:mt-3  mt-6">
                                    {
                                        service.features.map((feature, i) => (
                                            <p
                                                key={i}
                                                className="text-[12px] text-muted-40 flex items-center gap-2"
                                            >
                                                <Check className={`shrink-0 ${ICON_STYLES}`}/>
                                                {feature.title}
                                            </p>
                                        ))
                                    }
                                </div>
                            </motion.div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default ServicesSection;
