import React from 'react'

function CreatePost() {
    return (
        <div className='card input-field' style={{margin: "30px auto", maxWidth: "500px", padding: "20px", textAlign: "center"}}>
            <input type="text" placeholder='title' />
            <input type="text" placeholder='body' />
            <div className="file-field input-field">
                <div className="btn upload">
                    <span className=''>SELECT IMAGE</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light upload" type="submit" name="action">Upload</button>
        </div>
    )
}

export default CreatePost