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

<!-- 하단 시작 { -->
<footer class="footer section">
  <div class="dash"></div>
  <div class="container">
    <div class="footer_container flex-around">
        <a href="/" aria-current="page" class="logo-link-footer w-inline-block w--current">
          <div class="logo-footer w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 15" aria-label="logo">
              <path d="M0.332031 0.359375H3.20312L6.67969 6.60938H6.81641L10.293 0.359375H13.1641L8.02734 9.20703V14.5H5.48828V9.20703L0.332031 0.359375ZM14.8047 14.5V0.359375H24.0039V2.48828H17.3438V6.35547H23.5156V8.48438H17.3438V12.3516H24.043V14.5H14.8047ZM39.0625 7.42969C39.0625 12 36.2891 14.6953 32.5781 14.6953C28.8672 14.6953 26.0938 11.9805 26.0938 7.42969C26.0938 2.85938 28.8672 0.164062 32.5781 0.164062C36.2891 0.164062 39.0625 2.85938 39.0625 7.42969ZM36.5039 7.42969C36.5039 4.20703 34.8828 2.44922 32.5781 2.44922C30.2734 2.44922 28.6523 4.20703 28.6523 7.42969C28.6523 10.6523 30.2734 12.4102 32.5781 12.4102C34.8828 12.4102 36.5039 10.6523 36.5039 7.42969ZM52.9492 0.359375V14.5H50.6836L43.9844 4.83203H43.8672V14.5H41.3281V0.359375H43.6328L50.293 10.0273H50.4297V0.359375H52.9492Z" fill="currentColor"/>
            </svg>
          </div>
        </a>
        <div class="util">
          <div class="flex-around util_btn_wrap">
            <div class="privacy_btn">
                <a href="#" class="C_btn text-btn" data-featherlight="<?php echo G5_THEME_URL ?>/pop.privacy.php .term_area" data-featherlight-type="ajax">개인정보처리방침</a>
            </div>
            <div class="no_email_btn">
                <a href="#" class="C_btn text-btn" data-featherlight="<?php echo G5_THEME_URL ?>/pop.noEmail.php .term_area" data-featherlight-type="ajax">이메일주소 무단수집거부</a>
            </div>
          </div>
          <p class="text-btn"><span>Copyright</span> &copy; Hwanghyeyeon <span>All rights reserved.</span></p>
        </div>

    </div>
  </div>
	
</footer>


</div>
<div class="cursor-wrap">
    <div class="cursor-inner">
        <div class="cursor"></div>
        <i></i>
    </div>
</div>

<button type="button" id="top_btn" class="fa fa-angle-up" aria-hidden="true"><span class="sound_only">페이지 상단으로 이동</span></button>
<script defer="" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<!-- <script src="<?php echo G5_THEME_JS_URL ?>/vendor-modern.js"></script> -->
<script src="<?php echo G5_THEME_JS_URL ?>/main.js?ver=<?php echo G5_JS_VER; ?>"></script>
<?php
if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->
<?php
include_once(G5_THEME_PATH."/tail.sub.php");