<?php
//ini_set('disply_errors', 'On'); error_reporting(E_ALL | E_STRICT);
// include 'functions/functions.php';
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="stylesheets/mainstyle.css">
    <title>Tuyen's Soapbook</title>
</head>

<body>
    <div class="container">
        <!-- ********** Search Div  ***********  -->
        <div class="srch-div">
            <form class="srch-div__form" id="srch-frm" action="pages/ajax.php" method="post" autocomplete="off">
                <input class="srch-div__form__input srch-div__form__input--whitebg" type="text" name="search" id="srch-input" placeholder="enter soap name to search">
                <button class="srch-div__form__button srch-div__form__button--bluebg" id="srch-btn">submit</button>
            </form>
        </div>
        <!-- ********** Button Div ************  -->
        <div class="btn-div">
            <button class="btn-div__btn btn-div__btn--cyanbg" id="add-rcp-btn">Add Recipe</button>
            <button class="btn-div__btn btn-div__btn--cyanbg" id="all-rcp-btn">See All Recipes</button>
        </div>
        <!-- ********** Suggest Div ***********  -->
        <div class="suggest-div" id="suggest-box">
        </div>
    </div>
</body>

<!-- ********** Scripts ***********  -->
<script src="scripts/mainscript.js"></script>
</html>