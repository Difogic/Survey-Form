import React from 'react'
import welcomeImage from '../../images/support_cat.png'
import NextButton from '../component/NextButton'

const WelcomeScreen = ({ transition, isLastPage, submit }) => {
  return (
    <div className="content text-centered">
      <div>
        <img className="image" src={welcomeImage} alt="welcome" />
      </div>
      <div className="question">Hello!</div>
      <div className="welcome-text">Let's dive into your problem together</div>
      <NextButton
        isLastPage={isLastPage}
        transition={transition}
        submit={submit}
        buttonText={'Begin'}
        className="text-centered"
      />
    </div>
  )
}

export default WelcomeScreen
