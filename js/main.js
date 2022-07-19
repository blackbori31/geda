
new fullpage('#fullpage', {
	
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
   //sectionsColor: ['#fff', '#EBE7E4', '#FFC19E', '#BCE55C','#5CD1E5'],
    navigation: true,
	navigationPosition: 'right',
    navigationTooltips: ['GAH소개','제다큐어','연구개발','본사위치','연구소위치'], 
    easing: 'easeInOutCubic',
    anchors: ['1st', 'second', '3rd', '4th', '5th'],
    menu: '.gnb_list',
    normalScrollElements: '#s2', //오토스크롤이 아니라 정상 스크롤 작동함
    responsiveHeight: 450, //세로 높이가 특정수치보다 작아졌을 때는 오토스크롤링 작동 안함
});

//햄버거 버튼 클릭 
$('.btn_total').click(function(){
    $('.total_menu_z').addClass('active');
});

//메뉴 팝업 닫기버튼
$('.btn_totalClose').click(function(){
    $('.total_menu_z').removeClass('active');
});

var myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    //scrollbars: true
});

$('.totalMitem').click(function(){
    if( $(this).hasClass('active') ){  //현재 active가 적용된 상태일때
        $(this).removeClass('active'); 
    } else {
        $('.totalMitem').removeClass('active'); 
        $(this).addClass('active');
    }
});

//오른쪽 아래 고정되어 있는 섹션 위아래 이동버튼
document.querySelector('.prevA').addEventListener('click',function(e){
    e.preventDefault(); //preventDefault 원래 작동하는 동작을 안하게 한다
    fullpage_api.moveSectionUp(); //페이지 한단계 위섹션으로 가기
});

document.querySelector('.nextA').addEventListener('click',function(e){
    e.preventDefault(); //preventDefault 원래 작동하는 동작을 안하게 한다
    fullpage_api.moveSectionDown(); //페이지 한단계 아래섹션으로 가기
});
//fullpage_api.moveSectionUp(),fullpage_api.moveSectionDown() 이거 찾는거 풀페이지홈페이지 들어가서 Docs(설명서) -> Options(옵션)에 보면 있음.

