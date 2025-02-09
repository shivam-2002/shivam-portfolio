import React from 'react';
import StyledCertification from "./styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {certificateAssets} from "../../constants/assets";

const Certification = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <StyledCertification>
            <div className="sub-heading">CERTIFICATES I HAVE EARNED...</div>
            <div className="heading-1">CERTIFICATION</div>
            <div className="sub-heading">Showcasing my expertise through industry-recognized certifications and specialized training.</div>


            <div className="slider">
                <Slider {...settings}>

                    <img src={certificateAssets.nptel} className="img" alt=""/>

                    <img src={certificateAssets.courseraOS} className="img" alt=""/>

                    <img src={certificateAssets.courseraML1} className="img" alt=""/>

                    <img src={certificateAssets.courseraML1} className="img" alt=""/>

                    <img src={certificateAssets.courseraML2} className="img" alt=""/>

                    <img src={certificateAssets.courseraML3} className="img" alt=""/>

                    <img src={certificateAssets.webDev} className="img" alt=""/>

                    <img src={certificateAssets.python1} className="img" alt=""/>

                    <img src={certificateAssets.python2} className="img" alt=""/>

                    <img src={certificateAssets.algorithm1} className="img" alt=""/>

                    <img src={certificateAssets.algorithm2} className="img" alt=""/>

                    <img src={certificateAssets.covid} className="img" alt=""/>

                    <img src={certificateAssets.ds} className="img" alt=""/>

                    <img src={certificateAssets.rpa} className="img" alt=""/>

                    <img src={certificateAssets.ml} className="img" alt=""/>

                    <img src={certificateAssets.js} className="img" alt=""/>

                    <img src={certificateAssets.iot} className="img" alt=""/>

                    <img src={certificateAssets.math} className="img" alt=""/>

                    <img src={certificateAssets.kubernets} className="img" alt=""/>

                </Slider>
            </div>

        </StyledCertification>
    )
}

export default Certification;
