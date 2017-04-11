$("#loginButton").click(function() {
    var loginValue = $("[name='login']").val();
    var passwordValue = $("[name='password']").val();

    $.ajax({
        url: "/login",
        method: "POST",
        data: {
            "login": loginValue,
            "password": passwordValue
        },
    }).then(function(res) {
        console.log(res);
        if(res){
            console.log("good");
            $("#done").attr("style","display:block");
             $("#error").attr("style","display:none")
        }
        else{
            console.log("bad");
             $("#error").attr("style","display:block");
              $("#done").attr("style","display:none")
        }
        // Handle response here
    })
});