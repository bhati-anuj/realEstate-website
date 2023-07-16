import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import ListCard from "../../Components/ListCard/ListCard";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";



const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [propertyData, setPropertyData] = useState([]);
  const [showMore, setShowMore] = useState(false)

  const navigate = useNavigate();
  const loginAuth = useSelector((state) => {
    return state.loginUsers[0].status;
  })
  console.log(loginAuth);
  
  if(loginAuth === false){
    navigate("/")
  }

  useEffect(() => {
    axios
      .get("./data.json")
      .then((res) => setPropertyData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredArray = propertyData.filter(
    (text) =>
      text.homeType.toLowerCase().includes(searchText.toLowerCase()) ||
      text.address.city.toLowerCase().includes(searchText.toLowerCase()) ||
      text.address.state.toLowerCase().includes(searchText.toLowerCase()) ||
      text.homeStatus.toLowerCase().includes(searchText.toLowerCase())
  );

  const slicedArray = showMore ? filteredArray : filteredArray.slice(0,12);

  return (
    <div>
      <Header data={propertyData} />
      <div className="hero-div">
        <div className="search">
          <input
            placeholder="Enter an address, city, or house type"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(12rem,20rem))",
          gap: "15px",
          alignItems: "center",
          marginLeft: "6%",
          marginTop: "20px",
        }}
      >
        {slicedArray.map((e) => {
          return (
            <div key="">
              <ListCard displayRemove={"none"} data={e} value={e.zpid} />
             
            </div>
          );
        })}
      </div>
         <Button onClick={()=>setShowMore(!showMore)} class="btn btn-success my-2" style={{marginLeft:"40%",width:"20%", borderRadius:"1.5rem",backgroundColor:"#1e8bf7"}}>Show More...</Button>
    </div>
  );
};

export default Home;
