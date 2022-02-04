import React from 'react';

import { ShellBar, Avatar, ShellBarItem } from '@ui5/webcomponents-react';

import logo from '../assets/reactLogo.png';
import avatar from '../assets/profilePictureExample.png';

import "@ui5/webcomponents-icons/dist/add.js";
import { useNavigate } from 'react-router-dom';

const AppShellBar = () => {
    const navigate = useNavigate();
    const handleOnClickLogo = (event) => {
        navigate("/home");
    };
    return (
        <ShellBar
            primaryTitle="UI5 Web Components for React Template"
            logo={<img src={logo} />}
            profile={<Avatar><img src={avatar} /></Avatar>}
            onLogoClick={handleOnClickLogo}>
            <ShellBarItem icon="add" text="Add" />
            <ShellBarItem text="Home" title='Home'>Home</ShellBarItem>
        </ShellBar>
    );
};

export default AppShellBar;
