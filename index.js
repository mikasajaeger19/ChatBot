import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
    const userName = readlineSync.question('What is your name?\n');
    console.log(`Hello, ${userName}!\n`);

    while(true){
        console.log('Ask me a question or type "exit" to leave\n');
        const userInput = readlineSync.question('You:'.yellow);

        if(userInput === "exit"){
            console.log("\nGoodbye!".red);
            break;
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ "role": 'user', "content": userInput }],
            max_tokens: 100
        }).then((response) => {
            //console.log(response.choices[0].message.content.yellow);
            console.log(`chatteuBotteu: ${response.choices[0].message.content}`.green);
        }).catch((error) => {
            console.error('Error:', error);
        })
    }


}


main();

// console.log("hello")


 
