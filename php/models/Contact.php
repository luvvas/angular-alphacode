<?php
    require_once('./configuration/connect.php');
    
    class ContactModel extends Connect {
        private $table;

        function __construct() {
            parent::__construct();
            $this->table="contacts";
        }

        function getAll() {
            $sqlSelect = $this->connection->query("SELECT * FROM $this->table");
            $resultQuery = $sqlSelect->fetchAll();
            return $resultQuery;
        }

        function createContact ($data) {
            try {
                $sqlCreate = "INSERT INTO $this->table (c_name,c_email,c_birthday,c_profession,c_telephone,c_cellphone) 
                              VALUES (:name, :email, :birthday, :profession, :telephone, :cellphone)";
                $resultQuery = $this->connection->prepare($sqlCreate);
                $resultQuery->execute([
                    'name'=>$data['name'],
                    'email'=>$data['email'],
                    'birthday'=>$data['birthday'],
                    'profession'=>$data['profession'],
                    'telephone'=>$data['telephone'],
                    'cellphone'=>$data['cellphone'],
                ]);

                return $this->verifyReturn($resultQuery);
            } catch (PDOException $exception) {
                die('Error: ' . $exception->getMessage());
            }
        }

        public function verifyReturn($result) {
            if($result == 1) {
                return true;
            }
            return false;
        }
    }

?>