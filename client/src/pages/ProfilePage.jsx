import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const [liked , setLiked] = useState(false);
    const [likedMovies , setLikeMovies] = useState([])
    const {id} = useParams();
    const UserId = localStorage.getItem("UserId")
    console.log(likedMovies)
    useEffect(()=>{
        axios.get(`http://localhost:5002/api/users/${UserId}/favorites`)
        .then((res) => {
          setLiked(res.data.favorites.includes(id));
          setLikeMovies(res.data.favorites);
        })
        .catch((err) => {
          console.error("Error fetching user favorites:", err);
        });
    },[])
  return (
    <>
      
    </>
  )
}

export default ProfilePage