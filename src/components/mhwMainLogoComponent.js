import React from "react";
import LogoMain from '../assets/GameIcons/mhwLogo.png'



export default function MhwMainLogoComponent() {

    return (
        <img
        alt="LogoGame"
        src={LogoMain}
        style={{
            borderRadius: '100px',
            maxWidth: '150px',
            gap: '50px',
            marginLeft: '400px',
        }}
        />
    );
}