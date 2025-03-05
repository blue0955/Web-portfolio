<?php
/* copyright(c) WEBsiting.co.kr */
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$latest_skin_url.'/style.css">', 10);
$list_count = (is_array($list) && $list) ? count($list) : 0;

$sql = " select * from {$g5['board_table']} where bo_table = '{$bo_table}' ";
$result = sql_query($sql);
$row=sql_fetch_array($result);
$thumb_width = 1280;
$thumb_height = 784;

// if ($row['bo_gallery_width'] == 0){
// 	$thumb_width = $row['bo_gallery_height'];
// } else {
// 	$thumb_width = $row['bo_gallery_width'];
// }
// if ($row['bo_gallery_height'] == 0){
// 	$thumb_height = $row['bo_gallery_width'];
// } else {
// 	$thumb_height = $row['bo_gallery_height'];
// }
?>

<div class="galleryLat">
    <!-- <h2 class="galleryLatTit"><a href="<?php echo get_pretty_url($bo_table); ?>"><?php echo $bo_subject ?><u class="themeBgColor"></u></a></h2> -->
    <ul>
    <?php
    for ($i=0; $i<count($list); $i++) {
    $thumb = get_list_thumbnail($bo_table, $list[$i]['wr_id'], $thumb_width, $thumb_height, false, true);
	$youtubeID = $list[$i]['wr_link1']; 
	$youtubeID1 = explode('/',$youtubeID); 

    if(isset($thumb['src']) && $thumb['src']) {
        $img = $thumb['src'];
        $thumb['alt'] = $list[$i]['subject'];
		$noImage = '';
		$youtube_content = '';
    } else {
		if(isset($youtubeID1[2]) && $youtubeID1[2] == "youtu.be") {
			$youtube_content = '<sup class="youtube_img" style="background-image:URL(//img.youtube.com/vi/'.$youtubeID1[3].'/maxresdefault.jpg);"></sup>
		';
		} else if(isset($youtubeID1[2]) && $youtubeID1[2] == "youtube.com" || $youtubeID1[2] == "www.youtube.com") {
			if(isset($youtubeID1[2]) && $youtubeID1[3] == "shorts" || $youtubeID1[3] == "live") {
				$youtubeIDnew[$i] = explode('?',$youtubeID1[4]); 
				$youtube_content = '<sup class="youtube_img" style="background-image:URL(//img.youtube.com/vi/'.$youtubeIDnew[$i][0].'/maxresdefault.jpg);"></sup>';
			} else {
				$youtubeIDnew[$i] = explode('=',$youtubeID1[3]); 
				$youtubeIDnewID[$i] = explode('&',$youtubeIDnew[$i][1]); 
				$youtube_content = '<sup class="youtube_img" style="background-image:URL(//img.youtube.com/vi/'.$youtubeIDnewID[$i][0].'/maxresdefault.jpg);"></sup>';
			
			}
		} else {
			$youtube_content = '';
			$noImage = '<u><i class="fa fa-picture-o"></i></u><!-- 이미지 없음 -->';
		}


		$img = G5_THEME_URL.'/plugin/websiting/imageSpacer.php?w='.$row['bo_gallery_width'].'&h='.$row['bo_gallery_height'];
		$thumb['alt'] = 'No image';
    }
    $img_content = '<img src="'.$img.'" alt="'.$thumb['alt'].'" >';
    ?>
        <li>
            <a href="<?php echo $list[$i]['href'] ?>">
				<i><?php echo $img_content; ?><?php echo $noImage; ?><?php echo $youtube_content; ?></i>
				<div class="prj_block gap-l">
					<?php
					echo "<em>";
					if ($list[$i]['icon_secret']) echo "<i class=\"fa fa-lock\" aria-hidden=\"true\"></i><span class=\"sound_only\">비밀글</span> ";
					if ($list[$i]['icon_new']) echo "<span class=\"new_icon\">N<span class=\"sound_only\">새글</span></span> ";
					if ($list[$i]['icon_hot']) echo "<span class=\"hot_icon\">H<span class=\"sound_only\">인기글</span></span> ";
					// if (isset($youtubeID1[2]) == "youtu.be" || $youtubeID1[2] == "youtube.com" || $youtubeID1[2] == "www.youtube.com")  echo "<i class=\"fa fa-youtube-play fts13px\"><span class=\"sound_only\">유투브영상</span></i> ";
					echo "</em>";
					echo "<h2 class=\"text-h6\">";
					echo $list[$i]['subject']."</h2>";
					// if ($list[$i]['ca_name']) echo "<span class='bo_cate_link'>".$list[$i]['ca_name']."</span> ";
					if ($list[$i]['ca_name']) {
							// 카테고리를 ','로 분리
							$categories = explode(',', $list[$i]['ca_name']);
							
							 // <div>로 감싸고 각 카테고리를 <span> 태그로 출력
							echo "<div class='bo_cate_wrapper'>";
							foreach ($categories as $category) {
								$category = trim($category); // 공백 제거
								if ($category != '') {
									echo "<span class='bo_cate_link'>" . htmlspecialchars($category) . "</span> ";
								}
							}
							echo "</div>";
						}
					?>
				</div>
			</a>
        </li>
    <?php 
	}  
	if (count($list) == 0) { //게시물이 없을 때  ?>
    <li class="empty_li"><i class="fa fa-exclamation-triangle"></i> 게시물이 없습니다.</li>
    <?php }  ?>
    </ul>
    <!-- <a href="<?php echo get_pretty_url($bo_table); ?>" class="lt_more themeBgColor"><?php echo $bo_subject ?> 더보기 <i class="fa fa-plus-circle" aria-hidden="true"></i></a> -->
</div>
