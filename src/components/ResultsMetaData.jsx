import React from 'react'
import { ResultsMetaDataStyle } from '../styles/ResultsMetaData.styled';

const ResultsMetaData = ({metaData}) => {
  return (
    <ResultsMetaDataStyle>
      <p>About {metaData.total_results} results ({metaData.time_taken_displayed} seconds)</p>
    </ResultsMetaDataStyle>
  )
}

export default ResultsMetaData