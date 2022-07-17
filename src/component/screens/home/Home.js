import React from 'react'

function Home() {
  return (
    <div className='home'>
      <div className='card home-card'>
        <h5>Rifa K Malik</h5>
        <div className='card-image'>
          <img style={{height: '300px', width: 'auto'}} src='https://dvyvvujm9h0uq.cloudfront.net/com/articles/1528191289-sunset-3434911-1280.jpg' alt='post' />
        </div>
        <div className='card-content'>
        <i class="material-icons" style={{color: 'red'}}>favorite</i>
          <h6>Image Title</h6>
          <p>This is Amazing Post</p>
          <input type="text" placeholder='add a comment' />
        </div>
      </div>
            <div className='card home-card'>
        <h5>Rifa K Malik</h5>
        <div className='card-image'>
          <img style={{height: '300px', width: 'auto'}} src='https://image.shutterstock.com/z/stock-photo-hijab-girl-cute-covering-her-face-1764467282.jpg' alt='post' />
        </div>
        <div className='card-content'>
        <i class="material-icons" style={{color: 'red'}}>favorite</i>
          <h6>Image Title</h6>
          <p>This is Amazing Post</p>
          <input type="text" placeholder='add a comment' />
        </div>
      </div>
      <div className='card home-card'>
        <h5>Rifa K Malik</h5>
        <div className='card-image'>
          <img style={{height: '300px', width: 'auto'}} src='https://wallpapercave.com/wp/wp5860875.jpg' alt='post' />
        </div>
        <div className='card-content'>
        <i class="material-icons" style={{color: 'red'}}>favorite</i>
          <h6>Image Title</h6>
          <p>This is Amazing Post</p>
          <input type="text" placeholder='add a comment' />
        </div>
      </div>

    </div>
  )
}

export default Home