import './QuizComponent.css'

let QuizComponent=()=>(
    <div className="container">
    <div className="Quiz">
        <h2>Question</h2>
        <div className="counter">1 of 69</div>
        <div className="question">
            Which is the only mammal that can jump?
        </div>
        <div className="options">
            <div className="opt">Kalvian</div>
            <div className="opt">Allenite</div>
            <div className="opt">JECRCian</div>
            <div className="opt">Elephant</div>
        </div>
        <div className="butttonDiv">
            <button className='prev'>Previous</button>
            <button className='next'>Next</button>
            <button className='quit'>Quit</button>
        </div>
    </div>
    </div>
)

export default QuizComponent