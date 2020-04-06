import React from 'react'



class Button extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
  
    };
    
    this.confPage = this.confPage.bind(this);
  }

  confPage() {
      window.open('http://localhost:3000/confirmation')
    }

  render(){
  return (
  
    <button
    onClick={this.confPage} 
    className='Button'>
      CONFIRM.
    </button>

 
  );

}
}
export default Button