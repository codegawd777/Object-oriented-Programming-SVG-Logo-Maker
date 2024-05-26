class Shape {
  constructor(characters, textcolor, shapecolor) {
    this.characters = characters;
    this.textcolor = textcolor;
    this.shapecolor = shapecolor;
  }

  setcharacters(characters) {
    this.characters = characters;
  }
  settextcolor(textcolor) {
    this.textcolor = textcolor;
  }
  setshapecolor(shapecolor) {
    this.shapecolor = shapecolor;
  }
}

class Circle extends Shape {
  constructor(characters, textcolor, shapecolor) {
    super(characters, textcolor, shapecolor); // call the super class constructor and pass in the name parameter
  }




  render() {
    return ``
  }
}

class Triangle extends Shape {
  constructor(characters, textcolor, shapecolor) {
    super(characters, textcolor, shapecolor); // call the super class constructor and pass in the name parameter
  }

  render() {
    return ``
  }
}
class Square extends Shape {
  constructor(characters, textcolor, shapecolor) {
    super(characters, textcolor, shapecolor); // call the super class constructor and pass in the name parameter
  }

  render() {
    return ``
  }
}