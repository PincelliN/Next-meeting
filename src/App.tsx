import "./App.css";
import Headers from "./components/header";
import GymGuy from "./asset/tizio-palestra_naoqwo.jpg";
import HeadphonesGirl from "./asset/tizia-cuffie_xf2bae.jpg";
import GlassesGirl from "./asset/tipa-occhiali_svc9jp.jpg";
import VeganGuy from "./asset/tizio_awlq7r.jpg";
import JacketGuy from "./asset/tizio-giacca_jvzktv.jpg";
import Meetings from "./components/meetings";
import { Meeting } from "./types/meeting";
import { useState } from "react";

function App() {
  const meetings: Meeting[] = [
    {
      id: 1,
      img: GymGuy,
      name: "Francesco Robiola",
      ideal: "No pain no Gain XOXO PALESTRA MUSCOLI POTENZA",
    },
    {
      id: 2,
      img: HeadphonesGirl,
      name: "Sabrina Cortelli",
      ideal: "La musica è per l'anima quello che la ginnastica è per il corpo.",
    },
    {
      id: 3,
      img: JacketGuy,
      name: "Mike Russel",
      ideal: "Non permettere a nessuno di dirti che non sei capace",
    },
    {
      id: 4,
      img: GlassesGirl,
      name: "Rebecca Orlando",
      ideal:
        "La fotografia è passione e amore, è l’emozione passeggera, che arriva e subito vola via.",
    },
    {
      id: 5,
      img: VeganGuy,
      name: "Crhistian Minerva",
      ideal:
        "Non mangerei un hamburger nemmeno se mi pagassero 40,000 dollari.",
    },
  ];

  const [meet, setMet] = useState(meetings);

  const handleClick = (id: number) => {
    setMet((prevStarte) => prevStarte.filter((el) => el.id !== id));
  };
  return (
    <>
      <div className="App">
        <Headers meetings={meetings.length} />
        <Meetings meetings={meet} remove={handleClick} />
      </div>
    </>
  );
}

export default App;
