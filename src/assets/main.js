$(document).ready(function () {
  // your code will go here
  let url = 'https://www.codeschool.com/users/amaday68.json';
  
  $.ajax(url, {
      dataType: 'jsonp',
      success: function (response) {
        var courses = response.courses.completed;
        
        for (var i = 0, l = courses.length; i < l; i++) {
          // var div = $('div').addClass('course');
          var course = $('<div><h3>' + courses[i].title + '</h3><img src="' + courses[i].badge +'" /><a href="' + courses[i].url + '" target=_blank class="btn btn-primary">See Course</a></div>');
          course.addClass('course');
          $('#badges').append(course);
          
        }
      }
  });
});
