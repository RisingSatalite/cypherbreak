'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Base32() {
    const [encyptInput, setEcyptInput] = useState('');
    const [Edisplay, EsetDisplay] = useState('');
    const [decyptInput, setDecyptInput] = useState('');
    const [Ddisplay, DsetDisplay] = useState('');

    const ToBase32 = (value) => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
        let bits = '';
        let base32 = '';

        for (let i = 0; i < value.length; i++) {
            bits += value.charCodeAt(i).toString(2).padStart(8, '0');
        }

        for (let i = 0; i < bits.length; i += 5) {
            const chunk = bits.substr(i, 5);
            if (chunk.length < 5) {
                base32 += alphabet[parseInt(chunk.padEnd(5, '0'), 2)];
            } else {
                base32 += alphabet[parseInt(chunk, 2)];
            }
        }

        return base32;
    }

    const Encypt = (value) => {
        EsetDisplay(ToBase32(value))
        if(value === ""){
            EsetDisplay("Enter a value for Encypt first")
        }
    }
    const Decypt = (value) => {
        DsetDisplay(caesarShift(value))
        if(value === ""){
            DsetDisplay("Enter a value for Decypt first")
        }
    }
    return (
        <main className="flex flex-col items-center justify-between">
            <div class="p-10">Base32 converter</div>
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
        </main>
    );
}