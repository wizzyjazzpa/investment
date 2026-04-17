$(document).ready(function () {

    $('#register').on('submit', function (e) {
        e.preventDefault();
        const Name = $('#Name').val();
        const Username = $('#Username').val();
        const Email = $('#Email').val();
        const Phone = $('#Phone').val();
        const Gender = $('#Gender').val();
        const Country = $('#Country').val();
        const Password = $('#Password').val();
        const Confirm_Password = $('#Comfirm_Password').val();
        const Account_Type = $('#Account_Type').val();
        if (Confirm_Password != Password) {
            $('#msg').html("<p class='alert alert-danger'>Password does not match, Please check password and try again</p>");
        }
        $.ajax({
            url: "api/registration",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ Name, Username, Email, Phone, Gender, Country, Password, Account_Type }),
            success: function (res) {
                if (res.success == true) {
                    console.log(res.data)
                    $('#progressContainer').show();
                    let width = 0;
                    let interval = setInterval(() => {
                        width += 10;
                        $('#progressContainer').css('width', width + '%');
                        if (width >= 100) {
                            clearInterval(interval);

                            // ✅ Redirect after loading
                            window.location.href = "/login"; // change to your page
                        }
                    },200)
                }else if(res.status == 400){
                     $('#msg').html(`<p class='alert alert-danger'>${res.message}</p>`);
                }else if(res.status==402){
                     $('#msg').html(`<p class='alert alert-danger'>${res.message}</p>`);
                }
            },
            error: function () {
                console.log("database error has occured")
                $('#msg').html("<p class='alert alert-danger'>A database error has occured</p>");
            }
        })
    })
})