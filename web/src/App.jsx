import React, { useEffect, useState } from 'react'
import './App.scss'

import axios from 'axios'

import CardsMovie from './components/CardsMovie/index'

function App() {

  const [dados, setDados] = useState([])

  useEffect(() => {
    GetDados()
  })

  async function GetDados(){
    await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=d40100688f2e9a88e2c57f663056ea9d`).then((response) => {
      setDados(response.data.results)
      
    })
  }

  return (
    <div className='App'>
      {dados.map((item, index) => {
        return(
          <CardsMovie key={index} title={item.title} overview={item.overview} backdrop_path={item.backdrop_path}/>
        )
      })}
    </div>
  )
}

export default App
