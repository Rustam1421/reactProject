import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>;
    }

    return (
        <div>
            <div>
                {/*<img src="https://www.atlantictours.com/images/stories/com_form2content/p1/f1/ezgif-6-f588e2cdad51_-_main.jpg" alt=""/>*/}
            </div>
            <div>
                <img src={props.profile.photos.large} />
                ava + descr
            </div>

        </div>
    )
}

export default ProfileInfo;