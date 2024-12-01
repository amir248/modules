function second(){
    let second=document.createElement('div');
    second.setAttribute('id',"second");
    document.querySelector('article').append(second);
    document.querySelector('#second').innerHTML=`it\'s Second Function!`;
}
export { second };