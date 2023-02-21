
import React from "react";
import Statistics from "components/Statistics";
import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";
import Notification from "components/Notification";




export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };


increment = (e) => {
        this.setState((prevState) => {
            return { [e]: prevState[e] + 1 }
           
        }
    )}

    countTotalFeedback = () => this.state.good + this.state.bad + this.state.neutral 
    
    positivePercentage = () => Math.round(this.state.good/this.countTotalFeedback()*100)
  

  render() {
      const { good, neutral, bad } = this.state;
       return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
             color: '#010101',
             padding: 30,
           
      }}
    >

   
         
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
                     good={good}
                     neutral={neutral}
                     bad={bad}
                     total={this.countTotalFeedback()}
                     positivePercentage={this.positivePercentage()} />

             </Section>

             
         }
        
    </div>
  );
         
}
 }



