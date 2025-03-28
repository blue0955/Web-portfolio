<?php
/* copyright(c) WEBsiting.co.kr */
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$latest_skin_url.'/style.css?v2">', 0);
$list_count = (is_array($list) && $list) ? count($list) : 0;

$sql = " select * from {$g5['board_table']} where bo_table = '{$bo_table}' ";
$result = sql_query($sql);
$row=sql_fetch_array($result);

if ($row['bo_gallery_width'] == 0){
	$thumb_width = $row['bo_gallery_height'];
} else {
	$thumb_width = $row['bo_gallery_width'];
}
if ($row['bo_gallery_height'] == 0){
	$thumb_height = $row['bo_gallery_width'];
} else {
	$thumb_height = $row['bo_gallery_height'];
}
?>

<div class="mainBoxWst">
    <h2 class="sound_only"><?php echo $bo_subject ?></h2>
    <ul>
    <?php
    for ($i=0; $i<count($list); $i++) {
    $thumb = get_list_thumbnail($bo_table, $list[$i]['wr_id'], $thumb_width, $thumb_height, false, true);


		// 2023-02-08 유튜브 공유링크 3버전 대응코드
		if(isset($thumb['src']) && $thumb['src']) {
			$img = $thumb['src'];
			$thumb['alt'] = $list[$i]['subject'];
			$img_content = '<img src="'.$img.'" alt="'.$thumb['alt'].'" >';
			$youtube_content = '';
			$noImage = '';
		} else {
			$youtubeID = $list[$i]['wr_link1']; 
			$youtubeID1[$i] = explode('/',$youtubeID); 
			$img = G5_THEME_URL.'/plugin/websiting/imageSpacer.php?w='.$row['bo_gallery_width'].'&h='.$row['bo_gallery_height'];
			$thumb['alt'] = $list[$i]['subject'];
			$img_content = '<img src="'.$img.'" alt="'.$thumb['alt'].'" >';

			if(isset($youtubeID1[$i][2]) && $youtubeID1[$i][2] == "youtu.be") {
				
					$youtube_content = '<em><sup class="youtube_img" style="background-image:URL(//img.youtube.com/vi/'.$youtubeID1[$i][3].'/maxresdefault.jpg);"></sup></em>';
					$noImage = '';

			} else if(isset($youtubeID1[$i][2]) && $youtubeID1[$i][2] == "youtube.com" || $youtubeID1[$i][2] == "www.youtube.com") {
				if(isset($youtubeID1[$i][2]) && $youtubeID1[$i][3] == "shorts" || $youtubeID1[$i][3] == "live") {
					$youtubeIDnew[$i] = explode('?',$youtubeID1[$i][4]); 
				
					$youtube_content = '<em><sup class="youtube_img" style="background-image:URL(//img.youtube.com/vi/'.$youtubeIDnew[$i][0].'/maxresdefault.jpg);"></sup></em>';
					$noImage = '';


				} else {
					$youtubeIDnew[$i] = explode('=',$youtubeID1[$i][3]); 
					$youtubeIDnewID[$i] = explode('&',$youtubeIDnew[$i][1]); 	
				
					$youtube_content = '<em><sup class="youtube_img" style="background-image:URL(//img.youtube.com/vi/'.$youtubeIDnewID[$i][0].'/maxresdefault.jpg);"></sup></em>';
					$noImage = '';		
				}
			} else {
				$noImage = "<u><i class='fa fa-picture-o'></i></u><!-- 이미지 없음 -->";
				$youtube_content = '';
			}
		}



    ?>
        <li>
            <a href="<?php echo $list[$i]['href'] ?>">
				<i class="themeBgColor"><?php echo $img_content; ?><?php echo $noImage; ?><?php echo $youtube_content; ?></i>
				<?php
				echo "<em>";
				if ($list[$i]['icon_secret']) echo "<i class=\"fa fa-lock\" aria-hidden=\"true\"></i><span class=\"sound_only\">비밀글</span> ";
				if ($list[$i]['icon_new']) echo "<span class=\"new_icon\">N<span class=\"sound_only\">새글</span></span> ";
				if ($list[$i]['icon_hot']) echo "<span class=\"hot_icon\">H<span class=\"sound_only\">인기글</span></span> ";
				if (isset($youtubeID1[$i][2]) == "youtu.be" || $youtubeID1[$i][2] == "youtube.com" || $youtubeID1[$i][2] == "www.youtube.com")  echo "<i class=\"fa fa-youtube-play fts13px\"><span class=\"sound_only\">유투브영상</span></i> ";
				echo "</em>";
				echo "<b><b><span class='bo_cate_link'>";
				echo $bo_subject;
				if ($list[$i]['ca_name']) echo " <em>|</em> ".$list[$i]['ca_name']." ";
				echo "</span>";
				echo $list[$i]['subject']."</b></b>";
				?>
				<u class="arrRight"></u>
			</a>
        </li>
    <?php 
	} 
	if (count($list) == 0) { //게시물이 없을 때 목록을 채운다.
		for ($i=0; $i<$rows; $i++) {
	?>
    <li class="empty_liImg">
		<img src="<?php echo G5_THEME_URL.'/plugin/websiting/imageSpacer.php?w='.$row['bo_gallery_width'].'&h='.$row['bo_gallery_height'];?>" alt="no data">
	</li>
    <?php } }  ?>
    </ul>
	<?php 
	if (count($list) == 0) { //게시물이 없을 때 표시 ?>
    <p class="empty_pWst"><u></u> <i class="fa fa-music"></i> Coming soon!</p>
    <?php }  ?>
</div>
