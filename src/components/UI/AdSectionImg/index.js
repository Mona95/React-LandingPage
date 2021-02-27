import React from 'react'
import AdSectionRightImage from '../../../assets/images/adsection-right.png';

import './index.scss'

function AdSectionImg() {
    return (
        <div className="adsection-img-wrapper">
        <img className="adsection-img" alt="adsection-img" src={AdSectionRightImage} />
        </div>
    )
}

export default AdSectionImg


