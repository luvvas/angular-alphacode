<?php
    header('Content-Type: application/json; charset=utf-8');

    require_once('./models/Contact.php');
    class contactsController {
        private $model;
        function __construct() {
            $this->model = new ContactModel();
        }

        public function getAll() {
            $resultData = $this->model->getAll();
            print_r($resultData);
        }

        public function createContact() {
            if (isset($_POST['name'], $_POST['birthday'], $_POST['email'], $_POST['profession'], $_POST['telephone'], $_POST['cellphone'])) {
                $data = [
                    'name' => $_POST['name'],
                    'birthday' => $_POST['birthday'],
                    'email' => $_POST['email'],
                    'profession' => $_POST['profession'],
                    'telephone' => $_POST['telephone'],
                    'cellphone' => $_POST['cellphone'],
                ];
                print_r($data);

                $this->model->createContact($data);
            } else {
                echo "Error: Required POST variables not set.";
            }
        }
    }
?>