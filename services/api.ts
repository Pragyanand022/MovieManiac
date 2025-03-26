import axios from 'axios'

export  const API_CONFIG = {
    BASE_URL : "https://api.themoviedb.org/3",
    Access_token: process.env.Read_Access_Token,
    Headers:{
        accept:'application/json',
        Authorization: `Bearer ${process.env.Read_Access_Token}`
    }
}

export const fetchMovies = async ({query}:{query:string}) =>{
    const endpoints = query 
    ? `${API_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :`${API_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    try{
        const result = await axios.get('endpoints',{headers:API_CONFIG.Headers});
        return result.data;
    }catch(err:any){
        throw new Error('Failed to fetch movies', err.message)
    }
}