import React from "react";
import "./css/AboutPage.css";
import TextSection from "../components/jsx/TextSection.jsx";

export default function AboutPage() {
    return (
        <div className="background-container">
            <div className="person-right-image-wrapper">
                <img
                    className="person-image"
                    src={"/images/about-page/person.jpg"}
                    alt={""}
                />
            </div>
            <div className="person-right-text-section">
                <TextSection
                    title={"CHRISTOS 2"}
                    text={"Interaction Tech @ UTwente & Creator @ BLOCK SYSTEM \n Lorem Ipsum"}
                ></TextSection>
            </div>
            <div className="person-left-image-wrapper">
                <img
                    className="person-image"
                    src={"/images/about-page/person.jpg"}
                    alt={""}
                />
            </div>
            <div className="person-left-text-section">
                <TextSection
                    title={"CHRISTOS 1"}
                    text={"Interaction Tech @ UTwente & Creator @ BLOCK SYSTEM \n Lorem Ipsum"}
                ></TextSection>
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