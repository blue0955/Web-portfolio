<?php
/* copyright (c) websiting.co.kr */

include_once('./_common.php');

/* 페이지설정 코드 입력! */

	//페이지 제목 지정
	$g5['title'] = "테스트페이지";
	
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


	<h2 class="h2_title">일반PHP파일 링크입니다.</h2>
	<div class="cont_text_important">
		g5폴더/theme/gPunchD/pages/testPage.php
	</div>
	<h3 class="h3_title">본 페이지를 사용하는 이유</h3>
	<div class="cont_text">
		그누보드에서 기본으로 제공하는 내용관리, 게시판관리 및 게시판그룹으로의 링크로는 해결이 안되는 커스텀 페이지가 필요 할 경우 본 페이지를 참고하여 일반 링크 페이지를 작성하실 수 있습니다.<br>
		본페이지의 html 내용을 참고하시어 내용을 작성해 주시기 바랍니다.
	</div>
	<div class="cont_text_info">
		테마 구매 후 본 페이지를 메모장 또는 편집프로그램(에디트플러스, 울트라 에디트, 노트패드 등)으로 오픈하신 후 
		아래 제공되는 HTML 샘플 구조를 베이스로 페이지를 작성하시기 바랍니다.
		메뉴관리에서 http 를 포함한 링크를 넣어주시면 자동으로 활성화 됩니다. <br><br>
		pages 폴더를 그누보드가 설치된 폴더에 넣어주시면 아래와 같은 주소로 이용이 가능합니다.<br>
		테마 폴더가 아닌 그누보드 설치폴더로 이동하시는 경우 g5폴더/theme/gPunchD/pages/_common.php 파일의 주석 내용을 확인해 주시기 바랍니다. <br>

		http://도메인/pages/testPage.php

	</div>


	<br><br>

	<h2 class="h2_title_center">
		HTML STYLE SAMPLE<br>
		<small>아래 html 코드를 활용하여 내용관리의 html 입력으로 페이지를 꾸미실 수 있습니다.</small>
	</h2>

	<p class="cont_text_info">관련 css : 설치된테마폴더/css/contents.css</p>


	<h2 class="h2_title"> class="h2_title" H2 제목 적용</h2>
	<h3 class="h3_title"> class="h3_title" H3 제목 적용</h3>
	<div class="cont_text_important">
		class="cont_text_important" 중요한 내용
	</div>
	
	<div class="cont_text">
		 class="cont_text" 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 
	</div>
	<div class="cont_text_info">
		 class="cont_text_info" 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다. 중요한 내용이 있을경우 사용할 수 있는 점선박스입니다.
	</div>

	<h3 class="h3_title"> 내용의 좌측에 이미지 적용</h3>
	<div class="cont_text_important">
		이미지에  class="cont_img_left50p" 추가
	</div>
	
	<div class="cont_text">
		<img src="/theme/gPunchD/img/profileImg01.jpg" class="cont_img_left50p">
		 class="cont_text" 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 
	</div>

	<h3 class="h3_title"> 내용의 우측에 이미지 적용</h3>
	<div class="cont_text_important">
		이미지에  class="cont_img_right50p" 추가
	</div>
	
	<div class="cont_text">
		<img src="/theme/gPunchD/img/profileImg02.jpg" class="cont_img_right50p">
		 class="cont_text" 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 일반적인 텍스트 내용일때 사용 되는 클래스입니다. 
	</div>

	<h3 class="h3_title"> 아이콘과 함께 사용되는 도형</h3>
	<div class="cont_text_important">
		Font Awesome 버전 참고 -&gt; https://fontawesome.com/v4.7.0/icons/
	</div>
	
	<div class="cont_text">
		<ul class="figure_list">
			<li>
				<i class="fa fa-desktop"></i>
				<strong>WEBSITE</strong>
				<span>웹사이트 제작 및 관리</span>
			</li>
			<li>
				<i class="fa fa-code"></i>
				<strong>MOBILE</strong>
				<span>모바일 웹사이트 제작 및 관리</span>
			</li>
			<li>
				<i class="fa fa-shopping-cart"></i>
				<strong>E-commerce</strong>
				<span>쇼핑몰 제작 및 운영대행</span>
			</li>
			<li>
				<i class="fa fa-android"></i>
				<strong>Application</strong>
				<span>웹 어플리케이션 개발 및 운영</span>
			</li>
		</ul>
	</div>

	

	<h3 class="h3_title"> 테이블 스타일</h3>
	<div class="cont_text_important">
		table 을 감싼 DIV에 class="basic_table" 클래스 추가
	</div>

	<br>
	
	<div class="basic_table">
		<table>
			<colgroup>
				<col style="width:25%;">
				<col style="width:25%;">
				<col style="width:25%;">
				<col style="width:25%;">
			</colgroup>
			<thead>
				<tr>
					<th>THEAD TH</th>
					<th>THEAD TH</th>
					<th>THEAD TH</th>
					<td>THEAD TD</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>TBODY TH</th>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
				</tr>
				<tr>
					<th>TBODY TH</th>
					<td class="center">TBODY TD center</td>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
				</tr>
				<tr>
					<th>TBODY TH</th>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
				</tr>
				<tr>
					<th>TBODY TH</th>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<th>TFOOT TH</th>
					<td>TFOOT TD</td>
					<td>TFOOT TD</td>
					<td>TFOOT TD</td>
				</tr>
				<tr>
					<th>TFOOT TH</th>
					<td>TFOOT TD</td>
					<td>TFOOT TD</td>
					<td class="center">TFOOT TD center</td>
				</tr>
			</tfoot>
		</table>
	</div>

	<br>
	
	<div class="basic_table">
		<table>
			<colgroup>
				<col style="width:25%;">
				<col style="width:25%;">
				<col style="width:25%;">
				<col style="width:25%;">
			</colgroup>
			<tbody>
				<tr>
					<th rowspan="2">TBODY TH</th>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
				</tr>
				<tr>
					<td class="center">TBODY TD center</td>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
				</tr>
				<tr>
					<th>TBODY TH</th>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
				</tr>
				<tr>
					<th>TBODY TH</th>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
					<td>TBODY TD</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<th rowspan="2">TFOOT TH</th>
					<td>TFOOT TD</td>
					<td>TFOOT TD</td>
					<td>TFOOT TD</td>
				</tr>
				<tr>
					<td colspan="3" class="center">TFOOT TD center</td>
				</tr>
			</tfoot>
		</table>
	</div>

	<br>
	<br>

	<h3 class="h3_title">프로필 포토카드</h3>
	<div class="cont_text_important">
		1, 2, 3단 이용 가능 / profileWr1D , profileWr2D , profileWr3D
	</div>

	<!-- 1단 프로필 -->
	<div class="profileWr1D">
		<div class="profileWr">
			<i class="profileImg"><img src="/theme/gPunchD/img/profilePhoto01.jpg" alt=""></i> 
			
			<h2 class="h2_title">
				<small>Profile</small> 
				Hong gil-dong
			</h2>

			<div class="cont_text_info">
				웹사이팅은 고객의 가치를 최우선으로 하는 크리에이티브 디자인 그룹입니다. <br>
				Tool : Photoshop, illustrator, Editplus, inDesign, Figma, VScode
			</div>
			
			<div class="cont_text">
				 웹사이팅은 다양한 접점에서 브랜드의 경험을 기획하고 최적의 디자인 산출물을 제안하는 파트너 입니다. 고객님의 브랜드를 보다 가치있게 만들어 주며 귀사의 비즈니스에 새로운 생명력을 부여하여 한 차원 더 업그레이드 시키고 있습니다. 언제나 웹사이팅을 통하여 새로운 경험을 만나실 수 있습니다.<br><br>

				웹사이팅의 디자인은 철학에서 시작하여 비전으로 제시되고 문화로 표현할려고 노력하고 있습니다. 다년간의 프로젝트 수행 능력과 고객에 대한 서비스마인드, 다양한 고객과의 커뮤니케이션 능력을 바탕으로 기업들의 수 많은 프로젝트들을 성공적으로 이끌어온 전문가 그룹입니다. 고객의 니즈에 맞는 최고의 품질과 서비스,그리고 나아가 고객이 기대하는 그 이상의 서비스를 제공함으로서 고객과의 탄탄한 신뢰를 이끌어 가겠습니다.
			</div>

		</div>
	</div>


	<!-- 2단 프로필 -->
	<div class="profileWr2D">
		<div class="profileWr">
			<i class="profileImg"><img src="/theme/gPunchD/img/profilePhoto01.jpg" alt=""></i> 
			
			<h2 class="h2_title">
				<small>Profile</small> 
				Hong gil-dong
			</h2>

			<div class="cont_text_info">
				웹사이팅은 고객의 가치를 최우선으로 하는 크리에이티브 디자인 그룹입니다. <br>
				Tool : Photoshop, illustrator, Editplus, inDesign, Figma, VScode
			</div>
			
			<div class="cont_text">
				 웹사이팅은 다양한 접점에서 브랜드의 경험을 기획하고 최적의 디자인 산출물을 제안하는 파트너 입니다. 고객님의 브랜드를 보다 가치있게 만들어 주며 귀사의 비즈니스에 새로운 생명력을 부여하여 한 차원 더 업그레이드 시키고 있습니다. 언제나 웹사이팅을 통하여 새로운 경험을 만나실 수 있습니다.
			</div>

		</div>
		<div class="profileWr">
			<i class="profileImg"><img src="/theme/gPunchD/img/profilePhoto02.jpg" alt=""></i> 
			
			<h2 class="h2_title">
				<small>Profile</small> 
				Hong gil-dong
			</h2>

			<div class="cont_text_info">
				웹사이팅은 고객의 가치를 최우선으로 하는 크리에이티브 디자인 그룹입니다. <br>
				Tool : Photoshop, illustrator, Editplus, inDesign, Figma, VScode
			</div>
			
			<div class="cont_text">
				 웹사이팅은 다양한 접점에서 브랜드의 경험을 기획하고 최적의 디자인 산출물을 제안하는 파트너 입니다. 고객님의 브랜드를 보다 가치있게 만들어 주며 귀사의 비즈니스에 새로운 생명력을 부여하여 한 차원 더 업그레이드 시키고 있습니다. 언제나 웹사이팅을 통하여 새로운 경험을 만나실 수 있습니다.
			</div>

		</div>
	</div>


	<!-- 3단 프로필 -->
	<div class="profileWr3D">
		<div class="profileWr">
			<i class="profileImg"><img src="/theme/gPunchD/img/profilePhoto01.jpg" alt=""></i> 
			
			<h2 class="h2_title">
				<small>Profile</small> 
				Hong gil-dong
			</h2>

			<div class="cont_text_info">
				웹사이팅은 고객의 가치를 최우선으로 하는 크리에이티브 디자인 그룹입니다. <br>
				Tool : Photoshop, illustrator, Editplus, inDesign, Figma, VScode
			</div>
			
			<div class="cont_text">
				 웹사이팅은 다양한 접점에서 브랜드의 경험을 기획하고 최적의 디자인 산출물을 제안하는 파트너 입니다. 고객님의 브랜드를 보다 가치있게 만들어 주며 귀사의 비즈니스에 새로운 생명력을 부여하여 한 차원 더 업그레이드 시키고 있습니다. 언제나 웹사이팅을 통하여 새로운 경험을 만나실 수 있습니다.
			</div>

		</div>
		<div class="profileWr">
			<i class="profileImg"><img src="/theme/gPunchD/img/profilePhoto02.jpg" alt=""></i> 
			
			<h2 class="h2_title">
				<small>Profile</small> 
				Hong gil-dong
			</h2>

			<div class="cont_text_info">
				웹사이팅은 고객의 가치를 최우선으로 하는 크리에이티브 디자인 그룹입니다. <br>
				Tool : Photoshop, illustrator, Editplus, inDesign, Figma, VScode
			</div>
			
			<div class="cont_text">
				 웹사이팅은 다양한 접점에서 브랜드의 경험을 기획하고 최적의 디자인 산출물을 제안하는 파트너 입니다. 고객님의 브랜드를 보다 가치있게 만들어 주며 귀사의 비즈니스에 새로운 생명력을 부여하여 한 차원 더 업그레이드 시키고 있습니다. 언제나 웹사이팅을 통하여 새로운 경험을 만나실 수 있습니다.
			</div>

		</div>
		<div class="profileWr">
			<i class="profileImg"><img src="/theme/gPunchD/img/profilePhoto01.jpg" alt=""></i> 
			
			<h2 class="h2_title">
				<small>Profile</small> 
				Hong gil-dong
			</h2>

			<div class="cont_text_info">
				웹사이팅은 고객의 가치를 최우선으로 하는 크리에이티브 디자인 그룹입니다. <br>
				Tool : Photoshop, illustrator, Editplus, inDesign, Figma, VScode
			</div>
			
			<div class="cont_text">
				 웹사이팅은 다양한 접점에서 브랜드의 경험을 기획하고 최적의 디자인 산출물을 제안하는 파트너 입니다. 고객님의 브랜드를 보다 가치있게 만들어 주며 귀사의 비즈니스에 새로운 생명력을 부여하여 한 차원 더 업그레이드 시키고 있습니다. 언제나 웹사이팅을 통하여 새로운 경험을 만나실 수 있습니다.
			</div>

		</div>
	</div>

	<br>
	<br>

	<h3 class="h3_title">이미지 배너</h3>
	<div class="cont_text_important">
		1, 2, 3, 4단 이용 가능 / customBan1D + customBan2D, customBan3D, customBan4D
	</div>
	<br>

	<div class="customBan1D">
		<a href="#"><img src="/theme/gPunchD/img/profileImg01.jpg" alt=""> <span class="customBanTit">커스텀배너 <u></u></span></a>
	</div>

	<div class="customBan1D customBan2D">
		<a href="#"><img src="/theme/gPunchD/img/profileImg03.jpg" alt=""> <span class="customBanTit">Image & link <u></u></span></a>
		<a href="#"><img src="/theme/gPunchD/img/profileImg04.jpg" alt=""> <span class="customBanTit">for HTML <u></u></span></a>
	</div>

	<div class="customBan1D customBan3D">
		<a href="#"><img src="/theme/gPunchD/img/profileImg01.jpg" alt=""> <span class="customBanTit">커스텀배너 <u></u></span></a>
		<a href="#"><img src="/theme/gPunchD/img/profileImg03.jpg" alt=""> <span class="customBanTit">Image & link <u></u></span></a>
		<a href="#"><img src="/theme/gPunchD/img/profileImg04.jpg" alt=""> <span class="customBanTit">for HTML <u></u></span></a>
	</div>

	<div class="customBan1D customBan4D">
		<a href="#"><img src="/theme/gPunchD/img/profileImg01.jpg" alt=""> <span class="customBanTit">커스텀배너 <u></u></span></a>
		<a href="#"><img src="/theme/gPunchD/img/profileImg02.jpg" alt=""> <span class="customBanTit">커스텀배너 <u></u></span></a>
		<a href="#"><img src="/theme/gPunchD/img/profileImg03.jpg" alt=""> <span class="customBanTit">Image & link <u></u></span></a>
		<a href="#"><img src="/theme/gPunchD/img/profileImg04.jpg" alt=""> <span class="customBanTit">for HTML <u></u></span></a>
	</div>

	<br>
	<br>

	<h3 class="h3_title"> 내용관리에 반응형 유튜브영상 삽입</h3>
	<div class="cont_text_important">
		유튜브 퍼가기소스 아이프레임을 감싼 DIV에 class="youtube_area" 클래스 추가
	</div>

	<div class="youtube_area">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/aYCXBdMavx8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
	<div class="youtube_area">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/NTi5XGsD2ho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>



<?php
include_once('../tail.php');