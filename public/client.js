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

        // Handle response here
    })
});