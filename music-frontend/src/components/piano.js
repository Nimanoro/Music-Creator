import React, {useState} from "react";
import axios from "axios";

function playSound(note){
    const audio = new Audio(`http://localhost:8000/api/note/${note}`);
    audio.play();
}

function Piano() {
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
    const [melody, setMelody] = useState([]);

    
    const addNote = (note) => {
        console.log(note);
        setMelody([...melody, note]);
    }


    const sendMelody = () => {
        axios.post('http://localhost:8000/api/generate_music/', { melody })
            .then(response => console.log(response.data))
            .catch(error => console.error('Error:', error));
    }

    return (
        <div>
            <h1>AI Music Creation Tool</h1>
            <button onClick={sendMelody}>Generate Music</button>
            <div>
                {notes.map(note => (
                    <button key={note} onClick={() => addNote(note)}>{note}</button>
                ))}

            </div>
        </div>
    );
}
export default Piano;
