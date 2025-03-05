<?php
// $pageName = "about";
include_once('./_common.php');

/* 페이지설정 코드 입력! */

	//페이지 제목 지정
	$g5['title'] = "GREETING";
	
	//본 페이지에 해당되는 css가 있을 경우 아래 css 삽입 코드를 활성화 해주시기 바랍니다.
	//add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_CSS_URL.'/page.css?ver='.G5_CSS_VER.'">', 0);
	/*
		테마폴더로의 링크가 길어지는 경우 테마폴더 내 pages 폴더를 
		그누보드 adm, data 폴더와 동일한 경로로 복사해 주시면 
		http://도메인/pages/company.php 와 같은 링크로 이용 가능합니다. 

		관리자모드 메뉴관리에서 본 페이지의 주소는 http 또는 https 부터 시작되는 주소로 넣어주시기 바랍니다.
	*/

/* 페이지설정 코드 입력! */
include_once('../head.php');
?>


<div><img src="/theme/gPunchD/img/about.jpg" alt=""></div>

<br><br>

<h2 class="h2_title_center">
	갤러리 펀치로<br>
	<small>포트폴리오를 멋지게 꾸며보세요!</small>
</h2>
<div class="text16_center">
	<b>디자이너, 포토그래퍼, 건축가 이신가요?</b> <br>
	깔끔한 포트폴리오 홈페이지가 필요하시다면 주저없이 선택해 주세요! <br>
	모노톤의 모던한 레이아웃은 여러분의 결과물을 더욱 돋보이게 꾸며줍니다. <br>
	테마에 포함된 다양한 갤러리 게시판으로 여러분의 작업물에 알맞는 홈페이지를 만들 수 있습니다. <br> <br>
	<b>지금 바로 시작해 보세요!</b>
	include_once(G5_PATH.'/'.$bo_table.'.php');
	<br><br>

</div>
<!-- <?php include_once(G5_PATH . '/include/include01/inquiry_wrap.php');  ?> -->
<?php include_once(G5_THEME_PATH.'/'.$works.'.php');?>

<?php
include_once('../tail.php');