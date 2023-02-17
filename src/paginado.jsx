import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Paginado ({pokemonForPage,myPokemons,paginado,currentPage}){
    const pageNumber = [];
    const [buttonNext, setButtonNext] = useState(false)
    const [buttonPrev, setButtonPrev] = useState(false)



    for(let i=1; i <= Math.ceil(myPokemons/pokemonForPage); i++){
        pageNumber.push(i);
    }

    function nextPage(){
        currentPage++
        paginado(currentPage)
    }
    
    function prevPage(){
        currentPage--
        paginado(currentPage)
      }
  

    return(
        <nav className="positionPag" >
                {/* {
                    pageNumber.map((elm) => (
                        <div key={elm}>
                            <a className="aPag" onClick={()=>paginado(elm)}>
                                {elm}
                            </a>
                        </div>
                    ))
                } */}
                <hr className="hr1" />
                <h1 className="titleCarrousel"> Action &  <br></br> Drama Movies  </h1>
                <button className="buttonCarrousel" disabled={currentPage === 1? true : false  } onClick={() => prevPage()} ><ArrowBackIosIcon/></button>
                <button  className="buttonCarrousel" disabled={currentPage === pageNumber.length? true : false  } onClick={() =>nextPage()} ><ArrowForwardIosIcon/></button>
               <hr className="hr2" />
               <small className="smallCarrousel">VIEW ALL {">"}</small>
        </nav>
    )

}
