<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit75928c88e3a620d98518fdb7b0799619
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit75928c88e3a620d98518fdb7b0799619::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit75928c88e3a620d98518fdb7b0799619::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
