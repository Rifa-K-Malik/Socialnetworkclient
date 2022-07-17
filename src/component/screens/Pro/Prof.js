import React from 'react'

function Prof() {
  return (
    <div style={
      {
        maxWidth: "550px",
        margin: "0px auto"
      }
    }>
      <div className='profileconntent'>
        <div>
          <img style={ { width: "140px", height: "140px", borderRadius: "80px", margin: "0px 20px"}}
          src="http://dpforgirls.com/wp-content/uploads/2021/07/Muslim-Girls-Cartoon-DP-13-1024x1024.jpg" alt='Profile Pic' />
        </div>
        <div>
          <h4>Rifa K Malik</h4>
          <div style={{display: "flex", justifyContent: "space-between", width: "120%"}}>
            <h5>10 Posts</h5>
            <h5>100 Followers</h5>
            <h5>100 Following</h5>
          </div>
        </div>
      </div>


      <div className='gallery'>
        {/* <img className='item' src='https://pbs.twimg.com/media/ElkJbo3XEAEPhZN.jpg' alt='gallerypic'/> */}
        <img className='item' src='https://i.pinimg.com/736x/0e/b2/f3/0eb2f3eafcbe9d88c002d5ec8453b584.jpg' alt='gallerypic'/>
        {/* <img className='item' src='https://pbs.twimg.com/media/FLj7TJTXEAcqL4y.jpg' alt='gallerypic'/> */}
        <img className='item' src='https://i.pinimg.com/originals/30/8e/6c/308e6c49c3ba30a750349da1ed4758aa.jpg' alt='gallerypic'/>
        <img className='item' src='https://wallpapercave.com/wp/wp5860875.jpg' alt='gallerypic'/>
        <img className='item' src='https://w0.peakpx.com/wallpaper/149/317/HD-wallpaper-islamic-hijab-girl-girl-hijab-pic-islamic-girl-islamic-pic-niqab-girl-thumbnail.jpg' alt='gallerypic'/>
        <img className='item' src='https://i.pinimg.com/originals/2b/7a/46/2b7a46b9b1d89203a6ed6b3b56505197.jpg' alt='gallerypic'/>
        <img className='item' src='https://images.unsplash.com/photo-1523203658085-27859efeaa41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlqYWJ8ZW58MHx8MHx8&w=1000&q=80' alt='gallerypic'/>
        <img className='item' src='https://image.shutterstock.com/z/stock-photo-hijab-girl-cute-covering-her-face-1764467282.jpg' alt='gallerypic'/>
        <img className='item' src='https://i.pinimg.com/236x/b0/69/e9/b069e9e682b32bda084a97f6caab42e8.jpg' alt='gallerypic'/>
      </div>
    </div>
  )
}

export default Prof