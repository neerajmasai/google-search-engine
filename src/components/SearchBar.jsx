import React from 'react'
import { SearchBarStyle } from '../styles/SearchBar.styled';
import autocomplete from '../data/autocomplete';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ activateSearchResults, deactivateSearchResults, setResults, searchTerm, setSearchTerm }) => {
    
    const navigate = useNavigate();
    const handleSearchResults = (event) => {

        if (event.target.value === "") {
            deactivateSearchResults();
        }
        else {
            activateSearchResults();
            setSearchTerm(event.target.value);
            const results = autocomplete.filter(
                (item) => item.suggestion.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setResults(results);
        }
    }

    const handleSubmit = (event) => {
        if(event.key === 'Enter'){
            let keyword = searchTerm.trim().split(" ").join("+");
            navigate("/Results?searchTerm=" + keyword);
        }
    }

    return (
        <SearchBarStyle>
            <span className="material-symbols-outlined search-icon">
                search
            </span>
            <input
                autoComplete={"off"}
                className="search-bar"
                type="text"
                name="search"
                id="search"
                placeholder='Search Google or type a URL'
                onClick={() => activateSearchResults()}
                onChange={(event) => handleSearchResults(event)}
                onKeyPress={(event) => handleSubmit(event)}
            />
        </SearchBarStyle>
    )
}

export default SearchBar