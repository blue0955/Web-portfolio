<?php
if (!defined('_GNUBOARD_')) exit; /* 개별 페이지 접근 불가 */

// run_event('pre_head');

// switch ($bo_table) {
//     case works: $on2 = " class=on"; $inc = " "; $pageNum = "2"; $subNum = "1"; $txt1 = "Works"; break;
// }  

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
<header class="section section-header">
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
		

    </nav>
	<div class="header">
		<div class="header-col">
			<a href="/" aria-current="page" class="logo-link w-inline-block w--current">
				<div class="logo w-embed">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 15" aria-label="logo">
						<path d="M0.332031 0.359375H3.20312L6.67969 6.60938H6.81641L10.293 0.359375H13.1641L8.02734 9.20703V14.5H5.48828V9.20703L0.332031 0.359375ZM14.8047 14.5V0.359375H24.0039V2.48828H17.3438V6.35547H23.5156V8.48438H17.3438V12.3516H24.043V14.5H14.8047ZM39.0625 7.42969C39.0625 12 36.2891 14.6953 32.5781 14.6953C28.8672 14.6953 26.0938 11.9805 26.0938 7.42969C26.0938 2.85938 28.8672 0.164062 32.5781 0.164062C36.2891 0.164062 39.0625 2.85938 39.0625 7.42969ZM36.5039 7.42969C36.5039 4.20703 34.8828 2.44922 32.5781 2.44922C30.2734 2.44922 28.6523 4.20703 28.6523 7.42969C28.6523 10.6523 30.2734 12.4102 32.5781 12.4102C34.8828 12.4102 36.5039 10.6523 36.5039 7.42969ZM52.9492 0.359375V14.5H50.6836L43.9844 4.83203H43.8672V14.5H41.3281V0.359375H43.6328L50.293 10.0273H50.4297V0.359375H52.9492Z" fill="currentColor"/>
					</svg>
				</div>
			</a>
			<div class="menu">
				<div class="menu-title">
					<div class="text-p">Home</div>
					<div class="diamond w-embed">
						<svg viewBox="0 0 8 8" fill="none" aria-hidden="true">
							<path d="M8 4C6.523 2.818 5.182 1.477 4 0 2.818 1.477 1.477 2.818 0 4c1.477 1.182 2.818 2.523 4 4 1.182-1.477 2.523-2.818 4-4z" fill="currentColor"></path>
						</svg>
					</div>
				</div>
				<div class="burger w-embed">
					<svg viewBox="0 0 16 16" aria-hidden="true">
						<path d="M0.800049 2.3999H15.2"></path>
						<path d="M0.800049 8H15.2"></path>
						<path d="M0.800049 13.6001H15.2"></path>
					</svg>
				</div>
				<a href="#" onclick="return false;" class="menu-trigger w-inline-block" role="button" aria-controls="nav" aria-haspopup="menu" aria-expanded="false" aria-label="Open menu" aria-pressed="false"></a>
				<nav data-height="" class="nav" id="nav" aria-hidden="false">
					<div data-stagger-delay="" data-stagger="120" class="nav-content">
						<ul role="list" class="list" style="transition-delay: 120ms;">
							<li><a href="/" aria-current="page" class="link w-inline-block w--current"><div class="text-h6">Home</div></a></li>
							<li><a href="/works" class="link w-inline-block"><div class="text-h6">Works</div></a></li>
							<li><a href="/pages/about.php" class="link w-inline-block"><div class="text-h6">About</div></a></li>
							<li><a href="/contact" class="link w-inline-block" rel="noopener noreferrer"><div class="text-h6">Contact</div></a></li>
						</ul>
					</div>
					</div>
				</nav>
			</div>
			<div class="header-col" style="transition-delay: 480ms;">
				<a data-git="" aria-label="github" href="https://github.com/blue0955/Web-portfolio" target="_blank" class="C_btn C_btn-git w-inline-block">
					<div class="icon w-embed">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<g clip-path="url(#clip0_3441_730)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0099 0C5.36875 0 0 5.40833 0 12.0992C0 17.4475 3.43994 21.9748 8.21205 23.5771C8.80869 23.6976 9.02724 23.3168 9.02724 22.9965C9.02724 22.716 9.00757 21.7545 9.00757 20.7527C5.6667 21.474 4.97099 19.3104 4.97099 19.3104C4.43409 17.9082 3.63858 17.5478 3.63858 17.5478C2.54511 16.8066 3.71823 16.8066 3.71823 16.8066C4.93117 16.8868 5.56763 18.0486 5.56763 18.0486C6.64118 19.8913 8.37111 19.3707 9.06706 19.0501C9.16638 18.2688 9.48473 17.728 9.82275 17.4276C7.15817 17.1471 4.35469 16.1055 4.35469 11.458C4.35469 10.1359 4.8316 9.05428 5.58729 8.21304C5.46807 7.91263 5.0504 6.67043 5.70677 5.00787C5.70677 5.00787 6.72083 4.6873 9.00732 6.24981C9.98625 5.98497 10.9958 5.85024 12.0099 5.84911C13.024 5.84911 14.0577 5.98948 15.0123 6.24981C17.299 4.6873 18.3131 5.00787 18.3131 5.00787C18.9695 6.67043 18.5515 7.91263 18.4323 8.21304C19.2079 9.05428 19.6652 10.1359 19.6652 11.458C19.6652 16.1055 16.8617 17.1269 14.1772 17.4276C14.6148 17.8081 14.9924 18.5292 14.9924 19.6711C14.9924 21.2936 14.9727 22.5957 14.9727 22.9962C14.9727 23.3168 15.1915 23.6976 15.7879 23.5774C20.56 21.9745 23.9999 17.4475 23.9999 12.0992C24.0196 5.40833 18.6312 0 12.0099 0Z" fill="currentColor"/>
							</g>
							<defs>
							<clipPath id="clip0_3441_730">
							<rect width="24" height="24" fill="white"/>
							</clipPath>
							</defs>
						</svg>
						<!-- <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
							<g stroke="currentColor" stroke-width="1.6"><g stroke-linecap="round" stroke-linejoin="round">
								<path d="M4.678 6.34h6.643M4.678 9.66h4.429"></path></g>
								<path d="M8.003.799a7.21 7.21 0 0 0-6.368 3.832C1.024 5.787.74 7.089.815 8.395s.505 2.567 1.245 3.646L.803 15.199l3.36-1.133a7.21 7.21 0 0 0 6.393.631 7.21 7.21 0 0 0 4.359-4.719 7.17 7.17 0 0 0-1.162-6.31c-.671-.891-1.539-1.614-2.537-2.112S9.119.799 8.003.799z"></path>
							</g>
						</svg> -->
					</div>
				</a>
				<a href="/contact" class="C_btn w-inline-block"><div class="text-C_btn">Contact me</div>
					<div class="icon icon-arrow w-embed">
						<svg viewBox="0 0 8 10" fill="none" aria-hidden="true">
							<path d="M2.2 1.4l3.48 3.317A.4.4 0 0 1 5.798 5a.4.4 0 0 1-.118.283L2.2 8.6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>
					</div>
				</a>
			</div>
		</div>

		</div>
	</div>
	
</header >

<!-- } 상단 끝 --><hr>

<div id="wstWrap" class="wrapper">
<?php if (defined("_INDEX_")) { ?> <!-- 인덱스에서 사용 -->
<div data-barba="wrapper" class="page-wrapper" aria-live="polite">
    <div data-page="Home" data-barba="container" data-barba-namespace="main" class="page">
        <main class="main">
<?php } ?>

<?php if (!defined("_INDEX_")) { ?> <!-- 인덱스에서 사용하지 않음 -->
<div data-barba="wrapper" class="page-wrapper" aria-live="polite">
    <div <?php if($bo_table=="works"){ ?> data-page="works" data-barba-namespace="main" data-barba="container" class="page" <?php }
	else if($bo_table=="contact"){ ?> data-page="contact" data-barba-namespace="main" data-barba="container" class="page" <?php } 
	else if($pageName=="about"){ ?> data-page="about" data-barba-namespace="main" data-barba="container" class="page" <?php } ?>
	>
		<main class="main">

<?php } ?>




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

<section id="ctWrap">


<?php if (!defined("_INDEX_")) {  /*인덱스에서 사용하지 않음*/ ?>
	<div id="container">
	<?php if($pageName == "about"){ ?>
		<div id="page_name_container">
			<div class="page_name" data-delay="1" data-anim>
				<h2 class="text-h2 neu" title="<?php echo get_text($g5['title']); ?>"><?php echo get_head_title($g5['title']); ?></h2>
			</div>
		</div>
		<?php } else if($bo_table == "contact"){ ?>
			<div id="page_name_container">
                <div class="page_name" data-delay="1" data-anim>
                    <h2 class="text-h2 neu" title="">contact</h2>
                </div>
            </div>
        <?php } else {?>
		<h2 class="contentTitle">
			<strong title="<?php echo get_text($g5['title']); ?>"><?php echo get_head_title($g5['title']); ?></strong>
			<span class="locationBar" title="현재위치"><span> <em class="fa fa-home" aria-hidden="true"></em> HOME <i class="fa fa-angle-right" aria-hidden="true"></i> </span> <span class="loc1D"><!-- 1차메뉴 --></span> <span class="loc2D"><!-- 2차메뉴 --></span></span>
		</h2>
	<?} ?>
		<hr>

<?php }  /*인덱스에서 사용하지 않음*/