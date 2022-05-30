import React from 'react';
import { Link } from 'react-router-dom';
import image from "./img/agri1.png";
import img from "./img/agri2.jpeg";
import Addplant from "./img/indoorplant.PNG"
// import {StyleSheet} from "react"
function Dashboard() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">AgriTech</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Offers</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Plants
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="./Addplant">Addplant</a></li>
              <li><a className="dropdown-item" href="./Showplant">Showplant</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Planters
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Plastic Pots</a></li>
              <li><a className="dropdown-item" href="#">Seedling Tray</a></li>
              <li><a className="dropdown-item" href="#">Grow Bags for Plants</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image} className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={img} className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div><br></br>
<h1 className="text-center">We are here to inspire a world where every plant journey is a personal revolution of inner change and growth</h1>
<br></br>
<div className="text-center">
<Link to="./Addplant">
<img src={Addplant} className="img-thumbnail" alt="..."></img>
</Link>
</div>
</div>
  )
}

export default Dashboard;

// const styles = StyleSheet.create({
//   container:{
//     justifyContent: "flex-start",
//     marginRight: 10,
//   }
// })