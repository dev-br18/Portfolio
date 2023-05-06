import React, { useState, useEffect } from 'react';

function TypingEffect({ text,time }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
    }, time); // ajuste o tempo entre cada caractere digitado
  
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    setDisplayedText(text.substring(0, currentIndex));
  }, [currentIndex, text]);

  return (
    <div className='txt'>{displayedText}</div>
  );
}


export default TypingEffect;