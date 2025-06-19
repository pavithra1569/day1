var details = async ()=>{
    var response = await fetch('https://dummyjson.com/users');
    var users = await response.json();
    console.log(users);    

}
details();
