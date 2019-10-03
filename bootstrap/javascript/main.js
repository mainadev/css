

var area7=calculateAreaofCircle(7);
var area10=calculateAreaofCircle(10);

// cument.write(area7)
// document.write(area10)
 
function divideTwoNumbers(num1,num2){
    var divide=num1 / num2;
    return divide;
}
// var divide10000and24=divideTwoNumbers(10000,24);
function calculateAreaofCircle(radius){
    var area=3.14*radius*radius;
    return area;
}
//Adding four numbers
function addFourNumbers(num1,num2,num3,num4){
    var sum=num1+num2+num3+num4;
    return sum;
}
//Area of rectangle
function areaofRectangle(width,height){
    var area=width*height;
    return area; 
}
//Area of a triangle
function areaofTriangle(base,height){
    var area=base*height*0.5;
    return area;
}
//Age
function currentAge(YOB){
    var age=2012-YOB;
    return age;
}
//area of a circle example
var area= calculateAreaofCircle(60);
document.write(area);

//addition of four numbers example
var sum = addFourNumbers(20, 30, 40, 50);
document.write(sum);

//area of a triangle example
var area=areaofTriangle(30,10);
document.write(area);

//age calculation example
document.write(currentAge(1990));

//area of rectangle example
var area=areaofRectangle(40,15);
document.write(area);

