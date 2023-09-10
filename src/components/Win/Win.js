import './Win.css';

export default function Win({winner}){
    return(
        <div className='winner'>
            <h1>Winner {winner}</h1>
        </div>
    )
}