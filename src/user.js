import React, { useEffect, useState } from 'react';
import axios from "axios"
import "./index.css"
import UserDetails from "./filtered"
const User = () =>{ 
 
  const [posts, setPost] = useState([]);
  const [search, setSearch] = useState('');
  

    const getData = async () =>{
    const res = await axios.get("https://api.github.com/users")
    setPost(res.data);
    console.log(res.data)
    }

    useEffect(() => {
          getData();
     },[])

  
  const Sort = () =>{
    return(
        posts.sort((a, b) =>{
        let nameA = a.login.toUpperCase()
        let nameB = b.login.toUpperCase()
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      //  return ( (a.login.toUpperCase()).localCompare( b.login.toUpperCase()))
    
         } ))}
 
     const filteredUsers = posts.filter(post => {
        return post.login.toLowerCase().includes(search.toLowerCase())
        }  )
        console.log(filteredUsers)
    
    
    return (
            <div>
            <div className="heading">Github Users</div>
            <div class="d-flex mt-2 ">
            <input type="text" placeholder="Github User..." name="search" onChange={(e) => setSearch(e.target.value)}></input> 
            
            <button onClick={()=>Sort()}>Sort</button></div>

            <div className="container">
              {filteredUsers.map((post, id)=>(
                  <UserDetails key={id} {...post}/>
                )
              )
              }
              </div>
              
            
           </div> 
       )

}
export default User