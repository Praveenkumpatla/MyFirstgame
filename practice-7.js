var box = document.createElement("div");
box.setAttribute("align","center");
box.style.height = "560px";
//Task1
var task1 = document.createElement('div');
task1.innerHTML = "Task 1. Click me to show 8 digit number " ;
task1.style.fontSize = "25px";
var result1 = document.createElement('div');
result1.style.fontSize = "60px";
result1.style.backgroundColor = "lightblue";
task1.addEventListener('click',function fun(){
    var num = ""+ Math.ceil(Math.random()*100000000);
    if(num.length==8)
    result1.innerHTML = num;
    else
    fun();
});
//Task2
var head = document.createElement('div');
head.innerHTML = "Task 2. Select your date to see the difference between selected date with today's Date."
head.style.fontSize = "25px";
var task2 = document.createElement('input');
task2.setAttribute("type","Date");
task2.style.height = "30px";
var result2 = document.createElement('div');
result2.style.fontSize = "25px";
result2.style.backgroundColor = "lightblue";
var now = new Date();
task2.addEventListener('input',function (){
    var data = task2.value.split("-");
    var dob = new Date(+data[0],+data[1]-1,+data[2]);
    var days = Math.floor((Math.abs(now.getTime() - dob.getTime()))/(1000 * 3600 * 24));
    result2.innerHTML = Math.floor(days/365) + " Years " + Math.floor((days/365)*12) +" Months " + Math.floor(days/7) +" Weeks "+ Math.floor(days)+" Days "+ Math.floor(days)*24+" Hours "+ (Math.floor(days)*24)*60 +" Minutes " + (Math.floor(days)*24)*3600 + "Seconds ";
})
// Task1 type 2
var task11 = document.createElement('div');
task11.innerHTML = "Task 1. Click me it's Type 2 in this every digit is unique " ;
task11.style.fontSize = "25px";
var result11 = document.createElement('div');
result11.style.fontSize = "60px";
result11.style.backgroundColor = "lightblue";
var output=[];
task11.addEventListener('click',function foo(){
    var n = Math.floor(Math.random()*10);
    if(check(output,n)==1)
    output.push(n);
    if(output.length<8)
    foo();
    if(output.length>7){
    result11.innerHTML = output.join("");
    output =[];
    }
});
function check(out,m){
    var count=0;
    for(var i in out){
        if(out[i]=== m)
        count++;
    }
    if(count == 0)
    return 1;
    else
    return 0;
}
//
document.body.style.backgroundImage = "linear-gradient(white,red)";
box.append(task1,result1,head,task2,result2,task11,result11);
document.body.append(box);