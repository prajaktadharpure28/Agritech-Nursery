import React from 'react';
import './Showplant.css';
export default function Showplant(props) {
  return (
    <div>
          <div className='transaction-card'>
            {/* <div class="col-xxl-3 col-md-6"> */}
              <div class="card info-card">
                <div class="card-body">
                  <h5 class="card-title">{props.name} <span></span></h5>
                  <img src="./icons8-heavy-dollar-sign-48.png" class="card-img-left" alt="..."></img>
                  <h5 class="card-title1">$ {props.amount}</h5>
                  {/* <div class="d-flex align-items-center"> */}
                    {/* <div class="card8"> */}
                    <span class="text-muted small pt-2 ps-1">{props.category}</span><br></br>
                      {/* <span class="text-success small pt-1 fw-bold">{props.date} </span> <br></br> */}
                      </div>
                </div>
                <div class="card info-card">
                <div class="card-body">
                  {/* <div>
                    <img src="./icons8-green-circle-48.png" alt=''></img>
                    <img src="./icons8-red-circle-48.png" alt=''></img>
                    </div> */}
                 <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button class="btn btn-success" type="button">UPDATE</button>
                  <button class="btn btn-danger" type="button">DELETE</button>
                  </div> 
                  </div>
                </div>
              </div>
            </div>
  )
}
