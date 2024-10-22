import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmarks, handleMarkAsRead}) => {
   const [blogs,setblogs] = useState([]);
   

   useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setblogs(data))
   },[])

    return (
        <div className="w-2/3 mt-2">
           

            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmarks={handleAddToBookmarks}
                    handleMarkAsRead={handleMarkAsRead}>
                   </Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired,
  };
export default Blogs;