<?php
/* Template Name: Beans Page */
get_header();
$beans = function_exists('shc_get_bean_items') ? shc_get_bean_items() : [];
?>

<section class="page-banner" style="background-image:url('<?php echo esc_url(get_template_directory_uri() . '/assets/images/beans-banner.jpg'); ?>');">
  <div class="container">
    <h1>咖啡豆 Beans</h1>
    <p>挑选适合你风味偏好的精品豆</p>
  </div>
</section>

<section class="container section">
  <div class="grid cards">
    <?php foreach ($beans as $bean): ?>
      <article class="card">
        <h3><?php echo esc_html($bean['name']); ?></h3>
        <p>产地：<?php echo esc_html($bean['origin']); ?></p>
        <p>处理法：<?php echo esc_html($bean['process']); ?></p>
        <p>风味：<?php echo esc_html($bean['flavor']); ?></p>
        <p>烘焙度：<?php echo esc_html($bean['roast']); ?></p>
        <strong>¥<?php echo esc_html($bean['price']); ?></strong>
      </article>
    <?php endforeach; ?>
  </div>
</section>

<?php get_footer(); ?>
