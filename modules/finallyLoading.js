function finallyLoadingThisPage(){
    new Promise((resolve)=>{
        function oK(){
            console.log("finally Loading This Page");
            let finallyL=document.createElement('h3');
            finallyL.innerHTML='Finally Loading after DomContentLoading';
            document.querySelector('article').append(finallyL);
        }
        resolve(oK());
    });
};
export {finallyLoadingThisPage};