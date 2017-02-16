/**
 * Compiles sass files using libsass (damn fast!)
 *
 * https://www.npmjs.org/package/grunt-sass
 */

module.exports = {
	files: {
		expand: true,
		cwd: '<%= Config.PRIVATE_DIR %>/sass',
		src: ['**/*.scss'],
		dest: '<%= Config.PUBLIC_ASSETS %>/css',
		ext: '.css'
	},
	component: {
		expand: true,
		cwd: '<%= Config.PRIVATE_DIR %>/components',
		src: ['**/*.scss'],
		dest: '<%= Config.PUBLIC_APP %>/components',
		ext: '.css'
	}
};