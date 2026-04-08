<section class="container section">
  <h2>石房子影像</h2>

  <?php
  $home_images = function_exists('shc_get_images_from_dir')
    ? shc_get_images_from_dir('assets/images/uploads/home')
    : [];
  ?>

  <?php if (!empty($home_images)): ?>
    <div class="sh-slider" data-slider>
      <div class="sh-slides">
        <?php foreach ($home_images as $img_url): ?>
          <div class="sh-slide">
            <img src="<?php echo esc_url($img_url); ?>" alt="石房子照片">
          </div>
        <?php endforeach; ?>
      </div>
      <button class="sh-nav prev" type="button" aria-label="上一张">‹</button>
      <button class="sh-nav next" type="button" aria-label="下一张">›</button>
    </div>
  <?php else: ?>
    <p>请将首页图片上传到 <code>assets/images/uploads/home/</code></p>
  <?php endif; ?>
</section>
