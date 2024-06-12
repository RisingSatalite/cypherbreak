'use client'
import { useState } from 'react';

export default function ceaserCypher(){
    const [encyptInput, setEcyptInput] = useState('');
    const [Edisplay, EsetDisplay] = useState('');
    const [decyptInput, setDecyptInput] = useState('');
    const [Ddisplay, DsetDisplay] = useState('');

    const Encypt = (value) => {
        EsetDisplay(value)
    }
    const Decypt = (value) => {
        DsetDisplay(value)
    }
    return(
        <div>
            <h2>Ceaser Cypher</h2>
            <input 
                type="text" 
                value={encyptInput} 
                onChange={(e) => setEcyptInput(e.target.value)}
                placeholder="Enter text" 
            />
            <button onClick={() => Encypt(encyptInput)}>
                <div>Encypt</div>
            </button>
            <div>{Edisplay}</div>
            <input 
                type="text" 
                value={encyptInput} 
                onChange={(e) => setDecyptInput(e.target.value)}
                placeholder="Enter converted" 
            />
            <button onClick={() => Decypt(button)}>
                <div>Decypt</div>
            </button>
            <div>{Edisplay}</div>
        </div>
    )
}