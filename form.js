class Form {
    constructor() {
     this.titleImg = createImg("title 3.png", "game title");
    this.playButton = createButton("Play");
     this.greeting = createElement("h2");
    }
  
    setElementsPosition() {
     
      this.titleImg.position(-2, 2);
      this.playButton.position(50,50);
      
      this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
  
    /*setElementsStyle() {
     this.titleImg.class("gameTitle");
  
      this.playButton.class("customButton");
      this.greeting.class("greeting");
    }*/
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      //this.input.hide();
    }
  
    handleMousePressed() {
      this.playButton.mousePressed(() => {
       // this.input.hide();
        this.playButton.hide();
        var message = ""

        this.greeting.html(message);
        /*playerCount += 1;
        player.name = this.input.value();
        player.index = playerCount;
        player.addPlayer();
        player.updateCount(playerCount);
        player.getDistance();*/
      });
    }
  
    display() {
      this.setElementsPosition();
      //this.setElementsStyle();
      this.handleMousePressed();
    }
  }
  