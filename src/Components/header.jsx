import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";


const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">

                <img
                    src="images/home.png"
                    alt="oops"
                    className="hidden sm:block w-12 h-12"
                    style={{ alignSelf: 'center' }}
                />
                <div className="flex flex-col text-left justify-between gap-y-1.5">
                    <p className="text-white text-2xl font-bold ">Welcome, Name!</p>
                    <p className="text-white text-sm">Your <span style={{ color: "#6979F8" }}>Data-Driven Path</span> to Unforgettable Show</p>
                </div>

            </div>
            <div>
                {windowWidth > 1000 && (
                    <img
                        src="images/Logo.png"
                        alt="oops"
                        className="w-30 h-8"
                    />
                )}
            </div>
            <div className="flex flex-row gap-1">
                <div
                    className=" sticky top-0 "
                    style={{

                        zIndex: 10,
                    }}
                >
                    <div className="flex items-center">
                        <SearchIcon
                            // className="cursor-pointer w-4 h-4 -mr-8"
                            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4"
                            style={{ color: '#6979F8' }}
                        // onClick={handleSearch}
                        />
                        <input
                            id="name"
                            name="name"
                            // placeholder="Search"
                            placeholderColor="#6B7280"
                            // onChange={(e) => setNurseName(e.target.value)}
                            style={{ width: "100%", height: 44, borderColor: "black", backgroundColor: 'black' }}
                            className=" pl-10 pr-3 block w-full rounded-xl  border-1 py-1.5 shadow-sm ring-2 ring-inset ring-blue-600 focus:none text-sm leading-6 text-white"
                        />

                    </div>

                </div>
                <div className="flex rounded-xl justify-center" style={{ backgroundColor: '#6979F833', height: 44, width: 44 }}>
                    <img
                        src="images/profile.png"
                        alt="oops"
                        className="w-6 h-6"
                        style={{ alignSelf: 'center' }}
                    />
                </div>
            </div>



        </div>
    )
}

export default Header