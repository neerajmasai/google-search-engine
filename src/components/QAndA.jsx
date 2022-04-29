import React from 'react'
import { QAndAStyle } from '../styles/QAndA.styled'
import AnswerSnippet from './AnswerSnippet';
// {
//   "question": "Is coffee good for your health?",
//   "snippet": "“For most people, moderate coffee consumption can be incorporated into a healthy diet.” Hu said that moderate coffee intake—about 2–5 cups a day—is linked to a lower likelihood of type 2 diabetes, heart disease, liver and endometrial cancers, Parkinson's disease, and depression.",
//   "title": "Is coffee good or bad for your health? | News",
//   "link": "https://www.hsph.harvard.edu/news/hsph-in-the-news/is-coffee-good-or-bad-for-your-health/",
//   "displayed_link": "https://www.hsph.harvard.edu › news › hsph-in-the-news"
// },

const QAndA = ({ data }) => {

  return (
    <QAndAStyle>
      {
        data.map((data) => {
          return (
            <AnswerSnippet data={data}/>
          )
        })
      }
    </QAndAStyle>
  )
}

export default QAndA