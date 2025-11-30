

import {motion} from "motion/react";
import logo from "@media/icons/favicon.ico";
import {useWindowSize} from "react-use";
import {BRAND_TITLE_EN} from "@constants/info.js";

function LogoContainer() {


    const {width} = useWindowSize()

    return (
        <motion.div
            id="logo-container"
            className="max-[700px]:h-[30px] h-[40px] flex items-center gap-2"
            // Initial animation values
            initial={{
                x: -width,     // start far-left outside header
                skewX: -20,  // stronger speed feeling
                opacity: 0
            }}
            // Final position
            animate={{
                x: 0,
                skewX: 0,
                opacity: 1
            }}
            // Slower spring for longer travel time
            transition={{
                type: "spring",
                stiffness: 25,  // lower = slower
                damping: 15,     // smoother arrival
                mass: 1,         // heavier feel
                delay: 0.8
            }}
            // Shake on click (event-based)
            whileTap={{
                x: [-2, 2, -3, 3, -2, 2, 0],       // small left-right vibration
                rotate: [-2, 2, -3, 3, -1, 1, 0], // slight tilt like truck engine
                scale: [1, 1.02, 1, 1.02, 1],     // tiny engine rumble
                transition: {
                    duration: 0.5,
                    ease: "easeInOut"
                }
            }}

        >
            <motion.img
                src={logo}
                alt="مازند اساس"
                className=" max-[650px]:w-[50px] w-full h-full object-contain"
                // Slight shake when truck stops
                animate={{rotate: [0, -3, 3, 0, -3, 3, 0, -3, 3, 0, -3, 3, 0, -3, 3, 0 - 3, 3, 0]}}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: 0.5
                }}
            />

            <motion.h2
                className="select-none max-[650px]:text-[16px] text-[18px] font-400 text-muted-48"
                // Text fades in after the truck settles
                initial={{opacity: 0, x: -25}}
                animate={{opacity: 1, x: 0}}
                transition={{
                    delay: 0.75,
                    duration: 0.5
                }}
            >
                {BRAND_TITLE_EN}
            </motion.h2>
        </motion.div>
    );
}

export default LogoContainer;


