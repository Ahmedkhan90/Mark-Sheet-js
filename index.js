// function input(){
//     var firstName = document .getElementById("abc").value
//     var lastName = document .getElementById("def").value
//     alert(firstName + " "+ lastName)
// }




// Result Result


function total(){
    var tarjama = document .getElementById("t").value
    var hadees = document .getElementById("h").value
    var sarf = document .getElementById("s").value
    var nahv = document .getElementById("n").value
    var fiqh = document .getElementById("f").value
    var number = +tarjama + +hadees + +sarf + +nahv + +fiqh
    var total = 500
    var per = (number/total) * 100
alert(per + "%")
if(per >= 45){
    alert('MumtazMassharf')
}else if(per >= 30 && per < 45){
    alert('Mumtaz')
}else if(per >=20 && per <30){
    alert('Jayyid')
}else{
    alert('Nakaam')
}

}




// pop , push , shift , unshift splice and slice 


// }
// var cities = ['karachi' , 'lahore','ha','nhi','theek','Q' ,'Ask']
// console.log(cities)

// var cities = cities.pop()
// console.log(cities)

// var cities = cities.push('khaiber')
// console.log(cities)

// var cities = cities.shift()
// console.log(cities)

// var cities = cities.unshift('ghuijji')
// console.log(cities)




//   var cities = cities.splice(2,0,'sfhifh')
//  console.log(cities)

//  var cities = cities.splice(2,0,'sfhifh')
//  console.log(cities)

//  var slice = cities.slice(2,6,)
//  console.log(slice)


// for(i=0; i<cities.length; i++){
    
//     console.log(cities[i])
// }




//  var arr = ['bilal Razaa', 'Ahmed Razaa', 'Ahsan Iqbal',  'Hasan Razaa' ,'naved majed'];
//  var firstName =[]
// var lastName =[]

// for(i = 0; i < arr.length; i++){
//     var name = arr[i]
//     var fName = arr[i].slice(0,5)
//     var lNmae = arr[i].slice(6,11)

//     firstName.push(fName)
//     lastName.push(lNmae)
// }
// console.log(arr)
// console.log(firstName)
// console.log(lastName)



