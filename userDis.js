console.log("hello world");
console.log("what should we do know");
// Is it really networking or duh? 
const readline = require("readline");
const r1= readline.createInterface({
input:process.stdin,
output:process.stdout
})

function getInput(prompt)
{return new Promise ((resolve) => 
{
    r1.question(prompt, (input)=>
    {
        resolve(input);
    })
})

}

async function getUserD()
{
    const ask = await getInput("tell me what you want ");
    console.log( `what you like is ${ask}`)
}
getUserD();

const row = 8;
const col =5;
const arr = new Array(row);
for(let i = 0; i<= row;i++)
{
  arr[i]= new Array(col).fill(" ");  
}
for(let i = 0; i <= row; i++ )
{
    for(let j = 0; j <= col;j++)
    {
        //arr[ i ][ j ] = Math.floor( Math.random( ) * 100 ) + 1;
        if(i=== 0 && j >= 0 && j <=4 || j === 0 && i >= 0|| i===3 && j <=4)
        {
            arr[i][j]= "+";
        }
      

    }

    
}

console.log(arr);

const row1 =  8;
const col1 = 5;
const arr1 = new Array(row1)
for(let i = 0; i<= row1 ;i++)
{
    arr1[i]= new Array(col1).fill(" ");
}

for(let i = 0;i <= row1; i++)
{
    for(let j = 0; j <= col1;j++)
    {
if((i ===0 && j===2 )|| (i===8 && j ===0)||(i===8 && j ===4)|| (i===1 && j===1 )||(i===1 && j===3)||(j===0 &&i >= 2)||(j===4 && i >=2)||(i===3 && i >=1))
{
    arr1[i][j]= "+";

}
    }

}
console.log(arr1);








