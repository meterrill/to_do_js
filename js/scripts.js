$(function() {
  $("form#tasks").submit(function(event) {
    event.preventDefault();

    var newTask = $("input#new-task").val();
    var task = {task: newTask};

    $("ul#to-do-tasks").append("<li><span class='active-task'>"+ task.task + "</span></li>");


    $("input#new-task").val("");

    $("#to-do-tasks li").last().click(function() {
      $(this).appendTo("ul#completed-tasks");
    });
  });
});
