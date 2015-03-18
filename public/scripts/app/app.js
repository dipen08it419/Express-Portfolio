//File: app.js
//Author: Dipen Shah
//Description: This script contains javascript code to register various controller for the portfolio app.

/// <reference path="../lib/angular.min.js" />

function SendMessage() {
    var emailId = $('#emailId');
    var message = $('#message');
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if (emailId.val() && message.val() && regex.test(emailId.val())) {

        $.ajax(
            {
                url:'/contacts/add',
                method:'POST',   
                data:({
                        emailId: emailId.val(), 
                        message: message.val()
                    }),
                success:function (data, status, header, config) {
                        alert('Your message sent successfully!');
                        emailId.val('');
                        message.val('');
                    },   
                error:function (data, status, header, config) {
                        alert('Sorry! Unable to send message, please try again.');
                    }
            });

        //making panel normal
        $('#contactPanel').addClass('panel-info');
        $('#contactPanel').removeClass('panel-danger');
        
        emailId.parent().removeClass('has-error');
        message.parent().removeClass('has-error');
    } else {
        //highlighting panel
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

function setActive(path,element) {
    var loc = location.pathname.split("/");
    loc = loc[loc.length-1];
    
    if(path === loc){
        element.addClass('active');
    }
}

$(document).ready(function(){
    setActive('',$('#home'));
    setActive('home',$('#home'));
    setActive('index',$('#home'));
    setActive('about',$('#about'));
    setActive('contact',$('#contact'));
    setActive('projects',$('#projects'));
    setActive('services',$('#services'));
});