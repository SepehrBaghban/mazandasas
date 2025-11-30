import {ButtonBase} from "@mui/material";
import Phone from "@media/icons/call_calling.svg?react";
import {BRAND_TITLE_FA, CEO_PHONE, HERO_DESCRIPTION} from "@constants/info.js";
import {useWindowSize} from "react-use";
import {ICON_STYLES} from "@constants/styles.js";

function HeroDescription() {

    const {width} = useWindowSize()

    return (
        <div
            id={"HeroDescription"}
            className={`rounded-lg glass-blur-bg flex flex-col items-center justify-center max-[650px]:p-6 max-[1200px]:p-[32px] p-[40px]
                        max-[500px]:max-w-full max-[600px]:max-w-[270px] max-[650px]:max-w-[300px] max-[800px]:max-w-[350px] max-[1000px]"max-w-[400px] max-w-[450px]`}
        >
            <h1 className={`text-prim  max-[400px]:text-[24px] max-[500px]:text-[26px] max-[650px]:text-[32px]  max-[1000px]:text-[38px] max-[1200px]:text-[48px] max-[1500px]:text-[64px] text-[80px] font-700`}>
                {BRAND_TITLE_FA}
            </h1>
            <p className={`max-[600px]:text-[14px] max-[1000px]:text-[16px] text-[18px] font-400 max-[650px]:mt-[24px] max-[1200px]:mt-[32px] mt-[40px]`}>
                {HERO_DESCRIPTION}
            </p>
            <ButtonBase
                sx={{
                    fontFamily: "iranSans-500",
                    fontSize: width < 600 ? "14px" : "16px",
                    height: width < 600 ? "40px" : "48px",
                    backgroundColor: "#DE972F",
                    borderRadius: "11px",
                    padding: "0 16px",
                    width: "100%",
                    marginTop: width < 400 ? "8px" : width < 500 ? "16px" : "24px"
                }}
            >
                <a className={`w-full h-full flex justify-center items-center gap-2`} href={`tel:${CEO_PHONE}`}>
                    تماس با ما
                    <Phone className={`${ICON_STYLES}`}/>
                </a>
            </ButtonBase>

        </div>
    );
}

export default HeroDescription;