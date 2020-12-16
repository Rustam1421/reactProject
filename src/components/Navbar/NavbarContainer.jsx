import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapStateToProps = (state) => {
    return {
        friends: state.sideBar.friends
    }
}


    // let mapDispatchToProps = (dispatch) => {
    //     return {
    //         asd: 123
    //     }
    // }

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;