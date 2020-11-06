var output= [];


console.log(count)

var count=1;

console.log(count)

//reverseString("Koladekehindekoladetoin")

function fizz(){
    for(var count=1; count < 100; count++){

        if(count%3===0 && count %5===0){
        output.push("fizzbuzz");
        }
        else if(count%3 ===0){
            output.push("fizz");
        }

        else if(count%5 ===0){
          output.push("buzz");
        }
        else{
            output.push("count");
        }
        console.log(output);
    }
}

function reverseString(word){
    var values = []
    var arrString = word.split('')
    for(var i = word.length; i >= 0 ; i-- ){
        //console.log(i)
        values.push(arrString[i])
    }

    //console.log(arrString)
    console.log(values.toString())
}

//fizz()
//reverseString("Koladekehindekoladetoin")