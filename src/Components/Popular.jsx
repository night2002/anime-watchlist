import {useGlobalContext} from "../Context/GlobalContext"
import { Link } from "react-router-dom"
import "./Popular.css"
function Popular({rendered}){

    const {popularAnime,isSearch,searchResults}=useGlobalContext()

    const conditionalRender = () =>{
        if(!isSearch && rendered ==='popular'){
            return popularAnime.map((anime)=>{
                return <Link to={`/anime-watchlist/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt=""/>
                </Link>
            })
        }else{
            return searchResults?.map((anime)=>{
                return <Link to={`/anime-watchlist/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt=''/>
                </Link>
            })
        }
    }
    return(
        <div>
            <div className="popular-anime">
                {conditionalRender()}
            </div>
        </div>
    )
}

export default Popular