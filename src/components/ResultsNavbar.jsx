import React from 'react'
import { ResultsNavbarStyle } from '../styles/ResultsNavbar.styled'

const ResultsNavbar = () => {
    return (
        <ResultsNavbarStyle>
            <div className='results-navbar-icons'>
                <span class="material-symbols-outlined results-navbar-icons-active">
                    search
                </span>
                <button className='results-navbar-buttons results-navbar-icons-active'>
                    All
                </button>
            </div>
            <div className='results-navbar-icons'>
                <span class="material-symbols-outlined">
                    newspaper
                </span>
                <button className='results-navbar-buttons'>
                    News
                </button>
            </div>
            <div className='results-navbar-icons'>
                <span class="material-symbols-outlined">
                    image
                </span>
                <button className='results-navbar-buttons'>
                    Images
                </button>
            </div>
            <div className='results-navbar-icons'>
                <span class="material-symbols-outlined">
                    book
                </span>
                <button className='results-navbar-buttons'>
                    Books
                </button>
            </div>
            <div className='results-navbar-icons'>
                <span class="material-symbols-outlined">
                    smart_display
                </span>
                <button className='results-navbar-buttons'>
                    Videos
                </button>
            </div>
            <div className='results-navbar-icons'>
                <span class="material-symbols-outlined">
                    more_vert
                </span>
                <button className='results-navbar-buttons'>
                    More
                </button>
            </div>
        </ResultsNavbarStyle>
    )
}

export default ResultsNavbar