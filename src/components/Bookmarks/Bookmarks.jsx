import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className="w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl">
            <div className="text-3xl text-center bg-slate-200 p-4 m-4 rounded-xl">
              <h2>Mark As Read : {readingTime}</h2>
           </div>
            <h2 className="text-2xl text-center">Bookmarks Blogs :{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.array.isRequired,
}
export default Bookmarks;