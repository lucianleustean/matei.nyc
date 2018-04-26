// This is where it all goes :)
console.log("js loaded ..");

document.addEventListener("DOMContentLoaded", function() {
  var projects = document.querySelectorAll('.list-inner-text');

  for (var i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', function(event) {
      hideAllImages(projects)
      event.currentTarget.parentElement.classList.add('active');
      event.currentTarget.parentElement.querySelectorAll('.project-details')[0].classList.remove('hide');
    });
  }
});

function hideAllImages(projects) {
  for (var i = 0; i < projects.length; i++) {
    if (projects) {
      projects[i].parentElement.classList.remove('active');
      projects[i].parentElement.querySelectorAll('.project-details')[0].classList.add('hide');
    }
  }
}
