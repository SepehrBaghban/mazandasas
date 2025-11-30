import {ButtonBase} from "@mui/material";
import {convertEnToPe} from "persian-number/src/persianNumber.js";
import Phone from "@media/icons/call_calling.svg?react"
import {CEO_PHONE} from "@constants/info.js";
import {useWindowSize} from "react-use";
import {ICON_STYLES} from "@constants/styles.js";

function CallButton() {

    const {width} = useWindowSize()

    return (
        <ButtonBase
            sx={{
                fontFamily: "iranSans-500",
                fontSize: "16px",
                width: width < 700 ? "40px" : "auto",
                height: width < 700 ? "40px" : "48px",
                backgroundColor: "#DE972F",
                borderRadius: "11px",
                padding: "0 16px",
                marginRight: "auto"
            }}
        >
            <a className={`w-full h-full flex items-center justify-center gap-2`} href={`tel:${CEO_PHONE}`}>
                {width >= 800 && convertEnToPe(CEO_PHONE)}
                <Phone className={`${ICON_STYLES}`}/>
            </a>
        </ButtonBase>
    );
}

export default CallButton;