import React from 'react'
import Card from './card'
import Action from './Action'
import List from './List'
import FeedbackButton from './FeedbackButton' 

const MainLayout = () => {
  const handleCreateRequest = () => {
    console.log('Create new request');
    alert('Create new request feature coming soon!');
  }
  
  const handleFeedback = () => {
    console.log('Feedback submitted');
    alert('Thank you for your feedback! We appreciate your input.');
  }
  
  return (
    <div style={{ 
      margin: 0,
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      width: '100vw',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        gap: '20px',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'stretch'
      }}>
        <Card 
          title="CLAIMED (APPROVED/PAID)"
          count="7"
          subtitle="batch(s)"
        />
        
        <Card 
          title="PENDING APPROVAL"
          count="3"
          subtitle="batch(s)"
        />
        
        <Card 
          title="REJECTED"
          count="1"
          subtitle="batch(s)"
        />
        
        <Card 
          title="IN PROGRESS"
          count="12"
          subtitle="batch(s)"
        />
      </div>
        <Action 
        title="Employees expense management"
        buttonText="Create a new request"
        onButtonClick={handleCreateRequest}
      />
        <List />
      
      <FeedbackButton onClick={handleFeedback} />
    </div>
  )
}

export default MainLayout