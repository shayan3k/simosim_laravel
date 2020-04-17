-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2020 at 02:59 PM
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
-- Database: `wordpress_simsim`
--

-- --------------------------------------------------------

--
-- Table structure for table `wp_commentmeta`
--

CREATE TABLE `wp_commentmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `comment_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wp_comments`
--

CREATE TABLE `wp_comments` (
  `comment_ID` bigint(20) UNSIGNED NOT NULL,
  `comment_post_ID` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `comment_author` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_author_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_author_url` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_author_IP` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_karma` int(11) NOT NULL DEFAULT 0,
  `comment_approved` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `comment_agent` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_parent` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_comments`
--

INSERT INTO `wp_comments` (`comment_ID`, `comment_post_ID`, `comment_author`, `comment_author_email`, `comment_author_url`, `comment_author_IP`, `comment_date`, `comment_date_gmt`, `comment_content`, `comment_karma`, `comment_approved`, `comment_agent`, `comment_type`, `comment_parent`, `user_id`) VALUES
(1, 1, 'A WordPress Commenter', 'wapuu@wordpress.example', 'https://wordpress.org/', '', '2020-01-27 09:32:10', '2020-01-27 09:32:10', 'Hi, this is a comment.\nTo get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.\nCommenter avatars come from <a href=\"https://gravatar.com\">Gravatar</a>.', 0, 'post-trashed', '', '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_links`
--

CREATE TABLE `wp_links` (
  `link_id` bigint(20) UNSIGNED NOT NULL,
  `link_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_target` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_visible` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Y',
  `link_owner` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `link_rating` int(11) NOT NULL DEFAULT 0,
  `link_updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `link_rel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `link_notes` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `link_rss` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wp_options`
--

CREATE TABLE `wp_options` (
  `option_id` bigint(20) UNSIGNED NOT NULL,
  `option_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `option_value` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `autoload` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'yes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_options`
--

INSERT INTO `wp_options` (`option_id`, `option_name`, `option_value`, `autoload`) VALUES
(1, 'siteurl', 'http://localhost/wordpress', 'yes'),
(2, 'home', 'http://localhost/wordpress', 'yes'),
(3, 'blogname', 'SIMSIM', 'yes'),
(4, 'blogdescription', 'Just another WordPress site', 'yes'),
(5, 'users_can_register', '0', 'yes'),
(6, 'admin_email', 'shayan3k@gmail.com', 'yes'),
(7, 'start_of_week', '1', 'yes'),
(8, 'use_balanceTags', '0', 'yes'),
(9, 'use_smilies', '1', 'yes'),
(10, 'require_name_email', '1', 'yes'),
(11, 'comments_notify', '1', 'yes'),
(12, 'posts_per_rss', '10', 'yes'),
(13, 'rss_use_excerpt', '0', 'yes'),
(14, 'mailserver_url', 'mail.example.com', 'yes'),
(15, 'mailserver_login', 'login@example.com', 'yes'),
(16, 'mailserver_pass', 'password', 'yes'),
(17, 'mailserver_port', '110', 'yes'),
(18, 'default_category', '1', 'yes'),
(19, 'default_comment_status', 'open', 'yes'),
(20, 'default_ping_status', 'open', 'yes'),
(21, 'default_pingback_flag', '0', 'yes'),
(22, 'posts_per_page', '10', 'yes'),
(23, 'date_format', 'F j, Y', 'yes'),
(24, 'time_format', 'g:i a', 'yes'),
(25, 'links_updated_date_format', 'F j, Y g:i a', 'yes'),
(26, 'comment_moderation', '0', 'yes'),
(27, 'moderation_notify', '1', 'yes'),
(28, 'permalink_structure', '/%postname%/', 'yes'),
(29, 'rewrite_rules', 'a:120:{s:11:\"^wp-json/?$\";s:22:\"index.php?rest_route=/\";s:14:\"^wp-json/(.*)?\";s:33:\"index.php?rest_route=/$matches[1]\";s:21:\"^index.php/wp-json/?$\";s:22:\"index.php?rest_route=/\";s:24:\"^index.php/wp-json/(.*)?\";s:33:\"index.php?rest_route=/$matches[1]\";s:47:\"category/(.+?)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:52:\"index.php?category_name=$matches[1]&feed=$matches[2]\";s:42:\"category/(.+?)/(feed|rdf|rss|rss2|atom)/?$\";s:52:\"index.php?category_name=$matches[1]&feed=$matches[2]\";s:23:\"category/(.+?)/embed/?$\";s:46:\"index.php?category_name=$matches[1]&embed=true\";s:35:\"category/(.+?)/page/?([0-9]{1,})/?$\";s:53:\"index.php?category_name=$matches[1]&paged=$matches[2]\";s:17:\"category/(.+?)/?$\";s:35:\"index.php?category_name=$matches[1]\";s:44:\"tag/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?tag=$matches[1]&feed=$matches[2]\";s:39:\"tag/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?tag=$matches[1]&feed=$matches[2]\";s:20:\"tag/([^/]+)/embed/?$\";s:36:\"index.php?tag=$matches[1]&embed=true\";s:32:\"tag/([^/]+)/page/?([0-9]{1,})/?$\";s:43:\"index.php?tag=$matches[1]&paged=$matches[2]\";s:14:\"tag/([^/]+)/?$\";s:25:\"index.php?tag=$matches[1]\";s:45:\"type/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?post_format=$matches[1]&feed=$matches[2]\";s:40:\"type/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?post_format=$matches[1]&feed=$matches[2]\";s:21:\"type/([^/]+)/embed/?$\";s:44:\"index.php?post_format=$matches[1]&embed=true\";s:33:\"type/([^/]+)/page/?([0-9]{1,})/?$\";s:51:\"index.php?post_format=$matches[1]&paged=$matches[2]\";s:15:\"type/([^/]+)/?$\";s:33:\"index.php?post_format=$matches[1]\";s:41:\"advertisement/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:51:\"advertisement/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:71:\"advertisement/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:66:\"advertisement/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:66:\"advertisement/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:47:\"advertisement/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:30:\"advertisement/([^/]+)/embed/?$\";s:46:\"index.php?advertisement=$matches[1]&embed=true\";s:34:\"advertisement/([^/]+)/trackback/?$\";s:40:\"index.php?advertisement=$matches[1]&tb=1\";s:42:\"advertisement/([^/]+)/page/?([0-9]{1,})/?$\";s:53:\"index.php?advertisement=$matches[1]&paged=$matches[2]\";s:49:\"advertisement/([^/]+)/comment-page-([0-9]{1,})/?$\";s:53:\"index.php?advertisement=$matches[1]&cpage=$matches[2]\";s:38:\"advertisement/([^/]+)(?:/([0-9]+))?/?$\";s:52:\"index.php?advertisement=$matches[1]&page=$matches[2]\";s:30:\"advertisement/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:40:\"advertisement/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:60:\"advertisement/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:55:\"advertisement/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:55:\"advertisement/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:36:\"advertisement/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:38:\"advertiser/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:48:\"advertiser/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:68:\"advertiser/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:63:\"advertiser/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:63:\"advertiser/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:44:\"advertiser/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:27:\"advertiser/([^/]+)/embed/?$\";s:43:\"index.php?advertiser=$matches[1]&embed=true\";s:31:\"advertiser/([^/]+)/trackback/?$\";s:37:\"index.php?advertiser=$matches[1]&tb=1\";s:39:\"advertiser/([^/]+)/page/?([0-9]{1,})/?$\";s:50:\"index.php?advertiser=$matches[1]&paged=$matches[2]\";s:46:\"advertiser/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?advertiser=$matches[1]&cpage=$matches[2]\";s:35:\"advertiser/([^/]+)(?:/([0-9]+))?/?$\";s:49:\"index.php?advertiser=$matches[1]&page=$matches[2]\";s:27:\"advertiser/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:37:\"advertiser/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:57:\"advertiser/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\"advertiser/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\"advertiser/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:33:\"advertiser/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:48:\".*wp-(atom|rdf|rss|rss2|feed|commentsrss2)\\.php$\";s:18:\"index.php?feed=old\";s:20:\".*wp-app\\.php(/.*)?$\";s:19:\"index.php?error=403\";s:18:\".*wp-register.php$\";s:23:\"index.php?register=true\";s:32:\"feed/(feed|rdf|rss|rss2|atom)/?$\";s:27:\"index.php?&feed=$matches[1]\";s:27:\"(feed|rdf|rss|rss2|atom)/?$\";s:27:\"index.php?&feed=$matches[1]\";s:8:\"embed/?$\";s:21:\"index.php?&embed=true\";s:20:\"page/?([0-9]{1,})/?$\";s:28:\"index.php?&paged=$matches[1]\";s:41:\"comments/feed/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?&feed=$matches[1]&withcomments=1\";s:36:\"comments/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?&feed=$matches[1]&withcomments=1\";s:17:\"comments/embed/?$\";s:21:\"index.php?&embed=true\";s:44:\"search/(.+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:40:\"index.php?s=$matches[1]&feed=$matches[2]\";s:39:\"search/(.+)/(feed|rdf|rss|rss2|atom)/?$\";s:40:\"index.php?s=$matches[1]&feed=$matches[2]\";s:20:\"search/(.+)/embed/?$\";s:34:\"index.php?s=$matches[1]&embed=true\";s:32:\"search/(.+)/page/?([0-9]{1,})/?$\";s:41:\"index.php?s=$matches[1]&paged=$matches[2]\";s:14:\"search/(.+)/?$\";s:23:\"index.php?s=$matches[1]\";s:47:\"author/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?author_name=$matches[1]&feed=$matches[2]\";s:42:\"author/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?author_name=$matches[1]&feed=$matches[2]\";s:23:\"author/([^/]+)/embed/?$\";s:44:\"index.php?author_name=$matches[1]&embed=true\";s:35:\"author/([^/]+)/page/?([0-9]{1,})/?$\";s:51:\"index.php?author_name=$matches[1]&paged=$matches[2]\";s:17:\"author/([^/]+)/?$\";s:33:\"index.php?author_name=$matches[1]\";s:69:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:80:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&feed=$matches[4]\";s:64:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/(feed|rdf|rss|rss2|atom)/?$\";s:80:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&feed=$matches[4]\";s:45:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/embed/?$\";s:74:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&embed=true\";s:57:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/page/?([0-9]{1,})/?$\";s:81:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&paged=$matches[4]\";s:39:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/?$\";s:63:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]\";s:56:\"([0-9]{4})/([0-9]{1,2})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:64:\"index.php?year=$matches[1]&monthnum=$matches[2]&feed=$matches[3]\";s:51:\"([0-9]{4})/([0-9]{1,2})/(feed|rdf|rss|rss2|atom)/?$\";s:64:\"index.php?year=$matches[1]&monthnum=$matches[2]&feed=$matches[3]\";s:32:\"([0-9]{4})/([0-9]{1,2})/embed/?$\";s:58:\"index.php?year=$matches[1]&monthnum=$matches[2]&embed=true\";s:44:\"([0-9]{4})/([0-9]{1,2})/page/?([0-9]{1,})/?$\";s:65:\"index.php?year=$matches[1]&monthnum=$matches[2]&paged=$matches[3]\";s:26:\"([0-9]{4})/([0-9]{1,2})/?$\";s:47:\"index.php?year=$matches[1]&monthnum=$matches[2]\";s:43:\"([0-9]{4})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?year=$matches[1]&feed=$matches[2]\";s:38:\"([0-9]{4})/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?year=$matches[1]&feed=$matches[2]\";s:19:\"([0-9]{4})/embed/?$\";s:37:\"index.php?year=$matches[1]&embed=true\";s:31:\"([0-9]{4})/page/?([0-9]{1,})/?$\";s:44:\"index.php?year=$matches[1]&paged=$matches[2]\";s:13:\"([0-9]{4})/?$\";s:26:\"index.php?year=$matches[1]\";s:27:\".?.+?/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:37:\".?.+?/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:57:\".?.+?/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\".?.+?/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\".?.+?/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:33:\".?.+?/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:16:\"(.?.+?)/embed/?$\";s:41:\"index.php?pagename=$matches[1]&embed=true\";s:20:\"(.?.+?)/trackback/?$\";s:35:\"index.php?pagename=$matches[1]&tb=1\";s:40:\"(.?.+?)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:47:\"index.php?pagename=$matches[1]&feed=$matches[2]\";s:35:\"(.?.+?)/(feed|rdf|rss|rss2|atom)/?$\";s:47:\"index.php?pagename=$matches[1]&feed=$matches[2]\";s:28:\"(.?.+?)/page/?([0-9]{1,})/?$\";s:48:\"index.php?pagename=$matches[1]&paged=$matches[2]\";s:35:\"(.?.+?)/comment-page-([0-9]{1,})/?$\";s:48:\"index.php?pagename=$matches[1]&cpage=$matches[2]\";s:24:\"(.?.+?)(?:/([0-9]+))?/?$\";s:47:\"index.php?pagename=$matches[1]&page=$matches[2]\";s:27:\"[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:37:\"[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:57:\"[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\"[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\"[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:33:\"[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:16:\"([^/]+)/embed/?$\";s:37:\"index.php?name=$matches[1]&embed=true\";s:20:\"([^/]+)/trackback/?$\";s:31:\"index.php?name=$matches[1]&tb=1\";s:40:\"([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?name=$matches[1]&feed=$matches[2]\";s:35:\"([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?name=$matches[1]&feed=$matches[2]\";s:28:\"([^/]+)/page/?([0-9]{1,})/?$\";s:44:\"index.php?name=$matches[1]&paged=$matches[2]\";s:35:\"([^/]+)/comment-page-([0-9]{1,})/?$\";s:44:\"index.php?name=$matches[1]&cpage=$matches[2]\";s:24:\"([^/]+)(?:/([0-9]+))?/?$\";s:43:\"index.php?name=$matches[1]&page=$matches[2]\";s:16:\"[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:26:\"[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:46:\"[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:41:\"[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:41:\"[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:22:\"[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";}', 'yes'),
(30, 'hack_file', '0', 'yes'),
(31, 'blog_charset', 'UTF-8', 'yes'),
(32, 'moderation_keys', '', 'no'),
(33, 'active_plugins', 'a:7:{i:0;s:41:\"acf-to-rest-api/class-acf-to-rest-api.php\";i:1;s:30:\"advanced-custom-fields/acf.php\";i:2;s:33:\"classic-editor/classic-editor.php\";i:3;s:43:\"custom-post-type-ui/custom-post-type-ui.php\";i:4;s:47:\"jwt-authentication-for-wp-rest-api/jwt-auth.php\";i:5;s:37:\"wp-mail-rest-api/wp-mail-rest-api.php\";i:6;s:49:\"wp-rest-api-controller/wp-rest-api-controller.php\";}', 'yes'),
(34, 'category_base', '', 'yes'),
(35, 'ping_sites', 'http://rpc.pingomatic.com/', 'yes'),
(36, 'comment_max_links', '2', 'yes'),
(37, 'gmt_offset', '0', 'yes'),
(38, 'default_email_category', '1', 'yes'),
(39, 'recently_edited', '', 'no'),
(40, 'template', 'simsim', 'yes'),
(41, 'stylesheet', 'simsim', 'yes'),
(42, 'comment_whitelist', '1', 'yes'),
(43, 'blacklist_keys', '', 'no'),
(44, 'comment_registration', '0', 'yes'),
(45, 'html_type', 'text/html', 'yes'),
(46, 'use_trackback', '0', 'yes'),
(47, 'default_role', 'subscriber', 'yes'),
(48, 'db_version', '45805', 'yes'),
(49, 'uploads_use_yearmonth_folders', '1', 'yes'),
(50, 'upload_path', '', 'yes'),
(51, 'blog_public', '0', 'yes'),
(52, 'default_link_category', '2', 'yes'),
(53, 'show_on_front', 'posts', 'yes'),
(54, 'tag_base', '', 'yes'),
(55, 'show_avatars', '1', 'yes'),
(56, 'avatar_rating', 'G', 'yes'),
(57, 'upload_url_path', '', 'yes'),
(58, 'thumbnail_size_w', '150', 'yes'),
(59, 'thumbnail_size_h', '150', 'yes'),
(60, 'thumbnail_crop', '1', 'yes'),
(61, 'medium_size_w', '300', 'yes'),
(62, 'medium_size_h', '300', 'yes'),
(63, 'avatar_default', 'mystery', 'yes'),
(64, 'large_size_w', '1024', 'yes'),
(65, 'large_size_h', '1024', 'yes'),
(66, 'image_default_link_type', 'none', 'yes'),
(67, 'image_default_size', '', 'yes'),
(68, 'image_default_align', '', 'yes'),
(69, 'close_comments_for_old_posts', '0', 'yes'),
(70, 'close_comments_days_old', '14', 'yes'),
(71, 'thread_comments', '1', 'yes'),
(72, 'thread_comments_depth', '5', 'yes'),
(73, 'page_comments', '0', 'yes'),
(74, 'comments_per_page', '50', 'yes'),
(75, 'default_comments_page', 'newest', 'yes'),
(76, 'comment_order', 'asc', 'yes'),
(77, 'sticky_posts', 'a:0:{}', 'yes'),
(78, 'widget_categories', 'a:2:{i:2;a:4:{s:5:\"title\";s:0:\"\";s:5:\"count\";i:0;s:12:\"hierarchical\";i:0;s:8:\"dropdown\";i:0;}s:12:\"_multiwidget\";i:1;}', 'yes'),
(79, 'widget_text', 'a:0:{}', 'yes'),
(80, 'widget_rss', 'a:0:{}', 'yes'),
(81, 'uninstall_plugins', 'a:2:{s:33:\"classic-editor/classic-editor.php\";a:2:{i:0;s:14:\"Classic_Editor\";i:1;s:9:\"uninstall\";}s:37:\"wp-mail-rest-api/wp-mail-rest-api.php\";s:35:\"wp_mail_rest_api_remove_this_plugin\";}', 'no'),
(82, 'timezone_string', '', 'yes'),
(83, 'page_for_posts', '0', 'yes'),
(84, 'page_on_front', '0', 'yes'),
(85, 'default_post_format', '0', 'yes'),
(86, 'link_manager_enabled', '0', 'yes'),
(87, 'finished_splitting_shared_terms', '1', 'yes'),
(88, 'site_icon', '0', 'yes'),
(89, 'medium_large_size_w', '768', 'yes'),
(90, 'medium_large_size_h', '0', 'yes'),
(91, 'wp_page_for_privacy_policy', '3', 'yes'),
(92, 'show_comments_cookies_opt_in', '1', 'yes'),
(93, 'admin_email_lifespan', '1595669521', 'yes'),
(94, 'initial_db_version', '45805', 'yes'),
(95, 'wp_user_roles', 'a:5:{s:13:\"administrator\";a:2:{s:4:\"name\";s:13:\"Administrator\";s:12:\"capabilities\";a:61:{s:13:\"switch_themes\";b:1;s:11:\"edit_themes\";b:1;s:16:\"activate_plugins\";b:1;s:12:\"edit_plugins\";b:1;s:10:\"edit_users\";b:1;s:10:\"edit_files\";b:1;s:14:\"manage_options\";b:1;s:17:\"moderate_comments\";b:1;s:17:\"manage_categories\";b:1;s:12:\"manage_links\";b:1;s:12:\"upload_files\";b:1;s:6:\"import\";b:1;s:15:\"unfiltered_html\";b:1;s:10:\"edit_posts\";b:1;s:17:\"edit_others_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:10:\"edit_pages\";b:1;s:4:\"read\";b:1;s:8:\"level_10\";b:1;s:7:\"level_9\";b:1;s:7:\"level_8\";b:1;s:7:\"level_7\";b:1;s:7:\"level_6\";b:1;s:7:\"level_5\";b:1;s:7:\"level_4\";b:1;s:7:\"level_3\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:17:\"edit_others_pages\";b:1;s:20:\"edit_published_pages\";b:1;s:13:\"publish_pages\";b:1;s:12:\"delete_pages\";b:1;s:19:\"delete_others_pages\";b:1;s:22:\"delete_published_pages\";b:1;s:12:\"delete_posts\";b:1;s:19:\"delete_others_posts\";b:1;s:22:\"delete_published_posts\";b:1;s:20:\"delete_private_posts\";b:1;s:18:\"edit_private_posts\";b:1;s:18:\"read_private_posts\";b:1;s:20:\"delete_private_pages\";b:1;s:18:\"edit_private_pages\";b:1;s:18:\"read_private_pages\";b:1;s:12:\"delete_users\";b:1;s:12:\"create_users\";b:1;s:17:\"unfiltered_upload\";b:1;s:14:\"edit_dashboard\";b:1;s:14:\"update_plugins\";b:1;s:14:\"delete_plugins\";b:1;s:15:\"install_plugins\";b:1;s:13:\"update_themes\";b:1;s:14:\"install_themes\";b:1;s:11:\"update_core\";b:1;s:10:\"list_users\";b:1;s:12:\"remove_users\";b:1;s:13:\"promote_users\";b:1;s:18:\"edit_theme_options\";b:1;s:13:\"delete_themes\";b:1;s:6:\"export\";b:1;}}s:6:\"editor\";a:2:{s:4:\"name\";s:6:\"Editor\";s:12:\"capabilities\";a:34:{s:17:\"moderate_comments\";b:1;s:17:\"manage_categories\";b:1;s:12:\"manage_links\";b:1;s:12:\"upload_files\";b:1;s:15:\"unfiltered_html\";b:1;s:10:\"edit_posts\";b:1;s:17:\"edit_others_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:10:\"edit_pages\";b:1;s:4:\"read\";b:1;s:7:\"level_7\";b:1;s:7:\"level_6\";b:1;s:7:\"level_5\";b:1;s:7:\"level_4\";b:1;s:7:\"level_3\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:17:\"edit_others_pages\";b:1;s:20:\"edit_published_pages\";b:1;s:13:\"publish_pages\";b:1;s:12:\"delete_pages\";b:1;s:19:\"delete_others_pages\";b:1;s:22:\"delete_published_pages\";b:1;s:12:\"delete_posts\";b:1;s:19:\"delete_others_posts\";b:1;s:22:\"delete_published_posts\";b:1;s:20:\"delete_private_posts\";b:1;s:18:\"edit_private_posts\";b:1;s:18:\"read_private_posts\";b:1;s:20:\"delete_private_pages\";b:1;s:18:\"edit_private_pages\";b:1;s:18:\"read_private_pages\";b:1;}}s:6:\"author\";a:2:{s:4:\"name\";s:6:\"Author\";s:12:\"capabilities\";a:10:{s:12:\"upload_files\";b:1;s:10:\"edit_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:4:\"read\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:12:\"delete_posts\";b:1;s:22:\"delete_published_posts\";b:1;}}s:11:\"contributor\";a:2:{s:4:\"name\";s:11:\"Contributor\";s:12:\"capabilities\";a:5:{s:10:\"edit_posts\";b:1;s:4:\"read\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:12:\"delete_posts\";b:1;}}s:10:\"subscriber\";a:2:{s:4:\"name\";s:10:\"Subscriber\";s:12:\"capabilities\";a:2:{s:4:\"read\";b:1;s:7:\"level_0\";b:1;}}}', 'yes'),
(96, 'fresh_site', '0', 'yes'),
(97, 'widget_search', 'a:2:{i:2;a:1:{s:5:\"title\";s:0:\"\";}s:12:\"_multiwidget\";i:1;}', 'yes'),
(98, 'widget_recent-posts', 'a:2:{i:2;a:2:{s:5:\"title\";s:0:\"\";s:6:\"number\";i:5;}s:12:\"_multiwidget\";i:1;}', 'yes'),
(99, 'widget_recent-comments', 'a:2:{i:2;a:2:{s:5:\"title\";s:0:\"\";s:6:\"number\";i:5;}s:12:\"_multiwidget\";i:1;}', 'yes'),
(100, 'widget_archives', 'a:2:{i:2;a:3:{s:5:\"title\";s:0:\"\";s:5:\"count\";i:0;s:8:\"dropdown\";i:0;}s:12:\"_multiwidget\";i:1;}', 'yes'),
(101, 'widget_meta', 'a:2:{i:2;a:1:{s:5:\"title\";s:0:\"\";}s:12:\"_multiwidget\";i:1;}', 'yes'),
(102, 'sidebars_widgets', 'a:2:{s:19:\"wp_inactive_widgets\";a:6:{i:0;s:8:\"search-2\";i:1;s:14:\"recent-posts-2\";i:2;s:17:\"recent-comments-2\";i:3;s:10:\"archives-2\";i:4;s:12:\"categories-2\";i:5;s:6:\"meta-2\";}s:13:\"array_version\";i:3;}', 'yes'),
(103, 'cron', 'a:6:{i:1581345133;a:1:{s:34:\"wp_privacy_delete_old_export_files\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"hourly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:3600;}}}i:1581370333;a:3:{s:16:\"wp_version_check\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:17:\"wp_update_plugins\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:16:\"wp_update_themes\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1581413531;a:1:{s:32:\"recovery_mode_clean_expired_keys\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1581413553;a:2:{s:19:\"wp_scheduled_delete\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}s:25:\"delete_expired_transients\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1581413564;a:1:{s:30:\"wp_scheduled_auto_draft_delete\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}s:7:\"version\";i:2;}', 'yes'),
(104, 'widget_pages', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(105, 'widget_calendar', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(106, 'widget_media_audio', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(107, 'widget_media_image', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(108, 'widget_media_gallery', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(109, 'widget_media_video', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(110, 'widget_tag_cloud', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(111, 'widget_nav_menu', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(112, 'widget_custom_html', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(114, 'recovery_keys', 'a:0:{}', 'yes'),
(115, '_site_transient_update_core', 'O:8:\"stdClass\":4:{s:7:\"updates\";a:1:{i:0;O:8:\"stdClass\":10:{s:8:\"response\";s:6:\"latest\";s:8:\"download\";s:59:\"https://downloads.wordpress.org/release/wordpress-5.3.2.zip\";s:6:\"locale\";s:5:\"en_US\";s:8:\"packages\";O:8:\"stdClass\":5:{s:4:\"full\";s:59:\"https://downloads.wordpress.org/release/wordpress-5.3.2.zip\";s:10:\"no_content\";s:70:\"https://downloads.wordpress.org/release/wordpress-5.3.2-no-content.zip\";s:11:\"new_bundled\";s:71:\"https://downloads.wordpress.org/release/wordpress-5.3.2-new-bundled.zip\";s:7:\"partial\";b:0;s:8:\"rollback\";b:0;}s:7:\"current\";s:5:\"5.3.2\";s:7:\"version\";s:5:\"5.3.2\";s:11:\"php_version\";s:6:\"5.6.20\";s:13:\"mysql_version\";s:3:\"5.0\";s:11:\"new_bundled\";s:3:\"5.3\";s:15:\"partial_version\";s:0:\"\";}}s:12:\"last_checked\";i:1581340977;s:15:\"version_checked\";s:5:\"5.3.2\";s:12:\"translations\";a:0:{}}', 'no'),
(116, 'theme_mods_twentytwenty', 'a:2:{s:18:\"custom_css_post_id\";i:-1;s:16:\"sidebars_widgets\";a:2:{s:4:\"time\";i:1580118044;s:4:\"data\";a:3:{s:19:\"wp_inactive_widgets\";a:0:{}s:9:\"sidebar-1\";a:3:{i:0;s:8:\"search-2\";i:1;s:14:\"recent-posts-2\";i:2;s:17:\"recent-comments-2\";}s:9:\"sidebar-2\";a:3:{i:0;s:10:\"archives-2\";i:1;s:12:\"categories-2\";i:2;s:6:\"meta-2\";}}}}', 'yes'),
(121, '_site_transient_update_themes', 'O:8:\"stdClass\":4:{s:12:\"last_checked\";i:1581340980;s:7:\"checked\";a:4:{s:14:\"twentynineteen\";s:3:\"1.4\";s:15:\"twentyseventeen\";s:3:\"2.2\";s:13:\"twentysixteen\";s:3:\"2.0\";s:12:\"twentytwenty\";s:3:\"1.1\";}s:8:\"response\";a:0:{}s:12:\"translations\";a:0:{}}', 'no'),
(126, 'can_compress_scripts', '1', 'no'),
(140, 'recently_activated', 'a:0:{}', 'yes'),
(141, 'current_theme', 'simsim', 'yes'),
(142, 'theme_mods_simsim', 'a:2:{i:0;b:0;s:18:\"nav_menu_locations\";a:0:{}}', 'yes'),
(143, 'theme_switched', '', 'yes'),
(156, 'wp_rest_api_controller_one_point_four', '1', 'yes'),
(157, 'wp_rest_api_controller_post_types', 'a:7:{i:0;s:12:\"oembed_cache\";i:1;s:12:\"user_request\";i:2;s:8:\"wp_block\";i:3;s:15:\"acf-field-group\";i:4;s:9:\"acf-field\";i:5;s:13:\"advertisement\";i:6;s:10:\"advertiser\";}', 'yes'),
(158, 'wp_rest_api_controller_taxonomies', 'a:4:{i:0;s:8:\"category\";i:1;s:8:\"post_tag\";i:2;s:13:\"link_category\";i:3;s:11:\"post_format\";}', 'yes'),
(161, 'acf_version', '5.8.7', 'yes'),
(170, 'acf_to_rest_api_request_version', '3', 'yes'),
(286, 'WPLANG', '', 'yes'),
(287, 'new_admin_email', 'shayan3k@gmail.com', 'yes'),
(407, '_site_transient_timeout_browser_560d830cbc3434e5cbb88dacb7c8c626', '1581677799', 'no'),
(408, '_site_transient_browser_560d830cbc3434e5cbb88dacb7c8c626', 'a:10:{s:4:\"name\";s:6:\"Chrome\";s:7:\"version\";s:13:\"79.0.3945.130\";s:8:\"platform\";s:7:\"Windows\";s:10:\"update_url\";s:29:\"https://www.google.com/chrome\";s:7:\"img_src\";s:43:\"http://s.w.org/images/browsers/chrome.png?1\";s:11:\"img_src_ssl\";s:44:\"https://s.w.org/images/browsers/chrome.png?1\";s:15:\"current_version\";s:2:\"18\";s:7:\"upgrade\";b:0;s:8:\"insecure\";b:0;s:6:\"mobile\";b:0;}', 'no'),
(409, '_site_transient_timeout_php_check_a0c594a1902efeb727acf2a7ff080644', '1581677800', 'no'),
(410, '_site_transient_php_check_a0c594a1902efeb727acf2a7ff080644', 'a:5:{s:19:\"recommended_version\";s:3:\"7.3\";s:15:\"minimum_version\";s:6:\"5.6.20\";s:12:\"is_supported\";b:1;s:9:\"is_secure\";b:1;s:13:\"is_acceptable\";b:1;}', 'no'),
(432, '_transient_timeout_dash_v2_88ae138922fe95674369b1cb3d215a2b', '1581367493', 'no'),
(433, '_transient_dash_v2_88ae138922fe95674369b1cb3d215a2b', '<div class=\"rss-widget\"><p><strong>RSS Error:</strong> WP HTTP Error: A valid URL was not provided.</p></div><div class=\"rss-widget\"><p><strong>RSS Error:</strong> WP HTTP Error: cURL error 28: Operation timed out after 10004 milliseconds with 0 out of 0 bytes received</p></div>', 'no'),
(450, '_site_transient_timeout_community-events-d41d8cd98f00b204e9800998ecf8427e', '1581383884', 'no'),
(451, '_site_transient_community-events-d41d8cd98f00b204e9800998ecf8427e', 'a:3:{s:9:\"sandboxed\";b:0;s:8:\"location\";a:1:{s:2:\"ip\";b:0;}s:6:\"events\";a:0:{}}', 'no'),
(452, '_transient_timeout_plugin_slugs', '1581427399', 'no'),
(453, '_transient_plugin_slugs', 'a:8:{i:0;s:41:\"acf-to-rest-api/class-acf-to-rest-api.php\";i:1;s:30:\"advanced-custom-fields/acf.php\";i:2;s:29:\"acf-extended/acf-extended.php\";i:3;s:33:\"classic-editor/classic-editor.php\";i:4;s:43:\"custom-post-type-ui/custom-post-type-ui.php\";i:5;s:47:\"jwt-authentication-for-wp-rest-api/jwt-auth.php\";i:6;s:37:\"wp-mail-rest-api/wp-mail-rest-api.php\";i:7;s:49:\"wp-rest-api-controller/wp-rest-api-controller.php\";}', 'no'),
(454, '_site_transient_timeout_poptags_40cd750bba9870f18aada2478b24840a', '1581351758', 'no'),
(455, '_site_transient_poptags_40cd750bba9870f18aada2478b24840a', 'O:8:\"stdClass\":100:{s:6:\"widget\";a:3:{s:4:\"name\";s:6:\"widget\";s:4:\"slug\";s:6:\"widget\";s:5:\"count\";i:4664;}s:11:\"woocommerce\";a:3:{s:4:\"name\";s:11:\"woocommerce\";s:4:\"slug\";s:11:\"woocommerce\";s:5:\"count\";i:3895;}s:4:\"post\";a:3:{s:4:\"name\";s:4:\"post\";s:4:\"slug\";s:4:\"post\";s:5:\"count\";i:2664;}s:5:\"admin\";a:3:{s:4:\"name\";s:5:\"admin\";s:4:\"slug\";s:5:\"admin\";s:5:\"count\";i:2540;}s:5:\"posts\";a:3:{s:4:\"name\";s:5:\"posts\";s:4:\"slug\";s:5:\"posts\";s:5:\"count\";i:1953;}s:9:\"shortcode\";a:3:{s:4:\"name\";s:9:\"shortcode\";s:4:\"slug\";s:9:\"shortcode\";s:5:\"count\";i:1794;}s:8:\"comments\";a:3:{s:4:\"name\";s:8:\"comments\";s:4:\"slug\";s:8:\"comments\";s:5:\"count\";i:1772;}s:7:\"twitter\";a:3:{s:4:\"name\";s:7:\"twitter\";s:4:\"slug\";s:7:\"twitter\";s:5:\"count\";i:1481;}s:6:\"images\";a:3:{s:4:\"name\";s:6:\"images\";s:4:\"slug\";s:6:\"images\";s:5:\"count\";i:1466;}s:6:\"google\";a:3:{s:4:\"name\";s:6:\"google\";s:4:\"slug\";s:6:\"google\";s:5:\"count\";i:1461;}s:8:\"facebook\";a:3:{s:4:\"name\";s:8:\"facebook\";s:4:\"slug\";s:8:\"facebook\";s:5:\"count\";i:1448;}s:5:\"image\";a:3:{s:4:\"name\";s:5:\"image\";s:4:\"slug\";s:5:\"image\";s:5:\"count\";i:1409;}s:3:\"seo\";a:3:{s:4:\"name\";s:3:\"seo\";s:4:\"slug\";s:3:\"seo\";s:5:\"count\";i:1389;}s:7:\"sidebar\";a:3:{s:4:\"name\";s:7:\"sidebar\";s:4:\"slug\";s:7:\"sidebar\";s:5:\"count\";i:1297;}s:7:\"gallery\";a:3:{s:4:\"name\";s:7:\"gallery\";s:4:\"slug\";s:7:\"gallery\";s:5:\"count\";i:1177;}s:5:\"email\";a:3:{s:4:\"name\";s:5:\"email\";s:4:\"slug\";s:5:\"email\";s:5:\"count\";i:1160;}s:4:\"page\";a:3:{s:4:\"name\";s:4:\"page\";s:4:\"slug\";s:4:\"page\";s:5:\"count\";i:1120;}s:9:\"ecommerce\";a:3:{s:4:\"name\";s:9:\"ecommerce\";s:4:\"slug\";s:9:\"ecommerce\";s:5:\"count\";i:1091;}s:6:\"social\";a:3:{s:4:\"name\";s:6:\"social\";s:4:\"slug\";s:6:\"social\";s:5:\"count\";i:1085;}s:5:\"login\";a:3:{s:4:\"name\";s:5:\"login\";s:4:\"slug\";s:5:\"login\";s:5:\"count\";i:977;}s:5:\"links\";a:3:{s:4:\"name\";s:5:\"links\";s:4:\"slug\";s:5:\"links\";s:5:\"count\";i:866;}s:5:\"video\";a:3:{s:4:\"name\";s:5:\"video\";s:4:\"slug\";s:5:\"video\";s:5:\"count\";i:865;}s:7:\"widgets\";a:3:{s:4:\"name\";s:7:\"widgets\";s:4:\"slug\";s:7:\"widgets\";s:5:\"count\";i:857;}s:8:\"security\";a:3:{s:4:\"name\";s:8:\"security\";s:4:\"slug\";s:8:\"security\";s:5:\"count\";i:840;}s:4:\"spam\";a:3:{s:4:\"name\";s:4:\"spam\";s:4:\"slug\";s:4:\"spam\";s:5:\"count\";i:782;}s:7:\"content\";a:3:{s:4:\"name\";s:7:\"content\";s:4:\"slug\";s:7:\"content\";s:5:\"count\";i:760;}s:10:\"e-commerce\";a:3:{s:4:\"name\";s:10:\"e-commerce\";s:4:\"slug\";s:10:\"e-commerce\";s:5:\"count\";i:757;}s:6:\"slider\";a:3:{s:4:\"name\";s:6:\"slider\";s:4:\"slug\";s:6:\"slider\";s:5:\"count\";i:751;}s:10:\"buddypress\";a:3:{s:4:\"name\";s:10:\"buddypress\";s:4:\"slug\";s:10:\"buddypress\";s:5:\"count\";i:739;}s:9:\"analytics\";a:3:{s:4:\"name\";s:9:\"analytics\";s:4:\"slug\";s:9:\"analytics\";s:5:\"count\";i:728;}s:3:\"rss\";a:3:{s:4:\"name\";s:3:\"rss\";s:4:\"slug\";s:3:\"rss\";s:5:\"count\";i:711;}s:5:\"media\";a:3:{s:4:\"name\";s:5:\"media\";s:4:\"slug\";s:5:\"media\";s:5:\"count\";i:698;}s:4:\"form\";a:3:{s:4:\"name\";s:4:\"form\";s:4:\"slug\";s:4:\"form\";s:5:\"count\";i:694;}s:5:\"pages\";a:3:{s:4:\"name\";s:5:\"pages\";s:4:\"slug\";s:5:\"pages\";s:5:\"count\";i:693;}s:6:\"search\";a:3:{s:4:\"name\";s:6:\"search\";s:4:\"slug\";s:6:\"search\";s:5:\"count\";i:674;}s:6:\"jquery\";a:3:{s:4:\"name\";s:6:\"jquery\";s:4:\"slug\";s:6:\"jquery\";s:5:\"count\";i:658;}s:4:\"menu\";a:3:{s:4:\"name\";s:4:\"menu\";s:4:\"slug\";s:4:\"menu\";s:5:\"count\";i:641;}s:4:\"feed\";a:3:{s:4:\"name\";s:4:\"feed\";s:4:\"slug\";s:4:\"feed\";s:5:\"count\";i:641;}s:8:\"category\";a:3:{s:4:\"name\";s:8:\"category\";s:4:\"slug\";s:8:\"category\";s:5:\"count\";i:632;}s:6:\"editor\";a:3:{s:4:\"name\";s:6:\"editor\";s:4:\"slug\";s:6:\"editor\";s:5:\"count\";i:627;}s:4:\"ajax\";a:3:{s:4:\"name\";s:4:\"ajax\";s:4:\"slug\";s:4:\"ajax\";s:5:\"count\";i:625;}s:5:\"embed\";a:3:{s:4:\"name\";s:5:\"embed\";s:4:\"slug\";s:5:\"embed\";s:5:\"count\";i:612;}s:3:\"css\";a:3:{s:4:\"name\";s:3:\"css\";s:4:\"slug\";s:3:\"css\";s:5:\"count\";i:581;}s:10:\"javascript\";a:3:{s:4:\"name\";s:10:\"javascript\";s:4:\"slug\";s:10:\"javascript\";s:5:\"count\";i:575;}s:7:\"youtube\";a:3:{s:4:\"name\";s:7:\"youtube\";s:4:\"slug\";s:7:\"youtube\";s:5:\"count\";i:571;}s:12:\"contact-form\";a:3:{s:4:\"name\";s:12:\"contact form\";s:4:\"slug\";s:12:\"contact-form\";s:5:\"count\";i:570;}s:4:\"link\";a:3:{s:4:\"name\";s:4:\"link\";s:4:\"slug\";s:4:\"link\";s:5:\"count\";i:569;}s:5:\"share\";a:3:{s:4:\"name\";s:5:\"share\";s:4:\"slug\";s:5:\"share\";s:5:\"count\";i:550;}s:7:\"payment\";a:3:{s:4:\"name\";s:7:\"payment\";s:4:\"slug\";s:7:\"payment\";s:5:\"count\";i:544;}s:5:\"theme\";a:3:{s:4:\"name\";s:5:\"theme\";s:4:\"slug\";s:5:\"theme\";s:5:\"count\";i:541;}s:7:\"comment\";a:3:{s:4:\"name\";s:7:\"comment\";s:4:\"slug\";s:7:\"comment\";s:5:\"count\";i:541;}s:10:\"responsive\";a:3:{s:4:\"name\";s:10:\"responsive\";s:4:\"slug\";s:10:\"responsive\";s:5:\"count\";i:534;}s:9:\"affiliate\";a:3:{s:4:\"name\";s:9:\"affiliate\";s:4:\"slug\";s:9:\"affiliate\";s:5:\"count\";i:530;}s:9:\"dashboard\";a:3:{s:4:\"name\";s:9:\"dashboard\";s:4:\"slug\";s:9:\"dashboard\";s:5:\"count\";i:527;}s:6:\"custom\";a:3:{s:4:\"name\";s:6:\"custom\";s:4:\"slug\";s:6:\"custom\";s:5:\"count\";i:526;}s:3:\"ads\";a:3:{s:4:\"name\";s:3:\"ads\";s:4:\"slug\";s:3:\"ads\";s:5:\"count\";i:516;}s:10:\"categories\";a:3:{s:4:\"name\";s:10:\"categories\";s:4:\"slug\";s:10:\"categories\";s:5:\"count\";i:508;}s:3:\"api\";a:3:{s:4:\"name\";s:3:\"api\";s:4:\"slug\";s:3:\"api\";s:5:\"count\";i:494;}s:7:\"contact\";a:3:{s:4:\"name\";s:7:\"contact\";s:4:\"slug\";s:7:\"contact\";s:5:\"count\";i:494;}s:4:\"user\";a:3:{s:4:\"name\";s:4:\"user\";s:4:\"slug\";s:4:\"user\";s:5:\"count\";i:494;}s:4:\"tags\";a:3:{s:4:\"name\";s:4:\"tags\";s:4:\"slug\";s:4:\"tags\";s:5:\"count\";i:486;}s:6:\"button\";a:3:{s:4:\"name\";s:6:\"button\";s:4:\"slug\";s:6:\"button\";s:5:\"count\";i:483;}s:15:\"payment-gateway\";a:3:{s:4:\"name\";s:15:\"payment gateway\";s:4:\"slug\";s:15:\"payment-gateway\";s:5:\"count\";i:478;}s:5:\"users\";a:3:{s:4:\"name\";s:5:\"users\";s:4:\"slug\";s:5:\"users\";s:5:\"count\";i:470;}s:6:\"mobile\";a:3:{s:4:\"name\";s:6:\"mobile\";s:4:\"slug\";s:6:\"mobile\";s:5:\"count\";i:466;}s:6:\"events\";a:3:{s:4:\"name\";s:6:\"events\";s:4:\"slug\";s:6:\"events\";s:5:\"count\";i:459;}s:9:\"gutenberg\";a:3:{s:4:\"name\";s:9:\"gutenberg\";s:4:\"slug\";s:9:\"gutenberg\";s:5:\"count\";i:441;}s:5:\"photo\";a:3:{s:4:\"name\";s:5:\"photo\";s:4:\"slug\";s:5:\"photo\";s:5:\"count\";i:436;}s:9:\"marketing\";a:3:{s:4:\"name\";s:9:\"marketing\";s:4:\"slug\";s:9:\"marketing\";s:5:\"count\";i:428;}s:9:\"slideshow\";a:3:{s:4:\"name\";s:9:\"slideshow\";s:4:\"slug\";s:9:\"slideshow\";s:5:\"count\";i:428;}s:4:\"chat\";a:3:{s:4:\"name\";s:4:\"chat\";s:4:\"slug\";s:4:\"chat\";s:5:\"count\";i:423;}s:6:\"photos\";a:3:{s:4:\"name\";s:6:\"photos\";s:4:\"slug\";s:6:\"photos\";s:5:\"count\";i:420;}s:10:\"navigation\";a:3:{s:4:\"name\";s:10:\"navigation\";s:4:\"slug\";s:10:\"navigation\";s:5:\"count\";i:420;}s:5:\"stats\";a:3:{s:4:\"name\";s:5:\"stats\";s:4:\"slug\";s:5:\"stats\";s:5:\"count\";i:418;}s:8:\"calendar\";a:3:{s:4:\"name\";s:8:\"calendar\";s:4:\"slug\";s:8:\"calendar\";s:5:\"count\";i:414;}s:5:\"popup\";a:3:{s:4:\"name\";s:5:\"popup\";s:4:\"slug\";s:5:\"popup\";s:5:\"count\";i:413;}s:10:\"statistics\";a:3:{s:4:\"name\";s:10:\"statistics\";s:4:\"slug\";s:10:\"statistics\";s:5:\"count\";i:408;}s:10:\"newsletter\";a:3:{s:4:\"name\";s:10:\"newsletter\";s:4:\"slug\";s:10:\"newsletter\";s:5:\"count\";i:400;}s:10:\"shortcodes\";a:3:{s:4:\"name\";s:10:\"shortcodes\";s:4:\"slug\";s:10:\"shortcodes\";s:5:\"count\";i:393;}s:5:\"forms\";a:3:{s:4:\"name\";s:5:\"forms\";s:4:\"slug\";s:5:\"forms\";s:5:\"count\";i:392;}s:4:\"news\";a:3:{s:4:\"name\";s:4:\"news\";s:4:\"slug\";s:4:\"news\";s:5:\"count\";i:389;}s:12:\"social-media\";a:3:{s:4:\"name\";s:12:\"social media\";s:4:\"slug\";s:12:\"social-media\";s:5:\"count\";i:383;}s:14:\"contact-form-7\";a:3:{s:4:\"name\";s:14:\"contact form 7\";s:4:\"slug\";s:14:\"contact-form-7\";s:5:\"count\";i:377;}s:4:\"code\";a:3:{s:4:\"name\";s:4:\"code\";s:4:\"slug\";s:4:\"code\";s:5:\"count\";i:377;}s:8:\"redirect\";a:3:{s:4:\"name\";s:8:\"redirect\";s:4:\"slug\";s:8:\"redirect\";s:5:\"count\";i:374;}s:7:\"plugins\";a:3:{s:4:\"name\";s:7:\"plugins\";s:4:\"slug\";s:7:\"plugins\";s:5:\"count\";i:373;}s:9:\"multisite\";a:3:{s:4:\"name\";s:9:\"multisite\";s:4:\"slug\";s:9:\"multisite\";s:5:\"count\";i:368;}s:3:\"url\";a:3:{s:4:\"name\";s:3:\"url\";s:4:\"slug\";s:3:\"url\";s:5:\"count\";i:364;}s:11:\"performance\";a:3:{s:4:\"name\";s:11:\"performance\";s:4:\"slug\";s:11:\"performance\";s:5:\"count\";i:364;}s:4:\"meta\";a:3:{s:4:\"name\";s:4:\"meta\";s:4:\"slug\";s:4:\"meta\";s:5:\"count\";i:356;}s:4:\"list\";a:3:{s:4:\"name\";s:4:\"list\";s:4:\"slug\";s:4:\"list\";s:5:\"count\";i:350;}s:12:\"notification\";a:3:{s:4:\"name\";s:12:\"notification\";s:4:\"slug\";s:12:\"notification\";s:5:\"count\";i:345;}s:8:\"tracking\";a:3:{s:4:\"name\";s:8:\"tracking\";s:4:\"slug\";s:8:\"tracking\";s:5:\"count\";i:334;}s:16:\"custom-post-type\";a:3:{s:4:\"name\";s:16:\"custom post type\";s:4:\"slug\";s:16:\"custom-post-type\";s:5:\"count\";i:333;}s:11:\"advertising\";a:3:{s:4:\"name\";s:11:\"advertising\";s:4:\"slug\";s:11:\"advertising\";s:5:\"count\";i:329;}s:5:\"block\";a:3:{s:4:\"name\";s:5:\"block\";s:4:\"slug\";s:5:\"block\";s:5:\"count\";i:329;}s:16:\"google-analytics\";a:3:{s:4:\"name\";s:16:\"google analytics\";s:4:\"slug\";s:16:\"google-analytics\";s:5:\"count\";i:329;}s:5:\"cache\";a:3:{s:4:\"name\";s:5:\"cache\";s:4:\"slug\";s:5:\"cache\";s:5:\"count\";i:326;}s:8:\"shipping\";a:3:{s:4:\"name\";s:8:\"shipping\";s:4:\"slug\";s:8:\"shipping\";s:5:\"count\";i:324;}s:6:\"simple\";a:3:{s:4:\"name\";s:6:\"simple\";s:4:\"slug\";s:6:\"simple\";s:5:\"count\";i:323;}}', 'no'),
(457, '_site_transient_timeout_theme_roots', '1581342779', 'no'),
(458, '_site_transient_theme_roots', 'a:4:{s:14:\"twentynineteen\";s:7:\"/themes\";s:15:\"twentyseventeen\";s:7:\"/themes\";s:13:\"twentysixteen\";s:7:\"/themes\";s:12:\"twentytwenty\";s:7:\"/themes\";}', 'no'),
(459, '_site_transient_update_plugins', 'O:8:\"stdClass\":5:{s:12:\"last_checked\";i:1581340997;s:7:\"checked\";a:8:{s:41:\"acf-to-rest-api/class-acf-to-rest-api.php\";s:5:\"3.1.0\";s:30:\"advanced-custom-fields/acf.php\";s:5:\"5.8.7\";s:29:\"acf-extended/acf-extended.php\";s:7:\"0.8.4.1\";s:33:\"classic-editor/classic-editor.php\";s:3:\"1.5\";s:43:\"custom-post-type-ui/custom-post-type-ui.php\";s:5:\"1.7.3\";s:47:\"jwt-authentication-for-wp-rest-api/jwt-auth.php\";s:5:\"1.2.6\";s:37:\"wp-mail-rest-api/wp-mail-rest-api.php\";s:5:\"1.0.0\";s:49:\"wp-rest-api-controller/wp-rest-api-controller.php\";s:5:\"2.0.3\";}s:8:\"response\";a:0:{}s:12:\"translations\";a:0:{}s:9:\"no_update\";a:8:{s:41:\"acf-to-rest-api/class-acf-to-rest-api.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:29:\"w.org/plugins/acf-to-rest-api\";s:4:\"slug\";s:15:\"acf-to-rest-api\";s:6:\"plugin\";s:41:\"acf-to-rest-api/class-acf-to-rest-api.php\";s:11:\"new_version\";s:5:\"3.1.0\";s:3:\"url\";s:46:\"https://wordpress.org/plugins/acf-to-rest-api/\";s:7:\"package\";s:64:\"https://downloads.wordpress.org/plugin/acf-to-rest-api.3.1.0.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:68:\"https://ps.w.org/acf-to-rest-api/assets/icon-256x256.jpg?rev=1752896\";s:2:\"1x\";s:68:\"https://ps.w.org/acf-to-rest-api/assets/icon-128x128.jpg?rev=1752896\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:71:\"https://ps.w.org/acf-to-rest-api/assets/banner-1544x500.jpg?rev=1752896\";s:2:\"1x\";s:70:\"https://ps.w.org/acf-to-rest-api/assets/banner-772x250.jpg?rev=1752896\";}s:11:\"banners_rtl\";a:0:{}}s:30:\"advanced-custom-fields/acf.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:36:\"w.org/plugins/advanced-custom-fields\";s:4:\"slug\";s:22:\"advanced-custom-fields\";s:6:\"plugin\";s:30:\"advanced-custom-fields/acf.php\";s:11:\"new_version\";s:5:\"5.8.7\";s:3:\"url\";s:53:\"https://wordpress.org/plugins/advanced-custom-fields/\";s:7:\"package\";s:71:\"https://downloads.wordpress.org/plugin/advanced-custom-fields.5.8.7.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:75:\"https://ps.w.org/advanced-custom-fields/assets/icon-256x256.png?rev=1082746\";s:2:\"1x\";s:75:\"https://ps.w.org/advanced-custom-fields/assets/icon-128x128.png?rev=1082746\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:78:\"https://ps.w.org/advanced-custom-fields/assets/banner-1544x500.jpg?rev=1729099\";s:2:\"1x\";s:77:\"https://ps.w.org/advanced-custom-fields/assets/banner-772x250.jpg?rev=1729102\";}s:11:\"banners_rtl\";a:0:{}}s:29:\"acf-extended/acf-extended.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:26:\"w.org/plugins/acf-extended\";s:4:\"slug\";s:12:\"acf-extended\";s:6:\"plugin\";s:29:\"acf-extended/acf-extended.php\";s:11:\"new_version\";s:7:\"0.8.4.1\";s:3:\"url\";s:43:\"https://wordpress.org/plugins/acf-extended/\";s:7:\"package\";s:63:\"https://downloads.wordpress.org/plugin/acf-extended.0.8.4.1.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:65:\"https://ps.w.org/acf-extended/assets/icon-256x256.png?rev=2071550\";s:2:\"1x\";s:65:\"https://ps.w.org/acf-extended/assets/icon-128x128.png?rev=2071550\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:68:\"https://ps.w.org/acf-extended/assets/banner-1544x500.png?rev=2071550\";s:2:\"1x\";s:67:\"https://ps.w.org/acf-extended/assets/banner-772x250.png?rev=2071550\";}s:11:\"banners_rtl\";a:0:{}}s:33:\"classic-editor/classic-editor.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:28:\"w.org/plugins/classic-editor\";s:4:\"slug\";s:14:\"classic-editor\";s:6:\"plugin\";s:33:\"classic-editor/classic-editor.php\";s:11:\"new_version\";s:3:\"1.5\";s:3:\"url\";s:45:\"https://wordpress.org/plugins/classic-editor/\";s:7:\"package\";s:61:\"https://downloads.wordpress.org/plugin/classic-editor.1.5.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:67:\"https://ps.w.org/classic-editor/assets/icon-256x256.png?rev=1998671\";s:2:\"1x\";s:67:\"https://ps.w.org/classic-editor/assets/icon-128x128.png?rev=1998671\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:70:\"https://ps.w.org/classic-editor/assets/banner-1544x500.png?rev=1998671\";s:2:\"1x\";s:69:\"https://ps.w.org/classic-editor/assets/banner-772x250.png?rev=1998676\";}s:11:\"banners_rtl\";a:0:{}}s:43:\"custom-post-type-ui/custom-post-type-ui.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:33:\"w.org/plugins/custom-post-type-ui\";s:4:\"slug\";s:19:\"custom-post-type-ui\";s:6:\"plugin\";s:43:\"custom-post-type-ui/custom-post-type-ui.php\";s:11:\"new_version\";s:5:\"1.7.3\";s:3:\"url\";s:50:\"https://wordpress.org/plugins/custom-post-type-ui/\";s:7:\"package\";s:68:\"https://downloads.wordpress.org/plugin/custom-post-type-ui.1.7.3.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:72:\"https://ps.w.org/custom-post-type-ui/assets/icon-256x256.png?rev=1069557\";s:2:\"1x\";s:72:\"https://ps.w.org/custom-post-type-ui/assets/icon-128x128.png?rev=1069557\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:75:\"https://ps.w.org/custom-post-type-ui/assets/banner-1544x500.png?rev=1069557\";s:2:\"1x\";s:74:\"https://ps.w.org/custom-post-type-ui/assets/banner-772x250.png?rev=1069557\";}s:11:\"banners_rtl\";a:0:{}}s:47:\"jwt-authentication-for-wp-rest-api/jwt-auth.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:48:\"w.org/plugins/jwt-authentication-for-wp-rest-api\";s:4:\"slug\";s:34:\"jwt-authentication-for-wp-rest-api\";s:6:\"plugin\";s:47:\"jwt-authentication-for-wp-rest-api/jwt-auth.php\";s:11:\"new_version\";s:5:\"1.2.6\";s:3:\"url\";s:65:\"https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/\";s:7:\"package\";s:83:\"https://downloads.wordpress.org/plugin/jwt-authentication-for-wp-rest-api.1.2.6.zip\";s:5:\"icons\";a:2:{s:2:\"1x\";s:79:\"https://ps.w.org/jwt-authentication-for-wp-rest-api/assets/icon.svg?rev=1238484\";s:3:\"svg\";s:79:\"https://ps.w.org/jwt-authentication-for-wp-rest-api/assets/icon.svg?rev=1238484\";}s:7:\"banners\";a:1:{s:2:\"1x\";s:89:\"https://ps.w.org/jwt-authentication-for-wp-rest-api/assets/banner-772x250.jpg?rev=1238480\";}s:11:\"banners_rtl\";a:0:{}}s:37:\"wp-mail-rest-api/wp-mail-rest-api.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:30:\"w.org/plugins/wp-mail-rest-api\";s:4:\"slug\";s:16:\"wp-mail-rest-api\";s:6:\"plugin\";s:37:\"wp-mail-rest-api/wp-mail-rest-api.php\";s:11:\"new_version\";s:5:\"1.0.0\";s:3:\"url\";s:47:\"https://wordpress.org/plugins/wp-mail-rest-api/\";s:7:\"package\";s:59:\"https://downloads.wordpress.org/plugin/wp-mail-rest-api.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:69:\"https://ps.w.org/wp-mail-rest-api/assets/icon-256x256.png?rev=2231537\";s:2:\"1x\";s:69:\"https://ps.w.org/wp-mail-rest-api/assets/icon-256x256.png?rev=2231537\";}s:7:\"banners\";a:1:{s:2:\"1x\";s:71:\"https://ps.w.org/wp-mail-rest-api/assets/banner-772x250.png?rev=2231537\";}s:11:\"banners_rtl\";a:0:{}}s:49:\"wp-rest-api-controller/wp-rest-api-controller.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:36:\"w.org/plugins/wp-rest-api-controller\";s:4:\"slug\";s:22:\"wp-rest-api-controller\";s:6:\"plugin\";s:49:\"wp-rest-api-controller/wp-rest-api-controller.php\";s:11:\"new_version\";s:5:\"2.0.3\";s:3:\"url\";s:53:\"https://wordpress.org/plugins/wp-rest-api-controller/\";s:7:\"package\";s:71:\"https://downloads.wordpress.org/plugin/wp-rest-api-controller.2.0.3.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:75:\"https://ps.w.org/wp-rest-api-controller/assets/icon-256x256.png?rev=1551042\";s:2:\"1x\";s:75:\"https://ps.w.org/wp-rest-api-controller/assets/icon-128x128.png?rev=1551042\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:78:\"https://ps.w.org/wp-rest-api-controller/assets/banner-1544x500.png?rev=1551042\";s:2:\"1x\";s:77:\"https://ps.w.org/wp-rest-api-controller/assets/banner-772x250.png?rev=1551042\";}s:11:\"banners_rtl\";a:2:{s:2:\"2x\";s:82:\"https://ps.w.org/wp-rest-api-controller/assets/banner-1544x500-rtl.png?rev=1551042\";s:2:\"1x\";s:81:\"https://ps.w.org/wp-rest-api-controller/assets/banner-772x250-rtl.png?rev=1551042\";}}}}', 'no'),
(462, 'cptui_new_install', 'false', 'yes'),
(463, 'cptui_post_types', 'a:2:{s:13:\"advertisement\";a:30:{s:4:\"name\";s:13:\"advertisement\";s:5:\"label\";s:14:\"advertisements\";s:14:\"singular_label\";s:13:\"advertisement\";s:11:\"description\";s:14:\"advertisements\";s:6:\"public\";s:4:\"true\";s:18:\"publicly_queryable\";s:4:\"true\";s:7:\"show_ui\";s:4:\"true\";s:17:\"show_in_nav_menus\";s:4:\"true\";s:16:\"delete_with_user\";s:5:\"false\";s:12:\"show_in_rest\";s:4:\"true\";s:9:\"rest_base\";s:14:\"advertisements\";s:21:\"rest_controller_class\";s:0:\"\";s:11:\"has_archive\";s:5:\"false\";s:18:\"has_archive_string\";s:0:\"\";s:19:\"exclude_from_search\";s:5:\"false\";s:15:\"capability_type\";s:4:\"post\";s:12:\"hierarchical\";s:5:\"false\";s:7:\"rewrite\";s:4:\"true\";s:12:\"rewrite_slug\";s:0:\"\";s:17:\"rewrite_withfront\";s:4:\"true\";s:9:\"query_var\";s:4:\"true\";s:14:\"query_var_slug\";s:0:\"\";s:13:\"menu_position\";s:0:\"\";s:12:\"show_in_menu\";s:4:\"true\";s:19:\"show_in_menu_string\";s:0:\"\";s:9:\"menu_icon\";s:0:\"\";s:8:\"supports\";a:5:{i:0;s:5:\"title\";i:1;s:6:\"editor\";i:2;s:9:\"thumbnail\";i:3;s:7:\"excerpt\";i:4;s:13:\"custom-fields\";}s:10:\"taxonomies\";a:0:{}s:6:\"labels\";a:29:{s:9:\"menu_name\";s:0:\"\";s:9:\"all_items\";s:0:\"\";s:7:\"add_new\";s:0:\"\";s:12:\"add_new_item\";s:0:\"\";s:9:\"edit_item\";s:0:\"\";s:8:\"new_item\";s:0:\"\";s:9:\"view_item\";s:0:\"\";s:10:\"view_items\";s:0:\"\";s:12:\"search_items\";s:0:\"\";s:9:\"not_found\";s:0:\"\";s:18:\"not_found_in_trash\";s:0:\"\";s:17:\"parent_item_colon\";s:0:\"\";s:14:\"featured_image\";s:0:\"\";s:18:\"set_featured_image\";s:0:\"\";s:21:\"remove_featured_image\";s:0:\"\";s:18:\"use_featured_image\";s:0:\"\";s:8:\"archives\";s:0:\"\";s:16:\"insert_into_item\";s:0:\"\";s:21:\"uploaded_to_this_item\";s:0:\"\";s:17:\"filter_items_list\";s:0:\"\";s:21:\"items_list_navigation\";s:0:\"\";s:10:\"items_list\";s:0:\"\";s:10:\"attributes\";s:0:\"\";s:14:\"name_admin_bar\";s:0:\"\";s:14:\"item_published\";s:0:\"\";s:24:\"item_published_privately\";s:0:\"\";s:22:\"item_reverted_to_draft\";s:0:\"\";s:14:\"item_scheduled\";s:0:\"\";s:12:\"item_updated\";s:0:\"\";}s:15:\"custom_supports\";s:0:\"\";}s:10:\"advertiser\";a:30:{s:4:\"name\";s:10:\"advertiser\";s:5:\"label\";s:11:\"advertisers\";s:14:\"singular_label\";s:10:\"advertiser\";s:11:\"description\";s:0:\"\";s:6:\"public\";s:4:\"true\";s:18:\"publicly_queryable\";s:4:\"true\";s:7:\"show_ui\";s:4:\"true\";s:17:\"show_in_nav_menus\";s:4:\"true\";s:16:\"delete_with_user\";s:5:\"false\";s:12:\"show_in_rest\";s:4:\"true\";s:9:\"rest_base\";s:0:\"\";s:21:\"rest_controller_class\";s:0:\"\";s:11:\"has_archive\";s:5:\"false\";s:18:\"has_archive_string\";s:0:\"\";s:19:\"exclude_from_search\";s:5:\"false\";s:15:\"capability_type\";s:4:\"post\";s:12:\"hierarchical\";s:5:\"false\";s:7:\"rewrite\";s:4:\"true\";s:12:\"rewrite_slug\";s:0:\"\";s:17:\"rewrite_withfront\";s:4:\"true\";s:9:\"query_var\";s:4:\"true\";s:14:\"query_var_slug\";s:0:\"\";s:13:\"menu_position\";s:0:\"\";s:12:\"show_in_menu\";s:4:\"true\";s:19:\"show_in_menu_string\";s:0:\"\";s:9:\"menu_icon\";s:0:\"\";s:8:\"supports\";a:3:{i:0;s:5:\"title\";i:1;s:6:\"editor\";i:2;s:9:\"thumbnail\";}s:10:\"taxonomies\";a:0:{}s:6:\"labels\";a:29:{s:9:\"menu_name\";s:11:\"Advertisers\";s:9:\"all_items\";s:0:\"\";s:7:\"add_new\";s:0:\"\";s:12:\"add_new_item\";s:0:\"\";s:9:\"edit_item\";s:0:\"\";s:8:\"new_item\";s:0:\"\";s:9:\"view_item\";s:0:\"\";s:10:\"view_items\";s:0:\"\";s:12:\"search_items\";s:0:\"\";s:9:\"not_found\";s:0:\"\";s:18:\"not_found_in_trash\";s:0:\"\";s:17:\"parent_item_colon\";s:0:\"\";s:14:\"featured_image\";s:0:\"\";s:18:\"set_featured_image\";s:0:\"\";s:21:\"remove_featured_image\";s:0:\"\";s:18:\"use_featured_image\";s:0:\"\";s:8:\"archives\";s:0:\"\";s:16:\"insert_into_item\";s:0:\"\";s:21:\"uploaded_to_this_item\";s:0:\"\";s:17:\"filter_items_list\";s:0:\"\";s:21:\"items_list_navigation\";s:0:\"\";s:10:\"items_list\";s:0:\"\";s:10:\"attributes\";s:0:\"\";s:14:\"name_admin_bar\";s:0:\"\";s:14:\"item_published\";s:0:\"\";s:24:\"item_published_privately\";s:0:\"\";s:22:\"item_reverted_to_draft\";s:0:\"\";s:14:\"item_scheduled\";s:0:\"\";s:12:\"item_updated\";s:0:\"\";}s:15:\"custom_supports\";s:0:\"\";}}', 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `wp_postmeta`
--

CREATE TABLE `wp_postmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_postmeta`
--

INSERT INTO `wp_postmeta` (`meta_id`, `post_id`, `meta_key`, `meta_value`) VALUES
(1, 2, '_wp_page_template', 'default'),
(2, 3, '_wp_page_template', 'default'),
(3, 2, '_wp_trash_meta_status', 'publish'),
(4, 2, '_wp_trash_meta_time', '1580118870'),
(5, 2, '_wp_desired_post_slug', 'sample-page'),
(6, 6, '_edit_lock', '1581328689:1'),
(9, 11, '_edit_lock', '1581341839:1'),
(10, 11, '_edit_last', '1'),
(11, 18, '_edit_lock', '1581324759:1'),
(12, 19, '_edit_lock', '1581331441:1'),
(13, 19, '_edit_last', '1'),
(15, 19, 'phonenumber', '09127170126'),
(16, 19, '_phonenumber', 'field_5e411878ff896'),
(17, 19, 'status', 'کارکرده'),
(18, 19, '_status', 'field_5e4118edff897'),
(19, 19, 'location', 'کرج'),
(20, 19, '_location', 'field_5e411900ff898'),
(21, 19, 'bodytext', 'خط سالم بی خط و خشو بی زنگ خور اضاف. وردار ناموسی ماته خودته. هوری\r\n فروشی اماده به نام زدن.'),
(22, 19, '_bodytext', 'field_5e41190dff899'),
(23, 19, 'sellerphonenumber', '091223456'),
(24, 19, '_sellerphonenumber', 'field_5e41191eff89a'),
(25, 19, 'sellername', 'احمد ذوقی'),
(26, 19, '_sellername', 'field_5e411948ff89b'),
(27, 20, 'phonenumber', '09127170126'),
(28, 20, '_phonenumber', 'field_5e411878ff896'),
(29, 20, 'status', 'کارکرده'),
(30, 20, '_status', 'field_5e4118edff897'),
(31, 20, 'location', 'کرج'),
(32, 20, '_location', 'field_5e411900ff898'),
(33, 20, 'bodytext', 'خط سالم بی خط و خشو بی زنگ خور اضاف. وردار ناموسی ماته خودته. هوری\r\n فروشی اماده به نام زدن.'),
(34, 20, '_bodytext', 'field_5e41190dff899'),
(35, 20, 'sellerphonenumber', '091223456'),
(36, 20, '_sellerphonenumber', 'field_5e41191eff89a'),
(37, 20, 'sellername', 'احمد ذوقی'),
(38, 20, '_sellername', 'field_5e411948ff89b'),
(39, 23, '_edit_lock', '1581328616:1'),
(40, 6, '_edit_last', '1'),
(41, 1, '_wp_trash_meta_status', 'publish'),
(42, 1, '_wp_trash_meta_time', '1581328837'),
(43, 1, '_wp_desired_post_slug', 'hello-world'),
(44, 1, '_wp_trash_meta_comments_status', 'a:1:{i:1;s:1:\"1\";}'),
(46, 19, 'text', 'خط سالم بی خط و خشو بی زنگ خور اضاف. وردار ناموسی ماته خودته. هوری\\r\\n فروشی اماده به نام زدن.'),
(47, 19, '_text', 'field_5e41190dff899'),
(48, 19, 'price', '20000000'),
(49, 19, '_price', 'field_5e412898d8f77'),
(50, 26, 'phonenumber', '09127170126'),
(51, 26, '_phonenumber', 'field_5e411878ff896'),
(52, 26, 'status', 'کارکرده'),
(53, 26, '_status', 'field_5e4118edff897'),
(54, 26, 'location', 'کرج'),
(55, 26, '_location', 'field_5e411900ff898'),
(56, 26, 'bodytext', 'خط سالم بی خط و خشو بی زنگ خور اضاف. وردار ناموسی ماته خودته. هوری\r\n فروشی اماده به نام زدن.'),
(57, 26, '_bodytext', 'field_5e41190dff899'),
(58, 26, 'sellerphonenumber', '091223456'),
(59, 26, '_sellerphonenumber', 'field_5e41191eff89a'),
(60, 26, 'sellername', 'احمد ذوقی'),
(61, 26, '_sellername', 'field_5e411948ff89b'),
(62, 26, 'text', 'خط سالم بی خط و خشو بی زنگ خور اضاف. وردار ناموسی ماته خودته. هوری\\r\\n فروشی اماده به نام زدن.'),
(63, 26, '_text', 'field_5e41190dff899'),
(64, 26, 'price', '2'),
(65, 26, '_price', 'field_5e412898d8f77'),
(67, 27, 'phonenumber', '09127170126'),
(68, 27, '_phonenumber', 'field_5e411878ff896'),
(69, 27, 'status', 'کارکرده'),
(70, 27, '_status', 'field_5e4118edff897'),
(71, 27, 'location', 'کرج'),
(72, 27, '_location', 'field_5e411900ff898'),
(73, 27, 'bodytext', 'خط سالم بی خط و خشو بی زنگ خور اضاف. وردار ناموسی ماته خودته. هوری\r\n فروشی اماده به نام زدن.'),
(74, 27, '_bodytext', 'field_5e41190dff899'),
(75, 27, 'sellerphonenumber', '091223456'),
(76, 27, '_sellerphonenumber', 'field_5e41191eff89a'),
(77, 27, 'sellername', 'احمد ذوقی'),
(78, 27, '_sellername', 'field_5e411948ff89b'),
(79, 27, 'text', 'خط سالم بی خط و خشو بی زنگ خور اضاف. وردار ناموسی ماته خودته. هوری\\r\\n فروشی اماده به نام زدن.'),
(80, 27, '_text', 'field_5e41190dff899'),
(81, 27, 'price', '20000000'),
(82, 27, '_price', 'field_5e412898d8f77'),
(83, 28, '_edit_lock', '1581330352:1'),
(84, 30, '_edit_lock', '1581331442:1'),
(85, 30, '_edit_last', '1'),
(87, 30, 'phonenumber', '09129475034'),
(88, 30, '_phonenumber', 'field_5e411878ff896'),
(89, 30, 'status', 'صفر'),
(90, 30, '_status', 'field_5e4118edff897'),
(91, 30, 'location', 'تهران'),
(92, 30, '_location', 'field_5e411900ff898'),
(93, 30, 'text', 'ورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به '),
(94, 30, '_text', 'field_5e41190dff899'),
(95, 30, 'price', '2934873645'),
(96, 30, '_price', 'field_5e412898d8f77'),
(97, 30, 'sellerphonenumber', '091253647634'),
(98, 30, '_sellerphonenumber', 'field_5e41191eff89a'),
(99, 30, 'sellername', 'ناصر'),
(100, 30, '_sellername', 'field_5e411948ff89b'),
(101, 31, 'phonenumber', '09129475034'),
(102, 31, '_phonenumber', 'field_5e411878ff896'),
(103, 31, 'status', 'صفر'),
(104, 31, '_status', 'field_5e4118edff897'),
(105, 31, 'location', 'تهران'),
(106, 31, '_location', 'field_5e411900ff898'),
(107, 31, 'text', 'ورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست'),
(108, 31, '_text', 'field_5e41190dff899'),
(109, 31, 'price', '2934873645'),
(110, 31, '_price', 'field_5e412898d8f77'),
(111, 31, 'sellerphonenumber', '091253647634'),
(112, 31, '_sellerphonenumber', 'field_5e41191eff89a'),
(113, 31, 'sellername', 'ناصر'),
(114, 31, '_sellername', 'field_5e411948ff89b'),
(115, 32, '_edit_lock', '1581331915:1'),
(116, 32, '_edit_last', '1'),
(118, 32, 'phonenumber', '09127458654'),
(119, 32, '_phonenumber', 'field_5e411878ff896'),
(120, 32, 'status', 'کارکرده'),
(121, 32, '_status', 'field_5e4118edff897'),
(122, 32, 'location', 'تبریز'),
(123, 32, '_location', 'field_5e411900ff898'),
(124, 32, 'text', 'رایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن '),
(125, 32, '_text', 'field_5e41190dff899'),
(126, 32, 'price', '10255885'),
(127, 32, '_price', 'field_5e412898d8f77'),
(128, 32, 'sellerphonenumber', '0912478663'),
(129, 32, '_sellerphonenumber', 'field_5e41191eff89a'),
(130, 32, 'sellername', 'مخمد'),
(131, 32, '_sellername', 'field_5e411948ff89b'),
(132, 33, 'phonenumber', '09127458654'),
(133, 33, '_phonenumber', 'field_5e411878ff896'),
(134, 33, 'status', 'کارکرده'),
(135, 33, '_status', 'field_5e4118edff897'),
(136, 33, 'location', 'تبریز'),
(137, 33, '_location', 'field_5e411900ff898'),
(138, 33, 'text', 'رایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌'),
(139, 33, '_text', 'field_5e41190dff899'),
(140, 33, 'price', '10255885'),
(141, 33, '_price', 'field_5e412898d8f77'),
(142, 33, 'sellerphonenumber', '0912478663'),
(143, 33, '_sellerphonenumber', 'field_5e41191eff89a'),
(144, 33, 'sellername', 'مخمد'),
(145, 33, '_sellername', 'field_5e411948ff89b'),
(146, 34, '_edit_lock', '1581331589:1'),
(147, 34, '_edit_last', '1'),
(149, 34, 'phonenumber', '09124558745'),
(150, 34, '_phonenumber', 'field_5e411878ff896'),
(151, 34, 'status', 'صفر'),
(152, 34, '_status', 'field_5e4118edff897'),
(153, 34, 'location', 'محمدشهر'),
(154, 34, '_location', 'field_5e411900ff898'),
(155, 34, 'text', 'ه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند'),
(156, 34, '_text', 'field_5e41190dff899'),
(157, 34, 'price', '854456'),
(158, 34, '_price', 'field_5e412898d8f77'),
(159, 34, 'sellerphonenumber', '09125669865'),
(160, 34, '_sellerphonenumber', 'field_5e41191eff89a'),
(161, 34, 'sellername', 'فریدون'),
(162, 34, '_sellername', 'field_5e411948ff89b'),
(163, 35, 'phonenumber', '09124558745'),
(164, 35, '_phonenumber', 'field_5e411878ff896'),
(165, 35, 'status', 'صفر'),
(166, 35, '_status', 'field_5e4118edff897'),
(167, 35, 'location', 'محمدشهر'),
(168, 35, '_location', 'field_5e411900ff898'),
(169, 35, 'text', 'ه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند'),
(170, 35, '_text', 'field_5e41190dff899'),
(171, 35, 'price', '854456'),
(172, 35, '_price', 'field_5e412898d8f77'),
(173, 35, 'sellerphonenumber', '09125669865'),
(174, 35, '_sellerphonenumber', 'field_5e41191eff89a'),
(175, 35, 'sellername', 'فریدون'),
(176, 35, '_sellername', 'field_5e411948ff89b'),
(177, 36, '_edit_lock', '1581331925:1'),
(178, 36, '_edit_last', '1'),
(180, 36, 'phonenumber', '09127485963'),
(181, 36, '_phonenumber', 'field_5e411878ff896'),
(182, 36, 'status', 'صفر'),
(183, 36, '_status', 'field_5e4118edff897'),
(184, 36, 'location', 'یزد'),
(185, 36, '_location', 'field_5e411900ff898'),
(186, 36, 'text', 'توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.\r\n'),
(187, 36, '_text', 'field_5e41190dff899'),
(188, 36, 'price', '98558745'),
(189, 36, '_price', 'field_5e412898d8f77'),
(190, 36, 'sellerphonenumber', '09124458366'),
(191, 36, '_sellerphonenumber', 'field_5e41191eff89a'),
(192, 36, 'sellername', 'نازی'),
(193, 36, '_sellername', 'field_5e411948ff89b'),
(194, 37, 'phonenumber', '09127485963'),
(195, 37, '_phonenumber', 'field_5e411878ff896'),
(196, 37, 'status', 'صفر'),
(197, 37, '_status', 'field_5e4118edff897'),
(198, 37, 'location', 'یزد'),
(199, 37, '_location', 'field_5e411900ff898'),
(200, 37, 'text', 'توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.\r\n'),
(201, 37, '_text', 'field_5e41190dff899'),
(202, 37, 'price', '98558745'),
(203, 37, '_price', 'field_5e412898d8f77'),
(204, 37, 'sellerphonenumber', '09124458366'),
(205, 37, '_sellerphonenumber', 'field_5e41191eff89a'),
(206, 37, 'sellername', 'نازی'),
(207, 37, '_sellername', 'field_5e411948ff89b'),
(209, 39, 'phonenumber', '09127458654'),
(210, 39, '_phonenumber', 'field_5e411878ff896'),
(211, 39, 'status', 'کارکرده'),
(212, 39, '_status', 'field_5e4118edff897'),
(213, 39, 'location', 'تبریز'),
(214, 39, '_location', 'field_5e411900ff898'),
(215, 39, 'text', 'رایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن '),
(216, 39, '_text', 'field_5e41190dff899'),
(217, 39, 'price', '10255885'),
(218, 39, '_price', 'field_5e412898d8f77'),
(219, 39, 'sellerphonenumber', '0912478663'),
(220, 39, '_sellerphonenumber', 'field_5e41191eff89a'),
(221, 39, 'sellername', 'مخمد'),
(222, 39, '_sellername', 'field_5e411948ff89b'),
(224, 40, 'phonenumber', '09129475034'),
(225, 40, '_phonenumber', 'field_5e411878ff896'),
(226, 40, 'status', 'صفر'),
(227, 40, '_status', 'field_5e4118edff897'),
(228, 40, 'location', 'تهران'),
(229, 40, '_location', 'field_5e411900ff898'),
(230, 40, 'text', 'ورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به '),
(231, 40, '_text', 'field_5e41190dff899'),
(232, 40, 'price', '2934873645'),
(233, 40, '_price', 'field_5e412898d8f77'),
(234, 40, 'sellerphonenumber', '091253647634'),
(235, 40, '_sellerphonenumber', 'field_5e41191eff89a'),
(236, 40, 'sellername', 'ناصر'),
(237, 40, '_sellername', 'field_5e411948ff89b'),
(238, 34, '_wp_trash_meta_status', 'publish'),
(239, 34, '_wp_trash_meta_time', '1581332011'),
(240, 34, '_wp_trash_meta_status', 'publish'),
(241, 34, '_wp_trash_meta_time', '1581332019'),
(242, 32, '_wp_trash_meta_status', 'publish'),
(243, 32, '_wp_trash_meta_time', '1581332023'),
(244, 32, '_wp_trash_meta_status', 'publish'),
(245, 32, '_wp_trash_meta_time', '1581332033'),
(246, 32, '_wp_trash_meta_status', 'publish'),
(247, 32, '_wp_trash_meta_time', '1581332060'),
(248, 32, '_wp_trash_meta_status', 'publish'),
(249, 32, '_wp_trash_meta_time', '1581332063'),
(250, 32, '_wp_trash_meta_status', 'publish'),
(251, 32, '_wp_trash_meta_time', '1581332065'),
(252, 41, '_edit_lock', '1581341259:1'),
(253, 42, '_edit_lock', '1581341310:1'),
(254, 43, '_edit_lock', '1581341796:1'),
(255, 45, '_edit_lock', '1581341874:1'),
(256, 45, '_edit_last', '1'),
(257, 45, 'phonenumber', '091275865421'),
(258, 45, '_phonenumber', 'field_5e411878ff896'),
(259, 45, 'status', 'صفر'),
(260, 45, '_status', 'field_5e4118edff897'),
(261, 45, 'location', 'تهران'),
(262, 45, '_location', 'field_5e411900ff898'),
(263, 45, 'text', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم '),
(264, 45, '_text', 'field_5e41190dff899'),
(265, 45, 'price', '51211261'),
(266, 45, '_price', 'field_5e412898d8f77'),
(267, 45, 'sellerphonenumber', '09124578963'),
(268, 45, '_sellerphonenumber', 'field_5e41191eff89a'),
(269, 45, 'sellername', 'حامد'),
(270, 45, '_sellername', 'field_5e411948ff89b'),
(271, 47, '_edit_lock', '1581342177:1'),
(272, 47, '_edit_last', '1'),
(273, 47, 'phonenumber', '09127845963'),
(274, 47, '_phonenumber', 'field_5e411878ff896'),
(275, 47, 'status', 'کارکرده'),
(276, 47, '_status', 'field_5e4118edff897'),
(277, 47, 'location', 'تهران'),
(278, 47, '_location', 'field_5e411900ff898'),
(279, 47, 'text', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم '),
(280, 47, '_text', 'field_5e41190dff899'),
(281, 47, 'price', '8545214'),
(282, 47, '_price', 'field_5e412898d8f77'),
(283, 47, 'sellerphonenumber', '09127865894'),
(284, 47, '_sellerphonenumber', 'field_5e41191eff89a'),
(285, 47, 'sellername', 'مخمد'),
(286, 47, '_sellername', 'field_5e411948ff89b'),
(287, 48, '_edit_lock', '1581342229:1'),
(288, 48, '_edit_last', '1'),
(289, 48, 'phonenumber', '09127584964'),
(290, 48, '_phonenumber', 'field_5e411878ff896'),
(291, 48, 'status', 'صفر'),
(292, 48, '_status', 'field_5e4118edff897'),
(293, 48, 'location', 'تبریز'),
(294, 48, '_location', 'field_5e411900ff898'),
(295, 48, 'text', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم '),
(296, 48, '_text', 'field_5e41190dff899'),
(297, 48, 'price', '9865478'),
(298, 48, '_price', 'field_5e412898d8f77'),
(299, 48, 'sellerphonenumber', '09124578965'),
(300, 48, '_sellerphonenumber', 'field_5e41191eff89a'),
(301, 48, 'sellername', 'فریدون'),
(302, 48, '_sellername', 'field_5e411948ff89b'),
(303, 49, '_edit_lock', '1581342264:1'),
(304, 49, '_edit_last', '1'),
(305, 49, 'phonenumber', '09124588545'),
(306, 49, '_phonenumber', 'field_5e411878ff896'),
(307, 49, 'status', 'کارکرده'),
(308, 49, '_status', 'field_5e4118edff897'),
(309, 49, 'location', 'محمدشهر'),
(310, 49, '_location', 'field_5e411900ff898'),
(311, 49, 'text', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم '),
(312, 49, '_text', 'field_5e41190dff899'),
(313, 49, 'price', '98547845'),
(314, 49, '_price', 'field_5e412898d8f77'),
(315, 49, 'sellerphonenumber', '09121245865'),
(316, 49, '_sellerphonenumber', 'field_5e41191eff89a'),
(317, 49, 'sellername', 'حامد'),
(318, 49, '_sellername', 'field_5e411948ff89b'),
(319, 50, '_edit_lock', '1581342969:1');

-- --------------------------------------------------------

--
-- Table structure for table `wp_posts`
--

CREATE TABLE `wp_posts` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `post_author` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `post_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'publish',
  `comment_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `ping_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `post_password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `post_name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `to_ping` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pinged` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_modified_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content_filtered` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_parent` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `guid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `menu_order` int(11) NOT NULL DEFAULT 0,
  `post_type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `post_mime_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_count` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_posts`
--

INSERT INTO `wp_posts` (`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`) VALUES
(1, 1, '2020-01-27 09:32:10', '2020-01-27 09:32:10', '<!-- wp:paragraph -->\n<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>\n<!-- /wp:paragraph -->', 'Hello world!', '', 'trash', 'open', 'open', '', 'hello-world__trashed', '', '', '2020-02-10 10:00:37', '2020-02-10 10:00:37', '', 0, 'http://localhost/wordpress/?p=1', 0, 'post', '', 1),
(2, 1, '2020-01-27 09:32:10', '2020-01-27 09:32:10', '<!-- wp:paragraph -->\n<p>This is an example page. It\'s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><p>Hi there! I\'m a bike messenger by day, aspiring actor by night, and this is my website. I live in Los Angeles, have a great dog named Jack, and I like pi&#241;a coladas. (And gettin\' caught in the rain.)</p></blockquote>\n<!-- /wp:quote -->\n\n<!-- wp:paragraph -->\n<p>...or something like this:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><p>The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickeys to the public ever since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community.</p></blockquote>\n<!-- /wp:quote -->\n\n<!-- wp:paragraph -->\n<p>As a new WordPress user, you should go to <a href=\"http://localhost/wordpress/wp-admin/\">your dashboard</a> to delete this page and create new pages for your content. Have fun!</p>\n<!-- /wp:paragraph -->', 'Sample Page', '', 'trash', 'closed', 'open', '', 'sample-page__trashed', '', '', '2020-01-27 09:54:30', '2020-01-27 09:54:30', '', 0, 'http://localhost/wordpress/?page_id=2', 0, 'page', '', 0),
(3, 1, '2020-01-27 09:32:10', '2020-01-27 09:32:10', '<!-- wp:heading --><h2>Who we are</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Our website address is: http://localhost/wordpress.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>What personal data we collect and why we collect it</h2><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>Comments</h3><!-- /wp:heading --><!-- wp:paragraph --><p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor&#8217;s IP address and browser user agent string to help spam detection.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p><!-- /wp:paragraph --><!-- wp:heading {\"level\":3} --><h3>Media</h3><!-- /wp:heading --><!-- wp:paragraph --><p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p><!-- /wp:paragraph --><!-- wp:heading {\"level\":3} --><h3>Contact forms</h3><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>Cookies</h3><!-- /wp:heading --><!-- wp:paragraph --><p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select &quot;Remember Me&quot;, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p><!-- /wp:paragraph --><!-- wp:heading {\"level\":3} --><h3>Embedded content from other websites</h3><!-- /wp:heading --><!-- wp:paragraph --><p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p><!-- /wp:paragraph --><!-- wp:heading {\"level\":3} --><h3>Analytics</h3><!-- /wp:heading --><!-- wp:heading --><h2>Who we share your data with</h2><!-- /wp:heading --><!-- wp:heading --><h2>How long we retain your data</h2><!-- /wp:heading --><!-- wp:paragraph --><p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>What rights you have over your data</h2><!-- /wp:heading --><!-- wp:paragraph --><p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Where we send your data</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Visitor comments may be checked through an automated spam detection service.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Your contact information</h2><!-- /wp:heading --><!-- wp:heading --><h2>Additional information</h2><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>How we protect your data</h3><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>What data breach procedures we have in place</h3><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>What third parties we receive data from</h3><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>What automated decision making and/or profiling we do with user data</h3><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>Industry regulatory disclosure requirements</h3><!-- /wp:heading -->', 'Privacy Policy', '', 'draft', 'closed', 'open', '', 'privacy-policy', '', '', '2020-01-27 09:32:10', '2020-01-27 09:32:10', '', 0, 'http://localhost/wordpress/?page_id=3', 0, 'page', '', 0),
(5, 1, '2020-01-27 09:54:30', '2020-01-27 09:54:30', '<!-- wp:paragraph -->\n<p>This is an example page. It\'s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><p>Hi there! I\'m a bike messenger by day, aspiring actor by night, and this is my website. I live in Los Angeles, have a great dog named Jack, and I like pi&#241;a coladas. (And gettin\' caught in the rain.)</p></blockquote>\n<!-- /wp:quote -->\n\n<!-- wp:paragraph -->\n<p>...or something like this:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><p>The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickeys to the public ever since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community.</p></blockquote>\n<!-- /wp:quote -->\n\n<!-- wp:paragraph -->\n<p>As a new WordPress user, you should go to <a href=\"http://localhost/wordpress/wp-admin/\">your dashboard</a> to delete this page and create new pages for your content. Have fun!</p>\n<!-- /wp:paragraph -->', 'Sample Page', '', 'inherit', 'closed', 'closed', '', '2-revision-v1', '', '', '2020-01-27 09:54:30', '2020-01-27 09:54:30', '', 2, 'http://localhost/wordpress/2020/01/27/2-revision-v1/', 0, 'revision', '', 0),
(6, 1, '2020-01-27 09:55:40', '2020-01-27 09:55:40', '<!-- wp:paragraph -->\r\n<p>the paragraph</p>\r\n<!-- /wp:paragraph -->', 'front-page', '', 'publish', 'closed', 'closed', '', 'page-title', '', '', '2020-02-10 09:57:17', '2020-02-10 09:57:17', '', 0, 'http://localhost/wordpress/?page_id=6', 0, 'page', '', 0),
(7, 1, '2020-01-27 09:55:40', '2020-01-27 09:55:40', '<!-- wp:paragraph -->\n<p>the paragraph</p>\n<!-- /wp:paragraph -->', 'page-title', '', 'inherit', 'closed', 'closed', '', '6-revision-v1', '', '', '2020-01-27 09:55:40', '2020-01-27 09:55:40', '', 6, 'http://localhost/wordpress/2020/01/27/6-revision-v1/', 0, 'revision', '', 0),
(8, 1, '2020-01-27 09:55:54', '2020-01-27 09:55:54', '<!-- wp:paragraph -->\n<p>the paragraph</p>\n<!-- /wp:paragraph -->', 'fron-page', '', 'inherit', 'closed', 'closed', '', '6-revision-v1', '', '', '2020-01-27 09:55:54', '2020-01-27 09:55:54', '', 6, 'http://localhost/wordpress/2020/01/27/6-revision-v1/', 0, 'revision', '', 0),
(11, 1, '2020-02-10 08:50:19', '2020-02-10 08:50:19', 'a:7:{s:8:\"location\";a:1:{i:0;a:1:{i:0;a:3:{s:5:\"param\";s:9:\"post_type\";s:8:\"operator\";s:2:\"==\";s:5:\"value\";s:13:\"advertisement\";}}}s:8:\"position\";s:6:\"normal\";s:5:\"style\";s:7:\"default\";s:15:\"label_placement\";s:3:\"top\";s:21:\"instruction_placement\";s:5:\"label\";s:14:\"hide_on_screen\";a:14:{i:0;s:9:\"permalink\";i:1;s:11:\"the_content\";i:2;s:7:\"excerpt\";i:3;s:10:\"discussion\";i:4;s:8:\"comments\";i:5;s:9:\"revisions\";i:6;s:4:\"slug\";i:7;s:6:\"author\";i:8;s:6:\"format\";i:9;s:15:\"page_attributes\";i:10;s:14:\"featured_image\";i:11;s:10:\"categories\";i:12;s:4:\"tags\";i:13;s:15:\"send-trackbacks\";}s:11:\"description\";s:0:\"\";}', 'SpecialOffersTop', 'specialofferstop', 'publish', 'closed', 'closed', '', 'group_5e411831c38f1', '', '', '2020-02-10 13:37:14', '2020-02-10 13:37:14', '', 0, 'http://localhost/wordpress/?post_type=acf-field-group&#038;p=11', 0, 'acf-field-group', '', 0),
(12, 1, '2020-02-10 08:50:19', '2020-02-10 08:50:19', 'a:12:{s:4:\"type\";s:6:\"number\";s:12:\"instructions\";s:0:\"\";s:8:\"required\";i:0;s:17:\"conditional_logic\";i:0;s:7:\"wrapper\";a:3:{s:5:\"width\";s:0:\"\";s:5:\"class\";s:0:\"\";s:2:\"id\";s:0:\"\";}s:13:\"default_value\";s:0:\"\";s:11:\"placeholder\";s:0:\"\";s:7:\"prepend\";s:0:\"\";s:6:\"append\";s:0:\"\";s:3:\"min\";s:0:\"\";s:3:\"max\";s:0:\"\";s:4:\"step\";s:0:\"\";}', 'phoneNumber', 'phonenumber', 'publish', 'closed', 'closed', '', 'field_5e411878ff896', '', '', '2020-02-10 08:50:19', '2020-02-10 08:50:19', '', 11, 'http://localhost/wordpress/?post_type=acf-field&p=12', 0, 'acf-field', '', 0),
(13, 1, '2020-02-10 08:50:19', '2020-02-10 08:50:19', 'a:10:{s:4:\"type\";s:4:\"text\";s:12:\"instructions\";s:0:\"\";s:8:\"required\";i:0;s:17:\"conditional_logic\";i:0;s:7:\"wrapper\";a:3:{s:5:\"width\";s:0:\"\";s:5:\"class\";s:0:\"\";s:2:\"id\";s:0:\"\";}s:13:\"default_value\";s:0:\"\";s:11:\"placeholder\";s:0:\"\";s:7:\"prepend\";s:0:\"\";s:6:\"append\";s:0:\"\";s:9:\"maxlength\";s:0:\"\";}', 'Status', 'status', 'publish', 'closed', 'closed', '', 'field_5e4118edff897', '', '', '2020-02-10 08:50:19', '2020-02-10 08:50:19', '', 11, 'http://localhost/wordpress/?post_type=acf-field&p=13', 1, 'acf-field', '', 0),
(14, 1, '2020-02-10 08:50:19', '2020-02-10 08:50:19', 'a:10:{s:4:\"type\";s:4:\"text\";s:12:\"instructions\";s:0:\"\";s:8:\"required\";i:0;s:17:\"conditional_logic\";i:0;s:7:\"wrapper\";a:3:{s:5:\"width\";s:0:\"\";s:5:\"class\";s:0:\"\";s:2:\"id\";s:0:\"\";}s:13:\"default_value\";s:0:\"\";s:11:\"placeholder\";s:0:\"\";s:7:\"prepend\";s:0:\"\";s:6:\"append\";s:0:\"\";s:9:\"maxlength\";s:0:\"\";}', 'Location', 'location', 'publish', 'closed', 'closed', '', 'field_5e411900ff898', '', '', '2020-02-10 08:50:19', '2020-02-10 08:50:19', '', 11, 'http://localhost/wordpress/?post_type=acf-field&p=14', 2, 'acf-field', '', 0),
(15, 1, '2020-02-10 08:50:19', '2020-02-10 08:50:19', 'a:10:{s:4:\"type\";s:8:\"textarea\";s:12:\"instructions\";s:0:\"\";s:8:\"required\";i:0;s:17:\"conditional_logic\";i:0;s:7:\"wrapper\";a:3:{s:5:\"width\";s:0:\"\";s:5:\"class\";s:0:\"\";s:2:\"id\";s:0:\"\";}s:13:\"default_value\";s:0:\"\";s:11:\"placeholder\";s:0:\"\";s:9:\"maxlength\";s:0:\"\";s:4:\"rows\";s:0:\"\";s:9:\"new_lines\";s:0:\"\";}', 'Text', 'text', 'publish', 'closed', 'closed', '', 'field_5e41190dff899', '', '', '2020-02-10 09:55:26', '2020-02-10 09:55:26', '', 11, 'http://localhost/wordpress/?post_type=acf-field&#038;p=15', 3, 'acf-field', '', 0),
(16, 1, '2020-02-10 08:50:19', '2020-02-10 08:50:19', 'a:12:{s:4:\"type\";s:6:\"number\";s:12:\"instructions\";s:0:\"\";s:8:\"required\";i:0;s:17:\"conditional_logic\";i:0;s:7:\"wrapper\";a:3:{s:5:\"width\";s:0:\"\";s:5:\"class\";s:0:\"\";s:2:\"id\";s:0:\"\";}s:13:\"default_value\";s:0:\"\";s:11:\"placeholder\";s:0:\"\";s:7:\"prepend\";s:0:\"\";s:6:\"append\";s:0:\"\";s:3:\"min\";s:0:\"\";s:3:\"max\";s:0:\"\";s:4:\"step\";s:0:\"\";}', 'SellerPhoneNumber', 'sellerphonenumber', 'publish', 'closed', 'closed', '', 'field_5e41191eff89a', '', '', '2020-02-10 09:56:26', '2020-02-10 09:56:26', '', 11, 'http://localhost/wordpress/?post_type=acf-field&#038;p=16', 5, 'acf-field', '', 0),
(17, 1, '2020-02-10 08:50:19', '2020-02-10 08:50:19', 'a:10:{s:4:\"type\";s:4:\"text\";s:12:\"instructions\";s:0:\"\";s:8:\"required\";i:0;s:17:\"conditional_logic\";i:0;s:7:\"wrapper\";a:3:{s:5:\"width\";s:0:\"\";s:5:\"class\";s:0:\"\";s:2:\"id\";s:0:\"\";}s:13:\"default_value\";s:0:\"\";s:11:\"placeholder\";s:0:\"\";s:7:\"prepend\";s:0:\"\";s:6:\"append\";s:0:\"\";s:9:\"maxlength\";s:0:\"\";}', 'SellerName', 'sellername', 'publish', 'closed', 'closed', '', 'field_5e411948ff89b', '', '', '2020-02-10 09:56:26', '2020-02-10 09:56:26', '', 11, 'http://localhost/wordpress/?post_type=acf-field&#038;p=17', 6, 'acf-field', '', 0),
(18, 1, '2020-02-10 08:51:15', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'closed', 'closed', '', '', '', '', '2020-02-10 08:51:15', '0000-00-00 00:00:00', '', 0, 'http://localhost/wordpress/?post_type=acf-field-group&p=18', 0, 'acf-field-group', '', 0),
(19, 1, '2020-02-10 08:54:49', '2020-02-10 08:54:49', '', '', '', 'publish', 'open', 'open', '', '19-2', '', '', '2020-02-10 10:02:40', '2020-02-10 10:02:40', '', 0, 'http://localhost/wordpress/?p=19', 0, 'post', '', 0),
(20, 1, '2020-02-10 08:54:49', '2020-02-10 08:54:49', '', '', '', 'inherit', 'closed', 'closed', '', '19-revision-v1', '', '', '2020-02-10 08:54:49', '2020-02-10 08:54:49', '', 19, 'http://localhost/wordpress/19-revision-v1/', 0, 'revision', '', 0),
(21, 1, '2020-02-10 09:56:25', '2020-02-10 09:56:25', 'a:12:{s:4:\"type\";s:6:\"number\";s:12:\"instructions\";s:0:\"\";s:8:\"required\";i:0;s:17:\"conditional_logic\";i:0;s:7:\"wrapper\";a:3:{s:5:\"width\";s:0:\"\";s:5:\"class\";s:0:\"\";s:2:\"id\";s:0:\"\";}s:13:\"default_value\";s:0:\"\";s:11:\"placeholder\";s:0:\"\";s:7:\"prepend\";s:0:\"\";s:6:\"append\";s:0:\"\";s:3:\"min\";s:0:\"\";s:3:\"max\";s:0:\"\";s:4:\"step\";s:0:\"\";}', 'Price', 'price', 'publish', 'closed', 'closed', '', 'field_5e412898d8f77', '', '', '2020-02-10 10:02:24', '2020-02-10 10:02:24', '', 11, 'http://localhost/wordpress/?post_type=acf-field&#038;p=21', 4, 'acf-field', '', 0),
(22, 1, '2020-02-10 09:56:30', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2020-02-10 09:56:30', '0000-00-00 00:00:00', '', 0, 'http://localhost/wordpress/?p=22', 0, 'post', '', 0),
(23, 1, '2020-02-10 09:56:55', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'closed', 'closed', '', '', '', '', '2020-02-10 09:56:55', '0000-00-00 00:00:00', '', 0, 'http://localhost/wordpress/?post_type=acf-field-group&p=23', 0, 'acf-field-group', '', 0),
(24, 1, '2020-02-10 09:57:17', '2020-02-10 09:57:17', '<!-- wp:paragraph -->\r\n<p>the paragraph</p>\r\n<!-- /wp:paragraph -->', 'front-page', '', 'inherit', 'closed', 'closed', '', '6-revision-v1', '', '', '2020-02-10 09:57:17', '2020-02-10 09:57:17', '', 6, 'http://localhost/wordpress/6-revision-v1/', 0, 'revision', '', 0),
(25, 1, '2020-02-10 10:00:37', '2020-02-10 10:00:37', '<!-- wp:paragraph -->\n<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>\n<!-- /wp:paragraph -->', 'Hello world!', '', 'inherit', 'closed', 'closed', '', '1-revision-v1', '', '', '2020-02-10 10:00:37', '2020-02-10 10:00:37', '', 1, 'http://localhost/wordpress/1-revision-v1/', 0, 'revision', '', 0),
(26, 1, '2020-02-10 10:01:40', '2020-02-10 10:01:40', '', '', '', 'inherit', 'closed', 'closed', '', '19-revision-v1', '', '', '2020-02-10 10:01:40', '2020-02-10 10:01:40', '', 19, 'http://localhost/wordpress/19-revision-v1/', 0, 'revision', '', 0),
(27, 1, '2020-02-10 10:02:40', '2020-02-10 10:02:40', '', '', '', 'inherit', 'closed', 'closed', '', '19-revision-v1', '', '', '2020-02-10 10:02:40', '2020-02-10 10:02:40', '', 19, 'http://localhost/wordpress/19-revision-v1/', 0, 'revision', '', 0),
(28, 1, '2020-02-10 10:24:04', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2020-02-10 10:24:04', '0000-00-00 00:00:00', '', 0, 'http://localhost/wordpress/?p=28', 0, 'post', '', 0),
(29, 1, '2020-02-10 10:26:47', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2020-02-10 10:26:47', '0000-00-00 00:00:00', '', 0, 'http://localhost/wordpress/?p=29', 0, 'post', '', 0),
(30, 1, '2020-02-10 10:29:49', '2020-02-10 10:29:49', '', '', '', 'publish', 'open', 'open', '', '30-2', '', '', '2020-02-10 10:46:22', '2020-02-10 10:46:22', '', 0, 'http://localhost/wordpress/?p=30', 0, 'post', '', 0),
(31, 1, '2020-02-10 10:29:49', '2020-02-10 10:29:49', '', '', '', 'inherit', 'closed', 'closed', '', '30-revision-v1', '', '', '2020-02-10 10:29:49', '2020-02-10 10:29:49', '', 30, 'http://localhost/wordpress/30-revision-v1/', 0, 'revision', '', 0),
(32, 1, '2020-02-10 10:32:30', '2020-02-10 10:32:30', '', '', '', 'publish', 'open', 'open', '', '32-2', '', '', '2020-02-10 10:46:15', '2020-02-10 10:46:15', '', 0, 'http://localhost/wordpress/?p=32', 0, 'post', '', 0),
(33, 1, '2020-02-10 10:32:30', '2020-02-10 10:32:30', '', '', '', 'inherit', 'closed', 'closed', '', '32-revision-v1', '', '', '2020-02-10 10:32:30', '2020-02-10 10:32:30', '', 32, 'http://localhost/wordpress/32-revision-v1/', 0, 'revision', '', 0),
(34, 1, '2020-02-10 10:34:05', '2020-02-10 10:34:05', '', '', '', 'publish', 'open', 'open', '', '34-2', '', '', '2020-02-10 10:34:05', '2020-02-10 10:34:05', '', 0, 'http://localhost/wordpress/?p=34', 0, 'post', '', 0),
(35, 1, '2020-02-10 10:34:05', '2020-02-10 10:34:05', '', '', '', 'inherit', 'closed', 'closed', '', '34-revision-v1', '', '', '2020-02-10 10:34:05', '2020-02-10 10:34:05', '', 34, 'http://localhost/wordpress/34-revision-v1/', 0, 'revision', '', 0),
(36, 1, '2020-02-10 10:37:08', '2020-02-10 10:37:08', '', '', '', 'publish', 'open', 'open', '', '36-2', '', '', '2020-02-10 10:37:08', '2020-02-10 10:37:08', '', 0, 'http://localhost/wordpress/?p=36', 0, 'post', '', 0),
(37, 1, '2020-02-10 10:37:08', '2020-02-10 10:37:08', '', '', '', 'inherit', 'closed', 'closed', '', '36-revision-v1', '', '', '2020-02-10 10:37:08', '2020-02-10 10:37:08', '', 36, 'http://localhost/wordpress/36-revision-v1/', 0, 'revision', '', 0),
(38, 1, '2020-02-10 10:45:59', '2020-02-10 10:45:59', '', '', '', 'inherit', 'closed', 'closed', '', '36-autosave-v1', '', '', '2020-02-10 10:45:59', '2020-02-10 10:45:59', '', 36, 'http://localhost/wordpress/36-autosave-v1/', 0, 'revision', '', 0),
(39, 1, '2020-02-10 10:46:15', '2020-02-10 10:46:15', '', '', '', 'inherit', 'closed', 'closed', '', '32-revision-v1', '', '', '2020-02-10 10:46:15', '2020-02-10 10:46:15', '', 32, 'http://localhost/wordpress/32-revision-v1/', 0, 'revision', '', 0),
(40, 1, '2020-02-10 10:46:22', '2020-02-10 10:46:22', '', '', '', 'inherit', 'closed', 'closed', '', '30-revision-v1', '', '', '2020-02-10 10:46:22', '2020-02-10 10:46:22', '', 30, 'http://localhost/wordpress/30-revision-v1/', 0, 'revision', '', 0),
(41, 1, '2020-02-10 13:27:22', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'closed', 'closed', '', '', '', '', '2020-02-10 13:27:22', '0000-00-00 00:00:00', '', 0, 'http://localhost/wordpress/?post_type=advertisement&p=41', 0, 'advertisement', '', 0),
(42, 1, '2020-02-10 13:27:43', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'closed', 'closed', '', '', '', '', '2020-02-10 13:27:43', '0000-00-00 00:00:00', '', 0, 'http://localhost/wordpress/?post_type=acf-field-group&p=42', 0, 'acf-field-group', '', 0),
(43, 1, '2020-02-10 13:29:55', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'closed', 'closed', '', '', '', '', '2020-02-10 13:29:55', '0000-00-00 00:00:00', '', 0, 'http://localhost/wordpress/?post_type=advertisement&p=43', 0, 'advertisement', '', 0),
(44, 1, '2020-02-10 13:37:20', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'closed', 'closed', '', '', '', '', '2020-02-10 13:37:20', '0000-00-00 00:00:00', '', 0, 'http://localhost/wordpress/?post_type=advertisement&p=44', 0, 'advertisement', '', 0),
(45, 1, '2020-02-10 13:38:26', '2020-02-10 13:38:26', '', '', '', 'publish', 'closed', 'closed', '', '45', '', '', '2020-02-10 13:38:26', '2020-02-10 13:38:26', '', 0, 'http://localhost/wordpress/?post_type=advertisement&#038;p=45', 0, 'advertisement', '', 0),
(46, 1, '2020-02-10 13:43:09', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'closed', 'closed', '', '', '', '', '2020-02-10 13:43:09', '0000-00-00 00:00:00', '', 0, 'http://localhost/wordpress/?post_type=advertiser&p=46', 0, 'advertiser', '', 0),
(47, 1, '2020-02-10 13:45:12', '2020-02-10 13:45:12', '', '', '', 'publish', 'closed', 'closed', '', '47', '', '', '2020-02-10 13:45:12', '2020-02-10 13:45:12', '', 0, 'http://localhost/wordpress/?post_type=advertisement&#038;p=47', 0, 'advertisement', '', 0),
(48, 1, '2020-02-10 13:45:57', '2020-02-10 13:45:57', '', '', '', 'publish', 'closed', 'closed', '', '48', '', '', '2020-02-10 13:45:57', '2020-02-10 13:45:57', '', 0, 'http://localhost/wordpress/?post_type=advertisement&#038;p=48', 0, 'advertisement', '', 0),
(49, 1, '2020-02-10 13:46:44', '2020-02-10 13:46:44', '', '', '', 'publish', 'closed', 'closed', '', '49', '', '', '2020-02-10 13:46:44', '2020-02-10 13:46:44', '', 0, 'http://localhost/wordpress/?post_type=advertisement&#038;p=49', 0, 'advertisement', '', 0),
(50, 1, '2020-02-10 13:46:49', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'closed', 'closed', '', '', '', '', '2020-02-10 13:46:49', '0000-00-00 00:00:00', '', 0, 'http://localhost/wordpress/?post_type=advertisement&p=50', 0, 'advertisement', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_termmeta`
--

CREATE TABLE `wp_termmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `term_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wp_terms`
--

CREATE TABLE `wp_terms` (
  `term_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `slug` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `term_group` bigint(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_terms`
--

INSERT INTO `wp_terms` (`term_id`, `name`, `slug`, `term_group`) VALUES
(1, 'Uncategorized', 'uncategorized', 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_term_relationships`
--

CREATE TABLE `wp_term_relationships` (
  `object_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `term_order` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_term_relationships`
--

INSERT INTO `wp_term_relationships` (`object_id`, `term_taxonomy_id`, `term_order`) VALUES
(1, 1, 0),
(19, 1, 0),
(30, 1, 0),
(32, 1, 0),
(34, 1, 0),
(36, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_term_taxonomy`
--

CREATE TABLE `wp_term_taxonomy` (
  `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL,
  `term_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `taxonomy` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `count` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_term_taxonomy`
--

INSERT INTO `wp_term_taxonomy` (`term_taxonomy_id`, `term_id`, `taxonomy`, `description`, `parent`, `count`) VALUES
(1, 1, 'category', '', 0, 5);

-- --------------------------------------------------------

--
-- Table structure for table `wp_usermeta`
--

CREATE TABLE `wp_usermeta` (
  `umeta_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wp_usermeta`
--

INSERT INTO `wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES
(1, 1, 'nickname', 'admin'),
(2, 1, 'first_name', ''),
(3, 1, 'last_name', ''),
(4, 1, 'description', ''),
(5, 1, 'rich_editing', 'true'),
(6, 1, 'syntax_highlighting', 'true'),
(7, 1, 'comment_shortcuts', 'false'),
(8, 1, 'admin_color', 'fresh'),
(9, 1, 'use_ssl', '0'),
(10, 1, 'show_admin_bar_front', 'true'),
(11, 1, 'locale', ''),
(12, 1, 'wp_capabilities', 'a:1:{s:13:\"administrator\";b:1;}'),
(13, 1, 'wp_user_level', '10'),
(14, 1, 'dismissed_wp_pointers', ''),
(15, 1, 'show_welcome_panel', '1'),
(16, 1, 'session_tokens', 'a:2:{s:64:\"385f9b910071d3d1b2b7bcc5f38038f6b9f45936edbc7e58046c9a3a298def61\";a:4:{s:10:\"expiration\";i:1581681521;s:2:\"ip\";s:3:\"::1\";s:2:\"ua\";s:114:\"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36\";s:5:\"login\";i:1580471921;}s:64:\"716241e3c57d321ccf8c4f36033c1fbc1fbdb51e1734206940eac75328dd827d\";a:4:{s:10:\"expiration\";i:1582538094;s:2:\"ip\";s:3:\"::1\";s:2:\"ua\";s:114:\"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36\";s:5:\"login\";i:1581328494;}}'),
(17, 1, 'wp_dashboard_quick_press_last_post_id', '29'),
(18, 2, 'nickname', 'shayan'),
(19, 2, 'first_name', 'shayan'),
(20, 2, 'last_name', 'motalebi'),
(21, 2, 'description', ''),
(22, 2, 'rich_editing', 'true'),
(23, 2, 'syntax_highlighting', 'true'),
(24, 2, 'comment_shortcuts', 'false'),
(25, 2, 'admin_color', 'fresh'),
(26, 2, 'use_ssl', '0'),
(27, 2, 'show_admin_bar_front', 'true'),
(28, 2, 'locale', ''),
(29, 2, 'wp_capabilities', 'a:1:{s:10:\"subscriber\";b:1;}'),
(30, 2, 'wp_user_level', '0'),
(31, 2, 'dismissed_wp_pointers', ''),
(32, 1, 'closedpostboxes_acf-field-group', 'a:0:{}'),
(33, 1, 'metaboxhidden_acf-field-group', 'a:1:{i:0;s:7:\"slugdiv\";}'),
(34, 1, 'closedpostboxes_advertisement', 'a:0:{}'),
(35, 1, 'metaboxhidden_advertisement', 'a:2:{i:0;s:11:\"postexcerpt\";i:1;s:7:\"slugdiv\";}');

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
(2, 'shayan', '$P$BAoUJ3LBpdsZk5YLDJVLX9C3gDRY9Q/', 'shayan', 'shayan@gmail.com', 'http://shayanmotalebi.ir', '2020-01-31 21:07:27', '', 0, 'shayan motalebi');

-- --------------------------------------------------------

--
-- Table structure for table `wp_wp_mail_rest_api_log`
--

CREATE TABLE `wp_wp_mail_rest_api_log` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `args_json` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `response` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wp_commentmeta`
--
ALTER TABLE `wp_commentmeta`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_comments`
--
ALTER TABLE `wp_comments`
  ADD PRIMARY KEY (`comment_ID`),
  ADD KEY `comment_post_ID` (`comment_post_ID`),
  ADD KEY `comment_approved_date_gmt` (`comment_approved`,`comment_date_gmt`),
  ADD KEY `comment_date_gmt` (`comment_date_gmt`),
  ADD KEY `comment_parent` (`comment_parent`),
  ADD KEY `comment_author_email` (`comment_author_email`(10));

--
-- Indexes for table `wp_links`
--
ALTER TABLE `wp_links`
  ADD PRIMARY KEY (`link_id`),
  ADD KEY `link_visible` (`link_visible`);

--
-- Indexes for table `wp_options`
--
ALTER TABLE `wp_options`
  ADD PRIMARY KEY (`option_id`),
  ADD UNIQUE KEY `option_name` (`option_name`),
  ADD KEY `autoload` (`autoload`);

--
-- Indexes for table `wp_postmeta`
--
ALTER TABLE `wp_postmeta`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_posts`
--
ALTER TABLE `wp_posts`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `post_name` (`post_name`(191)),
  ADD KEY `type_status_date` (`post_type`,`post_status`,`post_date`,`ID`),
  ADD KEY `post_parent` (`post_parent`),
  ADD KEY `post_author` (`post_author`);

--
-- Indexes for table `wp_termmeta`
--
ALTER TABLE `wp_termmeta`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `term_id` (`term_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_terms`
--
ALTER TABLE `wp_terms`
  ADD PRIMARY KEY (`term_id`),
  ADD KEY `slug` (`slug`(191)),
  ADD KEY `name` (`name`(191));

--
-- Indexes for table `wp_term_relationships`
--
ALTER TABLE `wp_term_relationships`
  ADD PRIMARY KEY (`object_id`,`term_taxonomy_id`),
  ADD KEY `term_taxonomy_id` (`term_taxonomy_id`);

--
-- Indexes for table `wp_term_taxonomy`
--
ALTER TABLE `wp_term_taxonomy`
  ADD PRIMARY KEY (`term_taxonomy_id`),
  ADD UNIQUE KEY `term_id_taxonomy` (`term_id`,`taxonomy`),
  ADD KEY `taxonomy` (`taxonomy`);

--
-- Indexes for table `wp_usermeta`
--
ALTER TABLE `wp_usermeta`
  ADD PRIMARY KEY (`umeta_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_users`
--
ALTER TABLE `wp_users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_login_key` (`user_login`),
  ADD KEY `user_nicename` (`user_nicename`),
  ADD KEY `user_email` (`user_email`);

--
-- Indexes for table `wp_wp_mail_rest_api_log`
--
ALTER TABLE `wp_wp_mail_rest_api_log`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wp_commentmeta`
--
ALTER TABLE `wp_commentmeta`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wp_comments`
--
ALTER TABLE `wp_comments`
  MODIFY `comment_ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wp_links`
--
ALTER TABLE `wp_links`
  MODIFY `link_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wp_options`
--
ALTER TABLE `wp_options`
  MODIFY `option_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=469;

--
-- AUTO_INCREMENT for table `wp_postmeta`
--
ALTER TABLE `wp_postmeta`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=320;

--
-- AUTO_INCREMENT for table `wp_posts`
--
ALTER TABLE `wp_posts`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `wp_termmeta`
--
ALTER TABLE `wp_termmeta`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wp_terms`
--
ALTER TABLE `wp_terms`
  MODIFY `term_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wp_term_taxonomy`
--
ALTER TABLE `wp_term_taxonomy`
  MODIFY `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wp_usermeta`
--
ALTER TABLE `wp_usermeta`
  MODIFY `umeta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `wp_users`
--
ALTER TABLE `wp_users`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `wp_wp_mail_rest_api_log`
--
ALTER TABLE `wp_wp_mail_rest_api_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
