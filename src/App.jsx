import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks)
  }

  const handleMarkAsRead = (id, time) =>{
    setReadingTime(readingTime + time);
    
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookMarks)
  }
  return (
    <>
     
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
