var List = {listName: ""};
var Task = {taskName: ""};

$(function() {
  var currentList = null

  $("form#lists").submit(function(event) {
    event.preventDefault();

    var listName = $("input#new-list").val();

    var newList = Object.create(List);
    newList.tasks = []
    newList.listName = listName;

    $("ul#list-names").append("<li><span class='active-list'>" + newList.listName + "</span></li>");

    $(".active-list").last().click(function() {
      $("#to-do-tasks").empty();
      $(".show-tasks").show();
      currentList = newList

      $("ul#to-do-tasks").text("");
      currentList.tasks.forEach(function(task) {
        $("ul#to-do-tasks").append("<li><span class='active-task'>"+ task.taskName + "</span></li>");
      });

    $("form#tasks").submit(function(event) {
      event.preventDefault();

      var inputtedTask = $("input#new-task").val();
      var newTask = Object.create(Task);

      newTask.taskName = inputtedTask;
      currentList.tasks.push(newTask);

      $("ul#task-names").append("<li><span class='active-list'>" + newTask.taskName + "</span></li>");

      $("input#new-task").val("");

      // $("#to-do-tasks li").last().click(function() {
      //   $(this).appendTo("ul#completed-tasks");
      // });
    });


    });

    $("input#new-list").val("");
  });
});
