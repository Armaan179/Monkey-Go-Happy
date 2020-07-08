var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","dd519bc4-4c7c-4f80-9991-093ddbdc7628"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":9,"looping":true,"frameDelay":12,"version":"HpqTMv.zAttsveb0UbjA_vC.JTJ3woW_","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"DmlL8uDCWwsVFC7_TgT9I67cpfy6iCi9","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"rTnyldhvaeMqHeimEoD3.mQJOb1h.53e","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"dd519bc4-4c7c-4f80-9991-093ddbdc7628":{"name":"desert_1","frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":12,"jsonLastModified":"2020-01-29 19:47:59 UTC","pngLastModified":"2020-01-29 19:47:59 UTC","version":"K_FVjyAs9HX7jik4qjMGcOtsMaQnpwFQ","sourceUrl":null,"sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/dd519bc4-4c7c-4f80-9991-093ddbdc7628.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY=1;
var END=0;
var gameState=PLAY;




var monkey = createSprite(45, 370, 15, 20);
var bananaGroup = createSprite(200, 200);
var obstacleGroup = createSprite(200, 370);
var ground = createSprite(10, 375, 6740, 20);
monkey.setAnimation("monkey");
bananaGroup.setAnimation("Banana");
obstacleGroup.setAnimation("Stone");

monkey.debug=true;


var count = 0;


function draw() {
  background(255);
  
  text("Survival Time: "+ count, 250, 100);
  console.log(gameState);
  
  monkey.scale=0.3;
  bananaGroup.scale=0.09;
  obstacleGroup.scale=0.2;
  
  bananaGroup.velocityX=-3;
  
  if (bananaGroup>10&& obstacleGroup>10) {
    bananaGroup.x= 200;
    obstacleGroup.x=200;
  }
  
  if (monkey.isTouching(bananaGroup)) {
    count=count+2;
    bananaGroup.destroy();
    bananaGroup.x= 200;
    obstacleGroup.x=200;
    
  }
  ground.visable=false;
  
  if (monkey.isTouching(bananaGroup)) {
    count=count+1;
  }
  obstacleGroup.velocityX=-3;
  
  
  
  if (keyDown("space")&& monkey.y >= 250) {
    monkey.velocityY=-15;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  createEdgeSprites();
  monkey.collide(ground);
  obstacleGroup.collide(ground);
  
  
  
  
    if(gameState === PLAY){
    //move the ground
    ground.velocityX = -(6+count/100);
    //scoring
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if (count % 100 === 0) {
      playSound("checkPoint.mp3");
    }
     
     //jump when the space key is pressed
    if (keyDown("space")&& monkey.y >= 250) {
      monkey.velocityY=-15;
  }
  
  switch(count){
    case 10: monkey.scale=0.12;
    break;
    case 20: monkey.scale=0.14;
    break;
    case 30: monkey.scale=0.16;
    break;
    case 40: monkey.scale=0.18;
}
  if (obstacleGroup.isTouching(monkey)){
    monkey.scale=0.2;
  }
  stroke("white");
//  textsize(20);
  fill("white");
  text("Score: "+ count, 300, 50);
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
    
    
    
  if (monkey.isTouching(obstacleGroup)) {
    gameState===END;
  }
  if (gameState===END) {
    bananaGroup.velocityX=0;
    obstacleGroup.velocityX=0;
  }
  
  drawSprites();
}
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
