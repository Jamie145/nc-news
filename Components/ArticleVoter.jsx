import { useState, useEffect } from "react"

function ArticleVoter({articleid, initialVotes}){

    const [votes, setVotes] =useState(initialVotes)
    
    function addOne(){
        setVotes(v => v +1)
    }
    function minusOne(){
        setVotes(v => v -1)
    }
    return(
    <div>
        <h2> Current Votes {votes}</h2>
        <span>
            <button onClick ={addOne} > Up Vote </button>
            <button onClick={minusOne}>Down Vote</button>
        </span>
    </div>
    )
}


export default ArticleVoter