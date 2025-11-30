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
        <div id={"links-container"} className={`shrink-0 flex items-center max-[1000px]:gap-0 gap-2 `}>
            {
                links.map((link, index) => {
                    return (
                        <ButtonBase sx={{borderRadius: "8px"}}>
                            <Link
                                className={`shrink-0 max-[600px]:p-2 max-[1000px]:px-4 px-6 py-2 max-[650px]:text-[14px] text-[16px] text-muted-48 font-400`}
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