class Triangle {
  constructor(...side) {
    if (side.length != 3 || side <= 0){
      throw new Error("Invalid side lengths: a triangle cannot have a side with a length of 0 or less");
    }

    if (side[0] + side[1] <= side[2] || side[0] + side[2] <= side[1] || side[1] + side[2] <= side[0]) {
      throw new Error("Invalid side lengths: the sides do not satisfy the triangle inequality");
    }

    this.side = side;
  }

  get area() {
    const s = (this.side[0] + this.side[1] + this.side[2]) / 2;
    return Math.sqrt(s * (s - this.side[0]) * (s - this.side[1]) * (s - this.side[2]));
  }
}

try
{
    test1 = new Triangle(2, 3, 4);

    console.log(test1);
    console.log("Area: " + test1.area);

    test2 = new Triangle(5, 10, 15);
}
catch (e)
{
    console.error(e);
}