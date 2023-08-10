$(document).ready(function() {
    let count = 2; 
  
    $('#up').click(function() {
      if (count < 5) {
        count++;
        updateCount();
      }
    });
  
    $('#down').click(function() {
      if (count > 1) {
        count--;
        updateCount();
      }
    });
  
    function updateCount() {
      const formattedCount = count < 10 ? '0' + count : count;
      $('#count').text(formattedCount);
    }
  });
  