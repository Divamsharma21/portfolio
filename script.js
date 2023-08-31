// let a=alert("welcome to divam portfolio website ");
// console.log(a);
// function  currenttime() {
//     let date=new Date( 10-07-2023);
//     let hh=date.getHours();
//     let mm=date.getMinutes();
//     let ss =date.getSeconds();
//     let session="AM";
//     if(hh>12){
//         session="PM";
//     }
//     hh=(hh<10)? "0"+hh:hh;
//     mm=(mm<10)? "0"+mm:mm;
//     ss=(ss<10)? "0"+ss:ss;

//     let time=hh+":"+mm+":"+ss+""+session;

// document.getElementById("clock").innerHTML=time;
// // var t=setTimeout(function(){
// //     currenttime()
// // }, 1000);

// }
// currenttime();

//              EVENT HANDLING 

function myfunction(){
    console.log("clicked ")
}

function changecolor(id){
    
    document.getElementById('col').style.color="yellow "
     
}
function getmove(){
    console.log("move in the end ")
}

// for button

function changetext(id){
    id.innerHTML="THANKS FOR VISITING  ";
    setInterval(() => {
        id.innerHTML=" HAVE A NICE DAY "
        
    }, 2000); 
}
function myfunction(id){
    document.getElementById('Button').style.color="orange"
}

function changecolor1(id){
    // document.getElementById(head).style.font-size=100px
    // id.innerHTML=" CALL US";
    // const i=
    // for(i=1;i<5;i++){
        setInterval(() => {  

    setInterval(() => {
        id.style.color="green "
        id.innerHTML="call us "
    }, 1000);

        setInterval(() => {
            id.style.color="yellow"
            id.innerHTML="mail us "
        }, 3000);  
        
        setInterval(() => {
            id.style.color="red "
            id.innerHTML="comment us"
            id.style.size="80px" 
        }, 6000);

    }, 9000);
    }
// }
// for heading in projects

function changecolor2(id){
    setInterval(() => {
        id.style.color="red "
        id.innerHTML="work "
    }, 1000);
}

