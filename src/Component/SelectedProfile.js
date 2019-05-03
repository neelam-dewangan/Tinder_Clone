import React from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'

const SelectedProfile = (props) => {

    return (
        <div className="selected-profile">
            
            <Link to="/">Back</Link>
            <div>  
                { 
                    props.CurrentPic.map((e, i) => {
                        let n = e.name;
                        return <div key = {i}>name:{n.title}{n.first}{n.last}</div>
                    })
                }
            </div>


        </div>
    )
}
const mapStoreToProps = (store) => {
     return {
        CurrentPic: store.SelectReducer,
    }
}

export default connect(mapStoreToProps)(SelectedProfile);
