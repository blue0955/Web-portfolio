<?php
/* copyright(c) WEBsiting.co.kr */
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$member_skin_url.'/style.css?v2">', 0);
?>

<!-- 회원가입약관 동의 시작 { -->
<div>

    <?php
    // 소셜로그인 사용시 소셜로그인 버튼
    @include_once(get_social_skin_path().'/social_register.skin.php');
    ?>

    <form  name="fregister" id="fregister" action="<?php echo $register_action_url ?>" onsubmit="return fregister_submit(this);" method="POST" autocomplete="off">

    <p>회원가입약관 및 개인정보처리방침안내의 내용에 동의하셔야 회원가입 하실 수 있습니다.</p>
    <div id="fregister_chkallWst">
        <label><b>전체선택</b> <input type="checkbox" name="chk_all"  value="1"  id="chk_all"></label>    
    </div>
    <section id="fregister_term">
        <h2><i class="fa fa-check" aria-hidden="true"></i> 회원가입약관</h2>
        <textarea readonly><?php echo get_text($config['cf_stipulation']) ?></textarea>
        <fieldset class="fregister_agreeWst">
            <label for="agree11">회원가입약관의 내용에 동의합니다.</label>
            <input type="checkbox" name="agree" value="1" id="agree11">
        </fieldset>
    </section>

    <section id="fregister_private">
        <h2><i class="fa fa-check" aria-hidden="true"></i> 개인정보처리방침안내</h2>
        <textarea readonly><?php echo get_text($config['cf_privacy']) ?></textarea>
        <fieldset class="fregister_agreeWst">
            <label for="agree21">개인정보처리방침안내의 내용에 동의합니다.</label>
            <input type="checkbox" name="agree2" value="1" id="agree21">
        </fieldset>
    </section>

    <div class="btn_confirm">
        <input type="submit" class="btn_submit" value="회원가입">
    </div>

    </form>

    <script>
    function fregister_submit(f)
    {
        if (!f.agree.checked) {
            alert("회원가입약관의 내용에 동의하셔야 회원가입 하실 수 있습니다.");
            f.agree.focus();
            return false;
        }

        if (!f.agree2.checked) {
            alert("개인정보처리방침안내의 내용에 동의하셔야 회원가입 하실 수 있습니다.");
            f.agree2.focus();
            return false;
        }

        return true;
    }
    
    /*jQuery(function($){
        // 모두선택
        $("input[name=chk_all]").click(function() {
            if ($(this).prop('checked')) {
                $("input[name^=agree]").prop('checked', true);
            } else {
                $("input[name^=agree]").prop("checked", false);
            }
        });
    });*/
    /* 체크박스 전체 관련 오류 수정 2023-02-05 */
	jQuery(function($){
		$("input[name=chk_all").click(function() {
			if($("input[name=chk_all").is(":checked")) $("input[name=agree],input[name=agree2]").prop("checked", true);
			else $("input[name=agree],input[name=agree2]").prop("checked", false);
		});

		$("input[name=agree],input[name=agree2]").click(function() {
			var total = $("input[name=agree],input[name=agree2]").length;
			var checked = $("input[name=agree]:checked,input[name=agree2]:checked").length;

			if(total != checked) $("input[name=chk_all").prop("checked", false);
			else $("input[name=chk_all").prop("checked", true); 
		});
	});

    </script>
</div>
<!-- } 회원가입 약관 동의 끝 -->
