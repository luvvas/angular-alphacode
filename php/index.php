<?php
    require_once('./controllers/contactsController.php');

    $action = !empty($_GET['a']) ? $_GET['a'] : 'createContact';

    $controller = new contactsController();
    $controller->{$action}();
?>