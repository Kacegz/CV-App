function Experience({experience,setExperience}){
    function handleName(newName){
        setExperience({...experience,name:newName});
    }
    function handlePosition(newPosition){
        setExperience({...experience,position:newPosition});
    }
    function handleResponsibilities(newResponsibilities){
        setExperience({...experience,responsibilities:newResponsibilities});
    }
    function handleFrom(newDate){
        setExperience({...experience,from:newDate});
    }
    function handleTo(newDate){
        setExperience({...experience,until:newDate});
    }
    return (
        <>
        {experience.edit?(
            <div>
                    <h2>Work Experience</h2>
                    <p>Name of the company:</p>
                    <p><input type="text" name="name" id="name" value={experience.name} onChange={(e)=>handleName(e.target.value)}/></p>
                    <p>Position in the company:</p>
                    <p><input type="text" name="position" id="position" value={experience.position} onChange={(e)=>handlePosition(e.target.value)} /></p>
                    <p>Responsibilities:</p>
                    <textarea rows={5} cols={5} name="responsibilities" id="responsibilities" value={experience.responsibilities} onChange={(e)=>handleResponsibilities(e.target.value)} />
                    <p>From:</p>
                    <p><input type="date" name="experiencefrom" id="experiencefrom" value={experience.from} onChange={(e)=>handleFrom(e.target.value)} /></p>
                    <p>Until:</p>
                    <p><input type="date" name="experienceuntil" id="experienceuntil" value={experience.until} onChange={(e)=>handleTo(e.target.value)} /></p>
                    <button onClick={()=>setExperience({...experience,edit:false})}>Submit</button>
            </div>
        ):(
            <div>
            <h2>Work Experience</h2>
            <p>Name of the company:</p>
            {experience.name}
            <p>Position in the company:</p>
            {experience.position}
            <p>Responsibilities:</p>
            <pre>{experience.responsibilities}</pre>
            <p>From:</p>
            {experience.from}
            <p>Until:</p>
            {experience.until}
            <button onClick={()=>setExperience({...experience,edit:true})}>Edit</button>
        </div>
        )}
        </>
    )
}
export default Experience;