import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './AnimeItem.css'

export default function AnimeItem() {
    const {id}=useParams()
    const [anime,setAnime]=useState({})
    const [characters,setCharacters]=useState([])
    const [showMore,setShowMore]=useState(false)

    const {title,synopsis,trailer,duration,aired,season,images,rank,score,scored_by,popularity,status,rating,source}=anime

    const getAnime = async(anime)=>{
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
    }

    const getCharacters = async(anime)=>{
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
        console.log(data.data)
    }

    useEffect(()=>{
        getAnime(id)
        getCharacters(id)
    },[])
  return (
    <div className='base-style'>
        <h1>{title}</h1>
        <div className="details">
            <div className="detail">
                <div className="image">
                    <img src ={images?.jpg.large_image_url} alt="" />
                </div>
                <div className="anime-details">
                    <p className='p'><span>Aired:</span><span>{aired?.string}</span></p>
                    <p className='p'><span>Rating:</span><span>{rating}</span></p>
                    <p className='p'><span>Rank:</span><span>{rank}</span></p>
                    <p className='p'><span>Score:</span><span>{score}</span></p>
                    <p className='p'><span>Scored by:</span><span>{scored_by}</span></p>
                    <p className='p'><span>Popularity:</span><span>{popularity}</span></p>
                    <p className='p'><span>Status:</span><span>{status}</span></p>
                    <p className='p'><span>Source:</span><span>{source}</span></p>
                    <p className='p'><span>Season:</span><span>{season}</span></p>
                    <p className='p'><span>Duration:</span><span>{duration}</span></p>
                </div>
            </div>
            <p className="description">
                {showMore ? synopsis:synopsis?.substring(0,450)+ '...'}
                <button className='button' onClick={()=>{
                    setShowMore(!showMore)
                }}>{showMore? 'Show less': 'Read more'}</button>
            </p>
        </div>
        <h3 className="title">Trailer</h3>
        <div className="trailer-container">
            {trailer?.embed_url &&
            <iframe className='iframe'
            src={trailer?.embed_url}
            title={title}
            width="800"
            height="450"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyrocsope;picture-in-picture"
            allowFullScreen>     
            </iframe>
            } 
        </div>
        <h3 className="title">Characters</h3>
        <div className="characters">
            {characters?.map((character,index)=>{
                const {role} = character
                const {images,name,mal_id} = character.character
                return <Link to={`/character/${mal_id}`} key={index}>
                    <div className="character">
                        <img src={images?.jpg.image_url} alt=""/>
                        <h4 className='h4'>{name}</h4>
                        <p className='p1'>{role}</p>
                    </div>
                </Link>
            })} 
        </div>
    </div>
  )
}
