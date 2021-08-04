class Figure {
  constructor(name){
    this.name = name;
  }

  getArea(){

  }
}

class Triangle extends Figure {
  constructor(a, h) {
    super('Треугольник');

    this.a = a;
    this.h = h;
  }

  getArea(){
    return this.a * this.h * 0.5;
  }
}

class Square extends Figure {
  constructor(a) {
    super('Квадрат');
    this.a = a;
  }

  getArea(){
    return this.a * this.a;
  }
}

class Rhombus extends Figure {
  constructor(d1, d2) {
    super('Ромб');

    this.d1 = d1;
    this.d2 = d2;
  }

  getArea(){
    return this.d1 * this.d2 * 0.5;
  }
}

function getFigureArea(figure){
  if(figure instanceof Figure){
    return figure.getArea();
  }
  throw new TypeError('Это не фигура');
}

const square = new Square(5);
const triangle = new Triangle(5, 10);
const rhombus = new Rhombus(5, 8);