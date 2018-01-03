Package.describe({
  name: 'scannerjs:scanner.js',
  version: '2.10.3',
  summary: 'ScannerJS: JavaScript web scan JPG PDF images from TWAIN scanners in browsers Chrome Firefox IE)',
  git: 'https://github.com/Asprise/scannerjs.javascript-scanner-web-twain-wia-browsers-scanner.js',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  
  var assets = [
	'dist/asprise_scan.jar',
	'dist/asprise_scan-legacy.jar'
  ];
  
  if (api.addAssets) {
    api.addAssets(assets, 'client');
  } else {
    api.addFiles(assets, 'client', { isAsset: true });
  }  
  
  api.addFiles([
    'dist/scanner.js',
	'dist/scannerjs.css'
  ], 'client');
});