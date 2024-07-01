import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Create = () => {
    const[isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const authors = useLoaderData();

    const[blog, setBlog] = useState({
        title: "",
        body: "",
        author: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault(); //To prevent the default refresh action on submit event
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("New blog added");
            setIsLoading(false);
            navigate('/');
        });        
    }
    const handleCreate = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        });
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    required
                    value={blog.title}
                    onChange={handleCreate}
                />
                <label>Blog content:</label>
                <textarea
                    placeholder="content"
                    name="body"
                    required
                    value={blog.body}
                    onChange={handleCreate}
                ></textarea>
                <label>Blog Author:</label>
                <select 
                    name="author"
                    required
                    value={blog.author}
                    onChange={handleCreate}
                >
                <option value="">---select---</option>
                {authors.map((author) => 
                    <option value={author.name}>{author.name}</option>
                )}
                </select>
                {!isLoading && <button>Add Blog</button> }
                {isLoading && <button disabled>Adding blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;