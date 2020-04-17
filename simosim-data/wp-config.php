<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'gigfa_25149405_simsim');

/** MySQL database username */
define('DB_USER', 'gigfa_25149405');

/** MySQL database password */
define('DB_PASSWORD', 'Varzesh3');

/** MySQL hostname */
define('DB_HOST', 'sql309.gigfa.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/** Define a JWT secret key */
define('JWT_AUTH_SECRET_KEY', '123456789');

/** Set CORS for JWT*/
define('JWT_AUTH_CORS_ENABLE', true);

define('ADMIN_COOKIE_PATH', '/');
define('COOKIE_DOMAIN', '');
define('COOKIEPATH', '');
define('SITECOOKIEPATH', '');


/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '_!e2?Pqg9G1<DK+F)l=O56N$(XG_@E!Ry]igCai<u57;;Y!i!.135}$HXBNxmJQX');
define('SECURE_AUTH_KEY',  ',t:Yumvg}5#i^0EyeP=VaRW5UN>a[Khe!lSP^BL9FE3/cJhz.vr$9a12^[Pj2[DB');
define('LOGGED_IN_KEY',    ')SN:(Xk^s(my_AP}]X%>L2}`<hAx%)Cqqgv1|s#N1%{d%&T-@VxNG25eQtvqA>xL');
define('NONCE_KEY',        ';~l9>L@CI|@+mOJldV9p;IF9lk!<{]DdeD@t[`A%tdSi}_*fGrO!4E=X:>zd.IA*');
define('AUTH_SALT',        '@.2bkJT{cLo 5[PA0oK&y$?kEE4D}Hpu=l<ocRfNhABW1h^]>M+Cw!O3*Dl(P<AG');
define('SECURE_AUTH_SALT', 'W32<Z/-W: KlJTU[>H[FdJkS)9BL@[7>vppQj?3mT@)lh5IUPZ{OJROc^22ub;E;');
define('LOGGED_IN_SALT',   'gz.a}&0[8-bm]EiiASoSR-!(+n_Ti ~>fyw[swI|M_NSin(ZqK@Hv1[xYAXOYWpx');
define('NONCE_SALT',       'XPeB/S=BxD%P3-06wo{%|fC_76&Y,uePuuvBM8aZ$Gv{cw:v%QNm/v#>z7Zk)Tkx');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
//Prevent Cookie Error
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
