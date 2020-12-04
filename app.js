$(() => {

  $('form').on('submit', (event) => {
    event.preventDefault();

    const userInput = $('input[type="text"]').val();

  $.ajax({
    url: `https://dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=c9e5efca-9984-4101-8beb-b6467586c96f`,

  }).then(
    (data) => {
      const $class = $('<p>').appendTo('.definition').html(data[0].fl)

      const define = () => {
        for(let i = 0; i < 3; i++){
          console.log(data[i].shortdef);

          const $p = $('<p>').appendTo('.definition').html("🔍 " + data[i].shortdef);
        }
      }
      define()
    })
  })
})
