import {ButtonBase} from "@mui/material";
import {convertEnToPe} from "persian-number/src/persianNumber.js";
import Phone from "@media/icons/call_calling.svg?react"

function CallButton() {
    return (
        <ButtonBase
            sx={{
                fontFamily: "iranSans-500",
                fontSize: "16px",
                height: "48px",
                backgroundColor: "#DE972F",
                borderRadius: "11px",
                padding: "0 16px",
                marginRight: "auto"
            }}
        >
            <a className={`flex items-center gap-2`} href="tel:09397069039">
                {convertEnToPe('09397069039')}
                <Phone/>
            </a>
        </ButtonBase>
    );
}

export default CallButton;