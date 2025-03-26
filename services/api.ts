import axios from 'axios'

export  const API_CONFIG = {
    BASE_URL : "https://api.themoviedb.org/3",
    Access_token: process.env.EXPO_PUBLIC_Read_Access_Token,
    Headers:{
        accept:'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_Read_Access_Token}`
    } 
}

export const fetchMovies = async ({query}:{query:string}) =>{
    const endpoints = query 
    ? `${API_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :`${API_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    
    try{
        const response = await axios.get(endpoints,{headers:API_CONFIG.Headers});
        return response.data.results;
    }catch(error:any){
        throw new Error('Failed to fetch movies', error)
    }
}   
                
export default fetchMovies; 