<?php get_header(); ?>

<?php
// 这里的 menu / beans 要和你后台页面 slug 一致
$menu_url  = function_exists('shc_get_page_url_by_path') ? shc_get_page_url_by_path('menu') : home_url('/menu');
$beans_url = function_exists('shc_get_page_url_by_path') ? shc_get_page_url_by_path('beans') : home_url('/beans');
?>

<section class="hero" style="background-image:url('<?php echo esc_url(get_template_directory_uri() . '/assets/images/hero-default.jpg'); ?>');">
  <div class="container hero-content">
    <h1>在历史建筑里，喝一杯有故事的咖啡</h1>
    <p>Stone House Café · 昆明北京路石房子</p>
    <div class="hero-actions">
      <a class="btn" href="<?php echo esc_url($menu_url); ?>">查看菜单</a>
      <a class="btn btn-outline" href="<?php echo esc_url($beans_url); ?>">选购咖啡豆</a>
    </div>
  </div>
</section>

<section class="container section">
  <h2>石房子影像</h2>
  <div class="sh-slider" data-slider>
    <div class="sh-slides">
      <?php
      // 把图片放到 assets/images/gallery/
      $images = [
        'assets/images/gallery/1.jpg',
        'assets/images/gallery/2.jpg',
        'assets/images/gallery/3.jpg',
        'assets/images/gallery/4.jpg',
      ];
      foreach ($images as $img): ?>
        <div class="sh-slide">
          <img src="<?php echo esc_url(get_template_directory_uri() . '/' . $img); ?>" alt="石房子照片">
        </div>
      <?php endforeach; ?>
    </div>
    <button class="sh-nav prev" type="button" aria-label="上一张">‹</button>
    <button class="sh-nav next" type="button" aria-label="下一张">›</button>
  </div>
</section>

<?php get_template_part('template-parts/section', 'history'); ?>
<?php get_template_part('template-parts/section', 'features'); ?>
<?php get_template_part('template-parts/section', 'contact'); ?>

<?php get_footer(); ?>
