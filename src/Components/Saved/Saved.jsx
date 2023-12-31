import React, { useEffect } from 'react'
import Header from '../Header/Header'
import { useSelector } from 'react-redux'
import ListCard from '../ListCard/ListCard'
import { useNavigate } from 'react-router'


const Saved = () => {

  const savedUsersData = useSelector((state) => {
    return state.users;
  })

  const navigate = useNavigate();
 
  const loginAuth = useSelector((state) => {
    return state.loginUsers[0].status;
  })
  console.log(loginAuth);

  useEffect(()=>{
    if(loginAuth === false){
      navigate("/");
    }
  },[])
 

  const loginUserID = useSelector((state) => {
    return state.loginUsers[0].userID;
  })

  const displaySaved = savedUsersData.find((item) => item.userID === loginUserID);

 
  
  
     

  return (
    <>
    <Header />
    <h1 className='ms-5'>Saved Properties</h1>
    <div  style={{display:"grid", gridTemplateColumns: "repeat(auto-fit,minmax(12rem,20rem))",gap:"15px",alignItems:"center",marginLeft:"6%",marginTop:"10px"}}>
      {
        displaySaved.savedArray.map((e) => {
          return (
            <ListCard displayLike={"none"} data={e} value={e.zpid}/>
          )
        })
      }
      </div>
      
    </>
  )
}

export default Saved
