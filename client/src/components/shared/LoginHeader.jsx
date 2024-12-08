
import React from "react";
import { LogOut } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import { Link } from "react-router-dom";
import { DarkMode } from "./DarkMode";


export const LoginHeader = () => {
    return (
        <div className="flex justify-between items-center w-full px-20  h-24 shadow-2xl  ">
            <Link to={"/"}>
                <div className="text-3xl font-bold">Logo</div>
            </Link>
            <nav className="flex gap-16 items-center font-semibold">
                <Link to={"/"}>Home</Link>
                <Link to={"/lab"}>Patient Search</Link>
                <Link to={"/about"}>Op Search</Link>
    

            </nav>

            <div className="flex gap-14 items-center ">
                <DarkMode/>
                <Link to={'/user/cart'}>
                        <UserRoundPen />
                </Link>
                <Link to={"/user/profile"}>
                        <LogOut />
                </Link>
            </div>
        </div>
    );
};




