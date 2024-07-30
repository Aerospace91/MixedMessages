/*
For this project, you will build a message generator program. 
Every time a user runs a program, they should get a new, randomized output. 
You’re welcome to take the project in a couple of different forms, like an astrology generator, 
inspirational message, or nonsensical jokes. To make your program truly random, 
the message that it outputs should be made up of at least three different pieces of data. 
Take what you know of JavaScript syntax so far to build the program and customize it to your liking.
*/

const componentOne = ['I will ', "I won't ", 'I might ']
const componentTwo = ['achieve ', 'aspire to ', 'improve ']
const componentThree = ['nothing!', 'greatness!', 'the exact same!']

function messageComposer(messageOne, messageTwo, messageThree) {
    const components = [messageOne, messageTwo, messageThree]
    let new_str = ''
    for (let component of components) {
        let ran = Math.floor(Math.random() * component.length)
        new_str += component[ran]
    }
    return new_str
}

console.log(messageComposer(componentOne, componentTwo, componentThree))