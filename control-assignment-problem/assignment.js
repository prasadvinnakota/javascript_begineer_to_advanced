const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if(randomNumber>0.7)
{
    alert("Hi");
}

const arr1 = [1,2,3,4];
for(let i=arr1.length-1;i>=0;i--)
{
    console.log(arr1[i])
}

for(const ele of arr1)
{
    console.log(ele);
}

const randomNumber1 =Math.random();

if(randomNumber>0.7 && randomNumber1>0.7)
{
    alert("0.7")
}
else if(randomNumber1>0.2 || randomNumber>0.2)
{
    alert("0.2")
}