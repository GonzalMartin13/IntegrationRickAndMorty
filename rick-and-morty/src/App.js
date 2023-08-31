import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from "react";
import React from 'react';
import axios from "axios";
import {Routes, Route} from "react-router-dom"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error404/Error';

function App() {

const [characters, setCharacters] = useState([])

const onSearch = (id) => {
   axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-GonzalMartin13`)
   .then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
}

function onClose(id){
   const charactersFiltrados = characters.filter(character => character.id !== Number(id))
   setCharacters(charactersFiltrados)
}

function random (){
   const numeroAleatorio = Math.random() * 825;
   const idAleatorio = Math.ceil(numeroAleatorio) + 1;
   return onSearch(idAleatorio)
}

   return (
      <div className = 'App'>
         <Nav onSearch = {onSearch} random={random}/>
         <Routes> 
            <Route path='/about' element={<About/>}/>
            <Route path="/home" element={<Cards characters = {characters} onClose = {onClose} />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path="*" element={<Error/>}/>
         </Routes>
{/*          <Cards characters = {characters} onClose = {onClose} /> */}
      </div>
   );
}

export default App;
