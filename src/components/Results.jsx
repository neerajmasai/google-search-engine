import React, { useEffect } from 'react'
import { ResultsStyle } from '../styles/Results.styled';
import { useSearchParams } from 'react-router-dom';
import ResultsHeader from './ResultsHeader';
import ResultsNavbar from './ResultsNavbar';
import { resultsData } from '../data/results';
import ResultsMetaData from './ResultsMetaData';
import ResultsOrganic from './ResultsOrganic';
import KnowledgeGraph from './KnowledgeGraph';
import FAQ from './FAQ';
import axios from 'axios';

const Results = () => {
    // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams();
    const [allResults, setAllResults] = React.useState(resultsData);
    
    //Make API call to get results after Component mounted (works only once, initially)
    useEffect(() => {
        // Make a request for a user with a given ID
        axios.get(`https://google-search-engine-backend.herokuapp.com/search/${searchParams.get('searchTerm')}`)
            .then(function (response) {
                // handle success
                console.log(response);
                setAllResults(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [searchParams]);

    return (
        <ResultsStyle>
            <ResultsHeader />
            <ResultsNavbar />
            <ResultsMetaData metaData={allResults.search_information} />
            <div className='results-container'>
                <ResultsOrganic data={allResults.organic_results} />
                <KnowledgeGraph data={allResults.knowledge_graph} thumbnails={allResults.organic_results} />
            </div>
            <FAQ data={allResults.related_questions} />
        </ResultsStyle>
    )
}

export default Results