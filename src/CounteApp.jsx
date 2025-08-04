import { useState } from "react";
import PropTypes from "prop-types";



export const CounterApp = ({value}) => {

    const [ counter , setCounter ] = useState(value);
    
    const handleAdd = () =>{
        // setCounter( counter+1 );
        setCounter( (c)=> incrementar(c) );
    }

    const incrementar = (valor) =>{return valor +1};

    const handleRest = () =>setCounter( (c)=> c-1 );

    const handleReset = () =>{setCounter( (c)=> c = value );}

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleRest}>-1</button>
            <button onClick={handleReset}>reset</button>
        </>
    )
}

CounterApp.propTypes={
    value : PropTypes.number.isRequired
}