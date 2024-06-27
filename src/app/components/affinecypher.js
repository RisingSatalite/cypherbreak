'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function AffineCypher(){
    const [shift, setShift] = useState(1);
    const [shift2, setShift2] = useState(1);
    const [encyptInput, setEcyptInput] = useState('');
    const [Edisplay, EsetDisplay] = useState('');
    const [decyptInput, setDecyptInput] = useState('');
    const [Ddisplay, DsetDisplay] = useState('');

    function affineCipher(text, a, b, mode) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const result = [];
    
        for (let i = 0; i < text.length; i++) {
            const char = text.toUpperCase()[i];
            const index = alphabet.indexOf(char);
    
            if (index !== -1) {
                let calculation;
                if (mode === 'encrypt') {
                    calculation = (a * index + b) % 26;
                } else if (mode === 'decrypt') {
                    calculation = (modInv(a, 26) * (index - b)) % 26;
                    if (calculation < 0) { // Handle negative results
                        calculation += 26;
                    }
                }
                result.push(alphabet[calculation]);
            } else {
                result.push(char);
            }
        }
    
        return result.join(''); // Convert array to string
    }
    
    function modInv(a, m) {
        a = ((a % m) + m) % m;
        for (let x = 1; x < m; x++) {
            if ((a * x) % m === 1) {
                return x;
            }
        }
        throw new Error('No modular inverse found');
    }

    const shiftChange= (e) => {
        setShift(e)
        Decypt(decyptInput, shift)
        Encypt(encyptInput, shift)
    }

    const shiftChange2= (e) => {
        setShift2(e)
        Decypt(decyptInput, shift)
        Encypt(encyptInput, shift)
    }

    const Encypt = (value) => {
        EsetDisplay(affineCipher(value,shift,shift2,'encrypt'))
        if(value === ""){
            EsetDisplay("Enter a value for Encypt first")
        }
    }
    const Decypt = (value) => {
        DsetDisplay(affineCipher(value, shift,shift2,'decrypt'))
        if(value === ""){
            DsetDisplay("Enter a value for Decypt first")
        }
    }
    return(
        <div class="cypher-style bg-orange-950">
            <div>
            <h2>Affine Cypher</h2>
            <div>
                <input 
                    type="number" 
                    min="1" 
                    max="12" 
                    step="1"
                    value={shift} 
                    onChange={(e) => shiftChange(e.target.value)}
                    placeholder="Select shift value"
                />
                <span>Cypher Shift A</span>
            </div>
            <div>
                <input 
                    type="number" 
                    min="0" 
                    max="25" 
                    step="1"
                    value={shift2} 
                    onChange={(e) => shiftChange2(e.target.value)}
                    placeholder="Select shift value"
                />
                <span>Cypher Shift B</span>
            </div>
            <input 
                type="text" 
                value={encyptInput} 
                onChange={(e) => setEcyptInput(e.target.value)}
                placeholder="Enter text to encypt"
            />
            <button onClick={() => Encypt(encyptInput)}>
                <div>Encypt</div>
            </button>
            <div>{Edisplay}</div>
            <input 
                type="text" 
                value={decyptInput} 
                onChange={(e) => setDecyptInput(e.target.value)}
                placeholder="Enter text to decrypt" 
            />
            <button onClick={() => Decypt(decyptInput)}>
                <div>Decypt</div>
            </button>
            <div>{Ddisplay}</div>
            </div>
        </div>
    )
}