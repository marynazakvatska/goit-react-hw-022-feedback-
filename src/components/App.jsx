
import React from "react";
import Interface from "./Interface";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     {/*  <Section title="Please leave feedback">
     <Statistics good={} neutral={} bad={} total={} positivePercentage={} />
       
      </Section>
      <Section title="Statistics">
        <FeedbackOptions />
          </Section> */}

      
          <Interface />
   
    </div>
  );
};


