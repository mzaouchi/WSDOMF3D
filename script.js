// var dali = document.getElementById("chaima")
// dali.style.color = "red"
// document.getElementById("chaima").style.color = "green"


// var divM = document.getElementById('main')
// console.log(divM)

// var hh = document.getElementsByTagName('h2')
// console.log(hh)
// hh[1].style.color = 'red'
// hh[0].style.color = 'green'


// var par = document.getElementsByClassName('para')
// console.log(par)

// var divM = document.querySelector('#main')
// console.log(divM)


// var p = document.querySelectorAll('.para')
// console.log(p)
// p[0].style.color = "grey"


// var divM = document.querySelector('#main')

// console.log(divM.innerHTML)
// console.log(divM.innerText)


// var divM = document.querySelector('#main')
// console.log(divM.firstElementChild)
// console.log(divM.lastElementChild)

// var p = document.querySelector('.para')
// console.log(p)
// console.log(p.previousElementSibling)
// console.log(p.nextElementSibling)

// console.log(p.previousElementSibling.previousElementSibling.innerHTML)

// var divM = document.querySelector('#main')
// var newB = document.createElement('button')
// divM.appendChild(newB)
// newB.innerText = "Dali"

// var h = document.querySelector('h2')
// h.setAttribute('class','abdelwaheb')

// function Fourat(){
//     alert('Hello khalil')
// }

// var btnP = document.querySelector('.btnP')

// btnP.addEventListener('click',function(){
//     btnP.previousElementSibling.innerText++
// })

// var btnM = document.querySelector('.btnM')

// btnM.addEventListener('click',function(){
//     if (btnM.nextElementSibling.innerText>0) {
//         btnM.nextElementSibling.innerText--
//     }
   
// })

var btnP = document.querySelectorAll('.btnP')


for(let i = 0;i<btnP.length;i++){
    btnP[i].addEventListener('click',function(){
        btnP[i].previousElementSibling.innerText++
    })
}
