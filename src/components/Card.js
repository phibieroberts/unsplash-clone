import React from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Modal from "./Modal";

function Card({ item }) {
  const[modal,setModal]=useState(false)
  const { user, urls, key } = item;

 function handleModal(){
setModal(!modal)
 }

  return (
    <div className="card " key={key}
    onClick={handleModal}>
      <img src={urls.small} alt="items" />
      <div className="card-text">
        <h3>{user.name}</h3>
        <p>{user.location}</p>
      </div>
      <div className="gradient"></div>
{  modal && <Modal  item={item}/>}  
  </div>
  );
}

export default Card;
