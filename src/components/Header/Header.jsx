import {SECTION_X_PADDING} from "@constants/styles.js";
import LogoContainer from "@components/Header/LogoContainer.jsx";
import LinksContainer from "@components/Header/LinksContainer.jsx";
import CallButton from "@components/Header/CallButton.jsx";


function Header() {
    return (
        <header className={`${SECTION_X_PADDING} overflow-hidden fixed top-6 flex items-center  w-full `}>
            <nav className={` w-full flex items-center gap-[40px] bg-white rounded-2xl h-[64px] p-2`}>
                <LogoContainer/>
                <LinksContainer/>
                <CallButton/>
            </nav>
        </header>
    );
}

export default Header;