import React from 'react'
import { useSelector } from 'react-redux'
import ListCard from '../../Components/ListCard/ListCard'
import Header from '../../Components/Header/Header'



const SearchPage = () => {

    const searchData = useSelector((state) => {
        return state.filtered;
    })
console.log(searchData);
  return (
    <>
  <Header/>
       
        <h3>Search....</h3>
        <div style={{display:"grid", gridTemplateColumns: "repeat(auto-fit,minmax(12rem,20rem))",gap:"15px",alignItems:"center",marginLeft:"50px",marginTop:"10px"}}>
            {
                searchData[0].map((item) => {
                    return(
                    <ListCard  displayRemove={"none"} data={item}  />
                    )
                })
            }
        </div>
      
    </>
  )
}

export default SearchPage
