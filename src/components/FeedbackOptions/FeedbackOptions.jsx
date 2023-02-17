

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return Object.keys(options).map(btnName => {
         return (
                 <button key={btnName} type='button' onClick={() => onLeaveFeedback(btnName)}>{btnName}</button>
                    
    )
    })
   
} 
export default FeedbackOptions
