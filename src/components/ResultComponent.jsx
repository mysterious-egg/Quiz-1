import './ResultComponent.css';

let ResultComponent = () => (
    <div className="Result">
        <div className="title">Result</div>
        <div className="card">
            <div className="comment">You need more practice!</div>
            <div className="score">Your score is %</div>
            <div className='stats'>
                    <p>Total number of questions <span>69</span></p> 
                    <p>Number of attempted questions <span>69</span></p> 
                    <p>Number of currect answers <span>69</span></p> 
                    <p>Number of wrong answers <span>-69</span></p> 
                </div>
        </div>
        <div className="butttonDiv">
            <button className='again'>Play Again</button>
            <button className='home'>Back to Home</button>
        </div>
    </div>
);

export default ResultComponent