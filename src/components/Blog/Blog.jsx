import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="mb-8 rounded-xl"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />

      <div className="flex justify-between">
        <div className="flex gap-5 mb-4">
          <img
            className="w-16 h-16 object-cover rounded-full"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="text-2xl font-semibold">{author}</h3>
            <p className="text-gray-400">{posted_date}</p>
          </div>
        </div>

        <div>
          <span className="text-gray-400">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="ml-2 text-2xl text-red-400"
          >
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="mb-4">
        {hashtags.map((hash, idx) => (
          <span key={idx} className="text-gray-400 ml-3">
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={()=>handleMarkAsRead(reading_time)} className="text-purple-800 font-bold underline">
        Mark As Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead : PropTypes.func.isRequired,
};
export default Blog;
