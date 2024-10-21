import { useEffect, useState } from "react";


const Blogs = () => {
   const [blogs,setblogs] = useState([]);

   useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setblogs(data))
   },[])

    return (
        <div className="w-2/3">
            <h1>Blogs </h1>
        </div>
    );
};

export default Blogs;