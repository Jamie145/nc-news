import { useState, useEffect } from "react";
import axios from "axios";
function Card({article}){
    // const [fetchedArticle, setFetchedArticle] = useState(null)

    // useEffect(() =>{
    //     axios.get(`/articles/${article.article_id }`)
    //     .then(response =>{
    //         setFetchedArticle(response.data)
    //     })
    //     .catch(error =>{
    //         console.log("")
    //     })
    // })
        return(  
            <div className="card">
                
                <h2>Article: {article.title}</h2>
                <p>{article.body}</p>
            </div>

        );}

export default Card