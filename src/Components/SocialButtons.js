import React from 'react';
import './SocialButtons.css';

const SocialButtons = () => {
    return (
        <div className='sharing-area text-center'>
            {/* <div class="row justify-content-center">
                <h4>Thank you for supporting us!</h4>
            </div> */}
            <button className='btn btn-raised btn-facebook m-3' onClick={openFacebook}>
                <i className='fa fa-facebook'></i> Like Us
            </button>
            <button className='btn btn-raised btn-twitter m-3' onClick={openTwitter}>
                <i className='fa fa-twitter'></i> Follow Us
            </button>
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