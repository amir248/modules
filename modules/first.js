export function first(){
    new Promise((resolve,reject)=>{
        function oK(){
            setTimeout(()=>{
                const first=document.createElement('strong');
                first.innerHTML='it\'s first function!';
                document.querySelector('article').append(first);
            },999);
        };
        function noN(){{
            setTimeout(()=>{
                const first=document.createElement('p');
                first.innerHTML='it\'s first NON function!';
                document.querySelector('article').append(first);
            },9);
        }}
    resolve(oK());
    reject(noN());
    });
}
    // export {first};
// export first();