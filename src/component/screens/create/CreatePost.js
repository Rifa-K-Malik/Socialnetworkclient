import React, { useState }  from 'react'

function CreatePost() {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [image,setImage] = useState("");

    const postDetails= () =>{
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "rifinstasite")
        // data.append("cloud_name", "rifinstacloud")

        fetch("https://api.cloudinary.com/v1_1/rifinstacloud/image/upload/", {
            method: "post",
            body:data})
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err);
            })
    }
  
    return (
        <div className='card input-field' style={{margin: "30px auto", maxWidth: "500px", padding: "20px", textAlign: "center"}}>
            <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder='body'  value={body} onChange={(e)=>setBody(e.target.value)} />
            <div className="file-field input-field">
                <div className="btn upload">
                    <span className=''>SELECT IMAGE</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light upload" type="submit" name="action" onClick={()=>postDetails()}>Upload</button>
        </div>
    )
}

export default CreatePost