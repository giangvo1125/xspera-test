-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: xspera
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `name` text NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'f878aa6d-699c-48fc-a003-8da95172d7cb','brand 1','this is brand 1'),(2,'83eac58f-a550-4657-a216-5a491e17f9f7','brand 2','this is brand 2'),(3,'28ee913b-360c-471a-a164-33ad3fdd0364','brand 3','this is brand 3'),(4,'586c312b-518b-4b00-9efb-126423a79e43','test',NULL);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text,
  `price` float NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `rating` float DEFAULT '0',
  `status` enum('In Stock','Out of Stock','Archived') NOT NULL DEFAULT 'In Stock',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_uuid_uindex` (`uuid`),
  KEY `products___fk_brands` (`brand_id`),
  CONSTRAINT `products___fk_brands` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'4ffc64fa-b23e-47f8-9a89-9ded688467ca',1,'product 1',NULL,10000,'red',0,'In Stock','2019-10-01 13:45:26'),(2,'2c952950-5957-4c3b-85b1-4d0b91d539d8',2,'product 2',NULL,20000,NULL,0,'In Stock','2019-10-01 13:45:26'),(3,'a6fed597-a469-42cb-af01-a5c394c58b2f',3,'product 3',NULL,30000,NULL,0,'In Stock','2019-10-01 13:45:26'),(4,'fabd4ba0-4dc2-4beb-839d-0adf3e0f72b4',3,'product 4',NULL,40000,NULL,0,'In Stock','2019-10-01 13:45:26'),(5,'1ef97e3a-671e-48f9-bbdc-e28bf38a954b',2,'product 5',NULL,20000,NULL,0,'In Stock','2019-10-01 13:45:26'),(6,'9771833c-9f9f-497d-931f-16971f998f29',1,'product 6',NULL,15000,NULL,0,'In Stock','2019-10-01 13:45:26'),(7,'86ef465e-66ef-4532-944d-ba9644feb62b',1,'product 7',NULL,17000,NULL,0,'In Stock','2019-10-01 13:45:26'),(8,'c684c829-df1b-4ee4-8c7c-a6977d32978a',1,'product 8',NULL,12500,NULL,0,'In Stock','2019-10-01 13:45:26'),(9,'8f97e2a7-5956-4da5-a891-541bfe9ac2d6',3,'product 9',NULL,70000,NULL,0,'In Stock','2019-10-01 13:45:26'),(10,'d75fe804-3879-4605-a36b-53a43360ddf8',2,'product 10',NULL,100000,NULL,0,'In Stock','2019-10-01 13:45:26'),(11,'40b2fe84-a483-4d0d-8cde-2bcafff65d01',3,'product 11',NULL,12000,NULL,0,'In Stock','2019-10-01 13:45:26'),(12,'06a3dc8a-2547-4a5e-8607-59ffc6de7066',2,'product 12',NULL,17000,NULL,0,'In Stock','2019-10-01 13:45:26'),(13,'a85c4759-500d-4e6e-9bef-2b78ee8ee0e7',2,'product 13',NULL,78000,NULL,6,'In Stock','2019-10-01 13:45:26'),(14,'60419574-20c8-4647-81e2-46aa6e6dc8d5',2,'product ne',NULL,70000,NULL,0,'In Stock','2019-10-03 09:08:41'),(15,'8e5c4c0b-4de5-465d-89e7-b9ec937c4410',2,'product ne 1',NULL,70000,NULL,0,'In Stock','2019-10-03 09:16:24'),(16,'c064df07-9efc-489d-a7a3-843e7329eded',3,'product ne 1',NULL,70000,NULL,0,'In Stock','2019-10-03 09:16:29');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `rating` float DEFAULT NULL,
  `comment` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'40e411bd-cf47-4aa8-954c-1b3fe5e503c8',13,1,7,'this is comment'),(2,'594fc2c4-0250-4292-986b-3a1c6b7ac584',13,2,6,'12'),(3,'df4faca8-81ca-4844-b032-750cc3017ac4',13,2,7,'this is test comment'),(4,'d27683bc-8bef-4f47-8a77-93f5d4dc0e11',13,7,1,'it is good'),(5,'1eb30ec9-b29d-4c17-91ad-63e58b14c1be',13,7,6,'asdasjdajdoisad'),(6,'e8e01bcd-943f-4a9f-b445-d70e20a72ac8',13,7,6,'last comment'),(7,'20c5afb1-0549-4f5f-8d72-5f48d2e86693',13,7,6,'asdiasjdoijasdi'),(8,'df5050ca-d77c-45a5-94eb-6b23155f90c5',13,7,7,'asdasdsadsadsd'),(9,'fb790228-dfc2-4dbf-9019-02df4ab360ff',12,7,6,'asdiasjdioasjd'),(10,'8b476e44-5269-4739-a184-03c2463773eb',12,10,5,'hoa lalala'),(11,'5dcfa7d8-e0f0-49cc-b9b6-475f22a8c5cc',13,7,7,'hola hola'),(12,'380f03df-b72f-4a03-8b00-c2b548510023',13,11,1,'product ngon'),(13,'da46e819-e87f-44aa-a00a-84fa106a0ddf',13,2,7,'this is test comment'),(14,'f7772dc2-bb10-4adc-96d8-f9b438e87c37',13,2,7,'this is test comment'),(15,'b3368ea8-7805-4806-902d-2588852925d0',13,2,7,'this is test comment hahaha');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` VALUES (1,'9155431f-fcb8-41ee-81d1-34c91250c74a','Customer'),(2,'aec9b414-00d1-49eb-81de-02b8656e1909','Merchant');
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `type_id` int(11) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `DOB` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_username_uindex` (`username`),
  UNIQUE KEY `user_email_uindex` (`email`),
  KEY `users_user_type_id_fk` (`type_id`),
  CONSTRAINT `users_user_type_id_fk` FOREIGN KEY (`type_id`) REFERENCES `cms`.`user_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ccf9027b-1a86-4f96-94a6-429148afa618',2,'kakalot','kakalot@gmail.com','25/11/1994'),(2,'ab694b7d-4b59-4caa-baf6-0230103a214a',1,'arshavin','arshavin@gmail.com','25/11/1994'),(3,'b524e8af-b3da-467b-8500-3748ed1eea5c',1,'hoaithuong@gmail.com','hoaithuong@gmail.com',NULL),(4,'16f4c4fb-bc99-4164-a6a8-dc2ff0c8515d',1,'hoaithuong1@gmail.com','hoaithuong1@gmail.com',NULL),(5,'c5a83a92-3a6f-446f-9a3f-407ef4c9932b',1,'hoaithuong2@gmail.com','hoaithuong2@gmail.com',NULL),(6,'2264da4c-e9ab-4407-bf2e-967f79907fdb',1,'hoaithuong3@gmail.com','hoaithuong3@gmail.com',NULL),(7,'8f62399f-25e6-49c4-9b89-a583fdc3be03',1,'giangvo@aaa.co','giangvo@aaa.co',NULL),(10,'6cf59222-fbe3-4c77-9c22-efce3095abd0',1,'giangvo@bbb.co','giangvo@bbb.co',NULL),(11,'a54de99e-ae7d-4d97-806c-1cf37e54ddba',1,'hihi@gmail.com','hihi@gmail.com',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'xspera'
--

--
-- Dumping routines for database 'xspera'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-03 16:19:29
