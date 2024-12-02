// 📁 main.js
import {sayHi, sayBye} from 'https://amir248.github.io/modules/modules/say.js';

// import {first} from "/modules/first.js";


sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

async function main(){
    await sayHi("AmirDzhan!");
    const myModule = await import("https://amir248.github.io/modules/modules/first.js");
    myModule.first();
    const secondModule=await import("https://amir248.github.io/modules/modules/second.js");
    secondModule.second();
    await sayHi("Everyone!");
    const finallyLoading= await import("https://amir248.github.io/modules/modules/finallyLoading.js");
    window.addEventListener('DOMContentLoaded',finallyLoading.finallyLoadingThisPage());
    // finallyLoading.finallyLoadingThisPage();
    // use myModule
    const example=await import("https://amir248.github.io/modules/modules/example.js");
    example.example();
    
    await sayBye('Communist!');
}

main();
  