//Ajax load page on click
$(document).on('click','#login-show',function(e){
    $.ajax({    
      type: "GET",
      url: "/l",             
      dataType: "html",                  
      success: function(data){                    
          $("#page-body").html(data); 
         
      }
  });
});

$(document).on('click','#home-show',function(e){
    $.ajax({    
      type: "GET",
      url: "/",             
      dataType: "html",                  
      success: function(data){                    
          $("#page-body").html(data); 
         
      }
  });
});

$(document).on('click','#signin-show',function(e){
  $.ajax({    
    type: "GET",
    url: "/s",             
    dataType: "html",                  
    success: function(data){                    
        $("#page-body").html(data); 
       
    }
});
});
//Ajax load login function
$(document).on('click','#login-submit',function(e){
  $.ajax({    
    type: "POST",
    url: "/login",             
    dataType: "html", 
    data: {
      username: $("#username").val(),
      password: $("#pass").val()
    } ,    
    //Print Login Authentication result in HTML <p>          
    success: function(data){                    
        $("#login-auth").html(data); 
       
    }
});
});
//Ajax load signin fuction 
$(document).on('click','#signin-submit',function(e){
  $.ajax({    
    type: "POST",
    url: "/signin",             
    dataType: "html", 
    data: {
      username: $("#username").val(),
      password: $("#pass").val(),
      email: $("#email").val()
    } ,    
    //Print SignIn Authentication result in HTML <p>          
    success: function(data){                    
        $("#signin-auth").html(data); 
       
    }
});
});










//Ajax load profile fuction 

//Ajax load profile fuction 
$(document).on('click','#profile-show',function(e){
  $.ajax({    
    type: "GET",
    url: $("#profile-path").val(),             
    dataType: "text", 
    success: function(data){    
        $("#page-body").html(data); 
    }
});
});


//post-add-show
$(document).on('click','#post-add-show',function(e){
  $.ajax({    
    type: "GET",
    url: "/post",             
    dataType: "text", 
    success: function(data){    
        $("#landing-page-content").html(data); 
    }
});
});
//Ajax log out function
$(document).on('click','#logout',function(e){
  $.ajax({    
    type: "GET",
    url: "/logout",             
    dataType: "html", 
    success: function(data){                    
        $("#logout").html(data); 
       
    }
});
});

//
// ajax post IMage
$(document).ready(function(){
  var fileData;
  var myFile;
  $('#file').change(function(){
      var filereader = new FileReader();
      filereader.onload = function(event){
      fileData  = event.target.result;
      document.getElementById("update-image").click();
      };
      myFile = $('#file').prop('files')[0];  
      console.log('myfile',myFile)
     filereader.readAsDataURL(myFile)
     
     
  });
  $('#update-image').click(function(){
      $.ajax({
          method:"post",
          url:"/post",
          dataType:"JSON",
          data:{'filename':myFile.name,'file':fileData},
          success:function(response){
              if(response.msg=="success"){
                 $('#file').val('');
                 $('.add-imgs-show').append(`<img src="../files/imgs/`+response.imageName+`" class ="imgs-post" style ="float: left">
                 <input type="submit" value="X" class="form-control primary" id ="delete-pics" style ="width: 35px; float: left; margin-left: 10px">
                 <input type="text" id ="post-content" class ="form-control" value="" style ="width: 250px;">
                  <br>
                  `)
              }
          },
          error:function(){
              alert('server error');
          }
      });
  });
});

//deletePics
$(document).on('click','#delete-pics',function(e){
  $.ajax({    
    type: "DELETE",
    url: "/post",             
    dataType: "text", 
    success: function(data){            
    }
});
});