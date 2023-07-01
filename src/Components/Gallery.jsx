import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context/GlobalContext';
import './Gallery.css'

export default function Gallery() {
  const {getAnimePictures,pictures}=useGlobalContext()
  const {id}=useParams();

  const [index,setIndex]=React.useState(0);

  const handleImageClick=(i)=>{
    setIndex(i)
  }

  React.useEffect(()=>{
    getAnimePictures(id)
  },[id])
  return (
    <div className='gallery-style'>
      <div>
        <Link className="back"to="/">Back</Link>
      </div>
      <div className="big-image">
        <img className='img' src={pictures[index]?.jpg.image_url} alt=''/>
      </div>
      <div className="small-images">
        {pictures?.map((picture,i)=>{
          return <div className="image-container" onClick={()=>{
            handleImageClick(i)
          }} key={i}>
            <img className="img1" src={picture.jpg.image_url}
            style={{border: i==index? '3px solid #27ae60': '3px solid #e5e7eb',
                    filter: i==index ? "grayscale(0)":'grayscale(60%)',
                    transform:i==index? 'scale(1.1)':'scale(1)',
                    transition: 'all .3s ease-in-out'}} alt=""/>
            
          </div>

        })}
      </div>
    </div>
  )
}
