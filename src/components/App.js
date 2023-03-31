// create your App component here

import React, { useEffect, useState } from "react";

function App() {
    const[image, setImage]=useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
         .then(resp => resp.json())
         .then(data => setImage(data.message))
    }, [])

    return (
        <div>
            {image ? <img src={image} alt="A Random Dog"></img> : <p>"Loading..."</p>}
        </div>
    )
}

export default App