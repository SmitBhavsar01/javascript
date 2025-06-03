const user = {
    username : "smit",
    logincount: 9,
    signedin: true,
    getuserdatail: function(){
        console.log("get user detail");
        console.log(`username :${this.username} `);
        console.log(this);
        
        
    }

}

// console.log(user.username);
// console.log(user.getuserdatail());
