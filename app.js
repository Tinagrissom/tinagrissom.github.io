$(() => {

  //creating a variable to grab my submit button
  const $openBtn = $("#openModal");

  //creating a variable to grab my modal
  const $modal = $("#modal");

  //creating a variable for my close btn, and adding some css
  const $closeBtn = $("#close")
                  .css("border-radius", "5px")
                  .css("font-size", "15px")
                  .css("padding", ".5em")
                  .css("cursor", "pointer");

  //creating a function to display my modal
  const openModal = () => {
    $modal.css("display", "block");
  }

  //creating an event listener for my function, adding css of pointer to my btn
  $openBtn.css("cursor", "pointer").on("click", openModal);

  //creating a function to close my modal by changing the css display to none
  const closeModal = () => {
    $modal.css("display", "none");
  }

  //event listener for my define() function, also opens my modal
  $('form').on('submit', (event) => {
    event.preventDefault();
    openModal;

    //created a variable to grab the user input
    const userInput = $('input[type="text"]').val();

    //accessing my Dictionary API
  $.ajax({
    url: `https://dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=c9e5efca-9984-4101-8beb-b6467586c96f`,

  }).then(
    (data) => {

      //emptying my modal bax each time a search happens
      $('#modal-textbox').empty();

      //added a horizontal line element and styled with css
      const $hr = $('<hr>')
                .css("background-color", "black")
                .css("height", "1px")
                .css("border", "none")

      //created an h1 element to display the word from the user input
      const $h1 = $('<h1>')
                .text(`${userInput} :`)
                .css("font-family", "sans-serif")
                .appendTo('#modal-textbox')
                .append($hr)

      //created a p tag to display the class of word being defined - ex: noun, verb, etc
      const $class = $('<p>')
                  .css("font-family", "sans-serif")
                  .appendTo('#modal-textbox')
                  .html(data[0].fl)

      //created a function with a for loop to populate up to 2 definitions
      const define = () => {
        for(let i = 0; i < 2; i++){
          console.log(data[i].shortdef);

          //p tag for those definitions and some styling
          const $p = $('<p>')
                  .css("line-height", "150%")
                  .css("font-family", "sans-serif")
                  .appendTo('#modal-textbox')
                  .html("🔍  " + data[i].shortdef);
        }
      }
      //calling my define function
      define()
      //appending the close button to my modal and adding styling
      $('#modal-textbox')
                  .append($closeBtn)
                  .css("padding", "20px")

      //event listener for my close modal button
      $closeBtn.on("click", closeModal);

    })
  })
})
