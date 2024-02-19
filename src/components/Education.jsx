function Education({education,setEducation}){
    function handleName(newName){
        setEducation({...education,name:newName});
    }
    function handleField(newField){
        setEducation({...education,field:newField});
    }
    function handleStart(newDate){
        setEducation({...education,start:newDate});
    }
    function handleEnd(newDate){
        setEducation({...education,end:newDate});
    }
    return(
    <>
        {education.edit?(
        <div>
            <h2>Education</h2>
            <p>School name:</p>
            <p><input type="text" name="schoolname" id="schoolname" value={education.name} onChange={(e)=>{handleName(e.target.value)}} /></p>
            <p>Field of study:</p>
            <p><input type="text" name="schoolfield" id="schoolfield" value={education.field} onChange={(e)=>{handleField(e.target.value)}} /></p>
            <p>Start of education:</p>
            <p><input type="date" name="schoolstart" id="schoolstart" value={education.start} onChange={(e)=>{handleStart(e.target.value)}} /></p>
            <p>End of education:</p>
            <p><input type="date" name="schoolend" id="schoolend" value={education.end} onChange={(e)=>{handleEnd(e.target.value)}} /></p>
            <button onClick={()=>setEducation({...education,edit:false})}>Submit</button>
        </div>
        ):(
            <div>
            <h2>Education</h2>
            <p>School name:</p>
            <p>{education.name}</p>
            <p>Field of study:</p>
            <p>{education.field}</p>
            <p>Start of education:</p>
            <p>{education.start}</p>
            <p>End of education:</p>
            <p>{education.end}</p>
            <button onClick={()=>setEducation({...education,edit:true})}>Edit</button>
        </div>
        )
        }
    </>
    )
}
export default Education;