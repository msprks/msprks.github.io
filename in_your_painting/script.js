poemList=[
  poem1,
  // poem1a,
  poem2,
  // poem2a,
  poem3,
  poem3a,
  poem4,
  poem4a,
  poem5,
  // poem5a,
  poem6,
  // poem6a,
  poem7,
  poem7a,
  poem8,
  // poem8a,
  poem9,
  // poem9a,
  poem10,
  // poem10a,
  poem11,
  poem11a,
];
let p = 0;

window.onload = ()=>{

  let wrapper = document.getElementById("body");

  wrapper.addEventListener("click",()=>{

//  let image = document.getElementById("backgroundimage");
  let wrapper = document.getElementById("outputwrapper");
  let poem  = document.createElement("p");

  // image.setAttribute("src","images/2.jpg");
  let num = Math.floor(1+(Math.random()*50));
//  console.log(num);
//  image.setAttribute("src","images/"+num+".jpg");
  let newpoem = poemList[p]()+".";
  poem.innerText = newpoem;
  console.log(newpoem);

  wrapper.appendChild(poem);

    p++;
    if(p>=poemList.length){
      p=0;
    }

  });

}

// function fadeout(element){
//   if(element.style.opacity>0){
//     element.style.opacity+= -1;
//     fadeout(element);
//   }
// }

function random(wordArr){
  let i = Math.floor(Math.random()*(wordArr.length-1));
	let choice = wordArr[i];
  console.log(choice);
	return choice;
}

//poemsbelow

function poem1(){
	let poem = "In your house I was "+random(VERBSVBG)+" and "+random(VERBSVBG);
	return poem;
}

// function poem1a(){
//   let poem = "In your "+random(NOUNS)+" I "+random(VERBSPAST);
// 	return poem;
// }


function poem2(){
	let poem = "In your chair I thought about my "+random(ADJECTIVES)+" "+random(NOUNS);
	return poem;
}

function poem3(){
	let poem = "In your book I read about the "+random(ADJECTIVES)+" "+random(NOUNS);
	return poem;
}

function poem3a(){
  let poem = "In your "+random(NOUNS)+" I "+random(VERBSPAST);
	return poem;
}

function poem4(){
  let poem = "In your drawer I touched your "+random(ADJECTIVES)+" "+random(NOUNS);
	return poem;
}

function poem4a(){
  let poem = "In your photo I saw "+random(NAMES);
  return poem;
}

function poem5(){
  let poem = "In your closet I searched for the "+random(ADJECTIVES)+" "+random(NOUNS);
	return poem;
}

// function poem5a(){
//   let poem = "In your photo album I saw "+random(NAMES);
// 	return poem;
// }

function poem6(){
  let poem = "In your bed I uncovered my "+random(ADJECTIVES)+" "+random(NOUNS);
	return poem;
}

function poem7(){
  let poem = "In your dream I watched the "+random(NOUNS)+" "+random(VERBSVBG);
	return poem;
}

function poem7a(){
  let poem = "In your "+random(NOUNS)+" I "+random(VERBSPAST);
	return poem;
}

function poem8(){
  let poem = "In your kitchen I tasted "+random(ADJECTIVES)+" "+random(NOUNS);
	return poem;
}

function poem9(){
  let poem = "In your yard I stepped on the "+random(ADJECTIVES)+" "+random(NOUNS);
	return poem;
}

function poem10(){
  let poem = "In your studio I noticed the "+random(NOUNS)+" "+random(VERBSVBG);
	return poem;
}

function poem11(){
  let poem = "In your painting I see "+random(NOUNS);
	return poem;
}

function poem11a(){
  let poem = "In your "+random(NOUNS)+" I "+random(VERBSPAST);
	return poem;
}
