import {useGlobalContext} from "../Context/GlobalContext"
import { Link } from "react-router-dom"
import "./Popular.css"
function Airing({rendered}){

    const {airingAnime,isSearch,searchResults}=useGlobalContext()

    const conditionalRender = () =>{
        if(!isSearch && rendered ==='airing'){
            return airingAnime.map((anime)=>{
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt=""/>
                </Link>
            })
        }else{
            return searchResults?.map((anime)=>{
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
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

export default Airing