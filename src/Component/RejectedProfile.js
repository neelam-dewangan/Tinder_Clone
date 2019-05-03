import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const RejectedProfile = (props) => {

    return (
        <div className="rejected-profile">
            <Link to="/">Back</Link>
            <div>  
                { 
                    props.CurrentPic.map((e, i) => {
                        let n = e.name;
                        return <div key = {i}>name:{n.title}{n.first}{n.last} </div>
                    })
                }
            </div>


        </div>
    )
}
const mapStoreToProps = (store) => {
      console.log(store.RejectReducer)
    return {
        CurrentPic: store.RejectReducer,
    }
}

export default connect(mapStoreToProps)(RejectedProfile);
