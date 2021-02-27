import React from 'react'
import { ReactComponent as AdSectionDescription } from '../../../assets/images/adsection-left.svg'

import './index.scss'

function AdSectionContent() {
    return (
        <div className="adsection-content-wrapper">
            <div className="adsection-content">
                <div className="desc-img-wrapper">
                    <AdSectionDescription width='100%'/>
                </div>
                <div className="text-wrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget bibendum faucibus consequat semper integer ornare. Elementum enim id sed pellentesque donec turpis neque, eget a. Fames.
            </div>
                <div className="button-wrapper">
                    <button className="adsection-button">Try Now</button>
                </div>
            </div>

        </div>
    )
}

export default AdSectionContent
