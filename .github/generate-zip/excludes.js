module.exports = {
	//anything under these directories will be excluded from build
	dirs: [
		'.git',
		'.idea',
		'bin',
		'tests',
		'contributing',
		'cypress',
		'node_modules',
		'build',
		'wp-content',
		'wordpress',
		'ui/blocks/cform/node_modules/',
		'.github',
		'clients',
	],
	//any file path in this array will be excluded from the build
	files: [
		'.distignore',
		'.gitignore',
		'.composer.lock',
		'.babelrc',
		'.env',
		'.travis.yml',
		'CONTRIBUTING.md',
		'Dockerfile',
		'db-error.php',
		'webpack.config.js',
		'docker-compose.yml',
		'phpunit-integration.xml.dist',
		'phpunit-unit.xml.dist',
		'phpunit.xml.dist',
		'ui/blocks/cform/package.json',
		'ui/blocks/cform/package-lock.json',
		'ui/blocks/cform/webpack.config.js',
		'includes/cf-pro-client/client/',
		'includes/cf-pro-client/client/dist/favicon.io',
		'includes/cf-pro-client/DEV-README.MD',
		'includes/cf-pro-client/README.md',
		'includes/cf-pro-client/composer.json',
		'includes/cf-pro-client/composer.lock',
		'includes/cf-pro-client/package-lock.json',
		'includes/cf-pro-client/package.json',
	]
};