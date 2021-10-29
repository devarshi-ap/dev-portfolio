import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile-container flex-centered frosted-bg">
                <img src="https://dev-patel.netlify.app/assets/images/selfie.png" alt="me" className="profile-pic" />
                <div className="name">Devarshi Patel</div>
                <div className="tagline">First Year CS @ RyersonU</div>
                <div className="socials">
                    <a href="https://github.com/devarshi-ap"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/devarshi-ap/"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/DevEast03"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/dev.ap3/"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="trademark">© 2021</div>
            </div>
        );
    }
}

export default Profile;