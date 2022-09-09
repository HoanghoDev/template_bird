$(document).ready(function(){
    var count_group = $(".list .item").length;
    var active = 0;
    var deg_bg = 0;
    var begin= true;
    function Load(){

        if(begin){
            begin = false;
        }else{
            $('#item_'+(active - 2 < -1 ? count_group - 2 : active - 2 < 0 ? count_group -1 : active - 2)).removeClass('hide');
            $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).removeClass('active');
            $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).addClass('hide');
        }

        $('#item_'+active).removeClass('hide');
        $('#item_'+active).addClass('active');

        $('.dots-page div').removeClass('active');
        $('#dot_'+active).addClass('active');
        $('.effect').addClass('start');
        beginPosition();

        
        setTimeout(function (){
            $('.effect').removeClass('start');
        }, 3000)
    }
    Load();
    
    $('#next').on('click', function(){
      active = active + 1 >= count_group ? 0 : active + 1;
      Load();
    })
        $('#prev').on('click', function(){
        active = active - 1 < 0 ? count_group - 1 : active - 1;
        })
    });
$('.button').hover(function(){
    if($(".effect").hasClass("start")){
        return;
    }
        $('.birt').css('right','31%');
        $('.birt').css('bottom','16%');
        $('.birt').css('transform','rotateY(192deg) rotate(-97deg)');
}
,function(){
       beginPosition();
});
$('.header').hover(function(){
    if($(".effect").hasClass("start")){
        return;
    }
    $('.birt').css('right','50%');
    $('.birt').css('bottom','36%');
    $('.birt').css('transform','rotateY(192deg) rotate(-40deg)');
}
,function(){
   beginPosition();
});

$('#next').hover(function(){
    if($(".effect").hasClass("start")){
        return;
    }
    $('.birt').css('right','50%');
    $('.birt').css('bottom','15%');
    $('.birt').css('transform','rotateY(192deg) rotate(-40deg)');
}
,function(){
   beginPosition();
});


function beginPosition(){
    $('.birt').css('right','50%');
    $('.birt').css('bottom','25%');
    $('.birt').css('transform','rotateY(192deg) rotate(-40deg)');
}