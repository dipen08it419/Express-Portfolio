//File: app.js
//Author: Dipen Shah
//Site: https://portfoilo.herokuapp.com/
//Description: This script contains javascript functions required in the application.

//this methos is used to call api on /contact/add
function SendMessage() {
    var emailId = $('#emailId'); //get input element
    var message = $('#message'); //get input element
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; //regex expression for email validation
    
    //validating input
    if (emailId.val() && message.val() && regex.test(emailId.val())) {

        //calling api
        $.ajax(
            {
                url:'/contacts/add',
                method:'POST',   
                data:({
                        emailId: emailId.val(), 
                        message: message.val()
                    }),
                success:function (data, status, header, config) {
                        //resetting input fields
                        alert('Your message sent successfully!');
                        emailId.val('');
                        message.val('');
                    },   
                error:function (data, status, header, config) {
                        alert('Sorry! Unable to send message, please try again.');
                    }
            });

        //making input elements normal
        $('#contactPanel').addClass('panel-info');
        $('#contactPanel').removeClass('panel-danger');
        emailId.parent().removeClass('has-error');
        message.parent().removeClass('has-error');
    } else {
        //indicating error on input elements
        $('#contactPanel').removeClass('panel-info');
        $('#contactPanel').addClass('panel-danger');
        
        if(!emailId.val() || !regex.test(emailId.val())){
            emailId.parent().addClass('has-error');
        }
        else{
            emailId.parent().removeClass('has-error');
        }
        
        if(!message.val()){
            message.parent().addClass('has-error');
        }else{
            message.parent().removeClass('has-error');
        }
    }
}

//method will be used to set active tab on navigation
function setActive(path,element) {
    var loc = location.pathname.split("/");
    loc = loc[loc.length-1];
    
    if(path === loc){
        element.addClass('active');
    }
}

//called once document is loaded
$(document).ready(function(){
    setActive('',$('#home'));
    setActive('home',$('#home'));
    setActive('index',$('#home'));
    setActive('about',$('#about'));
    setActive('contact',$('#contact'));
    setActive('projects',$('#projects'));
    setActive('services',$('#services'));
});