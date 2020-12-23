import React from "react";
import { Alert } from "react-bootstrap";


function Footer(){
    return(
        <footer className="set" >
            <img style={{backgroundColor:"#333",paddingTop:"10px"}}
            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png"
            alt="primefoot"
            />
            <Alert variant="primary"style={{backgroundColor:"#333",border:"none"}}>
                Terms and Privacy Notice Send us feedback <Alert variant="light" style={{backgroundColor:"#333",border:"none"}}>
                 Help © 1996-2020, Amazon.com, Inc. or its affiliates</Alert></Alert>
        </footer>
    )
}


export default Footer;