let string ="";
window.onload = reset();

function reset(){
    string ="";
    document.querySelector('.input').innerHTML = "ENTER";
    document.querySelector('.input').addEventListener('click',()=>{
        document.querySelector('.input').innerHTML = string;
    })
}
// document.querySelector('input').addEventListener('click',()=>{
//     string ="";
//     document.querySelector('input').value = string;
// })
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '=') {
            try {
                string = eval(string);
            }
            catch(e) {
                alert('Invalid');
            }
            document.querySelector('.input').innerHTML = string;
        }
        else if(e.target.innerHTML == 'C') {
            reset();
        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('.input').innerHTML = string; 
        }
    })
})
function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    // document.body.style.color="green";
}