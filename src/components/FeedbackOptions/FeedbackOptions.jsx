/*  const FeedbackOptions = ({goodIncrement, neutralIncrement, badIncrement}) => {
    return (
         <div>
                 <button type='button' onClick={goodIncrement}>Good</button>
            <button type='button' onClick={neutralIncrement}>Neutral</button>
                     <button type='button' onClick={badIncrement}>Bad</button>
                     </div>
    )
} 
export default FeedbackOptions
 */
{/* <FeedbackOptions options={} onLeaveFeedback={}> */ }

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return Object.keys(options).map(btnName => {
         return (
                 <button key={btnName} type='button' onClick={() => onLeaveFeedback(btnName)}>{btnName}</button>
                    
    )
    })
   
} 
export default FeedbackOptions
