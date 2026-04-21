function add(a:number,b:number,c?:number):number{
    return a+b;
}

function areaOfCircle(radius:number):number{
    return 3.14*radius*radius;
}

//Named parameters 
function addMe({num1,num2}:{num1:number,num2:number})
{
    return num1+num2;
}


let result:number= add(4,4);
console.log(result);

console.log(add(5,5));
console.log(areaOfCircle(5));

//how to call named parameter
//any order is fine
//user knows exactly the argument detail. no need to remember
console.log(addMe({num2:2,num1:3}))

//asycn method usage example 

let output:number=addMe({num1:9,num2:6})






async function getHello1() : Promise<string>{
    //1000 line code 
    for(let i=1;i<1000;i++)
        {
            console.log(i)
            await new Promise(r => setTimeout(r, 1000)); 
        }
    return new Promise<string>(function (resolve){
        resolve("connect to db and takes 10 mins and return")
    })

}
async function getHello2() : Promise<string>{
    //1000 lines of code
    return "hello";
}

async function runner() {
    let output1=getHello1();
    let output2=getHello2();
    //connect to db and check something else 
    // console.log(await output1)
}

runner()



