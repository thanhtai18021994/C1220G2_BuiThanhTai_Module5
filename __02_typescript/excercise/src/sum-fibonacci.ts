function isFibonacci(a:number):boolean{
    let check:boolean=false;
    if(a==1){
        return true;
    }
    if(a<1){
        return false;
    }
    let x:number=1;
    let y:number=1;
    let flag:number;
    for (let i=0;y<=a;i++){
        flag=x;
        x=y;
        y=x+flag;
        if(y==a){
            check=true;
        }
    }
    return check;
}

console.log(isFibonacci(13))
let sum:number=0;
for (let i = 0; i < 30; i++) {
    if (isFibonacci(i)){
        console.log(i);
        sum=sum+i;
    }
}
console.log(sum);
