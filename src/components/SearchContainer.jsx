import React from 'react'
import GoogleLogo from './GoogleLogo'
import SearchBar from './SearchBar'
import { SearchContainerStyle } from '../styles/SearchContainer.styled'
import SearchResults from './SearchResults'
import Navbar from './Navbar';

const SearchContainer = () => {
    const [searchResultsActive, setSearchResultsActive] = React.useState(false);
    const [results, setResults] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');



    return (
        <>
            <Navbar />
            <SearchContainerStyle>
                <GoogleLogo />
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} activateSearchResults={() => setSearchResultsActive(true)} deactivateSearchResults={() => setSearchResultsActive(false)} setResults={setResults} />
                {
                    searchResultsActive && <SearchResults results={results} searchTerm={searchTerm} />
                }
            </SearchContainerStyle>
        </>

    )
}

export default SearchContainer