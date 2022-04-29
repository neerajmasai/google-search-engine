import React from 'react'
import { SuggestionsStyle } from '../styles/Suggestions.styled';

const Suggestions = ({ data }) => {
  return (
    <SuggestionsStyle>
      <h3 className='title'>See results about</h3>
      <div className='results-container'>
        {
          data.map(({ name, extensions, image }, index) => {
            return (
              <div className='suggest-item'>
                <div className='left'>
                  <img src={image} alt={name} />
                </div>
                <div className='right'>
                  <h4 className='name'>{name}</h4>
                  <p className='extensions'>{extensions[0]}</p>
                </div>
                <div className='arrow-icon'>
                  <span class="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </div>
              </div>
            )
          })
        }
      </div>
    </SuggestionsStyle>
  )
}

export default Suggestions