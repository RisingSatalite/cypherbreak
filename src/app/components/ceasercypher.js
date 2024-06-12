import { useState } from 'react';

export default ceaserCypher = () => {
    const [Edisplay, EsetDisplay] = useState('');
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

        </div>
    )
}