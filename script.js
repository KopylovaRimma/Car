// var Car = function(x, y, speed){
//     this.x = x;
//     this.y = y;
//     this.speed = 5;
//     this.draw();
// };

// Car.prototype.draw = function(){
//     var carHtml = '<img src = "/img/car.png">';
//     this.carElement = $(carHtml);
//     this.carElement.css({
//         position: "absolute",
//         left: this.x,
//         top: this.y
//     });
//     $("body").append(this.carElement);
// };

// Car.prototype.moveRight = function(){
//     this.x += this.speed;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
// };
// Car.prototype.moveLeft = function(){
//     this.x -= this.speed;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
// };


// Car.prototype.moveUp = function(){
//     this.y -= this.speed;
//     this.carElement.css({
//         left: this.x,
//         top: this.y 
//     });
// };

// Car.prototype.moveDown = function(){
//     this.y += this.speed;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
// };

// var tesla = new Car(20, 20);
// var nissan = new Car(100, 200);

// var Car = function(x, y) {
//     this.x = x;
//     this.y = y;
//     this.draw();
// };


// Car.prototype.draw = function(){
//     var carHtml = '<img src="/img/car.png">';
//     this.carElement = $(carHtml);
//     this.carElement.css({
//         position: "absolute",
//         left: this.x,
//         top: this.y
//     });
//     $("body").append(this.carElement);
// };

// Car.prototype.moveRight = function(speed){
//     this.x +=speed;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
// };


// Car.prototype.moveLeft = function(speed){
//     this.y -= speed;
//     this.carElement.css({
//         left: this.x,
//         top: this.y
//     });
// };

// var tesla = new Car(10,20);
// var nissan = new Car(10,100);

// setInterval(function(){tesla.moveRight(Math.floor(Math.random() * 5))}, 30);
// setInterval(function(){nissan.moveRight(Math.floor(Math.random() * 5))}, 30);



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


// var circle = function(x,y,radius, fillCircle){
//     ctx.beginPath();
//     ctx.arc(x,y, radius,0,Math.PI*2,false);
//     if(fillCircle){
//         ctx.fill();
//     }
//     else{
//         ctx.stroke();
//     }
// };

// var drawSnowman = function(x, y) {
//     ctx.fillStyle = "Black";
//     ctx.lineWidth = 4;

//     circle(x + 50, y + 110, 40, false);
//     circle(x + 50, y + 40, 30, false);
//     circle(x + 40, y + 35, 5, true);
//     circle(x + 60, y + 35, 5, true);

//     circle(x + 50, y + 90, 5, true);
//     circle(x + 50, y + 110, 5, true);
//     circle(x + 50, y + 130, 5, true);

//     ctx.fillStyle = "Orange";
//     circle(x + 50, y + 45, 5, true);
// };

// drawSnowman(50, 50)



// var drawPoints = function (points) {
//     ctx.beginPath();
//     ctx.moveTo(points[0][0], points[0][1]);
//     for (var i = 1; i < points.length; i++){
//       ctx.lineTo(points[i][0], points[i][1]);
//     }
//     ctx.stroke();
// };


// var points = [[500, 50], [500, 500], [1000, 500], [1000, 50], [500, 50]];
// var mysteryPoints = [[500, 50], [500, 500], [200, 750], [1000, 50], [700, 450], [1000, 450], [700, 700]];
// drawPoints(points);
// drawPoints(mysteryPoints);

var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
}

var circle = function(x,y,radius, fillCircle){
        ctx.beginPath();
        ctx.arc(mouseX,mouseY, 3 , 0 ,Math.PI * 2, true);
        ctx.fillStyle = "Black";
        ctx.fill();
        requestAnimationFrame(update);
    };


    function getPosition(el) {
        var xPosition = 0;
        var yPosition = 0;
      
        while (el) {
          xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
          yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
          el = el.offsetParent;
        }
        return {
          x: xPosition,
          y: yPosition
        };
      }



