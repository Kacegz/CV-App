import { useState } from "react";

function Experience({experience,setExperience}){
    return (
        <div>
            <h2>Work Experience</h2>
            <p>Name of the company:</p>
            {experience.name}
            <p>Position in the company:</p>
            {experience.position}
            <p>Responsibilities:</p>
            {experience.responsibilities}
            <p>Date:</p>
            {experience.date}
        </div>
    )
}
export default Experience;