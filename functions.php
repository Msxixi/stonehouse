<?php
if (!defined('ABSPATH')) exit;

function shc_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);

    register_nav_menus([
        'primary' => __('Primary Menu', 'stone-house-cafe'),
    ]);
}
add_action('after_setup_theme', 'shc_theme_setup');

function shc_enqueue_assets() {
    wp_enqueue_style('shc-theme', get_template_directory_uri() . '/assets/css/theme.css', [], '1.1.0');
    wp_enqueue_script('shc-theme', get_template_directory_uri() . '/assets/js/theme.js', [], '1.1.0', true);
}
add_action('wp_enqueue_scripts', 'shc_enqueue_assets');

/**
 * 通过 slug 获取页面链接，避免写死 /menu /beans 导致 404
 */
function shc_get_page_url_by_path($path, $fallback = '/') {
    $page = get_page_by_path($path);
    if ($page) return get_permalink($page->ID);
    return home_url($fallback);
}

/**
 * 菜单数据（后续可替换为 Python API）
 */
function shc_get_menu_items() {
    return [
        ['name' => '云南手冲', 'desc' => '花香与柑橘调，尾段干净。', 'price' => 38, 'tag' => '手冲'],
        ['name' => '石房子拿铁', 'desc' => '醇厚坚果风味，奶香平衡。', 'price' => 32, 'tag' => '意式'],
        ['name' => '茶花公园特调', 'desc' => '季节限定，清爽果感。', 'price' => 42, 'tag' => '特调'],
    ];
}

function shc_get_bean_items() {
    return [
        ['name' => '云南保山 水洗', 'origin' => '云南保山', 'process' => '水洗', 'flavor' => '柑橘 / 坚果 / 焦糖', 'roast' => '中烘', 'price' => 88],
        ['name' => '耶加雪菲 日晒', 'origin' => '埃塞俄比亚', 'process' => '日晒', 'flavor' => '莓果 / 花香 / 茶感', 'roast' => '浅烘', 'price' => 118],
        ['name' => '危地马拉 安提瓜', 'origin' => '危地马拉', 'process' => '水洗', 'flavor' => '可可 / 红糖 / 柑橘', 'roast' => '中深烘', 'price' => 98],
    ];
}
