// 📁 main.js
import {sayHi, sayBye} from 'modules/modules/say.js';

// import {first} from "/modules/first.js";


sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

async function main() {
    const myModule = await import("modules/modules/first.js");
    // use myModule
    myModule.first();
    // first();
    const secondModule=await import("modules/modules/second.js");
    secondModule.second();
    await sayHi("AmirDzhan!");
    await sayBye('Communist!');
}

main();
  