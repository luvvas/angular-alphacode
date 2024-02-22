<?php
    define('HOST', 'localhost');
    define('DATABASENAME', 'alphacode');
    define('USER', 'root');
    define('PASSWORD', '');
      
    class Connect {
        protected $connection;

        function __construct() {
            $this->connectDatabase(); 
        }

        private function connectDatabase() {
            try {
                $this->connection = new PDO('mysql:host='.HOST.';dbname='.DATABASENAME, USER, PASSWORD);
            } catch(PDOException $exception){
                echo "Erro na conexão com o banco de dados: " . $exception->getMessage();
                die();
            }
        }

    } 
?>