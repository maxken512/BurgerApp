$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);
    var newEaten = $(this).data("newEaten");
      console.log('clicked');
      console.log(newEaten);
    var newEatenState = {
      Eeaten: newEeaten
    };
    console.log(newEatenState);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(function() {
        console.log("changed eaten to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      Eeaten: $("[name=eaten]:checked").val().trim()
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});