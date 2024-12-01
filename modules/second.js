function second(){
    let second=document.createElement('div');
    second.setAttribute('id',"second");
    document.querySelector('main').append(second);
    document.querySelector('#second').innerHTML=`it\'s Second Function!`;
}
export { second };