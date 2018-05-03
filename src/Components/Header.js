import React from 'react';
import './Header.css';
import SocialButtons from './SocialButtons';

const Header = () => {
    return (
        <div className="page-header header-filter clear-filter purple-filter" data-parallax="true" >
            <div className="container">
                <div className="row">
                    <div className="col-md-8 ml-auto mr-auto">
                        <div className="brand">
                            <h1>SlowShow.org</h1>
                            <h3>The National Italian Fansite</h3>
                            <h6>Coming soon...</h6>
                        </div>
                    </div>
                </div>
                <SocialButtons />
            </div>
        </div>
    );
}

export default Header;