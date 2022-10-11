var Car = function(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.draw();
};

Car.prototype.draw = function(){
    var carHtml = '<img src = "/img/car.png">';
    this.carElement = $(carHtml);
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });
    $("body").append(this.carElement);
};

Car.prototype.moveRight = function(){
    this.x += this.speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveLeft = function(){
    this.x -= this.speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};


Car.prototype.moveUp = function(){
    this.y -= this.speed;
    this.carElement.css({
        left: this.x,
        top: this.y 
    });
};

Car.prototype.moveDown = function(){
    this.y += this.speed;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

var tesla = new Car(20, 20);
var nissan = new Car(100, 200);


