import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { AdSectionDescription, AdSectionDescriptionSmall } from '../../../assets/images'

import './index.scss'

function AdSectionContent() {

    const isMobile = useMediaQuery({ maxWidth: 478 })

    return (
        <div className="adsection-content-wrapper">
            <div className="adsection-content">
                <div className="desc-img-wrapper">
                {isMobile ? <AdSectionDescriptionSmall width='100%'/> : <AdSectionDescription width="100%" /> }
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
