import { useState } from "react";

function General({general,setGeneral}){
    return(
    <div>
        <h1>Personal informaton</h1>
        <p>Your name:</p>
        general.editable ?{general.name}
        <p>Email:</p>
        {general.email}
        <p>Phone number:</p>
        {general.phone}
    </div>
    )
}
export default General