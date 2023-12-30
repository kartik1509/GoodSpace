import React, { useRef,useState} from 'react';
import styled from "styled-components";
// import SpeechRecognition from "react-speech-recognition";

export default function Functions() {

  const [cmsg,changeCmsg]=useState("");

  const chatContainerRef = useRef(null);

  let videoStream;
  const videoElementRef = useRef(null);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoStream = stream;
        videoElementRef.current.srcObject = stream;
        chatContainerRef.current.appendChild(videoElementRef.current);
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  };

   const stopCamera = () => {
    if (videoStream) {
       const tracks = videoStream.getTracks();
       tracks.forEach(track => track.stop());
       videoElementRef.current.srcObject = null;
       chatContainerRef.current.removeChild(videoElementRef.current);
     }
   };

  // const textToSpeech = () => {
  //   const message = messageInputRef.current.value;
  //   if ('speechSynthesis' in window) {
  //     const utterance = new SpeechSynthesisUtterance(message);
  //     window.speechSynthesis.speak(utterance);
  //   } else {
  //     console.error('Text-to-speech not supported in this browser.');
  //   }
  // };

  const camstyleOn={
      marginLeft:"560px",
  };
  const camstyleOff={
      marginLeft:"560px",
      marginTop:"8px"
  };
  return (
    <div >
      <div ref={chatContainerRef}></div>
      <Button style={camstyleOn} onClick={startCamera}>Start Camera</Button>
      <Button style={camstyleOff} onClick={stopCamera}>Stop Camera</Button>
      {/* <button onClick={textToSpeech}>Text to Speech</button> */}
    </div>
  );
};

const Button = styled.button`
  height:10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;