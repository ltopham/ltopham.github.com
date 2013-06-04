function isEmail(email) {
            // pass regex for validating an e-mail address
              var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              return regex.test(email);
        }
        
        function completeInviteForm() {
            setTimeout(function() { $("#completeform").fadeOut(400, function(){
                $(this).before('<span class="msg">All set! We will be in touch.</span>');
            });
            }, 1100);
        }
        
        var erdiv    = $("#error");
        var btnwrap  = $("#btnwrap");
        
        
        $(document).ready(function(){
            $("#sendbtn").live("click", function(e){
                // once the send button is clicked we perform some functions
                // and setup a few variables
                e.preventDefault();
                var emailval = $("#email").val();
                
                
                if(!isEmail(emailval)) {
                    erdiv.html("enter a full e-mail address!");
                    erdiv.css("display", "block");
                }
                
                if(isEmail(emailval)) { // email address looks good!
                    erdiv.css("color", "#FF5400");
                    erdiv.html("just a sec...");
                    btnwrap.html('<img src="img/loader2.gif" alt="loading">');
                    (completeInviteForm(), 900);
                }
            });
        });