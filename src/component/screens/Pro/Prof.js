import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App.js';
function Prof() {
  const [mypics, setmyPics] = useState([]);
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    fetch("/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setmyPics(result.mypost);
      });
  }, []);
  return (
    <div style={
      {
        maxWidth: "550px",
        margin: "0px auto"
      }
    }>
      <div className='profileconntent'>
        <div>
          <img style={{ width: "140px", height: "140px", borderRadius: "80px", margin: "0px 20px" }}
            src="http://dpforgirls.com/wp-content/uploads/2021/07/Muslim-Girls-Cartoon-DP-13-1024x1024.jpg" alt='Profile Pic' />
        </div>
        <div>
          <h4>{state.name}</h4>
          <div style={{ display: "flex", justifyContent: "space-between", width: "120%" }}>
            <h5>10 Posts</h5>
            <h5>100 Followers</h5>
            <h5>100 Following</h5>
          </div>
        </div>
      </div>


      <div className='gallery'>
        {mypics.map((item) => {
          return <img className="item" src={item.photo} alt={item.title} />;
        })}
      </div>
    </div>
  )
}

export default Prof