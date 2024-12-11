import React, { useState } from "react"

const Tabs = ({ value, activeTab, setActiveTab }) => {

    return (
        <div className="mt-8  ">

            <div className="flex flex-row gap-4">
                {value.map((tab, index) => (
                    <button
                        key={index}
                        className={`flex px-4 py-2 rounded-2xl cursor-pointer ${activeTab === index
                            ? "border-[1px] border-blue-500 " // Active tab styles
                            : "border-[1px] border-gray-800 " // Inactive tab styles
                            }`}
                        style={{
                            backgroundColor: activeTab === index ? "#2A2A2A" : "#121212",
                        }}
                        onClick={() => setActiveTab(index)} // Set active tab on click
                    >
                        <span
                            className={`text-xs ${activeTab === index ? "text-opacity-100" : "text-opacity-50"
                                } text-white`}
                        >
                            {tab}
                        </span>
                    </button>
                ))}
            </div>


        </div>
    )
}

export default Tabs