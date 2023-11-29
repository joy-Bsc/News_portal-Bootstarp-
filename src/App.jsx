import react from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Middle from './Components/Middle/Middle'
import Main from './Components/main/main'
function App() {
  const[articles,setArticles]= useState([]);
    useEffect(() =>{
     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=30d4ef46c1ef46a7accd373cf6f967b5')
     .then(response => response.json())
     .then(data=>setArticles(data.articles))
    
},[])

  return (
    <>
    <Header></Header>
    <Middle></Middle>
    <Main articles = {articles}></Main>
    </>
    
  )
}

export default App;
