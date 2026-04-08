<?php get_header(); ?>
<section class="container section">
  <?php
  if (have_posts()) :
    while (have_posts()) : the_post();
      echo '<h1>' . esc_html(get_the_title()) . '</h1>';
      the_content();
    endwhile;
  endif;
  ?>
</section>
<?php get_footer(); ?>
