async function getHelloNew() : Promise<string>{
    //1000 line code 
    for(let i=1;i<20;i++)
        {
            console.log(i)
            await new Promise(r => setTimeout(r, 1000)); 
        }
    return new Promise<string>(function (resolve){
        resolve("connect to db and takes 10 mins and return")
    })

}

let a=getHelloNew()

console.log("done")
console.log("done")
console.log("done")
console.log("done")
let result:string=await a
console.log(result.toLowerCase())