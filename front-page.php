<?php get_header(); ?>

<section class="hero" style="background-image:url('<?php echo esc_url(get_template_directory_uri() . '/assets/images/hero-default.jpg'); ?>');">
  <div class="container hero-content">
    <h1>在历史建筑里，喝一杯有故事的咖啡</h1>
    <p>Stone House Café · 昆明北京路石房子</p>
    <div class="hero-actions">
      <a class="btn" href="<?php echo esc_url(home_url('/menu')); ?>">查看菜单</a>
      <a class="btn btn-outline" href="<?php echo esc_url(home_url('/beans')); ?>">选购咖啡豆</a>
    </div>
  </div>
</section>

<?php get_template_part('template-parts/section', 'history'); ?>
<?php get_template_part('template-parts/section', 'features'); ?>
<?php get_template_part('template-parts/section', 'contact'); ?>

<?php get_footer(); ?>
