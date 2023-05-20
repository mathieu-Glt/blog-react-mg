import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/Home/HomePage'
import Navbar from './components/Navbar/Navbar'
import ArticlePage from './pages/Article/ArticlePage'
import { Route, Routes } from 'react-router-dom'
import BlogPage from './pages/Blog/BlogPage'
import Navigation from './components/Navbar/Navbar'
import { useLocalStorage } from './hook/useLocalStorage'
import { v4 as uuidv4 } from "uuid";


function App() {

  const [values, setValues] = useState([]);

  const STORAGE_KEY = 'post';
  const [storedPost, setStoredPost] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    console.log("j'ecoute le composant chargé ");
    setValues(storedPost);
  }, [])

  useEffect(() => {
    console.log("j'ecoute la prop values");
    setStoredPost(values);
  }, [values])

  function handleSubmitPost(post: any) {
    console.log('handleSubmitPost');
    setValues([...values, { ...post, id: uuidv4(), date: new Date().toISOString(), picture: "1.jpg" }]);

  }

  console.log(values);


  return (
    <>
      <div className=''>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage storage={storedPost}/>}></Route>
          <Route path='/article' element={<ArticlePage post={values} />}></Route>
          <Route path='/blog' element={<BlogPage handleSubmitPost={handleSubmitPost} post={values} />}></Route>
        </Routes>
      </div>

    </>
  )
}

export default App
