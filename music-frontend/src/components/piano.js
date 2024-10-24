import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import SoundfontProvider from './soundfont-player';
import { useState } from 'react';

import './piano.css'; // Ensure your CSS file is imported

function PianoDisplay(props) {
    const [isAudioContextStarted, setIsAudioContextStarted] = useState(false);
    const firstNote = MidiNumbers.fromNote('c4');
    const lastNote = MidiNumbers.fromNote('c5');
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: firstNote,
      lastNote: lastNote,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });
    const noteRange = {
        first: MidiNumbers.fromNote('c4'),
        last: MidiNumbers.fromNote('c5'),
    };
    const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';
    let audioContext = new (window.webkitAudioContext || window.AudioContext)();
    const startAudioContext = () => {
        audioContext.resume().then(() => {
          setIsAudioContextStarted(true); // Update state when AudioContext is started
          

        });
      };
    return (
        <div className='center'>
        {!isAudioContextStarted ? (
            <button onClick={startAudioContext}>Start Piano</button>
          ) : (
       
            <SoundfontProvider
              instrumentName="acoustic_grand_piano"
              audioContext={audioContext}
              hostname={soundfontHostname}
              render={({ isLoading, playNote, stopNote }) => (
                <Piano
                  noteRange={noteRange}
                  playNote={playNote}
                  stopNote={stopNote}
                  disabled={isLoading}
                  keyboardShortcuts={keyboardShortcuts}
                  className="piano-container"
                />
              )}
            />
            
            )};
            </div>
        );
  }
  export default PianoDisplay