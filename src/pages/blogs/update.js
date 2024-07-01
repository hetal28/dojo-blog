import { useLoaderData, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {

    const{id} = useParams();
    const{data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
    const[tempBlog, setTempBlog] = useState(null);
    //const[isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const authors = useLoaderData();

    useEffect(() => {
        if(blog){
            console.log(blog);
            setTempBlog(blog);
        }
    },[blog]);

    const handleSubmit = () => {
        fetch("http://localhost:8000/blogs/" + id,{
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(tempBlog)
        })
        .then((resp) => {
            return resp.json();            
        })
        .then((data) => {
            console.log(data);
            console.log("Blog updated");
            navigate("/");
        })
        .catch((err) => {
            console.log(err.message);
        })
    }

    const handleChange = (e) => {
       setTempBlog({
        ...tempBlog,
        [e.target.name]: e.target.value
       });
    }

    return (  
        <div className="create">
            <h2>Update a Blog</h2>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {tempBlog && (                
                <form>
                    <label>Blog title:</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        required
                        value={tempBlog.title}
                        onChange={handleChange}
                    />
                    <label>Blog content:</label>
                    <textarea
                        placeholder="content"
                        name="body"
                        required
                        value={tempBlog.body}
                        onChange={handleChange}
                    ></textarea>
                    <label>Blog Author:</label>
                    <select 
                        name="author"
                        value={tempBlog.author}
                        onChange={handleChange}
                    >
                    {authors.map((author) => 
                    <option value={author.name}>{author.name}</option>
                    )}
                    </select>
                    <button onClick={handleSubmit}>Update Blog</button>
                    <button style={{marginLeft: "16px"}} onClick={() => {
                        setTempBlog({...blog});
                        navigate("/blogs/" + id);
                    }}>Cancel</button>
                </form>
            )}

        </div>
    );
}
 
export default Update;