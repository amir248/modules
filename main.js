// 📁 main.js
import {sayHi, sayBye} from 'https://amir248.github.io/modules/modules/say.js';

// import {first} from "/modules/first.js";


sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

async function main() {
    const finallyLoading= await import("modules/finallyLoading.js");
    // window.addEventListener('DOMContentLoaded',finallyLoading.finallyLoadingThisPage());
    finallyLoading.finallyLoadingThisPage();
    const myModule = await import("https://amir248.github.io/modules/modules/first.js");
    // use myModule
    myModule.first();
    const example=await import("https://amir248.github.io/modules/modules/example.js");
    example.example();
    
    const secondModule=await import("https://amir248.github.io/modules/modules/second.js");
    secondModule.second();
    await sayHi("AmirDzhan!");
    await sayBye('Communist!');
}

main();
  