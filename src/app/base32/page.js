'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Base32() {
    const [encyptInput, setEcyptInput] = useState('');
    const [Edisplay, EsetDisplay] = useState('');
    const [decyptInput, setDecyptInput] = useState('');
    const [Ddisplay, DsetDisplay] = useState('');

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
    return (
        <main className="flex flex-col items-center justify-between">
            <div class="p-10">Base32 converter</div>
        </main>
    );
}