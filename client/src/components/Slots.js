import reel from '../assets/reel-strip.png'
import React, { useState } from "react";
import SlotMachine from "react-slot-machine-gen";

export const reels = [
    {
      imageSrc: {reel},
      symbols: [
        {
          title: 'star',
          position: 100,
          weight: 1
        },
        {
          title: 'money',
          position: 300,
          weight: 2
        },
        {
          title: 'cry',
          position: 500,
          weight: 6
        },
        {
          title: 'huh',
          position: 700,
          weight: 4
        },
        {
          title: 'tears',
          position: 900,
          weight: 3
        },
        {
          title: 'glasses',
          position: 1100,
          weight: 5
        }
    ]
    },
  ]
  
  export const Slots = () => {
    const [canPlay, setCanPlay] = useState(false);
    const onPlay = () => {
      setCanPlay(true);
      setCanPlay(false);
    };
    return (
      <>
        <SlotMachine reels={reels} play={canPlay} />
  
        <button id="play-button" onClick={() => setCanPlay(true)}>
          Play
        </button>
      </>
    );
  };