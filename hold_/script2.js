poemList=[
  poem1,
  poem2,
  poem3,
  poem4,
  poem5,
  poem6,
  poem7,
  poem8,
  poem9,
  poem10
];
let p = 0;

window.onload = ()=>{

  let wrapper = document.getElementById("body");
  makeNewPoem();

  wrapper.addEventListener("click",()=>{
    makeNewPoem();
  });

  wrapper.addEventListener("keydown",()=>{
    makeNewPoem();
    return false
  });
}

// FLASHING CURSOR
// window.setInterval(flashCursor,500);
//
// function flashCursor(){
//   let cursor = document.getElementById("cursor");
//
//   if(cursor.style.color == "black"){
//     cursor.style.color = "white";
//   }else{
//     cursor.style.color = "black";
//   }
//
// }

function makeNewPoem(){
  //  let image = document.getElementById("backgroundimage");
    let outputwrapper = document.getElementById("poem-container");
    let poem  = document.createElement("p");

    // image.setAttribute("src","images/2.jpg");
    let num = Math.floor(1+(Math.random()*50));
  //  console.log(num);
  //  image.setAttribute("src","images/"+num+".jpg");
    let newpoem = poemList[p]();
    poem.innerHTML = newpoem;
    console.log(newpoem);

    outputwrapper.appendChild(poem);

      p++;
      if(p>=poemList.length){
        p=0;
      }
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
	let poem = "hold "+random(NOUNSNN)+" and lift "+random(NOUNSNN);
  return poem;
}

function poem2(){
let poem = "place "+random(MY)+" "+random(NOUNS)+" over "+random(NOUNSNN);
  return poem;
}

function poem3(){
let poem = "give to "+random(NOUNSNN);
  return poem;
}

function poem4(){
let poem = "slip behind "+random(MY)+" "+random(ADJECTIVESJJ)+" "+random(NOUNS);
  return poem;
}

function poem5(){
let poem = "push "+random(MY)+" "+random(NOUNS);
  return poem;
}

function poem6(){
let poem = "slide under "+random(MY)+" "+random(ADJECTIVESJJ)+" "+random(NOUNS);
  return poem;
}

function poem7(){
let poem = "piece together "+random(MY)+" "+random(NOUNS);
  return poem;
}

function poem8(){
let poem = "pull apart "+random(MY)+" "+random(ADJECTIVESJJ)+" "+random(NOUNS);
  return poem;
}

function poem9(){
let poem = "after " +random(VERBSVBG)+" begin again. ";
  return poem;
}

function poem10(){
let poem = "  ";
  return poem;
}


//
// // function poem1d(){
// //   let poem = "and "+random(VERBSVBG);
// // 	return poem;
// // }
//
// // function poem1a(){
// //   let poem = "In your "+random(NOUNS)+" I "+random(VERBSPAST);
// // 	return poem;
// // }
//
//
// function poem2(){
// 	let poem = "_in your chair I thought about my "+random(NOUNS);
// 	return poem;
// }
//
// function poem3(){
// 	let poem = "_in your book I read about the "+random(ADJECTIVES)+" "+random(NOUNS);
// 	return poem;
// }
//
// function poem3a(){
// 	let poem = "_and erased the part about my "+random(NOUNS)+"<br>&#8205";
// 	return poem;
// }
//
//
// function poem4b(){
//   let poem = "_in your photo I saw "+random(NAMES);
//   return poem;
// }
//
//
// function poem5(){
//   let poem = "_in your closet I searched for the "+random(ADJECTIVES)+" "+random(NOUNS);
// 	return poem;
// }
//
//
// function poem4(){
//   let poem = "_in your drawer I took your "+random(NOUNS);
// 	return poem;
// }
//
// function poem4a(){
//   let poem = "_and left the "+random(NOUNS)+" for later"+"<br>&#8205";
// 	return poem;
// }
//
//
// function poem6(){
//   let poem = "_in your bed I uncovered my "+random(ADJECTIVES)+" "+random(NOUNS);
// 	return poem;
// }
//
// function poem7(){
//   let poem = "_in your dream I watched "+random(MY)+" "+random(NOUNS)+" "+random(VERBSVBG);
// 	return poem;
// }
//
// function poem7b(){
//   let poem = "_in your "+random(NOUNS)+" I "+random(VERBSPAST);
// 	return poem;
// }
//
// function poem8(){
//   let poem = "_in your kitchen I tasted "+random(ADJECTIVES)+" "+random(NOUNS);
// 	return poem;
// }
//
// function poem8a(){
//   let poem = "_and didn't rinse my dishes"+"<br>&#8205";
// 	return poem;
// }
//
// function poem9(){
//   let poem = "_in your yard I stepped on the "+random(ADJECTIVES)+" "+random(NOUNS);
// 	return poem;
// }
//
// function poem10(){
//   let poem = "_in your studio I found the "+random(NOUNS)+" "+random(VERBSVBG);
// 	return poem;
// }
//
// function poem11(){
//   let poem = "_in your painting I saw myself";
// 	return poem;
// }
//
// function poem1a(){
// 	let poem = "_with "+random(NOUNSNN)+" in one hand";
// 	return poem;
// }
//
// function poem1b(){
// 	let poem = "_and "+random(NOUNSNN)+" in the other";
//   return poem;
// }
//
// function space1(){
//   return "&#8205;";
// }
