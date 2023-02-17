import React from "react";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";


class Interface extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

goodIncrement = () => {
        this.setState(prevState => ({
     good: prevState.good + 1,
        })  
    )}


neutralIncrement = () => {
        this.setState(prevState => ({
neutral: prevState.neutral + 1,  
        })  
    )}

increment = (e) => {
        this.setState((prevState) => {
   return   {[e]: prevState[e] + 1}
        }
    )}

    countTotalFeedback = () => this.state.good + this.state.bad + this.state.neutral 
    
    positivePercentage = () => Math.round(this.state.good/this.countTotalFeedback()*100)
  

     render() {
     return(
        <div>
         
        <Section title="Please leave feedback">
          <FeedbackOptions 
        
     options={this.state} 
         onLeaveFeedback= {this.increment} />
                 
          </Section>
            
             {this.countTotalFeedback() === 0 ?   
<Section title="Statistics">
                     <Notification message="There is no feedback"></Notification>
                 </Section>
                 

        : <Section title="Statistics">
                 <Statistics
                     good={this.state.good}
                     neutral={this.state.neutral}
                     bad={this.state.bad}
                     total={this.countTotalFeedback()}
                     positivePercentage={this.positivePercentage()} />

             </Section>

             
         }
         </div>
    )
}
 }
export default Interface






   /*   render() {
     return(
        <div>
         
       <h1>Please leave feedback</h1>
              <div>
                 <button type='button' onClick={this.goodIncrement}>Good</button>
            <button type='button' onClick={this.neutralIncrement}>Neutral</button>
                     <button type='button' onClick={this.badIncrement}>Bad</button>
         </div>
         
             
            

            <div>
                 <h1>Statistics</h1>
                 <Statistics
                     good={this.state.good}
                     neutral={this.state.neutral}
                     bad={this.state.bad}
                     total={this.countTotalFeedback()}
                     positivePercentage={this.positivePercentage()} />

                 <div>
        <ul>

       <li>Good: {this.state.good} </li>
                     <li>Neutral:  {this.state.neutral}</li>
                     <li>Bad:  {this.state.bad}</li>
            </ul>
            <p>Total: {this.countTotalFeedback()}</p>
                 <p>Positive Feedback: {this.positivePercentage()}%</p>
                 </div>
             </div>
         
         </div>
    ) */