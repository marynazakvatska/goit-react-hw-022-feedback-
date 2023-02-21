import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }, index) => {
    return Object.keys(options).map(btnName => {
      /*   const massiveClass = ['btn'] */
         return (
             <button key={btnName}
                 type='button'
              /*  className={massiveClass.join(' ')} */  
                 onClick={() => onLeaveFeedback(btnName) }>{btnName}</button>
                    
    )
    })
   
} 
export default FeedbackOptions
