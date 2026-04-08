/**
 * 读取主题目录下某个相对目录的所有图片URL
 * @param string $relative_dir 例如 'assets/images/uploads/home'
 * @return array
 */
function shc_get_images_from_dir($relative_dir) {
    $base_dir = trailingslashit(get_template_directory()) . trim($relative_dir, '/');
    $base_uri = trailingslashit(get_template_directory_uri()) . trim($relative_dir, '/');

    if (!is_dir($base_dir)) return [];

    $allowed = ['jpg', 'jpeg', 'png', 'webp'];
    $files = scandir($base_dir);
    if (!$files) return [];

    $images = [];
    foreach ($files as $file) {
        if ($file === '.' || $file === '..') continue;
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        if (!in_array($ext, $allowed, true)) continue;
        $images[] = $base_uri . '/' . rawurlencode($file);
    }

    // 自然排序（01,02,10）
    natsort($images);
    return array_values($images);
}
