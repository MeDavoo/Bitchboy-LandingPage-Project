import React from "react";
import "./css/AboutPage.css";
import TextSection from "../components/jsx/TextSection.jsx";

export default function AboutPage() {
    return (
        <div className="background-container">
            <div className="background-label-wrapper">
                <div className="background-label-main-layer">
                    BLOCKSYSTEM
                </div>
                <div className="background-label-layer-1">
                    BLOCKSYSTEM
                </div>
                <div className="background-label-layer-2">
                    BLOCKSYSTEM
                </div>
                <div className="background-label-layer-3">
                    BLOCKSYSTEM
                </div>
                <div className="background-label-layer-4">
                    BLOCKSYSTEM
                </div>
                <div className="background-label-layer-5">
                    BLOCKSYSTEM
                </div>
                <div className="background-label-layer-6">
                    BLOCKSYSTEM
                </div>
                <div className="background-label-layer-7">
                    BLOCKSYSTEM
                </div>
                <div className="background-label-layer-8">
                    BLOCKSYSTEM
                </div>
            </div>
            <div className="person-right-image-wrapper">
                <a
                    href="https://blocksystem.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="person-image"
                        src={"/images/about-page/euri.jpeg"}
                        alt={""}
                    />
                </a>
            </div>
            <div className="person-right-text-section">
                <TextSection
                    title={"EURI"}
                    text={"Interaction Tech @ UTwente & Creator @ BLOCK SYSTEM \n Lorem Ipsum"}
                ></TextSection>
            </div>
            <div className="person-left-image-wrapper">
                <a
                    href="https://christos.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="person-image"
                        src={"/images/about-page/christos2.png"}
                        alt={""}
                    />
                </a>
            </div>
            <div className="person-left-text-section">
                <TextSection
                    title={"CHRISTOS"}
                    text={"Interaction Tech @ UTwente & Creator @ BLOCK SYSTEM \n Lorem Ipsum"}
                ></TextSection>
            </div>
            <div className="team-label">
                BITCHBOY TEAM
            </div>
            <div className="svg-bottom-wrapper">
                <img
                    className="svg-bottom"
                    src={"/images/about-page/bottom.svg"}
                    alt={""}
                />
            </div>
        </div>
    );
}