<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
?>

<?php if ($is_admin == 'super') {  ?><!-- <div style='float:left; text-align:center;'>RUN TIME : <?php echo get_microtime()-$begin_time; ?><br></div> --><?php }  ?>

<!-- ie6,7에서 사이드뷰가 게시판 목록에서 아래 사이드뷰에 가려지는 현상 수정 -->
<!--[if lte IE 7]>
<script>
$(function() {
    var $sv_use = $(".sv_use");
    var count = $sv_use.length;

    $sv_use.each(function() {
        $(this).css("z-index", count);
        $(this).css("position", "relative");
        count = count - 1;
    });
});
</script>
<![endif]-->
<script>
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("/bbs/")) {
    document.body.classList.add("is-popup");
  }
});

jQuery(document).ready(function($){
    $("a.view_image").off("click");     // 클릭 이벤트를 해제한다.
    $(document).on("click", "a.view_image", function(e){
        e.preventDefault();     // 이벤트의 동작을 중단시켜 href 속성이 중단된다.
    });
});
</script>

<?php run_event('tail_sub'); ?>

</body>
</html>
<?php echo html_end(); // HTML 마지막 처리 함수 : 반드시 넣어주시기 바랍니다.