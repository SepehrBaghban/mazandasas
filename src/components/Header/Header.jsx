import {HEADER_Z_INDEX, SECTION_X_PADDING} from "@constants/styles.js";
import LogoContainer from "@components/Header/LogoContainer.jsx";
import LinksContainer from "@components/Header/LinksContainer.jsx";
import CallButton from "@components/Header/CallButton.jsx";
import {useWindowSize} from "react-use";


function Header() {

    const {width} = useWindowSize()

    return (
        <header
            className={` ${SECTION_X_PADDING} ${HEADER_Z_INDEX} 
                        overflow-hidden max-[500px]:!p-0 max-[500px]:sticky fixed max-[500px]:top-0  top-6 flex items-center  w-full `}
        >
            <nav
                className={` w-full flex items-center gap-[40px] bg-white max-[500px]:rounded-none rounded-2xl max-[700px]:h-[48px] h-[64px] max-[400px]:px-2 max-[450px]:px-4 max-[500px]:px-6 p-2`}>
                <LogoContainer/>
                {width >= 500 && <LinksContainer/>}
                <CallButton/>
            </nav>
        </header>
    );
}

export default Header;