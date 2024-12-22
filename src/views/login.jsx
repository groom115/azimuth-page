import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Login = () => {
    return (
        <div>
            <h1 className="text-white">ooppps</h1>
            <div>
                <span>Welcome to Azimuth</span>
                <span>Your data driven path to unforgetable show</span>
                <button>Sign in</button>
                <div className="flex items-center">
                    <input
                        id="email"
                        name="email"
                        placeholder="I am looking for....."
                        placeholderColor="#6B7280"
                        onChange={(e) => setNurseName(e.target.value)}
                        style={{ width: "100%", height: 35, borderColor: "black" }}
                        className=" pl-3 pr-10 block w-full rounded-full  border-0 py-1.5 shadow-sm ring-1 ring-inset ring-red-400 focus:ring-2 text-sm leading-6"
                    />
                    <SearchIcon
                        className="cursor-pointer w-4 h-4 -ml-8"
                        onClick={handleSearch}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login;