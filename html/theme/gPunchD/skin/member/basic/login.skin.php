<?php
/* copyright(c) WEBsiting.co.kr */
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$member_skin_url.'/style.css">', 0);
include_once(G5_THEME_PATH.'/head.php');
?>

<!-- 로그인 시작 { -->
<div id="mb_login" class="mbskin">
    <h2>MEMBER LOGIN</h2>

    <form name="flogin" action="<?php echo $login_action_url ?>" onsubmit="return flogin_submit(this);" method="post">
    <input type="hidden" name="url" value="<?php echo $login_url ?>">

    <fieldset id="login_fs">
        <legend>회원로그인</legend>

		<div class="loginForm">
			<label for="login_id"> <i class="fa fa-info-circle"></i> <strong class="sound_only">회원아이디 필수</strong></label>
			<input type="text" name="mb_id" id="login_id" required class="frm_input required" size="20" maxLength="20" placeholder="아이디">
		</div>
		<div class="loginForm">
			<label for="login_pw"> <i class="fa fa-unlock-alt"></i> <strong class="sound_only">비밀번호 필수</strong></label>
			<input type="password" name="mb_password" id="login_pw" required class="frm_input required" size="20" maxLength="20" placeholder="비밀번호">
		</div>

        <input type="submit" value="로그인" class="btn_submit">
        <input type="checkbox" name="auto_login" id="login_auto_login" class="mbjBNot">
        <label for="login_auto_login" class="mbjBNot">자동로그인</label>
    </fieldset>

    <div id="login_fs_sns">
    <?php
    // 소셜로그인 사용시 소셜로그인 버튼
    @include_once(get_social_skin_path().'/social_login.skin.php');
    ?>
    </div>

    <aside id="login_info">
        <h2>회원로그인 안내</h2>
			<div class="login_info_btn">
				<a href="<?php echo G5_BBS_URL ?>/password_lost.php" class="btn_b01 btn mbjBNot">아이디/비밀번호 찾기</a>
				<!-- <a href="./register.php" class="btn_b01 btn mbjBNot">회원 가입</a> -->
				<a href="<?php echo G5_URL ?>" class="btn_b01 btn btn_home">메인페이지로 이동</a>
			</div>
			<p>
				아이디 및 비밀번호가 기억 안나실 때는 아이디/비밀번호 찾기를 이용하십시오.<br>
				회원이 아니시라면 회원 가입 후 이용해 주십시오.
			</p>
    </aside>

    </form>

	<?php // 쇼핑몰 사용시 여기부터 /* copyright(c) WEBsiting.co.kr */ ?>
    <?php if ($default['de_level_sell'] == 1) { // 상품구입 권한 ?>

	<!-- 주문하기, 신청하기 -->
	<?php if (preg_match("/orderform.php/", $url)) { ?>
    <section id="mb_login_notmb">
        <h2 class="themeColor">비회원 구매</h2>
        <p>비회원으로 주문하시는 경우 포인트는 지급하지 않습니다.</p>

        <div id="guest_privacy">
            <?php echo conv_content($default['de_guest_privacy'], $config['cf_editor']); ?>
        </div>
		
		<div class="chk_box">
			<input type="checkbox" id="agree" value="1" class="selec_chk">
        	<label for="agree"><span></span> 개인정보수집에 대한 내용을 읽었으며 이에 동의합니다.</label>
		</div>
		
        <div class="btn_confirm">
            <a href="javascript:guest_submit(document.flogin);" class="btn_submit">비회원으로 구매하기</a>
        </div>

        <script>
        function guest_submit(f)
        {
            if (document.getElementById('agree')) {
                if (!document.getElementById('agree').checked) {
                    alert("개인정보수집에 대한 내용을 읽고 이에 동의하셔야 합니다.");
                    return;
                }
            }

            f.url.value = "<?php echo $url; ?>";
            f.action = "<?php echo $url; ?>";
            f.submit();
        }
        </script>
    </section>

    <?php } else if (preg_match("/orderinquiry.php$/", $url)) { ?>
    <div id="mb_login_od_wr">
        <h2 class="themeColor">비회원 주문조회 </h2>

        <fieldset id="mb_login_od">
            <legend>비회원 주문조회</legend>

            <form name="forderinquiry" method="post" action="<?php echo urldecode($url); ?>" autocomplete="off">

      			
			<div class="loginForm">
				<label for="od_id"> <i class="fa fa-shopping-cart"></i> <strong class="sound_only">주문서번호 필수</strong></label>
				<input type="text" name="od_id" id="od_id" required value="<?php echo get_text($od_id); ?>" class="frm_input required" size="20" maxLength="20" placeholder="주문서번호">
			</div>
			<div class="loginForm">
				<label for="od_pwd"> <i class="fa fa-unlock-alt"></i> <strong class="sound_only">비밀번호 필수</strong></label>
				<input type="password" name="od_pwd" id="od_pwd" required class="frm_input required" size="20" maxLength="20" placeholder="비밀번호">
			</div>


            <button type="submit" class="btn_submit">확인</button>

            </form>
        </fieldset>

        <section id="mb_login_odinfo">
            <p>메일로 발송해드린 주문서의 <strong>주문번호</strong> 및 주문 시 입력하신 <strong>비밀번호</strong>를 정확히 입력해주십시오.</p>
        </section>

    </div>
    <?php } ?>

    <?php } ?>
    <?php // 쇼핑몰 사용시 여기까지 반드시 복사해 넣으세요 /* copyright(c) WEBsiting.co.kr */ ?>



</div>

<script>
$(function(){
    $("#login_auto_login").click(function(){
        if (this.checked) {
            this.checked = confirm("자동로그인을 사용하시면 다음부터 회원아이디와 비밀번호를 입력하실 필요가 없습니다.\n\n공공장소에서는 개인정보가 유출될 수 있으니 사용을 자제하여 주십시오.\n\n자동로그인을 사용하시겠습니까?");
        }
    });
});

function flogin_submit(f)
{
    if( $( document.body ).triggerHandler( 'login_sumit', [f, 'flogin'] ) !== false ){
        return true;
    }
    return false;
}
</script>
<!-- } 로그인 끝 -->
<?php 
include_once(G5_THEME_PATH.'/tail.php');