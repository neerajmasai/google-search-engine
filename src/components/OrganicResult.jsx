import React from 'react'
import { OrganicResultStyle } from '../styles/OrganicResult.styled'
const OrganicResult = ({ displayed_link, title, link, thumbnail, snippet, sitelinks }) => {
    // "sitelinks": {
    //     "inline": [
    //         {
    //             "title": "History",
    //             "link": "https://en.wikipedia.org/wiki/History_of_coffee"
    //         },
    //         {
    //             "title": "Coffee bean",
    //             "link": "https://en.wikipedia.org/wiki/Coffee_bean"
    //         },
    //         {
    //             "title": "Coffee production",
    //             "link": "https://en.wikipedia.org/wiki/Coffee_production"
    //         },
    //         {
    //             "title": "Coffee preparation",
    //             "link": "https://en.wikipedia.org/wiki/Coffee_preparation"
    //         }
    //     ]
    // },
    return (
        <OrganicResultStyle>
            <div className='breadcrumb'>
                <p>{displayed_link}</p>
            </div>
            <div className='title-img-container'>
                <div className='container-left'>
                    <a href={link}>{title}</a>
                    <p className='description'>{snippet}</p>
                </div>
                <div className='container-right'>
                    {
                        thumbnail && <img src={thumbnail} alt="" srcset="" />
                    }
                </div>
            </div>
            <div className='site-links-container'>
                {

                    sitelinks && sitelinks.inline && sitelinks.inline.map(({ title, link }) => {
                        return <a href={link}>{title}</a>
                    })
                }

            </div>
        </OrganicResultStyle>
    )
}

export default OrganicResult