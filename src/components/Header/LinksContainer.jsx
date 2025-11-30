import {Link} from "react-router";
import {ButtonBase} from "@mui/material";


const links = [
    {
        id: '1',
        title: "خدمات",
        hash: "#services",
    },
    {
        id: '2',
        title: "مقالات",
        hash: "#articles",
    },
    {
        id: '3',
        title: "ارتباط با ما",
        hash: "#contact",
    }
]

function LinksContainer() {
    return (
        <div id={"links-container"} className={`flex items-center gap-2 `}>
            {
                links.map((link, index) => {
                    return (
                        <ButtonBase sx={{borderRadius: "8px"}}>
                            <Link
                                className={`px-6 py-2 text-[16px] text-muted-48 font-400`}
                                key={index}
                                to={link.hash}
                            >
                                {link?.title}
                            </Link>
                        </ButtonBase>
                    )
                })
            }
        </div>
    );
}

export default LinksContainer;