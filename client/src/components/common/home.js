import React from 'react'
import { connect } from 'react-redux'

 function Home(props){
     const name = props.user.username
    return(
        <div>
            {(Object.keys(props.user).length === 0) ? (
                <h2>Welcome to the App</h2>
            ) : (
                <h2>Welcome to the App {name.toUpperCase()}</h2>
            )}
           
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Home)