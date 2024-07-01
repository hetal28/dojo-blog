import BlogList from './blogs/BlogList';
import SkeletonBlog from '../skeleton/SkeletonBlog';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    return (  
        <div className="home">
            <h2>All Blogs</h2>
            {error && <div>{error}</div>}
            {isLoading && [1,2,3,4,5].map(blog => <SkeletonBlog key={blog} theme="light"/>)}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}
 
export default Home;