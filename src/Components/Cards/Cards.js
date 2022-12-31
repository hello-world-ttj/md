import { React, useEffect, useState } from 'react'
import { API_KEY,baseUrl,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
function Cards(props) {
    const [movie, setMovie] = useState([]);
    var category = props.category ? props.category : '';
    var language = props.language ? props.language : '';
    var genres = props.genres ? props.genres : '';
    useEffect(() => {
        axios.get(`${baseUrl+category}/movie?api_key=${API_KEY}&${language+genres}`).then((response) => {
            setMovie(response.data.results);
            // console.log(response.data.results);
        })
    }, [category,language,genres])
    return (
        <div>
            <h5 className="mt-6 text-center text-3xl font-bold text-gray-900 dark:text-white w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 capitalize">{props.title}</h5>
            <div className="flex flex-nowrap overflow-x-scroll overflow-y-hidden">
                {movie.map((obj) =>
                    <div key={obj.id}>
                            <div className="mb-4 transition ease-in-out delay-130 hover:-translate-y-1 hover:scale-105 duration-300 max-[600px]:w-[250px] max-[600px]:h-[440px] w-[350px] h-[600px] mt-6 mx-1 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg" src={obj ? imageUrl + obj.backdrop_path : ""} alt="movie_image" />
                            <div className="p-5 max-[600px]:p-2">
                                <h5 className="max-[600px]:text-sm mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{obj ? obj.title : ""}</h5>
                                <p className="max-[600px]:text-[12px] mb-3 font-normal text-gray-700 dark:text-gray-400">{obj ? obj.overview : ""}</p>
                            </div>
                        </div>
                    </div>
                )}  
            </div>
        </div>
  )
}

export default Cards