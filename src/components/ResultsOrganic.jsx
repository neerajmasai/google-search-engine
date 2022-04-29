import React from 'react'
import { ResultsOrganicStyle } from '../styles/ResultsOrganic.styled';
import OrganicResult from './OrganicResult';
const ResultsOrganic = ({data}) => {

  return (
      <ResultsOrganicStyle>
          {
            data.map(({ displayed_link, title, link, thumbnail, snippet, sitelinks}) => {
              return <OrganicResult key={link} displayed_link={displayed_link} title={title} link={link} thumbnail={thumbnail} snippet={snippet} sitelinks={sitelinks} />
            })
          }
      </ResultsOrganicStyle>
  )
}

export default ResultsOrganic