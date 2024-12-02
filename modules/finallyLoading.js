function finallYLoadingThisPage(){
    new Promise((resolve)=>{
        function oK(){
            console.log("finally Loading This Page");
        }
        resolve(oK());
    });
};