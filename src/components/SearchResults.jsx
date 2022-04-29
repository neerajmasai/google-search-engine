import React from 'react'
import { SearchResultsStyle } from '../styles/SearchResults.styled'
import { useNavigate } from 'react-router-dom'
const SearchResults = ({ results, searchTerm }) => {
  const navigate = useNavigate();
  const filterSuggestions = () => {
    let data = results.map(({ suggestion }, index) => {
      let temp = "";
      let i = 0;
      if(suggestion[0] !== searchTerm[0]) {
          return "";
      }
      while (suggestion[i] === searchTerm[i] && i < suggestion.length) {
        i++;
      };
      while (i < suggestion.length) {
        temp += suggestion[i++];
      }
      return temp;

    });
    
    if(data.includes("")) {
      return [""];
    }
    return data;
  }
  return (
    <SearchResultsStyle>
      {
        filterSuggestions().map((text, index) => {
          return (
            <div key={index} className='search-results-item'>
              <span className="material-symbols-outlined search-icon">
                search
              </span>
              <button onClick={() => {navigate("/Results?searchTerm=" + searchTerm.trim().split(" ").join("+")+text.trim().split(" ").join("+"))}}>{searchTerm}<span className='suggestion-bold'>{text}</span></button>
            </div>
          )
        })
      }
    </SearchResultsStyle>
  )
}

export default SearchResults