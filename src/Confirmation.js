import React from 'react'
import './User.css'


class Confirmation extends React.Component{
    constructor(){
    super()
    this.state={}
    

    this.close = this.close.bind(this);
}

componentWillMount(){
    document.title = 'Confirmation'
}

close(){
    window.close()
}


render(){
    return (
        
        <main className='confirmation'>
                <h1 className="nombreaero">C A R T R I D G E A I R L I N E S</h1>
        <div >
    
            <form className ='confirmation-text'>
               <p>Your flight was reserved.</p>
               <p>Please check your email for details.</p>
               </form>
               <button
                    onClick={this.close}
                    className='Button-conf'>
                     CLOSE.
                </button>
        </div>
        </main>
    )
}
}

export default Confirmation