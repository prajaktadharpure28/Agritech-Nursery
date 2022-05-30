import React from 'react'
import {useState, useEffect} from 'react';
import {Link, useNavigate } from 'react-router-dom'
import "./Addplant.css"
import axios from 'axios';
import swal from "sweetalert";
// export default 
function Plant(){

    const navigate = useNavigate();

    const [plant,setPlant] = useState({
      id:"",
      name:"",
      description:"",
      amount:"",
      quantity:"",
      category:""
  });

  async function plantsubmit(e) {
    e.preventDefault();
    if (
        plant.id === "" ||
        plant.name === "" || 
        plant.description === "" || 
        plant.amount === "" || 
        plant.quantity === "" || 
        plant.category === "" 
      ){
        swal("Error", "Please fill all the fields", "error");
      }
        else {
            await axios
              .post("/add/plant", {
                id: plant.id,
                name: plant.name,
                description: plant.description,
                amount: plant.amount,
                quantity: plant.quantity,
                category: plant.category
              })
              .then((res) => {
                swal("Success!", "Plant Added successfully!", "success").then(
                  (value) => {
                    navigate("/dashboard");
                  }
                );
              })
              .catch((err) => {
                console.log(err);
                swal("Error!", err.message, "warning");
              });
          }
        }

  return (
    <div className='gradient'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <div className='mt-2'>
                        <h2 className='card-title text-center'>Add Plant</h2>
                        <form onSubmit={plantsubmit} >
                        <div className='form-group'>
                                <label className='mt-2'><b>Id:</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Id'
                                value={plant.id} onChange={(e)=>setPlant({...plant,id:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2'><b>Name :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Name'
                                value={plant.name} onChange={(e)=>setPlant({...plant,name:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2'><b>Description :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Description'
                                value={plant.description} onChange={(e)=>setPlant({...plant,description:e.target.value})}
                                required
                                 />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2'><b>Amount :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Amount'
                                value={plant.amount} onChange={(e)=>setPlant({...plant,amount:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2'><b>Plant Quantity :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Quantity'
                                value={plant.quantity} onChange={(e)=>setPlant({...plant,quantity:e.target.value})}
                                required
                                />
                                </div>
                                <div className='form-group'>
                                <label className='mt-2'><b>Plant Category :</b></label>
                                <input type='text' className='form-control' placeholder='Enter Plant Category'
                                value={plant.category} onChange={(e)=>setPlant({...plant,category:e.target.value})}
                                required
                                />
                                </div>
                                <button type='submit' className='btn btn-success w-100 mt-4'><b>Add Plant</b></button>
                        </form>
                        </div>
            </div>
       </div>
    </div>
    </div>
  )
}

export default Plant;