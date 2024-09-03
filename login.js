$(document).ready(function() {

    $(".fa-solid").click(function(){

        if($("input").attr("type") == "password"){

            $("#password").attr("type", "text")
            $(".fa-solid").text("hide")
        }else{
            $("#password").attr("type", "password")
            $(".fa-solid").text("show")
        }

        // $("input").attr("type") == "password" ?
        // $ ("input").attr("type", "text"):
        // $("input").attr("type", "password");

    })
})