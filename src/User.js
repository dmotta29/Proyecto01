import React from 'react'
import './User.css'
import Button from './Button'


function User(props) {
  return (
    <div> 
      <main className='Fondo'>
      
      <h1 className="nombreaero">C A R T R I D G E A I R L I N E S</h1>
      
           <div className='form'>
        <form>
        <h2 className='subtitle'>Fill in your data:</h2>
        <p className='name'>First Name</p>  
        <input 
            className='placeholder'
            name = 'firstName'
            value = {props.firstName}
            onChange = {props.handleChange}
            />
          <br/>
          <p className='name'>Last Name</p>
          <input 
            name = 'lastName'
            value = {props.lastName}
            onChange = {props.handleChange}
                      />
          <br/>
          <p className='age'>Age</p>
          <input 
            name = 'age'
            value = {props.age}
            onChange = {props.handleChange}
                      />
          <br/>
          <label>
            <input 
            className='gender'
            type = 'radio'
            name = 'gender'
            value = 'male'
            checked = {props.gender === 'male'}
            onChange = {props.handleChange}
            /> Male 
            
            <input 
                      type = 'radio'
            name = 'gender'
            value = 'female'
            checked = {props.gender === 'female'}
            onChange = {props.handleChange}
            /> Female
          </label>
          <br/>
          <select 
          className='select'
            value={props.destination}
            name = 'destination'
            onChange = {props.handleChange}>
          <option value=''>---Select your destination---</option>
          <option value='Germany'>Germany</option>
          <option value='France'>France</option>
          <option value='Spain'>Spain</option>
          </select>
          <br/>
          <label>
            <input
            className='vegan'
            type = 'checkbox'
            name = 'isVegan'
            onChange = {props.handleChange}
            checked = {props.isVegan}
            /> Vegan?
            <br/>
            <input
            type = 'checkbox'
            name = 'isKosher'
            onChange = {props.handleChange}
            checked = {props.isKosher}
            /> Kosher?
            <br/>
            <input
            type = 'checkbox'
            name = 'isLactoseFree'
            onChange = {props.handleChange}
            checked = {props.isLactoseFree}
            /> Lactose Free?
        
          </label>
          <h1  className='title' >Entered information:</h1>
          <p>Your name: {props.firstName} {props.lastName}</p>
          <p>Your age: {props.age}</p>
          <p>Your gender: {props.gender}</p>
          <p>Your destination: {props.destination}</p>
          <p>Your diet restrictions:</p>
            <p>Vegan: {props.isVegan ? "Yes.":"No."}</p>
            <p>Kosher: {props.isKosher ? "Yes.": "No."}</p>
            <p>Lactose Free: {props.isLactoseFree ? "Yes.": "No."}</p>
         
        </form>
        </div>
      
          <Button/>
      </main>
    </div>
  )
}

export default User