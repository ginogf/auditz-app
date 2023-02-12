import { SetStateAction, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [userInput, setUserInput] = useState('');
    const [apiOutput, setApiOutput] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)
  
    const callGenerateEndpoint = async () => {
      setIsGenerating(true);
      
      console.log("Calling OpenAI...")
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });
  
      const data = await response.json();
      const { output } = data;
      console.log("OpenAI replied...", output.text)
  
      setApiOutput(`${output.text}`);
      setIsGenerating(false);
    }
    const onUserChangedText = (event: { target: { value: SetStateAction<string>; }; }) => {
      setUserInput(event.target.value);
    };

  return (
    <>
      <Head>
        <title>auditz</title>
        <meta name="description" content="Audit your smart contracts in minutes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      < Navbar />
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>audit your smart contracts</h1>
          </div>
          <div className="header-subtitle">
            <h2>efortlessly secure your contracts in minutes, for free.</h2>
          </div>
          <br/>
          <div>
            <p>Copy your contract here:</p>
          </div>
          <div className="prompt-container">
            <textarea 
              className="prompt-box"
              placeholder="start typing here"
              value={userInput}
              onChange={onUserChangedText}
            />
            <div className="prompt-buttons">
              <a
                className={isGenerating ? 'generate-button loading' : 'generate-button'}
                onClick={callGenerateEndpoint}
              >
                <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Generate report</p>}
                </div>
              </a>
            </div>
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Report</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  )
}
