
$(document).ready(function(){
    //검색버튼창 노출
    $('.search_icon').click(function(){
        $('.searchWbox').css('display','flex');
        $('body').addClass('ofhy');
    });
    //검색창 닫기버튼이벤트
    $('#seachWrap .close').click(function(){
        $('.searchWbox').css('display','none');
    });
    //검색창 내의 검색버튼
    $('.b_search_icon').click(function(){
        if($("[name='srcinput']").val() == ''){
            //검색인풋의 검색어가 없을때
            alert('검색어를 입력하고 누르세요');
            return false;
        }else
            alert('검색이동');
        
    });

    const naviTag = $('#gnb').html();//gnb안의 자식컨텐츠를 저장해라 
    $('#allMenu').append(`<div id='mgnb'><ul>${naviTag}</ul></div>`);
    //햄버거버튼 아래에 넣어라

    //사이트맵의 상단위치 고정화 하기
    let hdHeight = $('#hd').outerHeight();
    $('#mgnb').css('top',hdHeight);
    // $('#hd').attr('data-height',hdHeight);
    
 //스크롤이벤트
    $(window).scroll(function(){

        //gnb초기화
        if( $(window).scrollTop() > 0 ){
            $('body').addClass('scroll');
            $('#hd h1 img').attr('src','img/logo2.svg');
            
        }else{
            $('body').removeClass('scroll');
            $('#hd h1 img').attr('src','img/logo.svg');
            
        }
        hdHeight = $('#hd').outerHeight();//스크롤 할때마다 하이트값을 체킹
        // 같지않아 $('#hd').height() != $('#hd').css('height');
        // 이제 같다 $('#hd').height() == parseInt($('#hd').css('height'));

        $('#mgnb').css('top',hdHeight);//gnb의 시작위치에 적용
        // $('#hd').attr('data-height',hdHeight);

    });
    //햄버거버튼
    $('#allMenu').click(function(){
        $(this).toggleClass('show');
        $('#mgnb').toggleClass('wide');
    }); 
});