<?php
if (!defined('_GNUBOARD_')) exit; // Prevent direct access

$ca_name = ''; // Initialize the category name string

// Concatenate each selected category name with a comma
if (isset($_POST['chk_ca_name']) && is_array($_POST['chk_ca_name'])) {
    foreach($_POST['chk_ca_name'] as $var) {
        $ca_name .= ",$var";
    }
}

// Remove the leading comma if any categories were selected
if (strlen($ca_name)) {
    $ca_name = substr($ca_name, 1);
}?>
