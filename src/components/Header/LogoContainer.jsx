import logo from "@media/icons/favicon.ico";

function LogoContainer() {
    return (
        <div id={"logo-container"} className={`h-[40px] flex items-center gap-2`}>
            <img className={`w-full h-full object-contain`} src={logo} alt="مازند اساس"/>
            <h1 className={`text-[18px] font-400 text-muted-48`}>Mazandasas</h1>
        </div>
    );
}

export default LogoContainer;