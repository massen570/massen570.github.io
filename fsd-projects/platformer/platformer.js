$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100,1,10,500,"darkgray");
    createPlatform(200,355,125,5,"lime");
    createPlatform(400,600,25,5,"lime");
    createPlatform(475,465,50,5,"lime");
    createPlatform(0,625,100,5,"lime")
    createPlatform(500,315,75,5,"lime")
    createPlatform(935,400,65,5,"lime")
    createPlatform(400,605,25,150,"gray")
    createPlatform(1200,300,100,5)



    // TODO 3 - Create Collectables
    createCollectable("steve",125,200,0,0)



    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 600);
    createCannon("right", 400, 2000);
    createCannon("left",650,0)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
