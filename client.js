const form = document.querySelector('form'); // grabbing an element on the page
const text = document.querySelector('#print');
//const loadingElement = document.querySelector('.loading');
//const mewsElement = document.querySelector('.mews');
//const loadMoreElement = document.querySelector('#loadMore');
let foundedWords=[]
let indexs=[]
let aliases={}


let obj={
        "كافر":["kافر","كاfر"],
        "قتل":["قت-ل"],
        "اغتصاب":["اغtصاب","اغتص-اب"]
        }

let list=Object.keys(obj)


function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}


function find(text,list){
  for(let i = 0; i < list.length; i++){ 	
    if (text.includes(list[i])){
      foundedWords.push(list[i])
    }

  };
};


function getAlias(fw){

let j=[]
  for(let i = 0; i < fw.length; i++){ 	
     let b=random_item(obj[fw[i]])
    j.push(b)
    };


    return j
};


function getContainer(w,al){
    w.forEach((element, index) => {
     aliases[element] = al[index];
          });

  return aliases

}


function converter(text,l){
let o=Object.keys(l)
let ct=text
  for(let i = 0; i < o.length; i++){
    ct=ct.replace(o[i],aliases[o[i]])
    };

     return ct

}





form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const content = formData.get('content');
  find(content,list);
  //text.innerHTML= content
  let al=getAlias(foundedWords)
  let oo=getContainer(foundedWords,al)
  text.innerHTML= converter(content,oo)
  let ttt=converter(content,oo)
  foundedWords=[]


  navigator.clipboard.writeText(ttt);



})








