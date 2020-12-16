import React from 'react';

import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data)
                // this.props.setUsersTotalCount(response.data.totalCount >= 25 ? 50 : response.data.totalCount)
            })
    }

    render() {
        debugger
        return (
            <Profile {...this.props}/>
        )
    }

}

let mapStateToProps = () => {
    return {
        a:13
    }
}

export default connect(mapStateToProps, {
    setUsersProfile
})(ProfileContainer);

