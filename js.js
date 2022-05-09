$("#button1").click(function() {
      $("#square").slideUp(1000)
    });
    $("#button2").click(function() {
      $("#square").slideDown(1000)
    });

    
    $('p').click(function () {
        $(this).css("color","red")
        let s = $(this);
        let originaltext= s.text();
        $("p").text('Текст');
          s.text(originaltext);
        s.html(s.text() == 'Текст' ? 'Привет' : 'Пока');
    
    });
    $("p1").click(function () {
      $("p1").css("font-size", "30px");
    });