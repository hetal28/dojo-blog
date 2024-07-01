import Shimmer from "./Shimmer";
import SkeletonElements from "./SkeletonElements";

const SkeletonBlog = ({theme}) => {
    const themeClass = theme || 'light';
    return ( 
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-blog">
                <SkeletonElements type="text" />
            </div>
            <Shimmer />
        </div>
     );
}
 
export default SkeletonBlog;