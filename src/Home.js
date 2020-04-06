import React from 'react'
import User from './User'

class Home extends React.Component{
 
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      destinatiom: '',
      dietaryRestrictions: '',
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    }
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
      const {name, value, type, checked} = event.target
      type === 'checkbox' ?
      this.setState({
        [name]: checked
      })
      :
      this.setState({
        [name]: value
      })
    }
  render() {
    return(
   
    <div>
    <User 
      firstName = {this.state.firstName}
      handleChange = {this.handleChange}
      age = {this.state.age}
      gender = {this.state.gender}
      destination = {this.state.destination}
      isVegan = {this.state.isVegan}
      isKosher = {this.state.isKosher}
      isLactoseFree = {this.state.isLactoseFree}
      lastName = {this.state.lastName}

      />
    
      </div>
    
    )
  }

  }


export default Home