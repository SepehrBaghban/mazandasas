import {ICON_STYLES, SECTION_X_PADDING, SECTION_Y_PADDING} from "@constants/styles.js";
import Instagram from "@media/icons/instagram.svg?react"
import Whatsapp from "@media/icons/whatsapp.svg?react"
import Telegram from "@media/icons/telegram.svg?react"
import Mobile from "@media/icons/mobile.svg?react"
import Call from "@media/icons/call.svg?react"
import {BRAND_TITLE_FA, CEO_PHONE} from "@constants/info.js";
import {convertEnToPe} from "persian-number/src/persianNumber.js";
import delivery from "@media/images/delivery_moving.webp"

// Framer Motion
import {motion, useScroll, useTransform} from "motion/react";
import {useRef} from "react";

function Footer() {

    const footerRef = useRef(null);

    // Track scroll progress of the footer section
    const {scrollYProgress} = useScroll({
        target: footerRef,
        offset: ["start end", "end start"] // when footer enters screen until fully visible
    });

    // Move truck from left (-200px) to center (0px)
    const truckX = useTransform(scrollYProgress, [0, 0.3], [-200, 0]);

    return (
        <footer
            ref={footerRef}
            id={"contact"}
            className={`overflow-hidden bg-prim-hover flex max-[400px]:flex-col-reverse max-[400px]:gap-6 justify-between ${SECTION_X_PADDING} ${SECTION_Y_PADDING}`}
        >
            <div className={`flex max-[700px]:flex-col items-start gap-6`}>
                <div className={`flex flex-col max-[1000px]:gap-4  gap-6 `}>
                    <p className={`text-[14px] font-400`}>شبکه های اجتماعی</p>

                    <div id={"instagram-item"} className={`flex gap-2 items-center text-[12px] font-500 text-muted-31`}>
                        <Instagram className={`${ICON_STYLES} shrink-0`}/>
                        <a target={"_blank"} href="https://www.instagram.com">
                            اینستاگرام : mazandasas@
                        </a>
                    </div>

                    <div id={"whatsapp-item"} className={`flex gap-2 items-center text-[12px] font-500 text-muted-31`}>
                        <Whatsapp className={`${ICON_STYLES} shrink-0`}/>
                        <a target={"_blank"} href={`https://wa.me/${CEO_PHONE}`}>
                            واتساپ : {convertEnToPe(CEO_PHONE)}
                        </a>
                    </div>

                    <div id={"telegram-item"} className={`flex gap-2 items-center text-[12px] font-500 text-muted-31`}>
                        <Telegram className={`${ICON_STYLES} shrink-0`}/>
                        <a target="_blank" href={`tg://resolve?phone=${CEO_PHONE}`}>
                            شماره تلگرام : {convertEnToPe(CEO_PHONE)}
                        </a>
                    </div>
                </div>
                <div className={`flex flex-col max-[1000px]:gap-4  gap-6 `}>
                    <p className={`text-[14px] font-400`}>راه‌های ارتباطی</p>

                    <div className={`flex gap-2 items-center text-[12px] font-500 text-muted-31`}>
                        <Call className={`${ICON_STYLES} shrink-0`}/>
                        <a target={"_blank"} href={`tel:${CEO_PHONE}`}>
                            تلفن : {convertEnToPe(CEO_PHONE)}
                        </a>
                    </div>

                    <div className={`flex gap-2 items-center text-[12px] font-500 text-muted-31`}>
                        <Mobile className={`${ICON_STYLES} shrink-0`}/>
                        <a target={"_blank"} href={`tel:${CEO_PHONE}`}>
                            موبایل : {convertEnToPe(CEO_PHONE)}
                        </a>
                    </div>
                </div>
            </div>

            {/* 🚚 Animated truck */}
            <motion.div
                style={{x: truckX,}}
                className=" max-[470px]:w-[150px]  max-[1000px]:w-[200px] w-[400px] "
            >
                <img className="w-full h-full object-contain" src={delivery} alt={BRAND_TITLE_FA}/>
            </motion.div>

        </footer>
    );
}

export default Footer;
