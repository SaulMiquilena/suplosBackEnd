-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 02, 2021 at 01:47 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `intelcost_bienes`
--

-- --------------------------------------------------------

--
-- Table structure for table `bienes`
--

DROP TABLE IF EXISTS `bienes`;
CREATE TABLE IF NOT EXISTS `bienes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ciudad_id` int(11) NOT NULL COMMENT 'ID de la ciudad a la que pertenece el bien',
  `tipo_bien_id` int(11) NOT NULL COMMENT 'ID del tipo de bien',
  `direccion` text NOT NULL,
  `codigo_postal` text NOT NULL,
  `telefono` text NOT NULL,
  `precio` text NOT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `idx_ciudad_id` (`ciudad_id`),
  KEY `idx_tipo_bien_id` (`tipo_bien_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bienes`
--

INSERT INTO `bienes` (`id`, `ciudad_id`, `tipo_bien_id`, `direccion`, `codigo_postal`, `telefono`, `precio`, `habilitado`) VALUES
(1, 1, 1, 'Ap #549-7395 Ut Rd.', '85328', '334-052-0954', '$30,746', 1),
(2, 2, 2, 'P.O. Box 657, 9831 Cursus St.', '04436', '488-441-5521', '$71,045', 1),
(3, 3, 2, 'Ap #325-2507 Quisque Av.', '89804', '623-807-2869', '$36,087', 1),
(4, 3, 2, '347-866 Laoreet Road', '94526-134', '997-640-8188', '$16,048', 1),
(5, 4, 1, '4732 Ipsum. Rd.', '162925', '802-414-8872', '$45,912', 1),
(6, 2, 2, '672-9576 Consectetuer Road', '210020', '355-601-5749', '$64,370', 1),
(7, 2, 1, '549-5766 Sodales St.', '16794', '557-228-6918', '$2,846', 1),
(8, 5, 3, 'P.O. Box 847, 2589 In Av.', '70689', '390-713-8687', '$60,951', 1),
(9, 2, 2, '175-4344 Nec, Ave', 'P0C 0G3', '578-170-6179', '$58,902', 1),
(10, 1, 1, 'P.O. Box 497, 8679 Turpis. St.', '7029', '870-559-3430', '$17,759', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
CREATE TABLE IF NOT EXISTS `ciudades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL COMMENT 'Nombre de la Ciudad donde se encuentra ubicado el Bien.',
  `habilitado` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1 si el elemento sen encuentra habilitado.',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ciudades`
--

INSERT INTO `ciudades` (`id`, `nombre`, `habilitado`) VALUES
(1, 'New York', 1),
(2, 'Orlando', 1),
(3, 'Los Angeles', 1),
(4, 'Houston', 1),
(5, 'Washington', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tipos_bien`
--

DROP TABLE IF EXISTS `tipos_bien`;
CREATE TABLE IF NOT EXISTS `tipos_bien` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL COMMENT 'Nombre del Tipo de Bien (Casa, Apartamento, entre otros)',
  `habilitado` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1 si el elemento sen encuentra habilitado.',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tipos_bien`
--

INSERT INTO `tipos_bien` (`id`, `nombre`, `habilitado`) VALUES
(1, 'Casa', 1),
(2, 'Casa de Campo', 1),
(3, 'Apartamento', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
