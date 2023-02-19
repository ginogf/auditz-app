import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `
Please audit the following smart contract for security vulnerabilities. The following are some of the possible security flaws and network vulnerabilities that the audit may identify. The output will list only the relevant issues found in the provided contract, including a simple explanation and a code example on how to fix the issue. Give just the code they need to add or subtract, and mention the line number as a reference, if applicable. 

Default Visibility
Integer Overflow and Underflow
Outdated Compiler Version
Floating Pragma
Unchecked Call Return Value
Access Control & Authorization
SELFDESTRUCT Instruction
Check-Effect-Interaction
Assert Violation
Deprecated Solidity Functions
Delegatecall to Untrusted Callee
DoS (Denial of Service)
Race Conditions
Authorization through tx.origin
Block values as a proxy for time
Signature Unique Id
Shadowing State Variable
Weak Sources of Randomness
Incorrect Inheritance Order
Calls Only to Trusted Addresses
Presence of Unused Variables
EIP Standards Violation
Assets Integrity
User Balances Manipulation
Data Consistency
Flashloan Attack
Token Supply Manipulation
Gas Limit and Loops
Style Guide Violation
Requirements Compliance
Environment Consistency
Secure Oracles Usage
Tests Coverage
Stable Imports

Don't list items where no issue was found.

This is the contract:
    `;
const generateAction = async (req: any, res: any ) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}\n`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 3380,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;