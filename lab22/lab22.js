function pow(x, n) {
    let result = x;
    if(n>0){
        
        for (let i = 1; i < n; i++) {
        result *= x;
    }
}
else if(n = 0){
    result = 1;
}
else{
    for (let i = 1; i < n; i++) {
        result = sqrt(result);
}
}
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  

    alert( pow(x, n) );

