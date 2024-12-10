import React, {useState, useEffect} from "react"
import { data } from "react-router-dom"


export default function Posts () {
    // memorizzio i post 
    const [posts, setPosts] = useState ([])
    // recupero i dati , quando carico la pagina 
    useEffect(()=> {
        fetch('http://localhost:3000/posts')
        .then((response) => response.json()) // coverto i rispoda in json
        .then((data) => {
            console.log(data)
            setPosts(data.posts)  //accedo ai dati
    }) 
        .catch((error) => console.error('Errore nel recupero dei dati:', error))
    },[]) // eseguo solamente una volt a 

        if(posts.length === 0) {
            return <p>Caricamanto in corso... </p>
        }

    return (
      

            <ul>
                {posts.map((post) => ( 
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content.substring(0, 100)}...</p>
                </li>
                ))}
            </ul>
        
        
    )
}