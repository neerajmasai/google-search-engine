import React from 'react'
import { useState } from 'react';
import { AnswerSnippetStyle } from '../styles/AnswerSnippet.styled'

const AnswerSnippet = ({data}) => {
    const [expanded, setExpanded] = useState(false);

    const expandMore = (e) => {
        setExpanded(!expanded);
    }
    return (
        <AnswerSnippetStyle>
            <div className='container'>
                <div className='question'>
                    <p>{data.question}</p>

                    <span class="material-symbols-outlined arrow-down" onClick={expandMore}>
                        {
                            expanded ? 'expand_less': 'expand_more'
                        }
                    </span>
                </div>
                {expanded && <div className='answer' style={{ display: 'initial' }}>
                    <p>{data.snippet}</p>
                    <div className='snippet-preview'>
                        <p>{data.displayed_link}</p>
                        <a href={data.link}>{data.title}</a>
                    </div>
                </div>}
            </div>
        </AnswerSnippetStyle>
    )
}

export default AnswerSnippet