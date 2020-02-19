// Merrik Malin
// 




// Question 1

fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
.then(response => response.json())
.then(one => 
    one.forEach((i, k) => {
        document.getElementById('id').innerHTML += '<li>' + i.id + '</li>'
        document.getElementById('title').innerHTML += '<li>' + i.title + '</li>'
        document.getElementById('body').innerHTML += '<li>' + i.body + '</li>';
}))


// Question 2
fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
.then(response => response.json())
.then(two => 
    two.forEach((p, r) => {
        document.getElementById('body2').innerHTML += '<p>' + p.body + '</p>';
}))


// Question 3
fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
.then(response => response.json())
.then(three => 
    three.forEach((a, b) => {
        for(var i = 0; i < str.length; i++) {
            document.getElementById('body3').innerHTML += '<li>' + a.body + '</li>';
        }
}))


// Question 4
var min1=1; 
var max1=3;  
var rand1 = Math.random() * (+max1 - +min1) + +min;

var min2=100; 
var max2=200;  
var rand2 = Math.random() * (+max2 - +min2) + +min;

let myObject , x;

fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
.then(response => response.json())
.then(four => 
    four.forEach((c, d) => {
        
        var res = c.substr(0, 5);
        
        myObject = {
        }
        
        
        
        document.getElementById('body4').innerHTML += '<li>' + c.body + '</li>';
        
}))


// Question 5


fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
.then(response => response.json())
.then(five => 
    five.forEach((e, f) => {
        for(var i = 0; i < e.title.length; i++) {
            if(e.title.length <= 30){
                document.getElementById('title5').innerHTML += '<li>' + e.title + '</li>';
            }
        }
        //document.getElementById('title5').innerHTML += '<li>' + e.body + '</li>';
}))




// Question 6
fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
.then(response => response.json())
.then(six => 
    six.forEach((g, h) => {
        function isEven(g) {
            if (g.id%2 == 0)
                document.getElementById('title6').innerHTML += '<li>' + p.title + '</li>';
            else
            document.getElementById('title6').innerHTML += '<li>' + p.body + '</li>';
        }
        
}))