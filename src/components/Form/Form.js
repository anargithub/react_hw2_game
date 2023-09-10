import "./Form.css";

export default function Form ({name, score, currentPoints}){
    return(
       
        <div className='form'>
            <div className='formOne'>
                <h1>{name}</h1>
                <p>{score}</p>
            </div>
            <div className='formTwo'>
                <p>CURRENT POINTS</p>
                <p>{currentPoints}</p>
            </div>
        </div>
    )
}