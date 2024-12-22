import React, { useEffect, useState } from "react"
import Header from "../Components/header";
import Tabs from "../Components/tabs";
import Profile from "../Components/profile";
import { TabData } from "../data/tab-data";

const Details = () => {
    const [activeTab, setActiveTab] = useState(0);
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
        <div className="App" >
            <div className='mx-10 my-10 mb-10'>
                <Header windowWidth={windowWidth} />
                <Tabs value={TabData} activeTab={activeTab} setActiveTab={setActiveTab} />

                {activeTab === 0 ? (
                    <div className="sm:grid sm:grid-cols-[2fr_3fr] gap-8 w-full mt-4 h-screen">
                        <div className="mb-3 sm:mb-6 " style={{ flex: 1 }}>
                            <img
                                src="images/map.png"
                                alt="oops"
                                className="w-full h-full object-cover rounded-lg sm:min-w-[600px]"
                                style={{ flex: 1 }}
                            />
                        </div>
                        <div className="mb-3 sm:mb-6">
                            <Profile windowWidth={windowWidth} />
                        </div>
                    </div>
                ) : (
                    <div className="mt-10 text-center text-white">
                        <p>No content available for this tab.</p>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Details