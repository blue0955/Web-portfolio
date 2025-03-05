<?php
$pageName = "about";
include_once('./_common.php');

/* 페이지설정 코드 입력! */

	//페이지 제목 지정
	$g5['title'] = "about";
	
	//본 페이지에 해당되는 css가 있을 경우 아래 css 삽입 코드를 활성화 해주시기 바랍니다.
	add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_CSS_URL.'/page.css?ver='.G5_CSS_VER.'">', 0);
	/*
		테마폴더로의 링크가 길어지는 경우 테마폴더 내 pages 폴더를 
		그누보드 adm, data 폴더와 동일한 경로로 복사해 주시면 
		http://도메인/pages/company.php 와 같은 링크로 이용 가능합니다. 

		관리자모드 메뉴관리에서 본 페이지의 주소는 http 또는 https 부터 시작되는 주소로 넣어주시기 바랍니다.
	*/

/* 페이지설정 코드 입력! */
include_once(G5_THEME_PATH .'/head.php');
?>

<div class="container">
	<div class="introduce">
		<figure class="character">
			<img src="/images/about_profile.gif" alt="프로필 캐릭터">
		</figure>
		<div class="txt_wrap">
			<h5 class="hello text-h6">안녕하세요 <br> 더 좋은 UX를 꿈꾸며 <br> 한계없이 나아가는 황혜연입니다.</h5>
			<div class="tag_container">
				<div class="tag">#감각있는</div>
                <div class="tag">#다양한 경험을 선호</div>
                <div class="tag">#긍정적 바이브</div>
                <div class="tag">#섬세한</div>
                <div class="tag">#책임감</div>
                <div class="tag">#발전지향</div>
			</div>
		</div>
	</div>
	<div class="skills">
		<div data-carousel class="grid grid-3">
			<div>
				<h3 class="text-h6">Program skills
					<span class="color-light-grey"><br>What I do</span>
				</h3>
			</div>
			<div class="card">
				<div>
					<div class="text-caption color-light-grey">01</div>
					<h4 class="text-h5 neu">Photoshop</h4>
					<div class="gap">
						<div class="color-light-grey">
							<ul role="list" class="list list-xxs">
								<li><div class="text-p">홈페이지 시안 제작</div></li>
								<li><div class="text-p">상세페이지 제작</div></li>
								<li><div class="text-p">포스터 제작</div></li>
								<li><div class="text-p">배너 제작</div></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<div>
					<div class="text-caption color-light-grey">02</div>
					<h4 class="text-h5 neu">Illustrator</h4>
					<div class="gap">
						<div class="color-light-grey">
							<ul role="list" class="list list-xxs">
								<li><div class="text-p">홈페이지 시안 제작</div></li>
								<li><div class="text-p">상세페이지 제작</div></li>
								<li><div class="text-p">포스터 제작</div></li>
								<li><div class="text-p">배너 제작</div></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<div>
					<div class="text-caption color-light-grey">03</div>
					<h4 class="text-h5 neu">HTML&CSS</h4>
					<div class="gap">
						<div class="color-light-grey">
							<ul role="list" class="list list-xxs">
								<li><div class="text-p">웹표준/반응형 웹사이트 제작</div></li>
								<li><div class="text-p">웹사이트 유지보수</div></li>
								<li><div class="text-p">게시판 수정 및 관리</div></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<div>
					<div class="text-caption color-light-grey">04</div>
					<h4 class="text-h5 neu">JQeury</h4>
					<div class="gap">
						<div class="color-light-grey">
							<ul role="list" class="list list-xxs">
								<li><div class="text-p">기존 코드 적용하여 제이쿼리 수정</div></li>
								<li><div class="text-p">제이쿼리 코드 커스텀</div></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<div>
					<div class="text-caption color-light-grey">05</div>
					<h4 class="text-h5 neu">Figma</h4>
					<div class="gap">
						<div class="color-light-grey">
							<ul role="list" class="list list-xxs">
								<li><div class="text-p">모바일&웹 UI/UX 프로토타입 제작</div></li>
								<li><div class="text-p">디자인 작업물 제작</div></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<?php
include_once(G5_THEME_PATH .'/tail.php');