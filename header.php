<?php if (!defined('ABSPATH')) exit; ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="<?php echo esc_url(home_url('/')); ?>">
      <?php if (has_custom_logo()) { the_custom_logo(); } ?>
      <span class="brand-text">石房子咖啡厅</span>
    </a>

    <nav class="main-nav">
      <?php
      wp_nav_menu([
        'theme_location' => 'primary',
        'container' => false,
        'fallback_cb' => function () {
          echo '<ul>';
          echo '<li><a href="' . esc_url(home_url('/')) . '">首页</a></li>';
          echo '<li><a href="' . esc_url(home_url('/menu')) . '">菜单</a></li>';
          echo '<li><a href="' . esc_url(home_url('/beans')) . '">咖啡豆</a></li>';
          echo '</ul>';
        }
      ]);
      ?>
    </nav>
  </div>
</header>

<main class="site-main">
