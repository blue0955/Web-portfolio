<?php
/* copyright(c) WEBsiting.co.kr */
if (!defined('_GNUBOARD_')) exit; /* 개별 페이지 접근 불가 */

$admin = get_admin("super"); 

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/head.php');
    return;
}

include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
?>
<a id="topID"></a>
<div id="skip_to_container"><a href="#ctWrap">본문 바로가기</a></div>
<!-- 상단 시작 { -->
<header>
    <h1 id="hd_h1"><?php echo $g5['title'] ?> <?php echo $config['cf_title'] ?></h1>
	<a href="<?php echo G5_URL ?>" id="topLogo"><img src="<?php echo G5_THEME_IMG_URL ?>/logo.png" alt="<?php echo $config['cf_title']; ?>"></a>


	
	<button id="snbOpen">
		<b><i></i><i></i><i></i></b>
		<span class="sound_only">사이드메뉴 열기 닫기</span>
	</button>
	<nav id="sideBar">
		<h2 class="sound_only">사이트 전체메뉴</h2>

		<a href="<?php echo G5_URL ?>" class="sideLogo"><img src="<?php echo G5_THEME_IMG_URL ?>/logo.png" alt="<?php echo $config['cf_title']; ?> main page"></a>

		<!-- SNB // -->
		<?php include_once(G5_THEME_PATH."/sideBar.php"); /* 사이드메뉴 PC or 모바일*/ ?>
		
		<?php if ($i == 0) {  ?>
			<p class="gnb_empty">메뉴 준비 중입니다.</p>
			<?php if ($is_admin) { ?><p class="gnb_empty"><a href="<?php echo G5_ADMIN_URL; ?>/menu_list.php">관리자모드 &gt; 환경설정 &gt; <u>메뉴설정</u></a>에서 메뉴를 입력해 주세요.</p><?php } ?>
		<?php } ?>

		<!-- // SNB -->
		

		<div id="allSchBox">
			<fieldset>
				<legend>사이트 내 전체검색</legend>
				<form name="fsearchbox" method="get" action="<?php echo G5_BBS_URL ?>/search.php" onsubmit="return fsearchbox_submit(this);">
					<input type="hidden" name="sfl" value="wr_subject||wr_content">
					<input type="hidden" name="sop" value="and">
					<label for="sch_stx" class="sound_only">검색어 필수</label>
					<input type="text" name="stx" id="sch_stx" class="topSchFocus" maxlength="20" placeholder="Search...">
					<button type="submit" id="sch_submit" value="검색"><i class="fa fa-search" aria-hidden="true"></i><span class="sound_only">검색</span></button>
				</form>
				<script> function fsearchbox_submit(f) { if (f.stx.value.length < 2) { alert("검색어는 두글자 이상 입력하십시오."); f.stx.select(); f.stx.focus(); return false; } /* 검색에 많은 부하가 걸리는 경우 이 주석을 제거하세요. */ var cnt = 0; for (var i=0; i<f.stx.value.length; i++) { if (f.stx.value.charAt(i) == ' ') cnt++; } if (cnt > 1) { alert("빠른 검색을 위하여 검색어에 공백은 한개만 입력할 수 있습니다."); f.stx.select(); f.stx.focus(); return false; } return true; } </script>
			</fieldset>
		</div>

		<!-- 서브메뉴바 하단 정보// -->
		<dl class="snbCS">
			<dt class="sound_only">CONTACT US</dt>
			<dd>
				<strong><i class="fa fa-phone-square"></i> <?php if($admin['mb_tel']){ echo '<span> '.$admin['mb_tel'].'</span>';} else echo '<span>관리자 전화번호</span>';?> </strong>
				<b><?php if($admin['mb_email']){ echo  '<span>'; ?><a href='mailto:<?php echo $admin['mb_email']?>'><?php echo $admin['mb_email']?></a></span><?php } else echo '<span>관리자이메일</span>';?> </b>
			</dd>
		</dl>

		<div id="snbMvAr">
			<div class="snbMvArBtn">
				<?php if ($is_member) {  ?>
				<a href="<?php echo G5_BBS_URL ?>/logout.php"><b>LOGOUT</b></a>
				<a href="<?php echo G5_BBS_URL ?>/member_confirm.php?url=<?php echo G5_BBS_URL ?>/register_form.php">정보수정</a>
				<?php } else {  ?>
				<a href="<?php echo G5_BBS_URL ?>/login.php"><b>LOGIN</b></a>
				<a href="<?php echo G5_BBS_URL ?>/register.php"><b>JOIN</b></a>
				<?php }  ?>
				<?php if ($is_admin) {  ?><a href="<?php echo G5_ADMIN_URL ?>"><b>ADMIN</b></a><?php }  ?>
			</div>
		</div>
		
		
		<!-- //서브메뉴바 하단 정보 -->
    </nav>
</header >
<aside id="sideBarCover"><?php /* mobile nav cover !!지우지마세요 : 모바일 화면에서 출력되는 메뉴배경입니다. */?></aside>
<!-- } 상단 끝 --><hr>

<div id="wstWrap">

<!-- 콘텐츠 시작 { -->
<?php if (!defined("_INDEX_")) {  /*인덱스에서 사용하지 않음*/ ?>
<!-- <div id="page_title" class="sbtImg">
	<div class="page_title_in">
		<h2>
			<strong title="<?php echo get_text($g5['title']); ?>" class="loc1D"><?php echo get_head_title($g5['title']); ?></strong>
			<span class="titleBbar"></span>
		</h2>
	</div>
</div> -->
<?php }  /*인덱스에서 사용하지 않음*/ ?>
<aside id="topSpacer"></aside>
<section id="ctWrap">

<?php if (!defined("_INDEX_")) {  /*인덱스에서 사용하지 않음*/ ?>
	<div id="container">

		<h2 class="contentTitle">
			<strong title="<?php echo get_text($g5['title']); ?>"><?php echo get_head_title($g5['title']); ?></strong>
			<span class="locationBar" title="현재위치"><span> <em class="fa fa-home" aria-hidden="true"></em> HOME <i class="fa fa-angle-right" aria-hidden="true"></i> </span> <span class="loc1D"><!-- 1차메뉴 --></span> <span class="loc2D"><!-- 2차메뉴 --></span></span>
		</h2>

		<hr>

<?php }  /*인덱스에서 사용하지 않음*/