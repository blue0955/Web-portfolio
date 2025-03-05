<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_CSS_URL.'/main.css">', 5);
include_once(G5_THEME_PATH.'/head.php');
?>
<h2 class="sound_only"><?php echo $g5['title'] ?> <?php echo $config['cf_title'] ?></h2>

<section class="mainContentsW100 btnMoreNone latTitNone">
	<h2 class="sound_only"><?php echo $config['cf_title'] ?></h2>
	<?php
	/* 
		메인페이지 박스형 갤러리 게시판 최신글 12의 배수로 설정해 주셔야 공백이 발생되지 않습니다. ex) 12 , 24 , 36 ... 
		이미지 비율은 게시판 설정의 갤러리 이미지 높이와 넓이 값을 따릅니다.
	*/

	// 사용방법 : latest('theme/mainBox', '게시판아이디', 출력라인, 글자수);
	echo latest('theme/mainBox', 'gallery', 12, 24);
	?>
</section>

<?php
if(defined('_INDEX_')) { /* index에서만 실행 */
	include G5_BBS_PATH.'/newwin.inc.php'; /* 팝업레이어 */
}
?>

<?php
include_once(G5_THEME_PATH.'/tail.php');