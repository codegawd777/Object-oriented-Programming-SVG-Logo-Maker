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
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">


 <circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.characters}</text>

</svg>`
  }
}

class Triangle extends Shape {
  constructor(characters, textcolor, shapecolor) {
    super(characters, textcolor, shapecolor); // call the super class constructor and pass in the name parameter
  }

  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <polygon points="100,10 150,190 50,190" fill="${this.shapecolor}" />


 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.characters}</text>

</svg>`
  }
}
class Square extends Shape {
  constructor(characters, textcolor, shapecolor) {
    super(characters, textcolor, shapecolor); // call the super class constructor and pass in the name parameter
  }

  render() {
    return `<svg version="1.1"
    width="300" height="300"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="100%" height="100%" fill="${this.shapecolor}" />


 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.characters}</text>

</svg>`
  }
}

module.exports = {
  Shape,
  Circle,
  Triangle,
  Square,
}