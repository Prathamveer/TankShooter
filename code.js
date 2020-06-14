var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["aa272f8a-dc6b-4571-9e64-e93146177dff","badd0064-1b86-45f7-88c6-d55fc66656d9","a83f991f-c0e5-4c34-9722-b3fdefd8a1e0","a9c814cc-5d15-4a02-b939-28fb91cd5dfc"],"propsByKey":{"aa272f8a-dc6b-4571-9e64-e93146177dff":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZD87IiBb3UEI4PXl2XzvPdUx86NqthY7","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/aa272f8a-dc6b-4571-9e64-e93146177dff.png"},"badd0064-1b86-45f7-88c6-d55fc66656d9":{"sourceSize":{"x":816,"y":445},"frameSize":{"x":816,"y":445},"frameCount":1,"frameDelay":4,"name":"plane","sourceUrl":"assets/v3/animations/EQterJ7_ZHfSuQYTeUbeXZbcTlpBmtCoP46vel-RuLc/badd0064-1b86-45f7-88c6-d55fc66656d9.png","size":64066,"version":"RLZ6WHlnb2bVWgorLrKdWpCKlaVZkpLK","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/EQterJ7_ZHfSuQYTeUbeXZbcTlpBmtCoP46vel-RuLc/badd0064-1b86-45f7-88c6-d55fc66656d9.png"},"a83f991f-c0e5-4c34-9722-b3fdefd8a1e0":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"typtioiiLniJyEcf6NK_vJrANuiWfheg","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a83f991f-c0e5-4c34-9722-b3fdefd8a1e0.png"},"a9c814cc-5d15-4a02-b939-28fb91cd5dfc":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"IsNDdWa50HtfbzdvmLnw_cYayeDNDUsf","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a9c814cc-5d15-4a02-b939-28fb91cd5dfc.png"}}};
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

var tank=createSprite(40,350,10,40);
tank.setAnimation("animation_1");

var extension=createSprite(80,318,10,40);
extension.setAnimation("animation_2");

var ball=createSprite(110,303,20,20);
ball.setAnimation("animation_3");
ball.scale=0.5;

var ball2=createSprite(110,303,20,20);
ball2.setAnimation("animation_3");
ball2.scale=0.5;

var ball3=createSprite(110,303,20,20);
ball3.setAnimation("animation_3");
ball3.scale=0.5; 

var planesGroup=createGroup();

var ball4=createSprite(110,303,20,20);
ball4.setAnimation("animation_3");
ball4.scale=0.5; 


var ball5=createSprite(110,303,20,20);
ball5.setAnimation("animation_3");
ball5.scale=0.5; 


var ball6=createSprite(110,303,20,20);
ball6.setAnimation("animation_3");
ball6.scale=0.5; 

var ball7=createSprite(110,303,20,20);
ball7.setAnimation("animation_3");
ball7.scale=0.5; 

var ball8=createSprite(110,303,20,20);
ball8.setAnimation("animation_3");
ball8.scale=0.5; 

var ball9=createSprite(110,303,20,20);
ball9.setAnimation("animation_3");
ball9.scale=0.5;

var ball0=createSprite(110,303,20,20);
ball0.setAnimation("animation_3");
ball0.scale=0.5;



function draw() {
  background("skyblue");
  if(keyDown("space")){
    ball.velocityY=-4;
    ball.velocityX=4;
  }
  if(keyDown("a")){
    ball2.velocityY=-4;
    ball2.velocityX=4;
  }
  if(keyDown("w")){
    ball3.velocityY=-4;
    ball3.velocityX=4;
  }
   if(keyDown("m")){
    ball4.velocityY=-4;
    ball4.velocityX=4;
  }
  if(keyDown("m")){
    ball5.velocityY=-4;
    ball5.velocityX=4;
  }
  if(keyDown("f")){
    ball6.velocityY=-4;
    ball6.velocityX=4;
  }
   if(keyDown("o")){
    ball7.velocityY=-4;
    ball7.velocityX=4;
  }
  if(keyDown("s")){
    ball8.velocityY=-4;
    ball8.velocityX=4;
  }
  if(keyDown("t")){
    ball9.velocityY=-4;
    ball9.velocityX=4;
  }
   if(keyDown("p")){
    ball0.velocityY=-4;
    ball0.velocityX=4;
  }
  if(ball2.displace(planesGroup)){
    planesGroup.destroyEach();
  }
  if(ball3.displace(planesGroup)){
    planesGroup.destroyEach();
  }
  if(ball.displace(planesGroup)){
    planesGroup.destroyEach();
  }
   if(ball4.displace(planesGroup)){
    planesGroup.destroyEach();
  }
  if(ball5.displace(planesGroup)){
    planesGroup.destroyEach();
  }
  if(ball6.displace(planesGroup)){
    planesGroup.destroyEach();
  }
   if(ball7.displace(planesGroup)){
    planesGroup.destroyEach();
  }
  if(ball8.displace(planesGroup)){
    planesGroup.destroyEach();
  }
  if(ball9.displace(planesGroup)){
    planesGroup.destroyEach();
  }
   if(ball0.displace(planesGroup)){
    planesGroup.destroyEach();
  }
  
 drawSprites(); 
 spawnPlanes();

}
function spawnPlanes() {
  //write code here to spawn the clouds
  if (World.frameCount % 110 === 0) {
    var plane = createSprite(400,320,40,10);
    plane.setCollider("rectangle", 0, 0, 20, 80, -45); 
    plane.y = randomNumber(10,100);
    plane.setAnimation("plane");
    plane.scale=0.2;
    plane.velocityX = -3;
    
     //assign lifetime to the variable
    plane.lifetime = 200;
    
    //adjust the depth
   
    
    //add each cloud to the group
    planesGroup.add(plane);
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
