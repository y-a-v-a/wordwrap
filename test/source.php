<?php

if (!isset($argv[4])) {
    echo "Usage: $ php source.php 0 8 \\\\n true\n";
    exit;
}

$stringId = (int) $argv[1];
$width = (int) $argv[2];
$lineBreak = $argv[3] === '\n' ? "\n" : $argv[3];
$cut = filter_var($argv[4], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);

$strings = explode("\n\n", @file_get_contents( __DIR__ . '/test.txt'));

$string = '';

if (isset($strings[$stringId])) {
    $string = $strings[$stringId];
} else {
    $string = $string[0];
}

echo wordwrap($string, $width, $lineBreak, $cut);

exit;

