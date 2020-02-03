$(".submit").click(function(event){
var email = $(".email").val();
var subject = $(".subject").val();
var message = $(".message").val();
var name =$(".name").val();
event.preventDefault();
if(email.length < 5 && !email.includes("@") && !email.includes(".")){
$('.email').css('background', 'rgba(255,0,0, 0.2)');  
console.log("wrong email");

hidemodal()
}
else{
    $('.email').css('background', 'white');
}
if(message.length < 20){
    $('.message').css('background', 'rgba(255,0,0, 0.2)');  
    console.log("Too short");
    hidemodal();
    
}
else{
    $('.message').css('background', 'white');
}
    
if(name == ""){
    $('.name').css('background', 'rgba(255,0,0, 0.2)');
    hidemodal();
}
else{
    $('.name').css('background', 'white');
}
if(subject == ""){
    $('.subject').css('background', 'rgba(255,0,0, 0.2)'); 
    hidemodal();
}
else{
    $('.subject').css('background', 'white');
}
   
});

let modal = $(".modal");
var btn = $('#modalbutton');
var closebtn =$('.closebtn');

window.addEventListener('click', clickoutside);

function openmodal(){
   
    document.getElementById('simplemodal').style.display ='block';
}
function closemodal(){
    document.getElementById("myform").reset();
    $('.message').css('background', 'white');  
    console.log("Too short");
    $('.name').css('background', 'white'); 
    $('.email').css('background', 'white'); 
    $('.subject').css('background', 'white'); 
    document.getElementById('simplemodal').style.display = "none";
}
function clickoutside(){
    if(event.target == modal){
        document.getElementById('simplemodal').style.display = "none";
    }
}
function hidemodal(){
    document.getElementById('simplemodal').style.display = "none";
}