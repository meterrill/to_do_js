$(function() {
  $("form#lists").submit(function(event) {
    event.preventDefault();

    var listName = $("input#new-list").val();

    var newList = {list: listName, tasks: []};


    $("form#tasks").submit(function(event) {
      event.preventDefault();

      var newTask = $("input#new-task").val();
      var task = {description: newTask};
      newList.tasks.push(task);

      $("ul#to-do-tasks").text("");
      newList.tasks.forEach(function(task) {
        $("ul#to-do-tasks").append("<li><span class='active-task'>"+ task.description + "</span></li>");
      });

      $("input#new-task").val("");

      // $("#to-do-tasks li").last().click(function() {
      //   $(this).appendTo("ul#completed-tasks");
      // });
    });


    $("ul#list-names").append("<li><span class='active-list'>" + newList.list + "</span></li>");

    $("input#new-list").val("");
  });

  $(".active-list").click(function() {
    $(this).show(newList.tasks)
  });

});
