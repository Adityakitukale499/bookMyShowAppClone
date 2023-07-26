import React, { useState } from 'react'
import { Authcontext, DataMovie, City } from './NoteContex'

export const NoteState = (props) => {
  const [movieData, setMovieData] = useState([])
  const [auth, setAuth] = useState(false)
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  return (
    <City.Provider value={{ city, setCity }}>
      <DataMovie.Provider value={{ movieData, setMovieData }}>
        <Authcontext.Provider value={{ auth, setAuth, name, setName }}>
          {props.children}
        </Authcontext.Provider>
      </DataMovie.Provider>
    </City.Provider>
  )
}
