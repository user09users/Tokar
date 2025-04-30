<?php

/*
don't need if we don't need to send JSON
$_POST = json_decode(file_get_contents('php://input'), true);
 */

 $_POST = json_decode(file_get_contents('php://input'), true);
echo var_dump(?_POST);