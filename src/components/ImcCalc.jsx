import "./ImcCalc.css";
import Button from "./Button";
import { useState } from "react";

const ImcCalc = ({calcImc}) => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (evento) => {
        evento.preventDefault();
        setHeight("");
        setWeight("");
    }

    const validDigits = (text) => {
            return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (evento) => {
        const updateValue = validDigits(evento.target.value);
        setHeight(updateValue);
    }

    const handleWeightChange = (evento) => {
        const updateValue = validDigits(evento.target.value);
        setWeight(updateValue);
    }
  return (
    <div id="calc-container">
        <h2>IMC Calculadora</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name="height" id="height" placeholder="Exemplo 1,63" onChange={(evento) => handleHeightChange(evento)} value={height}/>
                </div>  

                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" id="weight" placeholder="Exemplo 58,5" onChange={(evento) => handleWeightChange(evento)} value={weight} />
                </div>  
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={(evento) => calcImc(evento, height, weight)}/>
                <Button id="clear-btn" text="Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}   

export default ImcCalc