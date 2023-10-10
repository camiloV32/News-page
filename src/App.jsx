import { useState, useEffect } from 'react'
import './App.css'
import NavElem from './NavElem';
import SectionsNews from './components/sectionNews';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [searchQuery, setSearchQuery] = useState();
  const sectionsNews = [{index: 0,section:"Deporte"},{index: 1,section:"Entretenimiento"},{index: 2,section:"Politica"},{index: 3,section:"Economia"}];
  useEffect(()=>{
    //Cada que cambie el query
  },[searchQuery]);
  const reciveQuery = (data) =>{
    setSearchQuery(data)
  }
  return (
    <>
      <NavElem sendDataToParent={reciveQuery} sections={sectionsNews}/>
      <div className='main-content'>
          {!searchQuery?sectionsNews.map(sectionNew=>{return <SectionsNews name={sectionNew.section} key={sectionNew.index}/>}):<SectionsNews name={searchQuery} key={0}/>}
      </div>
    </>
  )
}

export default App
