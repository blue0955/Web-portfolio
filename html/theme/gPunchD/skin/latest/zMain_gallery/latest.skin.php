<?php
/* copyright(c) WEBsiting.co.kr */
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$latest_skin_url.'/style.css">', 0);
$list_count = (is_array($list) && $list) ? count($list) : 0;

$sql = " select * from {$g5['board_table']} where bo_table = '{$bo_table}' ";
$result = sql_query($sql);
$row=sql_fetch_array($result);
$thumb_width = '300';
$thumb_height = '300';

?>

<div class="galleryMainLat galleryMainLat<?php echo $bo_table ?>">
    <h2 class="galleryLatTit"><a href="<?php echo get_pretty_url($bo_table); ?>"><?php echo $bo_subject ?><u class="themeBgColor"></u></a></h2>
    <ul>
    <?php
    for ($i=0; $i<count($list); $i++) {
		$thumb = get_list_thumbnail($bo_table, $list[$i]['wr_id'], $thumb_width, $thumb_height, false, true);
		$img = G5_THEME_URL.'/plugin/websiting/imageSpacer.php?w=300&h=300';
		$img_content = '<img src="'.$img.'" alt="'.$thumb['alt'].'" >';

		// 2023-02-08 유튜브 공유링크 3버전 대응코드
		if(isset($thumb['src']) && $thumb['src']) {
			$thumb['alt'] = $list[$i]['subject'];
			$noImage = '';
			$imgBg = '<em><sup class="imgBg" style="background-image:URL('.$thumb['src'].');"></sup></em>';
		} else {
			$youtubeID = $list[$i]['wr_link1']; 
			$youtubeID1[$i] = explode('/',$youtubeID); 

			if(isset($youtubeID1[$i][2]) && $youtubeID1[$i][2] == "youtu.be") {
				
					$imgBg = '<em><sup class="imgBg imgBgYT" style="background-image:URL(//img.youtube.com/vi/'.$youtubeID1[$i][3].'/maxresdefault.jpg);"></sup></em>';
					$noImage = '';

			} else if(isset($youtubeID1[$i][2]) && $youtubeID1[$i][2] == "youtube.com" || $youtubeID1[$i][2] == "www.youtube.com") {
				if(isset($youtubeID1[$i][2]) && $youtubeID1[$i][3] == "shorts" || $youtubeID1[$i][3] == "live") {
					$youtubeIDnew[$i] = explode('?',$youtubeID1[$i][4]); 
				
					$imgBg = '<em><sup class="imgBg imgBgYT" style="background-image:URL(//img.youtube.com/vi/'.$youtubeIDnew[$i][0].'/maxresdefault.jpg);"></sup></em>';
					$noImage = '';


				} else {
					$youtubeIDnew[$i] = explode('=',$youtubeID1[$i][3]); 
					$youtubeIDnewID[$i] = explode('&',$youtubeIDnew[$i][1]); 	
				
					$imgBg = '<em><sup class="imgBg imgBgYT" style="background-image:URL(//img.youtube.com/vi/'.$youtubeIDnewID[$i][0].'/maxresdefault.jpg);"></sup></em>';
					$noImage = '';		
				}
			} else {
				$noImage = "<u><i class='fa fa-picture-o'></i></u><!-- 이미지 없음 -->";
				$imgBg = '';
			}
		}
    ?>
        <li>
            <a href="<?php echo $list[$i]['href'] ?>">
				<i><?php echo $img_content; echo $noImage; echo $imgBg; ?></i>
				<?php
				echo "<em>";
				if ($list[$i]['icon_new']) echo "<span class=\"new_icon\">N<span class=\"sound_only\">새글</span></span> ";
				if (isset($youtubeID1[$i][2]) == "youtu.be" || $youtubeID1[$i][2] == "youtube.com" || $youtubeID1[$i][2] == "www.youtube.com")  echo "<i class=\"fa fa-youtube-play fts13px\"><span class=\"sound_only\">유투브영상</span></i> ";
				echo "</em>";
				if ($list[$i]['ca_name']) echo "<span class='bo_cate_link'>[ ".$list[$i]['ca_name']." ]</span> ";
				echo "<b>";
				echo $list[$i]['subject']."</b>";
				?>
			</a>
        </li>
    <?php 
	} 
	if (count($list) == 0) { //게시물이 없을 때  ?>
    <li class="empty_li"><i class="fa fa-exclamation-triangle"></i> 게시물이 없습니다.</li>
    <?php }  ?>
    </ul>
    <a href="<?php echo get_pretty_url($bo_table); ?>" class="lt_more themeBgColor"><?php echo $bo_subject ?> 더보기 <i class="fa fa-plus-circle" aria-hidden="true"></i></a>
</div>