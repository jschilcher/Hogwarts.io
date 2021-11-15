import React, {useState, useEffect} from "react";
import axios from "axios";
import "./characters.css";
import Search from "../Search/search";

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
                <h2>Harry Potter Characters</h2>
                <Search/>
                <div className="card-container">
                {characterData.map((character) =>
                    <div className="book-card" style={{width: 200}}>
                        <img src={`${character.image}`} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h3 className="card-title">{`${character.name}`}</h3>
                                <p className="card-text">Birth Date: {`${character.dateOfBirth}`}</p>
                                <p className="card-text">House: {`${character.house}`}</p>
                                <p className="card-text">Species: {`${character.species}`}</p>
                                <p>Wand: {`${character.wand.wood}`}, {`${character.wand.core}`}, {`${character.wand.length}`}</p>
                            </div>
                    </div>
                )}
                </div>
            </div>
        )
    }
}

export default Characters;