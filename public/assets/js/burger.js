$(".create-form").on("submit", function (event) {
  event.preventDefault();

  var newCat = {
    name: $("#ca").val().trim(),
  };

  // Send the POST request.
  $.ajax("/api/burger", {
    type: "POST",
    data: newBurger
  }).then(
    function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
