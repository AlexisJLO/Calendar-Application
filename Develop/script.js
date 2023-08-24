$(function () {

  $('.saveBtn').on('click', function () {
    var eventId = $(this).closest('.time-block').attr('id');
    var eventDescription = $(this).siblings('.description').val();
    localStorage.setItem(eventId, eventDescription);
  });

  function updateBlockClasses() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
      if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }

  for (var i = 9; i <= 17; i++) {
    var savedEvent = localStorage.getItem('hour-' + i);
    $('#hour-' + i + ' .description').val(savedEvent);
  }

  var currentDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDate);

  updateBlockClasses();
});

