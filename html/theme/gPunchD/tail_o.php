<?php
/* copyright(c) WEBsiting.co.kr */
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

$admin = get_admin("super"); 

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}

?>

<?php if (defined("_INDEX_")) {  //인덱스에서 사용 ?>  
        </div> <!-- // data-barba wrapper -->
    </div> <!-- // data-barba container -->
<?php }  //인덱스에서 사용하지 않음?>

<?php if (!defined("_INDEX_")) {  //인덱스에서 사용하지 않음?>
        </div> <!-- // #container 닫음 -->
    </div> <!-- data-barba wrapper -->
</div> <!-- data-barba container -->
<?php }  //인덱스에서 사용하지 않음?>

</main>

</section><!-- // #ctWrap 닫음 -->
<!-- } 콘텐츠 끝 -->

<hr>

<!-- 하단 커스텀배너 시작 { -->
<!-- <aside class="customBan">
	<a href="#"><img src="<?php echo G5_THEME_IMG_URL ?>/bottomAbg.jpg" alt=""> <span class="customBanTit">커스텀배너 <u></u></span></a>
	<a href="#"><img src="<?php echo G5_THEME_IMG_URL ?>/bottomAbg02.jpg" alt=""> <span class="customBanTit">for HTML <u></u></span></a>
</aside> -->
<!-- } 하단 커스텀배너 끝 -->

<hr>

<!-- 하단 시작 { -->
<footer id="footer">
    <dl>
        <dt><img src="<?php echo G5_THEME_IMG_URL; ?>/footerLogo.png" alt="<?php echo $config['cf_title'] ?>"></dt>
        <dd>
            <a href="#" data-featherlight="<?php echo G5_THEME_URL ?>/pop.privacy.php .term_area" data-featherlight-type="ajax">개인정보처리방침</a>
            <a href="#" data-featherlight="<?php echo G5_THEME_URL ?>/pop.term.php .term_area" data-featherlight-type="ajax">이용약관</a>
            <a href="#" data-featherlight="<?php echo G5_THEME_URL ?>/pop.noEmail.php .term_area" data-featherlight-type="ajax">이메일주소 무단수집거부</a>
        </dd>
    </dl>
	<address>
		<?php if($admin['mb_addr1']){ echo '<span>'.$admin['mb_addr1']; echo ' '; echo $admin['mb_addr2'].'</span>'; } else echo '<span>관리자모드에서 관리자정보의 주소를 입력해 주시기 바랍니다.</span>';?> 
		<?php if($admin['mb_tel']){ echo ' <em>|</em><span> Tel. '.$admin['mb_tel'].'</span>';} else echo '<span>관리자정보 전화번호 입력</span>';?> 
		<?php if($admin['mb_1'] == '내용없음') echo ''; else if($admin['mb_1']){ echo ' <em>|</em><span> Fax. '.$admin['mb_1'].'</span>';} else echo '<span>관리자정보 여분필드1(팩스번호) 입력</span>';?> 
		<?php if($admin['mb_email']){ echo  ' <em>|</em><span> E-mail. '; ?><a href='mailto:<?php echo $admin['mb_email']?>'><?php echo $admin['mb_email']?></a></span><?php } else echo '<span>관리자정보 이메일 입력</span>';?> 
		<?php if($admin['mb_3'] == '내용없음') echo ''; else if($admin['mb_3']){ echo  '<br><span>'; ?><?php echo $admin['mb_3']?></span><?php } else echo '<br><span>관리자정보여분필드3 내용이 없을 경우 내용없음 이라고 입력해 주세요.</span>';?>
	</address>
	<p><span>Copyright</span> &copy; <b><?php echo $_SERVER['HTTP_HOST']; ?></b> <span>All rights reserved.</span></p>
</footer>

</div>

<button type="button" id="top_btn" class="fa fa-angle-up" aria-hidden="true"><span class="sound_only">페이지 상단으로 이동</span></button>
<script defer="" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<!-- <script src="<?php echo G5_THEME_JS_URL ?>/vendor-modern.js"></script> -->
<script src="<?php echo G5_THEME_JS_URL ?>/main.js?ver=<?php echo G5_JS_VER; ?>"></script>
<script>
document.addEventListener("DOMContentLoaded", () => {
  function handleScrollProgress() {
    const sections = [
      { selector: ".intro-item", heightRatio: 0.2 },
      { selector: ".projects-featured", heightRatio: 0.35 },
      { selector: ".creative-wrapper", heightRatio: 0.25 },
      { selector: ".section-contact", heightRatio: 0.2 },
    ];

    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    let currentStart = 0;

    sections.forEach(({ selector, heightRatio }) => {
      const element = document.querySelector(selector);
      if (!element) return;

      // 섹션 높이를 계산하여 start와 end 계산
      const sectionHeight = heightRatio * maxScroll;
      const start = currentStart;
      const end = start + sectionHeight;

      // progress 계산 (스크롤 위치가 start ~ end 사이일 때)
      let progress = (scrollY - start) / (end - start);
      progress = Math.max(0, Math.min(1, progress));

      // CSS 변수 업데이트
      element.style.setProperty("--progress", progress);

      // 디버깅 출력
      console.log(
        `Element: ${selector}, scrollY: ${scrollY}, start: ${start}, end: ${end}, progress: ${progress}`
      );

      // 다음 섹션의 시작점 업데이트
      currentStart = end;
    });
  }

  // 스크롤과 리사이즈 이벤트 리스너 추가
  window.addEventListener("scroll", handleScrollProgress);
  window.addEventListener("resize", handleScrollProgress);

  // 초기 실행
  handleScrollProgress();
});

</script>
<?php
if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->
<?php
include_once(G5_THEME_PATH."/tail.sub.php");