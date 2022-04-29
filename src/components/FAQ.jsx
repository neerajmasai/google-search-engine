import React from 'react'
import { FAQStyle } from '../styles/FAQ.styled'
import QAndA from './QAndA'

const FAQ = ({data}) => {
  return (
    <FAQStyle>
        <div className='header'>
            <h1>People also ask</h1>
        </div>
        <QAndA data={data}/>
    </FAQStyle>
  )
}

export default FAQ