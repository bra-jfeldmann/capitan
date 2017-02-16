/**
 * The magical sync task executes the watch task
 * after one of the specified file types change
 * and reloads the browser
 *
 * https://npmjs.org/package/grunt-browser-sync
 */

var grunt = require('grunt');

module.exports = {
	bsFiles: {
		src: [
			'<%= Config.VIEWS_DIR %>/styleguide.html',
			'<%= Config.PUBLIC_ASSETS %>/js/main.js'
		]
	},
	options: {
		watchTask: true,
		open: 'external',
		notify: false,
		injectChanges: false,
		reloadDelay: 1000,
		server: {
			baseDir: '<%= Config.CWD %>/<%= Config.VIEWS_DIR %>/',
			index: 'styleguide.html',
			routes: '<%= Config.syncRoutes %>'
		},
		ghostMode: {
			clicks: true,
			forms: true,
			scroll: true
		}
	}
};
