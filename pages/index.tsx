import { SetStateAction, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Navbar } from '@/components/Navbar'
import { useEffect } from 'react';


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

  const [styledOutput, setStyledOutput] = useState('');

  useEffect(() => {

    const formattedOutput = apiOutput.replace(/\n/g, '<br>');

    // Wrap specific parts of the output in <span> tags with class names
    const styledText = formattedOutput
      .replace(/(Issues Identified:)/gi, '<span class="highlight">$1</span>')
      .replace(/(Issues found:)/gi, '<span class="highlight">$1</span>')
      .replace(/(Security Vulnerabilities:)/gi, '<span class="highlight">$1</span>')
      .replace(/(Solution:)/gi, '<span class="highlight">$1</span>')
      // .replace(/(For example)/gi, '<span class="highlight">$1</span>')
      .replace(/(Code example)/gi, '<span class="highlight">$1</span>')
      .replace(/(Default Visibility:)/gi, '<span class="highlight">$1</span>')
      .replace(/(Integer Overflow and Underflow:)/gi, '<span class="highlight">$1</span>')
      .replace(/(Outdated Compiler Version:)/gi, '<span class="highlight">$1</span>')
      .replace(/(Floating Pragma)/gi, '<span class="highlight">$1</span>')
      .replace(/(Unchecked Call Return Value)/gi, '<span class="highlight">$1</span>')
      .replace(/(Access Control & Authorization)/gi, '<span class="highlight">$1</span>')
      .replace(/(SELFDESTRUCT Instruction)/gi, '<span class="highlight">$1</span>')
      .replace(/(Check-Effect-Interaction)/gi, '<span class="highlight">$1</span>')
      .replace(/(Assert Violation)/gi, '<span class="highlight">$1</span>')
      .replace(/(Deprecated Solidity Functions)/gi, '<span class="highlight">$1</span>')
      .replace(/(DoS)/gi, '<span class="highlight">$1</span>')
      .replace(/(Denial of Service)/gi, '<span class="highlight">$1</span>')
      .replace(/(Race Conditions)/gi, '<span class="highlight">$1</span>')
      .replace(/(Authorization through tx.origin)/gi, '<span class="highlight">$1</span>')
      .replace(/(Block values as a proxy for time)/gi, '<span class="highlight">$1</span>')
      .replace(/(Signature Unique Id)/gi, '<span class="highlight">$1</span>')
      .replace(/(Shadowing State Variable)/gi, '<span class="highlight">$1</span>')
      .replace(/(Weak Sources of Randomness)/gi, '<span class="highlight">$1</span>')
      .replace(/(Incorrect Inheritance Order)/gi, '<span class="highlight">$1</span>')
      .replace(/(Calls Only to Trusted Addresses)/gi, '<span class="highlight">$1</span>')
      .replace(/(Presence of Unused Variables)/gi, '<span class="highlight">$1</span>')
      .replace(/(EIP Standards Violation)/gi, '<span class="highlight">$1</span>')
      .replace(/(Assets Integrity)/gi, '<span class="highlight">$1</span>')
      .replace(/(User Balances Manipulation)/gi, '<span class="highlight">$1</span>')
      .replace(/(Data Consistency)/gi, '<span class="highlight">$1</span>')
      .replace(/(Flashloan Attack)/gi, '<span class="highlight">$1</span>')
      .replace(/(Token Supply Manipulation)/gi, '<span class="highlight">$1</span>')
      .replace(/(Gas Limit and Loops)/gi, '<span class="highlight">$1</span>')
      .replace(/(Style Guide Violation)/gi, '<span class="highlight">$1</span>')
      .replace(/(Requirements Compliance)/gi, '<span class="highlight">$1</span>')
      .replace(/(Environment Consistency)/gi, '<span class="highlight">$1</span>')
      .replace(/(Secure Oracles Usage)/gi, '<span class="highlight">$1</span>')
      .replace(/(Tests Coverage)/gi, '<span class="highlight">$1</span>')
      .replace(/(Stable Imports)/gi, '<span class="highlight">$1</span>')
      // .replace(/(1.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(2.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(3.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(4.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(5.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(6.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(7.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(8.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(9.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(10.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(11.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(12.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(13.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(14.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(15.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(16.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(17.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(18.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(19.)/gi, '<span class="highlight">$1</span>')
      // .replace(/(20.)/gi, '<span class="highlight">$1</span>')

      ;

      setStyledOutput(styledText);
  }, [apiOutput]);

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
            <h1>secure your contracts</h1>
          </div>
          <div className="header-subtitle">
            <h2>quickly scan smart contracts for vulnerabilities and get a detailed report.</h2>
          </div>
          <br />
        </div>
        <div className="prompt-container">
          <div>
            <p>Paste your contract here:</p>
          </div>
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
        </div>
       

        {apiOutput && (
          <div className="report-container">
            <div className="output-header-container">
              <div className="output-header">
                <h3>Report</h3>
              </div>
            </div>
            <div className="output-content">
              <div dangerouslySetInnerHTML={{ __html: styledOutput }} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
