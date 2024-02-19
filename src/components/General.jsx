function General({general,setGeneral}){
    function handleName(value){
        setGeneral({...general,name:value})
    }
    function handleEmail(value){
        setGeneral({...general,email:value})
    }
    function handlePhone(value){
        setGeneral({...general,phone:value})
    }
    return(
    <>
        {general.edit?(
            <div>
                    <h2>Personal informaton</h2>
                    <p>Your name:</p>
                    <p><input type="text" name="name" id="name" value={general.name} onChange={(e)=>handleName(e.target.value)}/></p>
                    <p>Email:</p>
                    <p><input type="email" name="email" id="email" value={general.email} onChange={(e)=>handleEmail(e.target.value)} /></p>
                    <p>Phone number:</p>
                    <p><input type="tel" name="phone" id="phone" value={general.phone} onChange={(e)=>handlePhone(e.target.value)} /></p>
                    <button onClick={()=>setGeneral({...general,edit:false})}>Submit</button>
            </div>
        ):(
            <div>
                    <h2>Personal informaton</h2>
                    <p>Your name:</p>
                    <p>{general.name}</p>
                    <p>Email:</p>
                    <p>{general.email}</p>
                    <p>Phone number:</p>
                    <p>{general.phone}</p>
                    <button onClick={()=>setGeneral({...general,edit:true})}>Edit</button>
            </div>
        )}
    </>
    )
}
export default General