function pow(x,n){
    let result=1;
    for( let i=0;i<n;i++){
    result *=x
    }
    return result
}
console.table(pow(2,6));
