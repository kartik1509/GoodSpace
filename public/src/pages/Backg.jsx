import React from 'react'
import BackImage from './BackImage.jpeg'

export default function Backg() {
    const myStyle = {
        backgroundImage:
            `url(${BackImage})`,
        height: "100vh",
        marginTop: "-0px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

  return (
    <>
             <div style={myStyle}> </div>
    </>
  );
}
