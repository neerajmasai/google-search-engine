import React from 'react'
import { KnowledgeInfoBoxStyle } from '../styles/KnowledgeInfoBox.styled'
import ImageCollage from './ImageCollage';
const KnowledgeInfoBox = ({ images, title, type, description, source, suggest }) => {
    console.log(images);
    return (
        <KnowledgeInfoBoxStyle>
            <div className='header-images'>
                <ImageCollage images={images} />
            </div>
            <div className='info-box'>
                <div className='left'>
                    <h1>{title}</h1>
                    <h4>{type}</h4>
                </div>
                <div className='right'>
                    <span class="material-symbols-outlined">
                        share
                    </span>
                </div>
            </div>
            <div className='description'>
                <p>{description + " "}<a href={source.link}>{source.name}</a></p>
            </div>
            {/* people also search for section */}
            <div className='recommend-box'>
                <h3>People also search for</h3>
                <div className="search-suggest">
                    {
                        suggest.map(({ name, link, serpapi_link, image }, index) => {
                            return (
                                <div className="suggest-item">
                                    <img src={image} alt="" srcset="" />
                                    <a href={link}>{name}</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </KnowledgeInfoBoxStyle>
    )
}

export default KnowledgeInfoBox;