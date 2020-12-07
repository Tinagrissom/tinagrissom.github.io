$(() => {


  const $openBtn = $("#openModal");

  const $modal = $("#modal");

  const $closeBtn = $("#close").css("border-radius", "5px").css("margin-left", "85%").css("font-size", "15px").css("padding", ".5em");

  const openModal = () => {
    $modal.css("display", "block");
  }

  $openBtn.css("cursor", "pointer").on("click", openModal);

  const closeModal = () => {
    $modal.css("display", "none");
  }


  $('form').on('submit', (event) => {
    event.preventDefault();
    openModal;

    const userInput = $('input[type="text"]').val();

  $.ajax({
    url: `https://dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=c9e5efca-9984-4101-8beb-b6467586c96f`,

  }).then(
    (data) => {

      $('#modal-textbox').empty();
      const $hr = $('<hr>').css("background-color", "black").css("height", "1px").css("border", "none")
      const $h1 = $('<h1>').text(`${userInput} :`).css("font-family", "sans-serif").appendTo('#modal-textbox').append($hr)
      const $class = $('<p>').css("font-family", "sans-serif").appendTo('#modal-textbox').html(data[0].fl)

      const define = () => {
        for(let i = 0; i < 2; i++){
          console.log(data[i].shortdef);

          const $p = $('<p>')
                  .css("line-height", "150%")
                  .css("font-family", "sans-serif")
                  .appendTo('#modal-textbox')
                  .html("🔍  " + data[i].shortdef);
        }
      }
      define()
      $('#modal-textbox').append($closeBtn).css("padding", "20px")
      $closeBtn.on("click", closeModal);

    })




    // $.ajax({
    //   url: `https://bing-image-search1.p.rapidapi.com/images/${userInput}`
    //   // url: `https://api.tenor.com/v1/search?q=${userInput}&key=O3BV287UVV0M&limit=1`,
    // }).then(
    //   (data) => {
    //     // const $gif = $('<img>').attr("src", data.results[0].url).appendTo('definition')
    //     console.log(data);
    //   }
    // )
  })
})
