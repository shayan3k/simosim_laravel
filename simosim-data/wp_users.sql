-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2020 at 06:07 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gigfa_25149405_simsim`
--

-- --------------------------------------------------------

--
-- Table structure for table `wp_users`
--

CREATE TABLE `wp_users` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `user_login` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_pass` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_nicename` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT 0,
  `display_name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_users`
--

INSERT INTO `wp_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `display_name`) VALUES
(1, 'admin', '$P$BXA3kM.CJIv.55OpSJpSiNg1fsxNHm1', 'admin', 'shayan3k@gmail.com', '', '2020-01-27 09:32:09', '', 0, 'admin'),
(35, '09127170126', '$P$BoM6epd/xq3XcTNEKRxzkhAHEZUJoA0', '09127170126', 'shayan@gmail.com', 'http://09127170126', '2020-02-20 10:08:15', '', 0, 'شایان'),
(36, '09121401579', '$P$BRVUfEniwubDjzJC38z3KoROrYHcNl1', '09121401579', 'mehrdad@gmail.com', 'http://09121401579', '2020-02-21 15:08:02', '', 0, 'مهرداد'),
(37, '09123835231', '$P$B0UWJzqygY8T6IrJ9MWO7/GDYWQo0f.', '09123835231', 'vahid@email.com', 'http://09123835231', '2020-02-22 08:45:55', '', 0, 'سشیس'),
(38, '09129999999', '$P$BB77Q6Tq1uqPdaMJIzALINbD89g2gE1', '09129999999', 'dadada@gmail.com', 'http://09129999999', '2020-02-22 08:59:20', '', 0, 'علی'),
(39, '09128888888', '$P$By50IivnytB11F8zgFi7y73BLzMpgG0', '09128888888', 'sdad@gmail.com', 'http://09128888888', '2020-02-22 09:01:36', '', 0, 'ada'),
(40, '09121111111', '$P$BfTCOZ56d6nF4ZXdv69Pb3F00Wypgo0', '09121111111', 'uojsbf@gmail.com', 'http://09121111111', '2020-02-22 10:14:40', '', 0, 'علی ست'),
(41, '09127777777', '$P$B3.CfeVKtW0fTxaoU0SztovP/lBoRm/', '09127777777', 'sdhsf@gmail.com', 'http://09127777777', '2020-02-22 12:51:19', '', 0, 'علی عسزد');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wp_users`
--
ALTER TABLE `wp_users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_login_key` (`user_login`),
  ADD KEY `user_nicename` (`user_nicename`),
  ADD KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wp_users`
--
ALTER TABLE `wp_users`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
