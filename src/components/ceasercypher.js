'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function CeaserCypher(){
    const [shift, setShift] = useState(1);
    const [encyptInput, setEcyptInput] = useState('');
    const [Edisplay, EsetDisplay] = useState('');
    const [decyptInput, setDecyptInput] = useState('');
    const [Ddisplay, DsetDisplay] = useState('');

    //Image rotations
    const [rotation, setRotation] = useState(14);

    useEffect(() => {
        const image = document.getElementById('ceasercypherinternalimage');
        
        const rotate = (Math.round(360 * (shift / 26)))
        setRotation(rotate)
        image.style.transform = `rotate(${rotate}deg)`;//Do not set it from the setRotation immediate, because there was not enough time to update it before being called again.
      }, [shift]);

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

    const shiftChange= (e) => {
        setShift(e)
        Decypt(decyptInput, shift)
        Encypt(encyptInput, shift)
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
        <div class="cypher-style">
            <div class="image-container">
                <Image 
                id="ceasercypherinternalimage"
                src="/CeaserCypher3.png"
                width={90}
                height={90}
                class="base-image"
                alt='An image of the 26 letters of the enghlish alphabet around a circle'
                />
                <Image 
                src="/CeaserCypher3.png"
                width={200}
                height={200}
                class="overlap-image"
                alt='An image of the 26 letters of the enghlish alphabet around a circle'
                />
            </div>
            <div>
            <h2>Ceaser Cypher</h2>
            <div>
                <input 
                    type="number" 
                    min="0" 
                    max="26" 
                    step="1"
                    value={shift} 
                    onChange={(e) => shiftChange(e.target.value)}
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
        </div>
    )
}