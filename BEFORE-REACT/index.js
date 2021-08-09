
// class Person {
//     constructor(name , title){
//       this.name =name;
//       this.title=title;
//     }
//     render(Position){

//         document.querySelector(Position).insertAdjacentHTML("beforeend",`
//         <div class="card">
//         <div>${this.name}</div>
//         <div>${this.title}</div>
//         </div> `)
//     }
// }
 'use strict';
// const Esraa = new Person("Esraa" , "developer");
// Esraa.render('.root');


// const Asmaa = new Person("Asmaa" , "developer");


// Asmaa.render('.root');



var person = {
  name:'Esraa',
  foo:function(){
    setTimeout(

      function(){
           console.log(this);
      },1000
    );
  }





  
}

const colors = ["red" , "green" , "blue"];
const html = colors.map(clr=> `<li>${clr}</li>`)
console.log(html);
const arr1 = [1,2 ,3];
const arr2=[5 , 8 ,9];
const spreeasf = [...arr1 ,9,10,...arr2 ]
console.log(spreeasf)










