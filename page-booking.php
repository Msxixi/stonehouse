<?php
/* Template Name: Booking Page */
get_header();

// 简易提交处理（仅演示，建议后续接数据库/邮件通知）
$submitted = false;
$data = [
  'room' => '',
  'date' => '',
  'slot' => '',
  'name' => '',
  'phone' => '',
];
$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data['room']  = sanitize_text_field($_POST['room'] ?? '');
  $data['date']  = sanitize_text_field($_POST['date'] ?? '');
  $data['slot']  = sanitize_text_field($_POST['slot'] ?? '');
  $data['name']  = sanitize_text_field($_POST['name'] ?? '');
  $data['phone'] = sanitize_text_field($_POST['phone'] ?? '');

  if (!$data['room'])  $errors[] = '请选择包房';
  if (!$data['date'])  $errors[] = '请选择日期';
  if (!$data['slot'])  $errors[] = '请选择时段';
  if (!$data['name'])  $errors[] = '请填写联系人';
  if (!$data['phone']) $errors[] = '请填写手机号';

  if (empty($errors)) {
    $submitted = true;
    // 你可在此处扩展：写入数据库 / 发邮件 / 调Python接口
  }
}
?>

<section class="page-banner" style="background-image:url('<?php echo esc_url(get_template_directory_uri() . '/assets/images/hero-default.jpg'); ?>');">
  <div class="container">
    <h1>包房预定</h1>
    <p>二楼 3 间包房，按日期和时段预约</p>
  </div>
</section>

<section class="container section">
  <h2>二楼包房</h2>
  <div class="grid cards">
    <article class="card"><h3>包房 A（雅间）</h3><p>4-6人，安静会谈</p></article>
    <article class="card"><h3>包房 B（茶花间</h3><p>6-8人，聚会活动</p></article>
    <article class="card"><h3>包房 C（石影间）</h3><p>8-10人，读书沙龙</p></article>
  </div>
</section>

<section class="container section">
  <h2>提交预约</h2>

  <?php if ($submitted): ?>
    <div class="card" style="border-color:#9ecb9e;background:#f3fff3;">
      <p><strong>预约提交成功！</strong></p>
      <p>包房：<?php echo esc_html($data['room']); ?></p>
      <p>日期：<?php echo esc_html($data['date']); ?></p>
      <p>时段：<?php echo esc_html($data['slot']); ?></p>
      <p>联系人：<?php echo esc_html($data['name']); ?>（<?php echo esc_html($data['phone']); ?>）</p>
      <p>我们会尽快与您确认。</p>
    </div>
  <?php else: ?>
    <?php if (!empty($errors)): ?>
      <div class="card" style="border-color:#e6b8b8;background:#fff6f6;">
        <?php foreach ($errors as $err): ?>
          <p>• <?php echo esc_html($err); ?></p>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>

    <form method="post" class="booking-form">
      <div class="form-row">
        <label>选择包房</label>
        <select name="room" required>
          <option value="">请选择</option>
          <option value="包房A（雅间）" <?php selected($data['room'], '包房A（雅间）'); ?>>包房A（雅间）</option>
          <option value="包房B（茶花间）" <?php selected($data['room'], '包房B（茶花间）'); ?>>包房B（茶花间）</option>
          <option value="包房C（石影间）" <?php selected($data['room'], '包房C（石影间）'); ?>>包房C（石影间）</option>
        </select>
      </div>

      <div class="form-row">
        <label>日期</label>
        <input type="date" name="date" value="<?php echo esc_attr($data['date']); ?>" required>
      </div>

      <div class="form-row">
        <label>时段</label>
        <select name="slot" required>
          <option value="">请选择</option>
          <option value="10:00-12:00" <?php selected($data['slot'], '10:00-12:00'); ?>>10:00-12:00</option>
          <option value="14:00-16:00" <?php selected($data['slot'], '14:00-16:00'); ?>>14:00-16:00</option>
          <option value="16:00-18:00" <?php selected($data['slot'], '16:00-18:00'); ?>>16:00-18:00</option>
          <option value="19:00-21:00" <?php selected($data['slot'], '19:00-21:00'); ?>>19:00-21:00</option>
        </select>
      </div>

      <div class="form-row">
        <label>联系人</label>
        <input type="text" name="name" value="<?php echo esc_attr($data['name']); ?>" required>
      </div>

      <div class="form-row">
        <label>手机号</label>
        <input type="tel" name="phone" value="<?php echo esc_attr($data['phone']); ?>" required>
      </div>

      <button class="btn" type="submit">提交预约</button>
    </form>
  <?php endif; ?>
</section>

<?php get_footer(); ?>
