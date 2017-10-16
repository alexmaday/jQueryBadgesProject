$(document).ready(function () {
  // your code will go here
  let url = 'https://www.codeschool.com/users/amaday68.json';
  
  $.ajax(url, {
      dataType: 'jsonp',
      success: function (response) {
        var courses = response.courses.completed;
        console.log(courses);
        
        for (var i = 0, l = courses.length; i < l; i++) {
          let course = courses[i];

          let title = course.title, imgSrc = course.badge, link = course.url;

          $div = $('<div>', {"class": "course", });
          $title = $('<h3>').text(title);
          $img = $('<img>', {"src": imgSrc});
          $link = $('<a>', {"href": link, "target": "_blank", "class": "btn btn-primary"}).text('See Course');
          
          $div.append($title, $img, $link);
          $('#badges').append($div);
          
        }
      }
  });
});
