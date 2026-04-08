<?php get_header(); ?>

<?php
// 优先按页面模板找链接，避免 /menu 404
$menu_url = function_exists('shc_get_page_url_by_template')
    ? shc_get_page_url_by_template('page-menu.php', '/menu')
    : home_url('/menu');

$beans_url = function_exists('shc_get_page_url_by_template')
    ? shc_get_page_url_by_template('page-beans.php', '/beans')
    : home_url('/beans');

$booking_url = function_exists('shc_get_page_url_by_template')
    ? shc_get_page_url_by_template('page-booking.php', '/booking')
    : home_url('/booking');

// 首页轮播图目录：assets/images/uploads/home/
$home_images = function_exists('shc_get_images_from_dir')
    ? shc_get_images_from_dir('assets/images/uploads/home')
    : [];

// hero背景图兜底，防止404
$hero_rel = '/assets/images/hero-default.jpg';
$hero_abs = get_template_directory() . $hero_rel;
$hero_url = file_exists($hero_abs) ? get_template_directory_uri() . $hero_rel : '';
?>

<section class="hero" <?php if ($hero_url): ?>style="background-image:url('<?php echo esc_url($hero_url); ?>');"<?php endif; ?>>
  <div class="container hero-content">
    <h1>在历史建筑里，喝一杯有故事的咖啡</h1>
    <p>Stone House Café · 昆明北京路石房子</p>
    <div class="hero-actions">
      <a class="btn" href="<?php echo esc_url($menu_url); ?>">查看菜单</a>
      <a class="btn btn-outline" href="<?php echo esc_url($beans_url); ?>">选购咖啡豆</a>
      <a class="btn" href="<?php echo esc_url($booking_url); ?>">包房预定</a>
    </div>
  </div>
</section>

<section class="container section">
  <h2>石房子影像</h2>

  <?php if (!empty($home_images)): ?>
    <div class="sh-slider" data-slider>
      <div class="sh-slides">
        <?php foreach ($home_images as $img_url): ?>
          <div class="sh-slide">
            <img src="<?php echo esc_url($img_url); ?>" alt="石房子首页图片">
          </div>
        <?php endforeach; ?>
      </div>
      <button class="sh-nav prev" type="button" aria-label="上一张">‹</button>
      <button class="sh-nav next" type="button" aria-label="下一张">›</button>
    </div>
  <?php else: ?>
    <div class="card">
      <p>请把首页图片放到：<code>assets/images/uploads/home/</code></p>
    </div>
  <?php endif; ?>
</section>

<section class="container section">
  <h2>包房预定</h2>
  <p>石房子咖啡厅二楼设有3间包房，支持按日期和时段预约。</p>
  <a class="btn" href="<?php echo esc_url($booking_url); ?>">立即预定</a>
</section>

<?php get_template_part('template-parts/section', 'history'); ?>
<?php get_template_part('template-parts/section', 'features'); ?>
<?php get_template_part('template-parts/section', 'contact'); ?>

<?php get_footer(); ?>
