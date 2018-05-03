import React from 'react';

const SocialButtons = () => {
    return (
        <div className="row" style={{ 'marginTop': '24px', 'marginLeft': '200px', 'marginRight': '200px' }}>
            <div className='col-md-6'>
                <button className="btn btn-just-icon  btn-facebook" onClick={openFacebook}>
                    <i className="fa fa-facebook"> </i>
                </button>
            </div>
            <div className='col-md-6'>
                <button className="btn btn-just-icon btn-twitter" onClick={openTwitter}>
                    <i className="fa fa-twitter"></i>
                </button>
            </div>
        </div>
    );
}

const openFacebook = () => {
    const url = 'https://www.facebook.com/SlowShow.org';
    window.open(url, '_blank');
}

const openTwitter = () => {
    const url = 'https://twitter.com/slowshow_org';
    window.open(url, '_blank');
}

export default SocialButtons;