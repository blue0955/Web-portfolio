<?php
/* copyright(c) WEBsiting.co.kr */
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');//썸네일 라이브러리

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_URL.'/css/board.common.css">', 0);
add_stylesheet('<link rel="stylesheet" href="'.$search_skin_url.'/style.css?v2">', 0);
?>

<!-- 전체검색 시작 { -->
<form name="fsearch" onsubmit="return fsearch_submit(this);" method="get">
<input type="hidden" name="srows" value="<?php echo $srows ?>">
<fieldset id="sch_res_detail">
    <legend>상세검색</legend>
    <?php echo $group_select ?>
    <script>document.getElementById("gr_id").value = "<?php echo $gr_id ?>";</script>

    <label for="sfl" class="sound_only">검색조건</label>
    <select name="sfl" id="sfl">
        <option value="wr_subject||wr_content"<?php echo get_selected($_GET['sfl'], "wr_subject||wr_content") ?>>제목+내용</option>
        <option value="wr_subject"<?php echo get_selected($_GET['sfl'], "wr_subject") ?>>제목</option>
        <option value="wr_content"<?php echo get_selected($_GET['sfl'], "wr_content") ?>>내용</option>
        <option value="mb_id"<?php echo get_selected($_GET['sfl'], "mb_id") ?>>회원아이디</option>
        <option value="wr_name"<?php echo get_selected($_GET['sfl'], "wr_name") ?>>이름</option>
    </select>

    <label for="stx" class="sound_only">검색어<strong class="sound_only"> 필수</strong></label>
    <span class="sch_wr">
        <input type="text" name="stx" value="<?php echo $text_stx ?>" id="stx" required class="frm_input" size="40" placeholder="검색어를 입력해 주세요.">
        <button type="submit" class="btn_submit"><i class="fa fa-search" aria-hidden="true"></i> <span class="sound_only">검색</span></button>

		
		<span class="sch_rd">
			<input type="radio" value="or" <?php echo ($sop == "or") ? "checked" : ""; ?> id="sop_or" name="sop">
			<label for="sop_or">OR</label>
			<input type="radio" value="and" <?php echo ($sop == "and") ? "checked" : ""; ?> id="sop_and" name="sop">
			<label for="sop_and">AND</label>
		</span>
    </span>

    <script>
    function fsearch_submit(f)
    {
        if (f.stx.value.length < 2) {
            alert("검색어는 두글자 이상 입력하십시오.");
            f.stx.select();
            f.stx.focus();
            return false;
        }

        // 검색에 많은 부하가 걸리는 경우 이 주석을 제거하세요.
        var cnt = 0;
        for (var i=0; i<f.stx.value.length; i++) {
            if (f.stx.value.charAt(i) == ' ')
                cnt++;
        }

        if (cnt > 1) {
            alert("빠른 검색을 위하여 검색어에 공백은 한개만 입력할 수 있습니다.");
            f.stx.select();
            f.stx.focus();
            return false;
        }

        f.action = "";
        return true;
    }
    </script>
</fieldset>
</form>

<div id="sch_result">

    <?php
    if ($stx) {
        if ($board_count) {
    ?>
    <section id="sch_res_ov">
        <h2><i class="fa fa-file-o" aria-hidden="true"></i> <strong><?php echo $stx ?></strong> (으)로 전체검색 결과</h2>
        <p>Total : <strong class="sch_word"><?php echo number_format($total_count) ?>개</strong> : <?php echo number_format($page) ?>/<?php echo number_format($total_page) ?> 페이지 열람 중</p>
    </section>
    <?php
        }
    }
    ?>

    <?php
    if ($stx) {
        if ($board_count) {
     ?>
    <ul id="sch_res_board">
        <li><a href="?<?php echo $search_query ?>&amp;gr_id=<?php echo $gr_id ?>" <?php echo $sch_all ?>>전체</a></li>
        <?php echo $str_board_list; ?>
    </ul>
    <?php
        } else {
     ?>
    <p class="noDataArea"><b>No data</b><?php if ($stx){ ?><strong><?php echo $stx ?></strong>(으)로 검색된<?php } else { echo '등록된';}?> 자료가 없습니다.</p>
    <?php } }  ?>

    <hr>

    <?php if ($stx && $board_count) { ?><section class="sch_res_list"><?php }  ?>
    <?php
    $k=0;
    for ($idx=$table_index, $k=0; $idx<count($search_table) && $k<$rows; $idx++) {
     ?>
        <h2><a href="<?php echo get_pretty_url($search_table[$idx], '', $search_query); ?>"><?php echo $bo_subject[$idx] ?> 내 결과</a></h2>
        <ul>
        <?php
        for ($i=0; $i<count($list[$idx]) && $k<$rows; $i++, $k++) {
            if ($list[$idx][$i]['wr_is_comment'])
            {
                $comment_def = '<span class="cmt_def"><i class="fa fa-commenting-o" aria-hidden="true"></i><span class="sound_only">댓글</span></span> ';
                $comment_href = '#c_'.$list[$idx][$i]['wr_id'];
            }
            else
            {
                $comment_def = '';
                $comment_href = '';
            }
			//썸네일 이미지 생성
			$thumb_info = get_list_thumbnail($search_table[$idx], $list[$idx][$i]['wr_id'],50,50, false, true);
			$sch_thumb = $thumb_info['src'];
         ?>

            <li>
				<?php if($sch_thumb){?> <i class="sch_res_cont_thum"><a href="<?php echo $list[$idx][$i]['href'] ?><?php echo $comment_href ?>"><img src="<?php echo $sch_thumb ?>" alt=""></a></i><?php }  ?> 
                <a href="<?php echo $list[$idx][$i]['href'] ?><?php echo $comment_href ?>" class="sch_res_title"><?php echo $comment_def ?><?php echo $list[$idx][$i]['subject'] ?></a>
                <p class="schResultCont">
					<?php echo cut_str(strip_tags(str_replace('|**|' , ' ', $list[$idx][$i]['content'])),150," . . . ") ?>
				</p>
                <div class="sch_info">
                    <?php echo $list[$idx][$i]['name'] ?> / 
                    <span class="sch_datetime"><i class="fa fa-clock-o" aria-hidden="true"></i> <?php echo $list[$idx][$i]['wr_datetime'] ?></span>
                </div>
            </li>
        <?php }  ?>
        </ul>
        <div class="sch_more"><a href="<?php echo get_pretty_url($search_table[$idx], '', $search_query); ?>"><strong><i class="fa fa-plus-circle" aria-hidden="true"></i> <?php echo $bo_subject[$idx] ?></strong> 결과 더보기</a></div>

        <hr>
    <?php }  ?>
    <?php if ($stx && $board_count) {  ?></section><?php }  ?>

    <?php echo $write_pages ?>

</div>
<!-- } 전체검색 끝 -->