<?php
/* Template Name: Menu Page */
get_header();
$items = function_exists('shc_get_menu_items') ? shc_get_menu_items() : [];
$menu_images = function_exists('shc_get_images_from_dir')
    ? shc_get_images_from_dir('assets/images/uploads/menu')
    : [];
?>

<section class="page-banner" style="background-image:url('<?php echo esc_url(get_template_directory_uri() . '/assets/images/menu-banner.jpg'); ?>');">
  <div class="container">
    <h1>菜单 Menu</h1>
    <p>从经典意式到云南风土手冲</p>
  </div>
</section>

<?php if (!empty($menu_images)): ?>
<section class="container section">
  <h2>菜单实拍</h2>
  <div class="grid cards">
    <?php foreach ($menu_images as $img_url): ?>
      <article class="card">
        <img src="<?php echo esc_url($img_url); ?>" alt="菜单图片" class="gallery-img">
      </article>
    <?php endforeach; ?>
  </div>
</section>
<?php endif; ?>

<section class="container section">
  <h2>饮品与甜点</h2>
  <div class="grid cards">
    <?php foreach ($items as $item): ?>
      <article class="card">
        <span class="tag"><?php echo esc_html($item['tag']); ?></span>
        <h3><?php echo esc_html($item['name']); ?></h3>
        <p><?php echo esc_html($item['desc']); ?></p>
        <strong>¥<?php echo esc_html($item['price']); ?></strong>
      </article>
    <?php endforeach; ?>
  </div>
</section>

<?php get_footer(); ?>
