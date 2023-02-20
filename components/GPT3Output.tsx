import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS styles

function GPT3Output({ apiOutput }) {
  const [styledOutput, setStyledOutput] = useState('');

  useEffect(() => {

    const formattedOutput = apiOutput.replace(/\n/g, '<br>');

    // Wrap specific parts of the output in <span> tags with class names
    const styledText = apiOutput
      .replace(/(openai)/gi, '<span class="highlight">$1</span>')
      .replace(/(GPT-3)/gi, '<span class="highlight">$1</span>');

    setStyledOutput(styledText);
  }, [apiOutput]);

  return (
    <div dangerouslySetInnerHTML={{ __html: styledOutput }} />
  );
}

export default GPT3Output;