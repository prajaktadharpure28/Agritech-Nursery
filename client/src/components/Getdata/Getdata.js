import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import Showplant from '../Showplant/Showplant';
import { Link } from 'react-router-dom';
export default function Getdata() {

    const [plant, setPlant] = useState([]);

useEffect(() => {
    axios.get('/get/allplant').then(res => {
      setPlant(res.data);
    })
  })

  return (
    <div>
         <div className='container mt-4' >
       <h1 className="text-center">Show Transaction</h1>

       <Link to={'/addplant'} class="btn btn-outline-success w-100"><b>ADD PLANTS</b></Link>
         {
           plant.map(show => <Showplant  id={show.id} name={show.name} descrption={show.descrption} amount={show.amount} quantity={show.quantity}
            category={show.category}/> )
         }
       </div>
    </div>
  )
}



