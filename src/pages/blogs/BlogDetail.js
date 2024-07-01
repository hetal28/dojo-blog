import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const{id} = useParams();
    const{data: blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id); 
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        })
        .then((res) => {
            return res.json();            
        })
        .then((data) => {
            console.log("Blog deleted");
            navigate("/");
        })
        .catch((err) => {
            console.log(err.message);
        })
    }

    const handleChange = () => {
        let path = '/blogs/update/' + id;
        navigate(path);
    }

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <div> 
                        <button onClick={handleDeleteClick}>delete</button>
                        <button onClick={(handleChange)}>change</button>
                        <button onClick={() => navigate("/")}>back</button>
                    </div>
                    
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;