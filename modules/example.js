console.log('example.js');
export function example(){
    new Promise((resolve)=>{
        function ex(){
            setTimeout(()=>{
                let exmp=document.createElement('h2');
                exmp.innerHTML=`Example Function!!! <a href="https://amir248.github.io/modules/modules/example.js"> Here -> <- </a>`;
                document.querySelector('article').append(exmp);
            },777);
        }
        resolve(ex());
    });
};