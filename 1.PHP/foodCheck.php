<?php
// 大多數時候，我們不需要手動設置header，但是如果要設置HTML以外的東西則需要。
header('Content-Type: text/xml');

// 每個 XML Document 都必須具有包裝整個XML Document 的根標籤。
echo '<response>';

    $item = $_GET['item'];
    $itemArray = array('burger', 'pizza', 'milk', 'bread', 'coke');
    if(in_array($item, $itemArray)) {
        echo 'Nice, we do have a '.$item.'!';
    } elseif($item=='') {
        echo 'Enter something';
    } else {
        echo 'Sorry, we dont have a '.$item.' in stock'; 
    }
 
echo '</response>'; 

?>