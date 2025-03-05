<?php
/* copyright(c) WEBsiting.co.kr */
/* 2020-02-04 짧은글 주소 메뉴 활성화 대응코드 */
if (!defined('_GNUBOARD_')) exit; /* 개별 페이지 접근 불가 */
if($bo_table){
$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$rq_uri = explode("&",$actual_link);
$sel_uri = $rq_uri[0]; 
$realLink = str_replace(G5_URL,'',$sel_uri);
$boardViewLink = explode("/",$realLink);
$boardViewLinkquestion = explode("?",$boardViewLink[1]);
$boardViewLinkand = explode("&",$boardViewLinkquestion[0]);
$mnNewActive = preg_replace("/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\|\!\?\*$#<>()\[\]\{\}]/i", "", $boardViewLinkand[0]);
 /* 주의사항 아래 코드를 수정하시면 페이지 현재위치 및 서브메뉴,모바일메뉴가 정상작동되지 않을 수 있습니다. */ 
?><ul id="snb"><?php 
$sql = " select * from {$g5['menu_table']} where me_use = '1' and length(me_code) = '2' order by me_order, me_id "; 
	$result = sql_query($sql, false); 
	for ($i=0; $row=sql_fetch_array($result); 
	$i++) {
		$gnbM = explode("?",$row['me_link']); 
		$gnbM_kind_id = explode("=",$gnbM[1]); 
		$gnbM_kind = $gnbM_kind_id[0]; 
		$gnbM_idA = $gnbM_kind_id[1]; 
		$gnbM_lt = explode("&",$gnbM_idA); 
		$gnbM_id = $gnbM_lt[0]; 
		$gnbM_idL = $gnbM_kind_id[2]; 
		$menuRealLink = str_replace(G5_URL,'',$row['me_link']);
		$menuLink = preg_replace("/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\_|\!\?\*$#<>()\[\]\{\}]/i", "", $menuRealLink);
?>
<li class="snb <?php echo $gnbM_kind; ?><?php echo $gnbM_id; ?><?php echo $gnbM_idL; ?> d1_<?php echo $menuLink; ?> <?php 
$sql2 = " select * from {$g5['menu_table']} where me_use = '1' and length(me_code) = '4' and substring(me_code, 1, 2) = '{$row['me_code']}' order by me_order, me_id "; 
$result2 = sql_query($sql2); 
for ($k=0; $row2=sql_fetch_array($result2); 
	$k++) {
		$gnbM2 = explode("?",$row2['me_link']); 
		$gnbM_kind_id2 = explode("=",$gnbM2[1]); 
		$gnbM_kind2 = $gnbM_kind_id2[0]; 
		$gnbM_idA2 = $gnbM_kind_id2[1]; 
		$gnbM_lt2 = explode("&",$gnbM_idA2);
		$gnbM_id2 = $gnbM_lt2[0];
		$gnbM_idL2 = $gnbM_kind_id2[2];
		if($k == 0)  echo '';
		echo $gnbM_kind2;
		echo $gnbM_id2; 
		echo $gnbM_idL2; 
		echo ' ';
}

$sql2 = " select * from {$g5['menu_table']} where me_use = '1' and length(me_code) = '4' and substring(me_code, 1, 2) = '{$row['me_code']}' order by me_order, me_id "; 
$result2 = sql_query($sql2); 
for ($k=0; $row2=sql_fetch_array($result2); $k++) {

	if($k == 0)  echo '';
	echo '';
	$menuRealLink2 = str_replace(G5_URL,'',$row2['me_link']);
	$menuLink2 = preg_replace("/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\|\!\?\*$#<>()\[\]\{\}]/i", "", $menuRealLink2); 
		if($mnNewActive == $menuLink2){
			echo ' d1_';
			echo $menuLink2; 

		}
		$menuLink3root = explode("/",$menuRealLink2);
		if($menuLink3root[2] == 'write'){
			echo ' d1_';
			echo $menuLink3root[1];
		}
}
if ($k == '') echo ' noSubSpacer';

?>"><h2 class="bnBar_<?php echo $row['me_code'] ?>"><a href="<?php echo $row['me_link']; ?>" target="_<?php echo $row['me_target']; ?>"><b><?php echo $row['me_name'] ?></b> <sub></sub></a></h2><?php 

$sql2 = " select * from {$g5['menu_table']} where me_use = '1' and length(me_code) = '4' and substring(me_code, 1, 2) = '{$row['me_code']}' order by me_order, me_id "; 
$result2 = sql_query($sql2); 
for ($k=0; $row2=sql_fetch_array($result2); $k++) {
	$gnbM2 = explode("?",$row2['me_link']); 
	$gnbM_kind_id2 = explode("=",$gnbM2[1]); 
	$gnbM_kind2 = $gnbM_kind_id2[0]; 
	$gnbM_idA2 = $gnbM_kind_id2[1]; 
	$gnbM_lt2 = explode("&",$gnbM_idA2);
	$gnbM_id2 = $gnbM_lt2[0];
	$gnbM_idL2 = $gnbM_kind_id2[2]; 
	$menuRealLink2 = str_replace(G5_URL,'',$row2['me_link']);
	$menuLink2 = preg_replace("/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\|\!\?\*$#<>()\[\]\{\}]/i", "", $menuRealLink2); 
	
		$menuLink3root = explode("/",$menuRealLink2);
		if($menuLink3root[2] == 'write'){
			$menuLink3 = explode("write",$menuLink2);
			$menuLinkD2 = $menuLink3[0];
		} else {
			$menuLinkD2 = $menuLink2;
		}

	if($k == 0) echo '<em class="snb2dDown"><b></b><i class="fa fa-angle-down"></i><u class="fa fa-angle-up"></u></em><ul class="snb2dul">';
	
?><li class="snb2d snb2d_<?php echo $gnbM_kind2; ?><?php echo $gnbM_id2; ?><?php echo $gnbM_idL2; ?> d2_<?php echo $menuLinkD2; ?>"><a href="<?php echo $cube_link ; ?><?php echo $row2['me_link']; ?>" target="_<?php echo $row2['me_target']; ?>"><b><i class="fa fa-angle-right"></i> <?php echo $row2['me_name'] ?></b></a></li><?php } if($k > 0) echo '</ul>'; ?></li><?php 
}
?><li class="snb noInfoPageTit <?php 
	$sql = " select * from {$g5['menu_table']} where me_use = '1' and length(me_code) = '2' order by me_order, me_id "; 
	$result = sql_query($sql, false);
	for ($i=0; $row=sql_fetch_array($result); $i++) {
		$menuRealLink = str_replace(G5_URL,'',$row['me_link']);
		$menuLink = preg_replace("/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\|\!\?\*$#<>()\[\]\{\}]/i", "", $menuRealLink);

			if($mnNewActive == $menuLink){
				echo ' none_';
				echo $menuLink;
				
				$menuLink3root = explode("/",$menuRealLink);
				if($menuLink3root[2] == 'write'){
					$menuLink3 = explode("write",$menuLink);
					echo ' none_';
					echo $menuLink3[0];
				}
			}
		
		$sql2 = " select * from {$g5['menu_table']} where me_use = '1' and length(me_code) = '4' and substring(me_code, 1, 2) = '{$row['me_code']}' order by me_order, me_id "; 
		$result2 = sql_query($sql2); 
		for ($k=0; $row2=sql_fetch_array($result2); $k++) {
			$menuRealLink2 = str_replace(G5_URL,'',$row2['me_link']);
			$menuLink2 = preg_replace("/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\|\!\?\*$#<>()\[\]\{\}]/i", "", $menuRealLink2); 

			if($mnNewActive == $menuLink2){
				echo ' none_';
				echo $menuLink2;
				
				$menuLink3root = explode("/",$menuRealLink2);
				if($menuLink3root[2] == 'write'){
					$menuLink3 = explode("write",$menuLink2);
					echo ' none_';
					echo $menuLink3[0];
				}
			}
		} 
	}

?>"></li></ul>
<script>
<?php /* 주의사항 아래 코드를 수정하시면 페이지 현재위치 및 서브메뉴,모바일메뉴가 정상작동되지 않을 수 있습니다. */ ?>
$(function(){
	$(".snb.bo_table<?php echo $bo_table;?>, .snb .snb2d_bo_table<?php echo $bo_table;?>").addClass("active");
	$(".snb.d1_<?php echo $mnNewActive;?>, .snb .d2_<?php echo $mnNewActive;?>").addClass("active");
});
$(document).ready(function(){
	if($("#snb > li").is(".snb.active")){
		$(".loc1D").html($(".snb.active h2 a b").html());
		$(".loc2D").html($(".snb2d.active a b").html());
		$(".faArr").html('<i class="fa fa-angle-right"></i>');
		var a=$("#snb > li").index("#snb > li.active");
		$("#page_title").addClass("subTopBg_"+($("#snb > li.bo_table<?php echo $bo_table ?>, #snb > li.d1_<?php echo $mnNewActive ?>").index()+1));
	} else {
		$(".loc1D, .bNBarMw .snb2dDown > b").text("<?php echo get_head_title($g5['title']); ?>");
		$(".noInfoPageTit").html("<h2><a><b><?php echo get_head_title($g5['title']); ?></b><sub></sub></a></h2>");
		$(".noInfoPageTit").addClass("active");
		$(".subTopLocNav").addClass("subTopLocNav2Dnone");
		$("#page_title").addClass("subTopBg_");
	}
});
$(function(){
	$(".noInfoPageTit.none_<?php echo $mnNewActive;?>").addClass("displayNoneImportant");
	$(".noInfoPageTit.none_<?php echo $mnNewActive;?>").removeClass("active");
});
$(".bNBar > ul").html($("#snb").html());
$(function(){ var a=$("#snb li.snb"); a.addClass("hide"); $("#snb li.active").removeClass("hide").addClass("show"); $("#snb li.active .snb2dul").show(); $(".snb2dDown").click(function(){ var b=$(this).parents("#snb li.snb"); if(b.hasClass("hide")){ a.addClass("hide").removeClass("show"); a.find(".snb2dul").slideUp("fast"); b.removeClass("hide").addClass("show"); b.find(".snb2dul").slideDown("fast"); } else { b.removeClass("show").addClass("hide"); b.find(".snb2dul").slideUp("fast"); } }) }); $(".snb").removeClass("d1_bbscontentphp"); $(".snb2d").removeClass("d2_bbscontentphp");
</script>
<?php } else { 
/* copyright(c) WEBsiting.co.kr */
/* 2021-02-13 php8 대응코드 */
$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$rq_uri = explode("&",$actual_link);
$qLink = explode("?",$actual_link);
$sel_uri = $rq_uri[0]; 
$realLink = str_replace(G5_URL,'',$sel_uri);
$boardViewLink = explode("/",$realLink);
$boardViewLinkquestion = explode("?",$realLink);
$boardViewLinkand = explode("&",$boardViewLinkquestion[0]);
$mnNewActive = preg_replace("/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\|\!\?\*$#<>()\[\]\{\}]/i", "", $boardViewLinkand[0]);
$topMNactiveLink = preg_replace("/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\|\!\?\*$#<>()\[\]\{\}]/i", "", $rq_uri[0]);
 /* 주의사항 아래 코드를 수정하시면 페이지 현재위치 및 서브메뉴,모바일메뉴가 정상작동되지 않을 수 있습니다. */ 
?><ul id="snb"><?php 
$sql = " select * from {$g5['menu_table']} where me_use = '1' and length(me_code) = '2' order by me_order, me_id "; 
$result = sql_query($sql, false); 
for ($i=0; $row=sql_fetch_array($result); $i++) {
		$snb1Class = preg_replace("/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\|\!\?\*$#<>()\[\]\{\}]/i", "", $row['me_link']);
?><li class="snb D1_<?php echo $snb1Class;?>"><h2><a href="<?php echo $row['me_link']; ?>" target="_<?php echo $row['me_target']; ?>"><b><?php echo $row['me_name'] ?></b> <sub></sub></a></h2><?php 
$sql2 = " select * from {$g5['menu_table']} where me_use = '1' and length(me_code) = '4' and substring(me_code, 1, 2) = '{$row['me_code']}' order by me_order, me_id "; 
$result2 = sql_query($sql2); 
for ($k=0; $row2=sql_fetch_array($result2); $k++) {
		$snb2Class = preg_replace("/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\|\!\?\*$#<>()\[\]\{\}]/i", "", $row2['me_link']);
	if($k == 0) echo '<em class="snb2dDown"><b></b><i class="fa fa-angle-down"></i><u class="fa fa-angle-up"></u></em><ul class="snb2dul">';
?><li class="snb2d D2_<?php echo $snb2Class;?>"><a href="<?php echo $row2['me_link']; ?>" target="_<?php echo $row2['me_target']; ?>"><b><i class="fa fa-angle-right"></i> <?php echo $row2['me_name'] ?></b></a></li><?php } if($k > 0) echo '</ul>'; ?></li><?php 
}
?><li class="snb noInfoPageTit "></li></ul>
<script>
$(function(){
	$(".D1_<?php echo $topMNactiveLink;?>, .D2_<?php echo $topMNactiveLink;?>").addClass("active");
	$(".D2_<?php echo $topMNactiveLink;?>").parents(".snb").addClass("active");
});
$(document).ready(function(){
	if($("#snb > li").is(".snb.active")){
		$(".loc1D").html($(".snb.active h2 a b").html());
		$(".loc2D").html($(".snb2d.active a b").html());
	} else {
		$(".loc1D").text("<?php echo get_head_title($g5['title']); ?>");
		$(".noInfoPageTit").html("<h2><a><b><?php echo get_head_title($g5['title']); ?></b><sub></sub></a></h2>");
		$(".noInfoPageTit").addClass("active");
		$(".subTopLocNav").addClass("subTopLocNav2Dnone");
		$("#page_title").addClass("subTopBg_");
	}
	var a=$("#snb > li").index("#snb > li.active");
	$("#page_title").addClass("subTopBg_"+($(".snb.active").index()+1));

});
$(".bNBar > ul").html($("#snb").html());
$(function(){ var a=$("#snb li.snb"); a.addClass("hide"); $("#snb li.active").removeClass("hide").addClass("show"); $("#snb li.active .snb2dul").show(); $(".snb2dDown").click(function(){ var b=$(this).parents("#snb li.snb"); if(b.hasClass("hide")){ a.addClass("hide").removeClass("show"); a.find(".snb2dul").slideUp("fast"); b.removeClass("hide").addClass("show"); b.find(".snb2dul").slideDown("fast"); } else { b.removeClass("show").addClass("hide"); b.find(".snb2dul").slideUp("fast"); } }) }); $(".snb").removeClass("d1_bbscontentphp"); $(".snb2d").removeClass("d2_bbscontentphp");
</script>
<?php } ?>
<script>
$(document).ready(function(){
	if($("#snb > li.snb.active em.snb2dDown").length){
		$(".subTopLocNav").addClass("subTopLocNav2Don");

		if($("#snb > li.snb.active .snb2dul .snb2d.active").length){
			/* 2-1 메뉴 동일 */
		} else {
			$(".loc2DA .loc2D").html($(".snb.active h2 a b").html());
		}
	}
	else {
		$(".subTopLocNav").addClass("subTopLocNav2Doff");
	}
});
</script>