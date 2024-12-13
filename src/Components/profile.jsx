import React from "react";
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const Profile = ({ windowWidth }) => {


    const GenderCard = ({ gender, value }) => {

        const strokeColor = gender === "Women" ? "#EDBB3C" : "#6979F8";

        return (
            <>

                <div className="bg-black rounded-lg p-4 mt-3 flex flex-row justify-between w-full items-center">
                    <div className="flex flex-row gap-3 items-center">
                        <CircularProgress size="lg" determinate value={value} thickness={5} sx={{
                            background: 'transparent', '& .css-1hs7rf2-JoyCircularProgress-progress': {
                                stroke: strokeColor,
                            },
                        }} >
                            <p className="text-white">{value}%</p>
                        </CircularProgress>
                        <div className="text-left">
                            <p className="text-white text-xl font-medium" >{gender}</p>
                            <p className="text-white text-xs mt-1">show date</p>
                            <p style={{ color: `${strokeColor}` }} className="text-xs">2018-2019</p>
                        </div>
                    </div>
                    <ArrowForwardIosOutlinedIcon fontSize="8" className="text-white" />
                </div >
            </>

        )
    }
    const AgeCard = ({ name }) => {
        const ageGroups = [
            { ageRange: "18-24", value: 40, percentage: "15%" },
            { ageRange: "25-34", value: 60, percentage: "25%" },
            { ageRange: "35-44", value: 30, percentage: "10%" },
            { ageRange: "45-54", value: 50, percentage: "20%" },
        ];
        return (
            <div className="w-full ">
                <div className="flex flex-row justify-between items-center">
                    <p className="text-white font-medium text-left">{name} %</p>
                    <ArrowForwardIosOutlinedIcon fontSize="8" className="text-white" />
                </div>
                <div className="bg-black p-4 mt-3 rounded-lg">
                    <div className="space-y-4">
                        {ageGroups.map((group, index) => (
                            <div
                                key={index}
                                className="flex flex-row justify-between items-center"
                            >
                                <p className="text-white text-xs">{group.ageRange}</p>
                                <Box sx={{ width: 130 }}>
                                    <LinearProgress variant="determinate" value={group.value} />
                                </Box>
                                <p className="text-white text-xs italic">{group.percentage}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        )
    }
    const profileDetail = () => {
        console.log(windowWidth / 2 - 20)
        const profileData = [
            { label: "Median Age", value: "115" },
            { label: "Under 18", value: "30%" },
            { label: "Male", value: "45%" },
            { label: "Female", value: "25%" },
            { label: "Region", value: "North" },
            { label: "Median Age", value: "115" },
            { label: "Under 18", value: "30%" },
            { label: "Male", value: "45%" },
            { label: "Female", value: "25%" },
            { label: "Region", value: "North" },
            { label: "Median Age", value: "115" },
            { label: "Under 18", value: "30%" },
            { label: "Male", value: "45%" },
            { label: "Female", value: "25%" },
            { label: "Region", value: "North" },
        ];
        return (
            <>
                <style>
                    {`
        .scroll-container {
           margin-left: 15px;
            margin-right: 15px;
            overflow-x: scroll;
            height:20
        }

        .scroll-container::-webkit-scrollbar {
            width: 4px;
            height:6px;
            padding:12;
            
        }

        .scroll-container::-webkit-scrollbar-track {
            background: #2F2F2F;
             border-radius: 2px;
        }

        .scroll-container::-webkit-scrollbar-thumb {
            background: #6979F8;
             border-radius: 2px;
        }

       

        .scroll-container::-webkit-scrollbar-button {
            display: none;
        }
      `}
                </style>
                <div className="flex  flex-col sm:flex-row gap-4 justify-between">
                    <div className="text-left">
                        <p className="text-white sm:text-2xl text-xl font-semibold">Austin</p>
                        <p className="text-white sm:text-xl text-lg">Demographics</p>
                    </div>
                    <div className="px-2 py-4 rounded-lg bg-black">
                        <div className="pb-4   overflow-x-hidden scroll-container sm:w-[600px]  " style={{ maxWidth: 600, width: `calc(${windowWidth}px - 220px)`, minWidth: 200 }}>
                            <div className=" flex space-x-4">
                                {profileData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="px-1 text-left"
                                    >
                                        <p className="text-white text-xs font-semibold" style={{ whiteSpace: 'nowrap' }}>{item.label}</p>
                                        <p className="text-white text-xs mt-1">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const Education = () => {
        const eduGroups = [
            { label: "High school degree or less", value: 40, percentage: "15%" },
            { label: "High school ", value: 60, percentage: "25%" },
            { label: "Bachelor’s or Advanced degree", value: 30, percentage: "10%" },

        ];
        return (
            <div className="w-full">
                <div>
                    <p className="text-white font-medium text-left">Education</p>
                </div>


                <div className="bg-black p-4 mt-3 rounded-lg">
                    <div className="space-y-4">
                        {eduGroups.map((group, index) => (
                            <div
                                key={index}
                                className="flex flex-row justify-between items-center"
                            >
                                <p className="text-white text-xs text-left" style={{ width: 170 }}>{group.label}</p>
                                <Box sx={{ width: 130 }}>
                                    <LinearProgress variant="determinate" value={group.value} />
                                </Box>
                                <p className="text-white text-xs italic">{group.percentage}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        )
    }

    const Location = () => {
        const locationGroups = [
            { label: "Urban", value: 40 },
            { label: "rural", value: 60 },
            { label: "Suburban", value: 30 },

        ];
        return (
            <div className="w-full">
                <div>
                    <p className="text-white font-medium text-left">Location</p>
                </div>

                <div className="mt-2">

                    <div className=" flex flex-wrap justify-between">
                        {locationGroups.map((group, index) => (
                            <div key={index} className="flex flex-row gap-1 items-center bg-black p-2  rounded-lg my-1" style={{ width: 170 }}>
                                <CircularProgress size="md" determinate value={group.value} thickness={4} sx={{ background: 'transparent', color: "red" }}  >
                                    <p className="text-white">{group.value}%</p>
                                </CircularProgress>
                                <div className="text-left">
                                    <p className="text-white text-xs font-medium">{group.label}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        )
    }
    return (
        <>
            <style>
                {`
           .css-zitgxn-JoyCircularProgress-track{
            stroke: #2F2F2F;
           }
           .css-1txyin7-MuiLinearProgress-root{
              background-color:#2F2F2F
           }
           .css-l16vtb-MuiLinearProgress-bar1{
               background-color: #6979F8
           }
           .css-1hs7rf2-JoyCircularProgress-progress{
              stroke: #6979F8
           }
      `}
            </style>

            <div style={{ backgroundColor: '#212121', width: '100%' }} className="p-8 rounded-2xl ">
                <div className="mt-6">
                    {profileDetail()}
                </div>
                <div className="mt-6">
                    <p className="text-white font-medium text-left">Gender</p>
                    <div className="flex flex-col sm:flex-row gap-3">

                        <GenderCard gender="Men" value="28" />
                        <GenderCard gender="Women" value="35" />
                    </div>

                </div>
                <div className="flex flex-col sm:flex-row mt-6 gap-4">
                    <AgeCard name="Age" />
                    <AgeCard name="Race" />

                </div>
                <div className="flex flex-col sm:flex-row mt-6 gap-4 items-center">
                    {Education()}
                    {Location()}
                </div>
            </div>
        </>
    )
}

export default Profile