'use client'
export default function AffineCypherInfo(){
    return(
        <div class="cypher-style">
            <p>The Affine cipher is a monoalphabetic substitution cipher that uses a linear equation to encrypt and decrypt text:
Encryption:
E(x) = (ax + b) mod m
Decryption:
D(x) = (a^-1(x - b)) mod m
The Affine cipher is a generalization of the Caesar cipher, where a=1 and b is the shift amount. The Affine cipher is more secure than the Caesar cipher, but it can still be broken through frequency analysis or other methods.
            </p>
        </div>
    )
}