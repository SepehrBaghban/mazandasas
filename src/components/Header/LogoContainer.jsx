

import {motion} from "motion/react";
import logo from "@media/icons/favicon.ico";
import {useWindowSize} from "react-use";

function LogoContainer() {


    const {width} = useWindowSize()

    return (
        <motion.div
            id="logo-container"
            className="h-[40px] flex items-center gap-2"
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
        >
            <motion.img
                src={logo}
                alt="مازند اساس"
                className="w-full h-full object-contain"
                // Slight shake when truck stops
                animate={{rotate: [0, -3, 3, 0, -3, 3, 0, -3, 3, 0, -3, 3, 0, -3, 3, 0 - 3, 3, 0]}}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                    delay: 0.5
                }}
            />

            <motion.h1
                className="text-[18px] font-400 text-muted-48"
                // Text fades in after the truck settles
                initial={{opacity: 0, x: -25}}
                animate={{opacity: 1, x: 0}}
                transition={{
                    delay: 0.75,
                    duration: 0.5
                }}
            >
                Mazandasas
            </motion.h1>
        </motion.div>
    );
}

export default LogoContainer;


