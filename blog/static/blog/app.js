const logout = document.querySelector('#Logout');
function confirmLogout(){
    var result = confirm('Are you really sure you want to logout?');
    if(result==false){
        event.preventDefault();
    }
}
logout.addEventListener('click', confirmLogout);