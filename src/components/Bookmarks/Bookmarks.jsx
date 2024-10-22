import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl">
            <h2 className="text-3xl text-center">Bookmarks Blogs :{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}
export default Bookmarks;