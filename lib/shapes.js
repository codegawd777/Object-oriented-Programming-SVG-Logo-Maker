class Shape {
  constructor(characters,textcolor,shapecolor) {
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

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}