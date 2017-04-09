=== Plugin Name ===
Contributors: Heiko_Mamerow
Donate link: https://heikomamerow.de
Tags: exit popup, modal popup
Requires at least: 4.7
Tested up to: 4.7.3
Stable tag: 4.7
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Display modal window on top of the page before user leave.

== Description ==

Exit pop-up pops up, if a user wants to leave the page. Leaving the page means: moving the mouse to the top of the browser window.

Features:

+ Fires ppop-up only one time.
+ Fires not for logged-in users.
* Set the probability with which the pop-up should be used.
* Set delay time after pageload until the exit pop-up is ready.
* Pops up only on predetermined pages.
* Use your own individual stylesheet.
* Set random style variants if you want.
* Web-Performance friendly (No rendering blocking, no heavy code, asynchronous etc.)
* Vanilla JavaScript


Note:
This plugin sets an entry in the local storage of the browser to "remember" if the pop-up was fired. In some country's you have to declare that. E.g. in your privacy disclaimer.

== Installation ==

This section describes how to install the plugin and get it working.

1. Upload `exit-pop-up.php` to the `/wp-content/plugins/` directory.
1. Activate the plugin through the `Plugins` menu in WordPress.
1. Make global configuration trough `Settings` > `Exit pop-up` menu in WordPress.
1. Edit page and apply _Exit pop-up_ in meta box on any page you want.

== Frequently Asked Questions ==

Until now nobody has asked. :-)

== Screenshots ==

![](assets/screenshot-1.png)

Admin page for global configurations.

![](assets/screenshot-2.png)

Meta box for settings per post or page.

![](assets/screenshot-3.png)

Exit pop-up example.

== Changelog ==

= 1.0.0 =
* init