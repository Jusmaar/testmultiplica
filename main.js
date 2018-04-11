////1.
// let requerido = function () {
//     throw new Error( 'Error, verifique los parametros' );
// };
// let funcionRequerida = function ( p1 = requerido(), p2 = requerido()) {
//     return p1+ '' +p2;
// };
// console.log( funcionRequerida( 'Jusmar', ' Ayma' ) );
// console.log( funcionRequerida());


////2.
// function getPlaca(nroPlaca) {
//     let objP = {
//         pais:'peru',
//         dniConductor:'123123'
//     };
//     let fecha = new Date()
//     let hora = fecha.getHours()
//     return new Promise(function(resolve,reject){
//         resolve(objP)
//         reject(hora + 'Error en la placa')
//     })
//   }
  
// function getConductor(dniConductor) {
//     let objC = {
//         name:'jusmar',
//         dni:7687687,
//         sexo:'masculino'
//     }
//     let fecha = new Date()
//     let hora = fecha.getHours()
//     return new Promise(function(resolve,reject){
//         resolve(objC)
//         reject(hora + 'Error el dni del conductor')
        
//     })
// }
// getPlaca('ASDA79S').then(objP=>{
//     getConductor(objP.dniConductor).then(objC=>{
//         console.log(objC.name);
//     })
// })


////3.
// let objPlaca = {
//     marca:{
//         name:'Honda',
//         modelo:{
//             name:'CR-V'
//         }
//     },
//     pais:'Peru'
// }

// let funcionAuto = function(obj){
//     if(obj.marca.modelo.name){
//         return obj.marca.modelo.name;
//     }else{
//         return 'Auto sin marca registrada'
//     }
    
// }
// console.log(funcionAuto(objPlaca));


////4.
// let users = [
//     {
//         name:'Pepe',
//         donacion:true,
//         esposas:['Rosangela','Mayte']
//     },
//     {
//         name:'Juan',
//         donacion:false,
//         esposas:['Yahaira']
//     },
//     {
//         name:'Pepe',
//         donacion:true,
//         esposas:[]
//     }
// ]
// let usersDONS = function(users){
//     let donan = users.filter((user)=>{
//         if(user.donacion){
//             return user;
//         }
//     })
//     let donanNoSolteros = donan.filter((user)=>{
//         if(user.esposas.length === 0){
//             return user;
//         }
//     })
//     return donanNoSolteros;
// }
// console.log(usersDONS(users));


//5.
let numeros = [];
let getNumeros = function(){
    for (let i = 1; i <= 1000;  i++) { 
        numeros.push(i);
    }
    return numeros;
}
getNumeros();


let cubos=[];
let getCubos = function(nums){
    cubos = nums.map((num)=>{
        return num*num*num;
    })
    return cubos;
}
getCubos(numeros);
 

let impares=[];
let getImpares = function(nums){
    impares = nums.filter((num)=>{
        if(num % 2 != 0){
            return num
        }
    })
    return impares;
}
getImpares(cubos);


let getSumaTotal = function(nums) {
    let suma=0;
    nums.forEach((num)=>{
        suma = suma + num;
    });
    return suma;
}

console.log(getSumaTotal(impares));