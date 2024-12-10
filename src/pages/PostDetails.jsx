import { useState, useEffect } from "react"
import { data, useParams } from "react-router-dom"

export default function PostDetails() {
    const {id} = useParams()  //ottengo l'id
    const [post, setPosts] = useState(null)
    
    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
        .then((response) => response.json)
        .then((data) => setPosts(data))
        .catch((error) => 
            console.error('Errore nel recupero dei dettagli del post:', error)
        )
    }, [id]) //effettuo la chiamata api quando cambia l'id 

    if (!post) {
        return <p>Caricamento in corso</p>
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.image}  alt={post.title} style={{}}/>
            <p>{post.content}</p>
            <p>Categoria: {post.category}</p>
            <p>Tags: {post.tags.join(", ")}</p>
        </div>
    )
}