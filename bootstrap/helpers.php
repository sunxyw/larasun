<?php
/**
 * Global Helper Functions
 */

/**
 * Return Active Class If Current URI Match Pattern.
 *
 * @param string $pattern
 * @param string $active_class
 * @author sunxyw <xy2496419818@gmail.com>
 * @return bool|string
 */
function activeIf(string $pattern, string $active_class = 'active')
{
    return request()->is($pattern) ?? (string)$active_class;
}