let row = 5;
let spans = 5;

let array_one = new Array(row);

for(var i=0; i< row; i++){
    array_one[i] = new Array(spans);
    for(var j=0; j<spans; j++){
        let num = Math.floor(Math.random() * (10 - 1) + 1);
        array_one[i][j] = num;
    }
    
}

console.log(array_one); //일단 랜덤뽑