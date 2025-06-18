var sum1=()=>{
    console.log("Hello World!!");
}
sum1();
//spread operator 
var arr=[10,20,30]
var arr1 = [...arr,40,50]
console.log(arr)
console.log(arr1)

//destruring operator
var marks = [10,20,30,40,50];
var [m1,m2,m3,m4,m5] = marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)

//callback
function demo(){
    console.log("Hello from demo!!");
}
var callback=(func)=>{
    console.log("Hello from callback!1");
    func();
}
callback(demo);

//map
var arr = [11,22,33,44,55];
var double = arr.map(num=>num*2);
console.log("double:"+double);
//filter
var even = arr.filter(num => num%2==0)
console.log(even);

//reduce
var total = arr.reduce((val,num)=>val+num,0);
console.log(total);

//task
var arr = [1,2,3,4,5];
var result = arr
.map(num=>num*2)
.filter(num=> num>5)
.reduce((val,num)=>val+num,0);
console.log(result);