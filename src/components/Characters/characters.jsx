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
                {characterData.map((character) =>
                    <div className="book-card" style={{width: 200}}>
                        <img src={`${character.image}`} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h3 className="card-title">{`${character.name}`}</h3>
                                <p className="card-text">{`${character.dateOfBirth}`}</p>
                                <p className="card-text">{`${character.house}`}</p>
                            </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Characters;