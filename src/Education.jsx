import { useState } from "react";

function Education({education,setEducation}){
    return(
    <div>
        <h2>Education</h2>
        <p>School name: {education.name}</p>
        <p>Field of study: {education.field}</p>
        <p>Date of study: {education.date}</p>
    </div>
    )
}
export default Education;