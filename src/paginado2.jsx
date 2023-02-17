import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Paginado ({pokemonForPage2,myPokemons2,paginado2,currentPage2}){
    const pageNumber = [];
    const [buttonNext, setButtonNext] = useState(false)
    const [buttonPrev, setButtonPrev] = useState(false)



    for(let i=1; i <= Math.ceil(myPokemons2/pokemonForPage2); i++){
        pageNumber.push(i);
    }

    function nextPage(){
        currentPage2++
        paginado2(currentPage2)
    }
    
    function prevPage(){
        currentPage2--
        paginado2(currentPage2)
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
                <hr className="hr12" />
                <h1 className="titleCarrousel2"> Funniest Comedy <br></br> Movies of 2018  </h1>
                <button className="buttonCarrousel2" disabled={currentPage2 === 1? true : false  } onClick={() => prevPage()} ><ArrowBackIosIcon/></button>
                <button  className="buttonCarrousel2" disabled={currentPage2 === pageNumber.length? true : false  } onClick={() =>nextPage()} ><ArrowForwardIosIcon/></button>
               <hr className="hr21" />
               <small className="smallCarrousel2">VIEW ALL {">"}</small>
        </nav>
    )

}
