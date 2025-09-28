let img = [];
let txt;
let n = 0;

let r1 = 0;
let r2 = 0;

let p1 = { x: 0, y: 0 };
let p2 = { x: 0, y: 0 };

let pt = [];
let t_pt = [];

let k = 0;

function preload() {
  img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/1.png?v=1747228910671"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/2.png?v=1747228911511"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/3.png?v=1747228911946"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/4.png?v=1747228912201"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/5.png?v=1747228912627"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/6.png?v=1747228913099"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/7.png?v=1747228913461"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/8.png?v=1747228914206"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/9.png?v=1747228914649"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/10.png?v=1747228915034"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/11.png?v=1747228915390"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/12.png?v=1747228917728"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/13.png?v=1747228918120"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/14.png?v=1747228918577"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/15.png?v=1747228918955"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/16.png?v=1747228919348"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/17.png?v=1747228919794"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/18.png?v=1747228920354"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/19.png?v=1747228920850"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/20.png?v=1747228921267"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/21.png?v=1747228921731"));
   img.push(loadImage("https://cdn.glitch.global/b5b00017-6f20-4f0a-9b34-0c0f9e57ae3d/22.png?v=1747228922219"));
 }

function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  blendMode(BLEND);
  textFont('Courier New');
  textSize(50);
  
  for(let i=0; i<5; i++){
    let kk = floor(random(words.length));
  	t_pt.push({
      word: words[kk][floor(random(words[kk].length))],
  		x: random(width),
  		y: random(height),
  		n: i
  	});
  }
  
  for(let i=0; i<5; i++){
		pt.push({
		x: random(width),
		y: random(height),
		s: random(0.2,2),
		r: random(TWO_PI),
		n: i*4
		})
	}
  //noStroke();
}

function draw() {
  background(255);

		for(let i=0; i<pt.length; i++){
			pt[i].y += pt[i].s;
			if(pt[i].y > height){
				pt[i].y = 0;
				pt[i].x = random(width);
				pt[i].s = random(1,2);
				pt[i].n++;
			}
			push();
			translate(pt[i].x, pt[i].y);
			rotate(pt[i].r);
			blendMode(MULTIPLY);
			image(img[pt[i].n%img.length], 0, 0);
			pop();
	}
  
 	for(let i=0;i<t_pt.length;i++){
     fill(255);
     blendMode(BLEND);
     text(t_pt[i].word,t_pt[i].x,t_pt[i].y);
   }
   
   if(frameCount%75==0){
   	k++;
    let kk = floor(random(words.length));
   	print(k%t_pt.length);
   	t_pt[k%t_pt.length].x = random(width);
   	t_pt[k%t_pt.length].y = random(height);
   	t_pt[k%t_pt.length].n = floor(random(0,t_pt.length));
    t_pt[k%t_pt.length].word = words[kk][floor(random(words[kk].length))];
   }

}
