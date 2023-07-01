import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../Context/GlobalContext'
import './Homepage.css'
import Popular from './Popular'
import Upcoming from './Upcoming'
import Airing from './Airing'
function Homepage() {
    const {handleSubmit,search,searchAnime,handleChange,getUpcomingAnime,getAiringAnime,getPopularAnime}= useGlobalContext()

    const [rendered,setRendered]=React.useState('popular')
    

    const switchComponent=()=>{
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered}/>
            case 'upcoming':
                return <Upcoming rendered={rendered}/>
            case 'airing':
                return <Airing rendered={rendered}/>
            default:
                return <Popular rendered={rendered}/>
        }
    }

  return (
    <div className='home'>
        <header className='header'>
            <div className="logo">
                <h1>
                {rendered=== 'popular'? 'Popular Anime':
                rendered=== 'airing'? 'Airing Anime':'Upcoming Anime'}
                </h1>
            </div>
            <div className="search-container">
                <div className="filter-btn-popular-filter">
                <button className='butt' onClick={()=>{
                    setRendered('popular')
                }}>Popular</button>
                </div>
                <form action="" className='form'>
                    <div className="input-control">
                        <input type="text" placeholder='Search Anime' value={search} onChange={handleChange} className=""/>
                        <button className='butt' type='submit' onClick={handleSubmit} >Search</button>
                    </div>
                </form>
                <div className="filter-btn-airing-filter">
                    <button className='butt' onClick={()=>{
                        setRendered('airing')
                        getAiringAnime()
                    }}>Airing</button>
                </div>
                <div className="filter-btn-upcoming-filter">
                    <button className='butt' onClick={()=>{
                        setRendered('upcoming')
                        getUpcomingAnime()
                    }}>Upcoming</button>
                </div>
            </div>
        </header>
        {switchComponent()}
    </div>
  )
}

export default Homepage