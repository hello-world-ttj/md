import { React, useEffect, useState } from 'react'
import { API_KEY,baseUrl,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
function MainCard() {
    const [trend, setTrend] = useState();
    useEffect(() => {
        axios.get(`${baseUrl}trending/all/day?api_key=${API_KEY}&language=en-US`).then((response) => {
            setTrend(response.data.results[9]);
        })
    }, [])
    
  return (  
    <div style={{ backgroundImage: `url(${trend ? imageUrl + trend.backdrop_path : ""})` }} className="bg-white rounded-xl shadow-md maincard ">
        <div className="md:flex">
        <div className="md:shrink-0">
    </div>
    <div className="p-8">
        <div className="space-y-4 pt-[200px] max-[600px]:pt-[100px]">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex  px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">{trend ? trend.title : ""}</h5>
        </div>
        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <p className="mb-2 text-sm font-bold text-gray-900 dark:text-white w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex  px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">{trend ? trend.overview : ""}</p>
        </div>
    </div>
  </div>
</div>
  )
}

export default MainCard