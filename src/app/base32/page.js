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

    const DecryptBase32 = (value) => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
        let bits = '';

        // Convert each Base32 character to its 5-bit binary representation
        for (let i = 0; i < value.length; i++) {
            const idx = alphabet.indexOf(value[i].toUpperCase());
            if (idx === -1) continue; // skip invalid chars
            bits += idx.toString(2).padStart(5, '0');
        }

        // Group bits into bytes and convert to characters
        let decoded = '';
        for (let i = 0; i < bits.length; i += 8) {
            const byte = bits.substr(i, 8);
            if (byte.length < 8) continue;
            decoded += String.fromCharCode(parseInt(byte, 2));
        }

        return decoded;
    }

    const Encypt = (value) => {
        EsetDisplay(ToBase32(value))
        if(value === ""){
            EsetDisplay("Enter a value for Encypt first")
        }
    }
    const Decypt = (value) => {
        DsetDisplay(DecryptBase32(value))
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