import React from 'react'
import { connect } from 'react-redux';
import { getPostThunk, SelectReducer, RejectReducer } from '../Redux/Action';
import UserD from './UserD.css'
import { Link } from 'react-router-dom'


class UserData extends React.Component {
    // constructor(props) {
    //     super(props);

    // }
    componentDidMount() {
        this.props.dispatch(getPostThunk())
    }
    Selected = () => {
        this.props.dispatch(SelectReducer(this.props.CurrentPic.posts.results[0]))
        this.props.dispatch(getPostThunk())
    }
    Rejected = () => {
        this.props.dispatch(RejectReducer(this.props.CurrentPic.posts.results[0]))
        this.props.dispatch(getPostThunk())
    }


    render() {
        return (
            <div className="userInput">

                {this.props.loading && <h3>Loading...</h3>}
                {this.props.error && <h3 style={{ color: "red" }}>Unknown error!</h3>}

                <div className="profile">
                    <div className="image-container">
                        {this.props.CurrentPic.posts &&
                            <div className="image">
                                <img src={this.props.CurrentPic.posts.results[0].picture.large} alt="Profile-Image" />
                            </div>
                        }
                    </div>
                    <div className="description">
                        {this.props.CurrentPic.posts &&
                            <div>name:{this.props.CurrentPic.posts.results[0].name.first}</div>
                        }
                        {this.props.CurrentPic.posts &&
                            <div>age:{this.props.CurrentPic.posts.results[0].dob.age}</div>
                        }
                    </div>
                    <div className="choose">
                        <div className="Select"><div onClick={this.Selected}>&hearts;</div></div>
                        <div className="Reject"><div onClick={this.Rejected}>&#x2716;</div> </div>
                    </div>
                    <div className="links">
                        <Link to="/Selected">Selected</Link>
                        <Link to="/Rejected">Rejected</Link>
                    </div>
                </div>


            </div>
        )
    }

}
const mapStoreToProps = (store) => {

    return {
        CurrentPic: store.UserReducer,
    }
}

export default connect(mapStoreToProps)(UserData);








