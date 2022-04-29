import React from 'react'
import { ResultsHeaderStyle } from '../styles/ResultsHeader.styled';
import GoogleLogo from './GoogleLogo';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { ResultsSearchResultsStyle } from '../styles/ResultsSearchResults.styled';
import { ResultsSearchBarStyle } from '../styles/ResultsSearchBar.styled';
const ResultsHeader = () => {

    const [searchResultsActive, setSearchResultsActive] = React.useState(false);
    const [results, setResults] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <ResultsHeaderStyle>
            <div className='results-header-left'>
                <div className='results-google-logo'>
                    <GoogleLogo />
                </div>
                <div className='results-searchbar'>
                    <ResultsSearchBarStyle>
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} activateSearchResults={() => setSearchResultsActive(true)} deactivateSearchResults={() => setSearchResultsActive(false)} setResults={setResults} />
                    </ResultsSearchBarStyle>
                    {
                        /* <ResultsSearchResultsStyle> ~ Overriding styled component Search Results style to suit the needs of this component */
                        searchResultsActive && <ResultsSearchResultsStyle><SearchResults results={results} searchTerm={searchTerm} /></ResultsSearchResultsStyle>
                    }
                </div>
            </div>
            <div className='results-header-right'>
                <div className='results-navbar'>
                    <Navbar />
                </div>
            </div>
        </ResultsHeaderStyle>
    )
}

export default ResultsHeader