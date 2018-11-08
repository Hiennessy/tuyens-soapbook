<?php

/******************************************************************************
 * function name: ajaxRequest
 *
 * description:   This function confirms an ajax request, then takes 
 *                all POST data and checks for type of data
 *                to determine if it is a search suggestion 
 *                a search bar submit, add recipe submit, or see all recipe
 *                submit 
 * parameters: none
 *
 * return: json data
 *****************************************************************************/
function ajaxRequest() {
  if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {

    // $input_text = isset($_POST['search']) ? $_POST['search']: 'did not work';
    $searchtext = $_POST['searchval'];
    echo json_encode(array('searchval'=>$searchtext));
    
  } else {

    echo json_encode(array('searchval'=>'Error'));
    // $searchtext = $_POST['searchval'];
    // echo json_encode(array('searchval'=>$searchtext));

  }

}


// run ajaxRequest function as soon as this page is called
ajaxRequest();

?>