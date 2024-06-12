import React from "react";
import './styles.css';
const Modal = (props) => {
    return (
        <div className="modal">
            <div className="content">
                <button className="close" onClick={props.onClose}>Close</button>
                <img src={props.pokemon.image} alt={props.pokemon.name} />
                <br />
                <div>
                    <span>Tên pokemon: </span>
                    <input type="text" value={props.pokemon.name} onChange={(e) => {
                        const newPokemon = {
                            ...props.pokemon,
                            name: e.target.value
                        }
                        props.onChangePokemon(newPokemon);
                    }} />
                </div>
                <div className="types">
                    <span>Hệ: </span>
                    <select multiple={true} value={props.pokemon.types} onChange={(e) => {
                        const newTypes = Array.from(e.target.selectedOptions, option => option.value);
                        const newPokemon = {
                            ...props.pokemon,
                            types: newTypes
                        }
                        props.onChangePokemon(newPokemon);
                    }}>
                        {["Grass", "Poison", "Fire", "Flying", "Water", "Bug"].map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <button className='save' onClick={() => props.onSave(props.pokemon)}>Lưu</button>
            </div>
        </div>
    );
}
export default Modal

