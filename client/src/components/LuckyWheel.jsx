import React, { Component } from 'react'

import WheelComponent from 'react-wheel-of-prizes'
// import 'react-wheel-of-prizes/dist/index.css'

const LuckyWheel = () => {

    const code = 'disc5p'

  const segments = [
    '10% DISCOUNT',
    'NO WIN TODAY',
    'NO WIN TODAY',
    'NO WIN TODAY',
    'NO WIN TODAY',
    'NO WIN TODAY',
    'NO WIN TODAY',
    '5% DISCOUNT',
    'NO WIN TODAY',
    'NO WIN TODAY',
    'NO WIN TODAY',
    'NO WIN TODAY',
  ]
  const segColors = [
    'rgba(49, 233, 129, 1)',
    'rgba(250, 51, 47, 1)',
    'rgba(49, 233, 129, 1)',
    'rgba(255, 153, 219, 1)',
    'rgba(240, 200, 8, 1)',
    'rgba(49, 233, 129, 1)',
    'rgba(250, 51, 47, 1)',
    'rgba(49, 233, 129, 1)',
    'rgba(255, 153, 219, 1)',
    'rgba(240, 200, 8, 1)',
    'rgba(255, 153, 219, 1)',
    'rgba(240, 200, 8, 1)',
   
  ]
  const onFinished = (winner) => {
    if (winner === 'NO WIN TODAY') {
        alert(`oh no... Don't worry, try next time`)
        localStorage.setItem('prize', `nothing`)
    } else {
        alert(`You have won a ${winner}`)
        localStorage.setItem('prize', `disc5p`)
    }

  }
  return (

    <WheelComponent
      segments={segments}
      segColors={segColors}
    
      onFinished={(winner) => onFinished(winner)}
      primaryColor='white'
      contrastColor='black'
      buttonText='Spin'
      isOnlyOnce={true}
      size={250}
      upDuration={100}
      downDuration={700}
      fontFamily='Montserrat'
      />
  )
}

export default LuckyWheel