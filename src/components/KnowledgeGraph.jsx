import React, { useState, useEffect } from 'react'
import { KnowledgeGraphStyle } from '../styles/KnowledgeGraph.styled';
import KnowledgeInfoBox from './KnowledgeInfoBox';
import Suggestions from './Suggestions';


const KnowledgeGraph = ({ data, thumbnails }) => {
  const [images, captureImages] = useState([]);

  useEffect(() => {

    let arr = [];
    thumbnails.forEach(item => {
      arr.push(item.thumbnail);
    });
    captureImages(arr);

  }, [thumbnails, captureImages]);

  return (
    <KnowledgeGraphStyle>
      <KnowledgeInfoBox images={images} title={data.title} type={data.type} description={data.description} source={data.source} suggest={data.people_also_search_for} />
      { data.see_results_about && <Suggestions data={data.see_results_about}/>}
    </KnowledgeGraphStyle>

  )
}

export default KnowledgeGraph