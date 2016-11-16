// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  'list': [
    'index.html',
    'config.js',
    'favicon.ico',
    'jspm_packages/npm/bluebird@3.4.1/js/browser/bluebird.min.js',
    'jspm_packages/system.js',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    'jspm_packages/github/systemjs/plugin-text@0.0.8.js',
    'jspm_packages/github/systemjs/plugin-text@0.0.8/text.js',
    'jspm_packages/npm/bootstrap-datepicker@1.6.4/**',
    'jspm_packages/github/select2/select2@4.0.3/css/select2.min.css',
    'jspm_packages/npm/moment@2.15.2/moment.js',
    'jspm_packages/npm/numeral@1.5.3/numeral.js',
    'jspm_packages/github/CodeSeven/toastr@2.1.3/build/toastr.min.js',
    'jspm_packages/github/CodeSeven/toastr@2.1.3/build/toastr.min.css',
    'jspm_packages/github/CodeSeven/toastr@2.1.3.js',
    'dist/styles.css'
  ],
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  'normalize': [
    [
      // include font-awesome.css and its fonts files
      'font-awesome', [
        '/css/font-awesome.min.css',
        '/fonts/*'
      ]
    ], [
      // include bootstrap's font files
      'bootstrap', [
        '/fonts/*'
      ]
    ], [
      'bluebird', [
        '/js/browser/bluebird.min.js'
      ]
    ]
  ]
};
