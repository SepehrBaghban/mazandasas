import {motion} from "motion/react";

import CargoMoving from "@media/icons/man-moving-cargo.svg?react";
import Shield from "@media/icons/secure.svg?react";
import RunningTruck from "@media/icons/truck-running.svg?react";
import {useWindowSize} from "react-use";

const featureStyles =
    "rounded-lg glass-blur-gradient-bg flex flex-col justify-center items-center  gap-2 " +
    "font-500  max-[500px]:text-[14px] max-[1000px]:text-[16px]   max-[1200px]:text-[18px]  max-[1500px]:text-[20px] text-[24px] text-muted-29 " +
    "max-[650px]:w-[100px] max-[1000px]:w-[120px] max-[1200px]:w-[140px] max-[1500px]:w-[160px] w-[192px] max-[650px]:h-[90px] max-[1000px]:h-[100px] max-[1200px]:h-[120px] max-[1500px]:h-[140px] h-[170px]";

function HeroFeatures() {
    const items = [
        {label: "سریع", Icon: RunningTruck, delay: 0.3},
        {label: "ایمن", Icon: Shield, delay: 0.5},
        {label: "آسان", Icon: CargoMoving, delay: 0.7}
    ];

    const {width} = useWindowSize()

    return (
        <div
            id="hero-features"
            className=" max-[500px]:overflow-hidden max-[500px]:bottom-[-45px] max-[500px]:absolute max-[500px]:flex-row flex flex-col items-center justify-center max-[500px]:gap-4 gap-6"
        >
            {
                items.map(({label, Icon, delay}, index) => (
                    <motion.div
                        key={index}
                        className={featureStyles}
                        // Items enter softly from left
                        initial={{x: width < 500 ? -50 : width < 800 ? -100 : width < 1200 ? -200 : -400, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 140,  // soft spring
                            damping: 18,      // smooth landing
                            mass: 0.8,
                            delay: delay      // stagger effect
                        }}
                    >
                        <Icon
                            className={`shrink-0 max-[650px]:w-[48px] max-[1000px]:w-[64px] max-[1200px]:w-[80px] max-[1500px]:w-[100px] w-[120px] max-[650px]:h-[32px]  max-[1000px]:h-[40px] max-[1200px]:h-[48px] max-[1500px]:h-[60px]  h-[80px]`}
                        />
                        <p>{label}</p>
                    </motion.div>
                ))
            }
        </div>
    );
}

export default HeroFeatures;
