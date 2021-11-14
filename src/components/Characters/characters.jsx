import React, {useState, useEffect} from "react";
import axios from "axios";

const Characters = () => {
    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        document.title = "Characters - Hogwarts";
      }, []);

    useEffect(() => {
        fetchAllCharacters();
      }, []);

    const fetchAllCharacters = async (event) => {
        await axios 
        .get(`http://hp-api.herokuapp.com/api/characters`)
        .then((response) => {
            setCharacterData(response.data);
            console.log(response)
        }).catch(err => console.log(err))
    };

    if (characterData[0] === undefined){
        // console.log(characterData)
        return(
            <div>Loading....</div>
        )
    }
    else {
        console.log(characterData)
        return(
            <div>
                <h3>Harry Potter Characters</h3>
            </div>
        )
    }
}

export default Characters;