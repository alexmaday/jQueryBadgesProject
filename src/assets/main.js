$(document).ready(function () {
  // your code will go here
  let url = 'https://www.codeschool.com/users/amaday68.json';
  
  $.ajax(url, {
      dataType: 'jsonp',
      success: function (response) {
        var courses = response.courses.completed;
        
        for (var i = 0, l = courses.length; i < l; i++) {
          $('#badges').append('<p>' + courses[i].title + '</p>');
          
        }
      }
  });
});
