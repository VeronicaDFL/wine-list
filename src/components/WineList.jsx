import { useState, useEffect } from "react"
import WineCard from "./WineCard"

    //set what comes out first('reds)
export default function WineList() {

    const [theWines, setTheWines] = useState()
    const [color, setColor] = useState ('reds')

    //listen for ${color} change
    const getWines = () => {
        fetch(`https://api.sampleapis.com/wines/${color}`)
        .then(response => response.json())
        .then(setTheWines)
        .catch(alert)
     }
    //when this first loads go get the wines
     useEffect(() => {
        getWines()
     },[color])

    //adding bottoms to change the ${color} and loads new wine list
    return (
        <>
            <div className="buttons">
                <button onClick={() => setColor('reds')}>Reds</button>
                <button onClick={() => setColor('whites')}>Whites</button>
                <button onClick={() => setColor('sparkling')}>Sparkling</button>
                <button onClick={() => setColor('rose')}>Rose</button>
                </div>
        <section className="wine-list">
           {(!theWines)
           ?<h2>Loading ...</h2>
           : theWines.map(wine => (
            <WineCard key={wine.id} wine={wine}/>
            ))

        }
     </section>
     </>
   )
   }
           

        
            
           