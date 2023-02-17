import "./App.css";
import img1 from "./img/img1.webp";
import img2 from "./img/img2.webp";
import img3 from "./img/img3.webp";
import img4 from "./img/img4.jpg";
import { useState } from "react";
import Paginado from "./paginado";
import Paginado2 from "./paginado2";


function App() {
  let array1 = [
    img1,
    img2,
    img3,
    img4,
    img1,
    img3,
    img2,
    img1,
    img2,
    img3,
    img4,
    img1,
    img3,
    img2,
    img1,
    img2,
    img3,
    img4,
    img1,
    img3,
    img2,
  ];
  let array2 = [
    img2,
    img1,
    img1,
    img1,
    img3,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img4,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
  ];
  let array3 = [
    img3,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
    img3,
    img2,
    img2,
    img2,
    img3,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
  ];

  let array4 = [
    img4,
    img2,
    img1,
    img3,
    img2,
    img1,
    img2,
    img3,
    img4,
    img1,
    img3,
    img2,
    img1,
    img2,
    img3,
    img4,
    img1,
    img3,
    img1,
    img3,
    img2,
  ];
  let array5 = [
    img1,
    img1,
    img1,
    img1,
    img3,
    img1,
    img3,
    img2,
    img1,
    img2,
    img3,
    img4,
    img1,
    img3,
    img2,
    img1,
    img2,
    img3,
    img4,
    img1,
    img3,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
  ];
  let array6 = [
    img3,
    img2,
    img1,
    img3,
    img2,
    img1,
    img2,
    img3,
    img4,
    img1,
    img3,
    img2,
    img1,
    img2,
    img3,
    img4,
    img1,
    img3,
    img2,
    img2,
    img2,
    img2,
    img2,
  ];




  let [myPokemons, setMyPokemons] = useState(array1);


  const [currentPage, setCuerrentPage] = useState(1);
  const [pokemonForPage, setPokemonForPage] = useState(6);

  const lastPokemon = currentPage * pokemonForPage;
  const firstPokemon = lastPokemon - pokemonForPage;

  const currrentPokemons = myPokemons.slice(firstPokemon, lastPokemon);

  const paginado = (pageNumber) => {
    setCuerrentPage(pageNumber);
  };


  let [myPokemons2, setMyPokemons2] = useState(array4);


  const [currentPage2, setCuerrentPage2] = useState(1);
  const [pokemonForPage2, setPokemonForPage2] = useState(6);

  const lastPokemon2 = currentPage2 * pokemonForPage2;
  const firstPokemon2 = lastPokemon2 - pokemonForPage2;

  const currrentPokemons2 = myPokemons2.slice(firstPokemon2, lastPokemon2);

  const paginado2 = (pageNumber) => {
    setCuerrentPage2(pageNumber);
  };




  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  function setCambio(array) {
    setMyPokemons(array);
  }

  function setCambio2(array) {
    setMyPokemons2(array);
  }

  return (
    <div>
      <div className="sectionOne">
        <div className="titleSectionOne">
          <h1>Big Comeback</h1>
          <h5>
            Nullam porta, eros id aliquam pulvinar, urna ex mattis eros, quis
            vestibulum urna turpis et rius. Mauris porttitor risus faucibus,
            auctor arcu a, tincidunt nibh...
          </h5>
          <div>
            <button className="BtnOne">WATCH NOW</button>
            <button className="BtnTwo">+ PLAYLIST</button>
          </div>
        </div>
      </div>

      <div className="sectionTwo">
        <div className="positionBtnSection3">
          <button
            className={myPokemons[0] === img1 ? "btnChangeCarrousel" : null}
            onClick={() => setCambio(array1)}
          >
            Today
          </button>
          <button
            className={myPokemons[0] === img2 ? "btnChangeCarrousel" : null}
            onClick={() => setCambio(array2)}
          >
            <a>/</a> This week
          </button>
          <button
            className={myPokemons[0] === img3 ? "btnChangeCarrousel" : null}
            onClick={() => setCambio(array3)}
          >
            <a>/</a> Last 30 days
          </button>
        </div>
        <div>
          <div className="carrousel">
            {currrentPokemons.map((elm) => {
              return (
                <div>
                  <img key={generarId()} src={elm} alt="" />
                  <h5 className="title5">Action,2016</h5>
                  <h6 className="title6">Laby Bird</h6>
                </div>
              );
            })}
          </div>
          <div className="positionCarrousel">
            <Paginado
              pokemonForPage={pokemonForPage}
              myPokemons={myPokemons.length}
              paginado={paginado}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>

      <div className="sectionTree">
        <div className="positionBtnSection4">
          <button
            className={myPokemons2[0] === img4 ? "btnChangeCarrousel" : null}
            onClick={() => setCambio2(array4)}
          >
            Today
          </button>
          <button
            className={myPokemons2[0] === img1 ? "btnChangeCarrousel" : null}
            onClick={() => setCambio2(array5)}
          >
            <a>/</a> This week
          </button>
          <button
            className={myPokemons2[0] === img3 ? "btnChangeCarrousel" : null}
            onClick={() => setCambio2(array6)}
          >
            <a>/</a> Last 30 days
          </button>
        </div>
        <div>
          <div className="carrousel2">
            {currrentPokemons2.map((elm) => {
              return (
                <div>
                  <img key={generarId()} src={elm} alt="" />
                  <h5 className="title5">Action,2016</h5>
                  <h6 className="title6">Laby Bird</h6>
                </div>
              );
            })}
          </div>
          <div className="positionCarrousel2">
            <Paginado2
              pokemonForPage2={pokemonForPage2}
              myPokemons2={myPokemons2.length}
              paginado2={paginado2}
              currentPage2={currentPage2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
