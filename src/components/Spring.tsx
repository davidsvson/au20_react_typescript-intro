import { useState } from "react";

const bgColor : string = '#05B346';
const selectedBgColor : string = '#F346B8';

interface SpringSign {
    sign: string;
    picked: boolean;
}

const Spring = () => {

    const defaultSigns: SpringSign[] = [{ sign: 'grillning', picked: false}, {sign: 'pollen', picked: false}];

    const [springSigns, setSpringSigns] = useState(defaultSigns);
    const [newSign, setNewSign] = useState('');

    
    const selectSign = (sign: SpringSign, index: number) => {
        let updatedSigns = [...springSigns];
        sign.picked = !sign.picked;        
        updatedSigns[index] = sign;
        setSpringSigns(updatedSigns);
    }

    const signElements = springSigns.map((sign, index) => (
        <div key={index}
            style={{backgroundColor : sign.picked ? selectedBgColor : bgColor }}
            onClick={() => selectSign(sign, index)}
        >
            {sign.sign}
        </div>
    ))

    const handleAddSign = () => {
        setSpringSigns([...springSigns, { sign: newSign, picked: false}]);
        setNewSign('');
    }

    return (
        <section>
            <h2>Vårtecken</h2>
            {signElements}
            <p>
                Fler vårtecken:
                <input type="text" placeholder="Ett vårtecken"
                    onChange={event => {setNewSign(event.target.value)}}
                    value={newSign}
                />
                <button onClick={handleAddSign}> Lägg till </button>
            </p>
        </section>
    )

}

export default Spring;
