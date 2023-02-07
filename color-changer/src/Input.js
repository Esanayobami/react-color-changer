const Input = ({bgColorValue , setColorValue}) => {
    return ( 
        <input 
        type="text"
        role="searchbox"
        value={bgColorValue}
        onChange={(e) =>{setColorValue(e.target.value)}}
        className="inputsrch"
        />
     )
}
 
export default Input;