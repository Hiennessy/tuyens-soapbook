// Set global xhr object
var $xhr     = new XMLHttpRequest();

// Set DOM variables
var $searchbar    = document.getElementById("srch-input");
var $searchbtn    = document.getElementById("srch-btn");
var $addbtn       = document.getElementById("add-rcp-btn");
var $allbtn       = document.getElementById("all-rcp-btn");
var $suggestbox   = document.getElementById("suggest-box");

/* **************************************************************************** */
/*  On keyup after typing in search input, run function that will               */
/*  check if searchbar is empty or not, if not, then call ajaxSuggest function  */
/* **************************************************************************** */

$searchbar.addEventListener("keyup", function() {
  if ($searchbar.value == "") {
    $suggestbox.classList.remove("suggest-div--show");
  } else {
      ajaxSuggest();
    }
})

/* *************************************************************************** */
/* This function will take the value typed into the search bar                 */
/* and send the value to php by ajax.  PHP will then send back value           */ 
/* as a response. This function will return soap name suggestions              */ 
/* based on typed input. PHP will process typed input and return suggestions.  */ 
/* JS will then create a select list of the suggestions                        */
/* *************************************************************************** */

function ajaxSuggest() {

  var $searchvalue = $searchbar.value;                        // Get typed value from search input 

  var $form        =  document.getElementById("srch-frm");  // Get form DOM object from form id, to get same action
  var $action      =  $form.getAttribute("action");           // Get form action and save in variable

  var $formdata    =  new FormData();                         // Create a form data object to send to server with xhr
  $formdata.append("searchval",$searchvalue);                 // Append typed value from search input into form data object

// Now do ajax request and send form data
// Function below will run when there is an xhr state change

  $xhr.onreadystatechange = function () {
    if($xhr.readyState == 4 && $xhr.status == 200) {    // Confirm http request is done(4) and succeeded(200) 
      var $ajaxResp = $xhr.responseText;                // Set a variable to the server response text
      var $searchval = JSON.parse($ajaxResp);           // Response text is a string in JSON format, use JSON.parse to turn to object
      showSuggest($searchval);                          // Call showSuggest function and give jsonObj as parameter         
    }
  }

  $xhr.open("POST",$action,true);                                // Start http ajax POST request
  $xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');   // Set request headers to let server know it is ajax request
  $xhr.send($formdata);                                          // Send form data object to server with xhr

}

/* ******************************************************************************** */
/*  This function will take the value returned from PHP,                            */
/*  add the show modifier class to the suggest-div, then add the returned value     */
/*  to the suggest-box innerhtml, thereby showing the type value in the suggest-box */
/* ******************************************************************************** */

function showSuggest($val) {
  $suggestbox.classList.add("suggest-div--show");                // Add show modifier class to suggest-div, which will show the suggest-box
  $suggestbox.innerHTML = $val.searchval;                        // Add text that was typed in the search input and show it in suggest-box
}