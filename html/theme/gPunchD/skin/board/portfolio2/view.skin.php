<?php
/* copyright(c) WEBsiting.co.kr */
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_URL.'/css/board.common.css">', 0);
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.list.css">', 99);


$youtubeIDL = $view['link']['1']; 
$youtubeID1L = explode('/',$youtubeIDL); 

$thumb = get_list_thumbnail($board['bo_table'], $wr_id, 600, 600, false, true);

if(isset($youtubeID1L[2]) && $youtubeID1L[2] == "youtu.be") {
	$youtubeThumbL = '//img.youtube.com/vi/'.$youtubeID1L[3].'/maxresdefault.jpg';
} 

else if(isset($youtubeID1L[2]) && $youtubeID1L[2] == "youtube.com" || $youtubeID1L[2] == "www.youtube.com") {
	if(isset($youtubeID1L[2]) && $youtubeID1L[3] == "shorts" || $youtubeID1L[3] == "live") {
		$youtubeIDnewL[$i] = explode('?',$youtubeID1L[4]); 
		$youtubeThumbL = '//img.youtube.com/vi/'.$youtubeIDnewL[$i][0].'/maxresdefault.jpg)';
	} else {
		$youtubeIDnewL[$i] = explode('=',$youtubeID1L[3]); 
		$youtubeIDnewIDL[$i] = explode('&',$youtubeIDnewL[$i][1]); 
		$youtubeThumbL = '//img.youtube.com/vi/'.$youtubeIDnewIDL[$i][0].'/maxresdefault.jpg';
	
	}
} 
?>
<script>

	setTimeout(function() { $(".wstPFtop").addClass('on'); }, 50);

</script>
<div class="wstPFtop">
	<?php if($youtubeThumbL){?><figure style="background-image:URL(<?php echo $youtubeThumbL; ?>);"></figure><?php } ?>
    <?php
    $visual_image = $view['wr_11']; // wr_11 필드에 저장된 비주얼 이미지 URL
    if ($visual_image) {
    ?>
        <figure style="background-image: url('<?php echo $visual_image; ?>');"></figure>
    <?php } else { ?>
        <figure style="background-image: url('<?php echo $thumb['src']; ?>');"></figure>
    <?php } ?>
	<article class="info" >
        <h2 class="text-h4">
            <small>
                <?php echo $board['bo_subject'] ?>
                
                <?php if ($category_name) { ?><em>|</em>
                <?php echo $view['ca_name'];  } ?>
            </small> 
            <?php echo cut_str(get_text($view['wr_subject']), 70); // 글제목 출력 ?>
            <!-- <u> -->
                <!-- 조회수, 작성일은 관리자만 확인 가능 -->
                <!-- <span class="sound_only">조회</span><span><i class="fa fa-eye" aria-hidden="true"></i> <?php echo number_format($view['wr_hit']) ?>회</span>  <em>|</em> -->
                <!-- <span class="if_date"><span class="sound_only">작성일</span><i class="fa fa-clock-o" aria-hidden="true"></i> <?php echo date("y-m-d H:i", strtotime($view['wr_datetime'])) ?></span> -->
            <!-- </u> -->
        </h2>
    </article>
</div>

<script src="<?php echo G5_JS_URL; ?>/viewimageresize.js"></script>
<div class="prj-wrapper">
    <div class="prj_info flex-around">
        <div class="prj_tit text-h4"><?php echo cut_str(get_text($view['wr_subject']), 70); // 제목 출력?></div>
        <?php if (!empty($view['wr_link1'])): ?>
        <a href="<?php echo htmlspecialchars($view['wr_link1'], ENT_QUOTES, 'UTF-8'); ?>" target="_blank" class="url-link C-button magnetic w-inline-block">
            <div class="button-content">
                <div class="text-btn">Visit Site</div>
                <div class="arr_bg">
                    <div class="arr">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <path d="M2.48581 0.0164742C2.15672 0.011996 1.83981 0.140749 1.60709 0.373469C1.37437 0.606188 1.24562 0.923105 1.25009 1.25219C1.25009 1.93465 1.80334 2.4879 2.48581 2.4879L15.7821 2.4879L0.393333 17.8602C0.0627335 18.1682 -0.0733533 18.6322 0.0384602 19.07C0.150274 19.5078 0.492154 19.8497 0.929981 19.9615C1.36781 20.0734 1.83175 19.9373 2.13981 19.6067L17.5286 4.2179L17.5286 17.5142C17.5286 18.1967 18.0818 18.7499 18.7643 18.7499C19.4468 18.7499 20 18.1967 20 17.5142L20 1.23571C20 0.553247 19.4468 -1.5288e-06 18.7643 -1.49897e-06L2.48581 0.0164742Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
                <img src="" alt="" class="button-icon">
            </div>
        </a>
        <?php endif; ?>
    
        <?php if (!empty($view['wr_link2'])): ?>
        <a href="<?php echo htmlspecialchars($view['wr_link2'], ENT_QUOTES, 'UTF-8'); ?>" target="_blank" class="url-link C-button magnetic w-inline-block">
            <div class="button-content">
                <div class="text-btn">Visit Site</div>
                <div class="arr_bg">
                    <div class="arr">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <path d="M2.48581 0.0164742C2.15672 0.011996 1.83981 0.140749 1.60709 0.373469C1.37437 0.606188 1.24562 0.923105 1.25009 1.25219C1.25009 1.93465 1.80334 2.4879 2.48581 2.4879L15.7821 2.4879L0.393333 17.8602C0.0627335 18.1682 -0.0733533 18.6322 0.0384602 19.07C0.150274 19.5078 0.492154 19.8497 0.929981 19.9615C1.36781 20.0734 1.83175 19.9373 2.13981 19.6067L17.5286 4.2179L17.5286 17.5142C17.5286 18.1967 18.0818 18.7499 18.7643 18.7499C19.4468 18.7499 20 18.1967 20 17.5142L20 1.23571C20 0.553247 19.4468 -1.5288e-06 18.7643 -1.49897e-06L2.48581 0.0164742Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
                <img src="" alt="" class="button-icon">
            </div>
        </a>
        <?php endif; ?>
    
    </div>
    <article class="comment_wrapper">
        <div class="col left_con">
            <!-- CLIENT -->
            <div class="client flex-around">
                <div class="text-h7">CLIENT</div>
                <p class="txts">
                    <?php echo cut_str(get_text($view['wr_subject']), 70); // 제목 출력 ?>
                </p>
            </div>
    
            <!-- SERVICE -->
            <div class="service flex-around">
                <div class="text-h7">SERVICE</div>
                <div class="ca_wrapper">
                    <?php
                    // 카테고리 출력
                    $categories = explode(',', $view['ca_name']);
                    foreach ($categories as $category) {
                        $category = trim($category);
                        if (!empty($category)) {
                            echo "<span class='ca_tag'>" . htmlspecialchars($category, ENT_QUOTES, 'UTF-8') . "</span>";
                        }
                    }
                    ?>
                </div>
            </div>
    
            <!-- TIMELINE -->
            <div class="timeline flex-around">
                <div class="text-h7">TIMELINE</div>
                <p class="txts">
                    <?php echo htmlspecialchars($view['wr_timeline'], ENT_QUOTES, 'UTF-8'); ?>
                </p>
            </div>
        </div>
    
        <div class="col overview flex-around">
            <!-- OVERVIEW -->
            <div class="text-h7">OVERVIEW</div>
            <p class="txts">
                <?php echo nl2br(htmlspecialchars($view['wr_overview'], ENT_QUOTES, 'UTF-8')); ?>
            </p>
        </div>
    </article>
</div>


<!-- 게시물 읽기 시작 { -->

<article id="bo_v" style="width:<?php echo $width; ?>">

    <!-- 게시물 상단 버튼 시작 { -->
    <div id="bo_v_top">
        <?php
        ob_start();
        ?>

        <ul class="bo_v_left">
            <?php if ($update_href) { ?><li><a href="<?php echo $update_href ?>" class="btn_b01 btn"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> 수정</a></li><?php } ?>
            <?php if ($delete_href) { ?><li><a href="<?php echo $delete_href ?>" class="btn_b01 btn" onclick="del(this.href); return false;"><i class="fa fa-trash-o" aria-hidden="true"></i> 삭제</a></li><?php } ?>
            <?php if ($copy_href) { ?><li><a href="<?php echo $copy_href ?>" class="btn_admin btn" onclick="board_move(this.href); return false;"><i class="fa fa-files-o" aria-hidden="true"></i> 복사</a></li><?php } ?>
            <?php if ($move_href) { ?><li><a href="<?php echo $move_href ?>" class="btn_admin btn" onclick="board_move(this.href); return false;"><i class="fa fa-arrows" aria-hidden="true"></i> 이동</a></li><?php } ?>
            <?php if ($search_href) { ?><li><a href="<?php echo $search_href ?>" class="btn_b01 btn"><i class="fa fa-search" aria-hidden="true"></i> 검색 목록</a></li><?php } ?>
        </ul>
         <?php if ($is_admin) {  ?>
            <ul class="bo_v_com">
            
            <li><a href="<?php echo $list_href ?>" class="btn_b01 btn"><i class="fa fa-list" aria-hidden="true"></i> 목록</a></li>
                <?php if ($write_href) { ?><li><a href="<?php echo $write_href ?>" class="btn_b02 btn"><i class="fa fa-pencil" aria-hidden="true"></i> 글쓰기</a></li><?php } ?>
            </ul>
        <? } ?>
      
    </div>
    <!-- } 게시물 상단 버튼 끝 -->
    <section id="bo_v_atc">
        <h2 id="bo_v_atc_title">본문</h2>

		<?php 
		// 유투브 링크 시작 2023-02-08 새로운 공유주소 및 쇼츠 링크 대응 코드
		// 유투브 공유 링크가 있을때만 표시됩니다
		// ex. https://youtu.be//게시글아이디
		if(isset($view['link'][1]) && $view['link'][1]) { 

			$cnt = 0;
			for ($i=1; $i<=count($view['link']); $i++) {
				if ($view['link'][$i]) {
					$youtubeID[$i] = $view['link'][$i]; 
					$youtubeID[$i] = explode('/',$youtubeID[$i]); 
					if($youtubeID[$i][2] == "youtu.be") {
				?>
				<div class="youtube_area"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/<?php echo $youtubeID[$i][3]; ?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
				<?php
					} 
					if($youtubeID[$i][2] == "youtube.com" || $youtubeID[$i][2] == "www.youtube.com"){
						if($youtubeID[$i][3] == "shorts" || $youtubeID[$i][3] == "live" || $youtubeID[$i][2] == "www.youtube.com"){ ?>
							<div class="youtube_area"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/<?php echo $youtubeID[$i][4]; ?>" frameborder="0" allowfullscreen></iframe></div>
						<?php 
						} 
						else  { 
							$youtubeIDnew[$i] = explode('=',$youtubeID[$i][3]); 
							$youtubeIDnewID[$i] = explode('&',$youtubeIDnew[$i][1]); 
						?>
							<div class="youtube_area"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/<?php echo $youtubeIDnewID[$i][0]; ?>" frameborder="0" allowfullscreen></iframe></div>
						<?php 
						}
					}
				}
			}
		} 
		//유투브 링크 끝
		?>
        <!-- 본문 내용 시작 { -->
        <div id="bo_v_con" class="txts"><?php echo get_view_thumbnail($view['content']); ?></div>
        <?php //echo $view['rich_content']; // {이미지:0} 과 같은 코드를 사용할 경우 ?>
        <!-- } 본문 내용 끝 -->

        <?php
        // 파일 출력
        $v_img_count = count($view['file']);
        if($v_img_count) {
            echo "<div id=\"bo_v_img\">\n";

            for ($i=0; $i<=count($view['file']); $i++) {
                if (isset($view['file'][$i]['view'])) {
                    //echo $view['file'][$i]['view'];
                    echo get_view_thumbnail($view['file'][$i]['view']);
                }
            }

            echo "</div>\n";
        }
         ?>


        <?php if ($is_signature) { ?><p><?php echo $signature ?></p><?php } ?>


    </section>

    <div id="bo_v_share">
		
        <!--  추천 비추천 시작 { -->
        <?php if ( $good_href || $nogood_href) { ?>
            <?php if ($good_href) { ?>
                <a href="<?php echo $good_href.'&amp;'.$qstr ?>" id="good_button" class="btn btn_b01" title="추천"><i class="fa fa-thumbs-up"></i> <span class="sound_only">추천</span><strong><?php echo number_format($view['wr_good']) ?></strong></a>
            <?php } ?>
            <?php if ($nogood_href) { ?>
                <a href="<?php echo $nogood_href.'&amp;'.$qstr ?>" id="nogood_button" class="btn btn_b01" title="비추천"><i class="fa fa-thumbs-down"></i> <span class="sound_only">비추천</span><strong><?php echo number_format($view['wr_nogood']) ?></strong></a>
            <?php } ?>
        <?php } else {
            if($board['bo_use_good'] || $board['bo_use_nogood']) {
        ?>
            <?php if($board['bo_use_good']) { ?><a class="btn btn_b01" title="추천"><i class="fa fa-thumbs-up"></i> <span class="sound_only">추천</span><strong><?php echo number_format($view['wr_good']) ?></strong></a><?php } ?>
            <?php if($board['bo_use_nogood']) { ?><a class="btn btn_b01" title="비추천"><i class="fa fa-thumbs-down"></i> <span class="sound_only">비추천</span><strong><?php echo number_format($view['wr_nogood']) ?></strong></a><?php } ?>
        <?php
            }
        }
        ?>
        <!-- }  추천 비추천 끝 -->

        <?php if ($scrap_href) { ?><a href="<?php echo $scrap_href;  ?>" target="_blank" class="btn btn_b03" onclick="win_scrap(this.href); return false;"><i class="fa fa-thumb-tack" aria-hidden="true"></i> 스크랩</a><?php } ?>

        <?php
        include_once(G5_SNS_PATH."/view.sns.skin.php");
        ?>
    </div>

    <?php
    $cnt = 0;
    if ($view['file']['count']) {
        for ($i=0; $i<count($view['file']); $i++) {
            if (isset($view['file'][$i]['source']) && $view['file'][$i]['source'] && !$view['file'][$i]['view'])
                $cnt++;
        }
    }
     ?>

    <?php if($cnt) { ?>
    <!-- 첨부파일 시작 { -->
    <section id="bo_v_file">
        <h2>첨부파일</h2>
        <ul>
        <?php
        // 가변 파일
        for ($i=0; $i<count($view['file']); $i++) {
            if (isset($view['file'][$i]['source']) && $view['file'][$i]['source'] && !$view['file'][$i]['view']) {
         ?>
            <li>
                <i class="fa fa-download" aria-hidden="true"></i>
                <a href="<?php echo $view['file'][$i]['href'];  ?>" class="view_file_download">
                    <strong><?php echo $view['file'][$i]['source'] ?></strong>
                </a>
                <?php echo $view['file'][$i]['content'] ?> (<?php echo $view['file'][$i]['size'] ?>)
                <span class="bo_v_file_cnt"><?php echo $view['file'][$i]['download'] ?>회 다운로드 | DATE : <?php echo $view['file'][$i]['datetime'] ?></span>
            </li>
        <?php
            }
        }
         ?>
        </ul>
    </section>
    <!-- } 첨부파일 끝 -->
    <?php } ?>

    <?php if(isset($view['link'][1]) && $view['link'][1]) { ?>
    <!-- 관련링크 시작 { -->
    <!-- <section id="bo_v_link">
        <h2 class="text-h6">관련링크</h2>
        <ul>
        <?php
        // 링크
        $cnt = 0;
        for ($i=1; $i<=count($view['link']); $i++) {
            if ($view['link'][$i]) {
                $cnt++;
                $link = cut_str($view['link'][$i], 70);
            ?>
            <li>
                <a href="<?php echo $view['link_href'][$i] ?>" target="_blank"><i class="fa fa-link" aria-hidden="true"></i> 
                    
                    <strong><?php echo $link ?></strong>
                </a>
                <span class="bo_v_link_cnt"><?php echo $view['link_hit'][$i] ?>회 연결</span>
            </li>
            <?php
            }
        }
        ?>
        </ul>
    </section> -->
    <!-- } 관련링크 끝 -->
    <?php } ?>


    <?php
    // 코멘트 입출력
    //include_once(G5_BBS_PATH.'/view_comment.php');
     ?>


</article>
    <div class="bo_v_util">
            <?php if ($prev_href || $next_href) { ?>
                <?php
                $prev_thumb = get_list_thumbnail($board['bo_table'], $prev['wr_id'], $board['bo_gallery_width'], $board['bo_gallery_height'], false, true);
                if($prev_thumb['src']) {
                // $prev_img = '<img src="'.$prev_thumb['src'].'" alt="'.$prev_thumb['alt'].'" >';
                $prev_img = '<div class="bg_wrap" style="background-image: url(' . htmlspecialchars($prev_thumb['src']) . ');"></div>';
                
                } else {
                $prev_img = '<span class="no_image">no image</span>';
                }
                $next_thumb = get_list_thumbnail($board['bo_table'], $next['wr_id'], $board['bo_gallery_width'], $board['bo_gallery_height'], false, true);
                if($next_thumb['src']) {
                // $next_img = '<img src="'.$next_thumb['src'].'" alt="'.$next_thumb['alt'].'" >';
                $next_img = '<div class="bg_wrap" style="background-image: url(' . htmlspecialchars($next_thumb['src']) . ');"></div>';
                } else {
                $next_img = '<span class="no_image">no image</span>';
                }
            ?>
        <div class="list_btn"><a href="<?php echo $list_href ?>" class="C_btn"><i class="xi-bars" aria-hidden="true"></i> 목록</a></div>
        <ul class="bo_v_nb">
            <?php if ($prev_href) { ?><li class="btn_prev transOJ"><a href="<?php echo $prev_href ?>"> <span class="sound_only"> 이전글</span> <?php echo $prev_img; ?><div class="tit_wrap"><span>Prev</span><b class="text-h7"><?php echo $prev_wr_subject;?></b><i class="xi-long-arrow-left"></i></div></a> </li><?php } ?>
            <?php if ($next_href) { ?><li class="btn_next transOJ"><a href="<?php echo $next_href ?>"> <span class="sound_only">다음글 </span> <?php echo $next_img; ?><div class="tit_wrap"><span>Next</span><b class="text-h7"><?php echo $next_wr_subject;?></b><i class="xi-long-arrow-right"></i></div></a> </li><?php } ?>
        </ul>

        <!-- <ul class="bo_v_nb">
            <?php if ($prev_href) { ?><li class="btn_prev transOJ"><a href="<?php echo $prev_href ?>"> <span class="sound_only"> 이전글</span> <?php echo $prev_img; ?><div class="tit_wrap"><b class="text-h6"><?php echo $prev_wr_subject;?> </b></div></a> </li><?php } ?>
            <li class="list_btn"><a href="<?php echo $list_href ?>" class="btn_b01 C_btn"><i class="fa fa-list" aria-hidden="true"></i> 목록</a></li>
            <?php if ($next_href) { ?><li class="btn_next transOJ"> <a href="<?php echo $next_href ?>"> <span class="sound_only">다음글 </span> <?php echo $next_img; ?><div class="tit_wrap"><b class="text-h6"><?php echo $next_wr_subject;?> </b></div></a> </li><?php } ?>
        </ul> -->
        <?php } ?>
        <?php
        $link_buttons = ob_get_contents();
        ob_end_flush();
        ?>
    </div>



<!-- } 게시판 읽기 끝 -->









<script>
<?php if ($board['bo_download_point'] < 0) { ?>
$(function() {
    $("a.view_file_download").click(function() {
        if(!g5_is_member) {
            alert("다운로드 권한이 없습니다.\n회원이시라면 로그인 후 이용해 보십시오.");
            return false;
        }

        var msg = "파일을 다운로드 하시면 포인트가 차감(<?php echo number_format($board['bo_download_point']) ?>점)됩니다.\n\n포인트는 게시물당 한번만 차감되며 다음에 다시 다운로드 하셔도 중복하여 차감하지 않습니다.\n\n그래도 다운로드 하시겠습니까?";

        if(confirm(msg)) {
            var href = $(this).attr("href")+"&js=on";
            $(this).attr("href", href);

            return true;
        } else {
            return false;
        }
    });
});
<?php } ?>

function board_move(href)
{
    window.open(href, "boardmove", "left=50, top=50, width=500, height=550, scrollbars=1");
}
</script>

<script>
$(function() {
    $("a.view_image").click(function() {
        window.open(this.href, "large_image", "location=yes,links=no,toolbar=no,top=10,left=10,width=10,height=10,resizable=yes,scrollbars=no,status=no");
        return false;
    });

    // 추천, 비추천
    $("#good_button, #nogood_button").click(function() {
        var $tx;
        if(this.id == "good_button")
            $tx = $("#bo_v_act_good");
        else
            $tx = $("#bo_v_act_nogood");

        excute_good(this.href, $(this), $tx);
        return false;
    });

    // 이미지 리사이즈
    $("#bo_v_atc").viewimageresize();
});

function excute_good(href, $el, $tx)
{
    $.post(
        href,
        { js: "on" },
        function(data) {
            if(data.error) {
                alert(data.error);
                return false;
            }

            if(data.count) {
                $el.find("strong").text(number_format(String(data.count)));
                if($tx.attr("id").search("nogood") > -1) {
                    $tx.text("이 글을 비추천하셨습니다.");
                    $tx.fadeIn(200).delay(2500).fadeOut(200);
                } else {
                    $tx.text("이 글을 추천하셨습니다.");
                    $tx.fadeIn(200).delay(2500).fadeOut(200);
                }
            }
        }, "json"
    );
}
</script>


<!-- } 게시글 읽기 끝 -->