//if you're not on the first page navigate to the first page
if($('.js-jump-to-page:first').text() != "1"){
  $('.js-jump-to-page:nth-child(2)').click()
}

// Find how many pages of games you have by getting the text inside the last page button
var loop = $('.js-jump-to-page:nth-last-child(2)').html()*1


// array to store all games found
var games = [];

// loop through each page
for(i=0;i<loop;i++){

  // for each game on the page add an entry into the array
  $('tbody tr').each(function(){
    if ($(this).children('td.platform').children('i').attr('title') == 'Steam') {
      games.push($(this).children('td.game-name').children('h4').attr('title'));
    }
  })
  // click next page button
  $('.js-jump-to-page:last').click()
}

// sort game list
games.sort()


// Output games with header needed for Reddit formatted table
console.log(games.join('\n'))
