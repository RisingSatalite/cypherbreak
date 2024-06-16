'use client'
import { useState } from 'react';

export default function ceaserCypher(){
    const [shift, setShift] = useState(1);
    const [encyptInput, setEcyptInput] = useState('');
    const [Edisplay, EsetDisplay] = useState('');
    const [decyptInput, setDecyptInput] = useState('');
    const [Ddisplay, DsetDisplay] = useState('');

    const caesarShift = (text, shift) => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const index = alphabet.indexOf(char.toLowerCase());

            if (index !== -1) {
                let shiftedIndex = (index + shift) % alphabet.length;
            if (shiftedIndex < 0) {
                shiftedIndex += alphabet.length;
            }
            result += alphabet[shiftedIndex];
            } else {
            result += char;
            }
        }

        return result;
    }

    const Encypt = (value, shift) => {
        EsetDisplay(caesarShift(value,shift))
        if(value === ""){
            EsetDisplay("Enter a value for Encypt first")
        }
    }
    const Decypt = (value, shift) => {
        DsetDisplay(caesarShift(value, -shift))
        if(value === ""){
            DsetDisplay("Enter a value for Decypt first")
        }
    }
    return(
        <div class="cypher-style bg-orange-950">
            <h2>Ceaser Cypher</h2>
            <div>
                <input 
                    type="number" 
                    min="1" 
                    max="25" 
                    step="1"
                    value={shift} 
                    onChange={(e) => setShift(e.target.value)}
                    placeholder="Select shift value"
                />
                <span>Cypher Shift</span>
            </div>
            <input 
                type="text" 
                value={encyptInput} 
                onChange={(e) => setEcyptInput(e.target.value)}
                placeholder="Enter text to encypt"
            />
            <button onClick={() => Encypt(encyptInput, shift)}>
                <div>Encypt</div>
            </button>
            <div>{Edisplay}</div>
            <input 
                type="text" 
                value={decyptInput} 
                onChange={(e) => setDecyptInput(e.target.value)}
                placeholder="Enter text to decrypt" 
            />
            <button onClick={() => Decypt(decyptInput, shift)}>
                <div>Decypt</div>
            </button>
            <div>{Ddisplay}</div>
        </div>
    )
}