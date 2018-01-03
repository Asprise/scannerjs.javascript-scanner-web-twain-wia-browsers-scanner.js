[![ScannerJS: JavaScript Web Twain Scanner Access from Browsers (Chrome, Edge, Firefox, IE)](https://asprise.com/res/img/scannerjs-title.png)](http://asprise.com/document-scan-upload-image-browser/direct-to-server-php-asp.net-overview.html)

[Scanner.js enables HTML JavaScript scanning in web browsers (Chrome, Edge, Firefox, IE)](http://asprise.com/document-scan-upload-image-browser/direct-to-server-php-asp.net-overview.html). Scan documents from TWAIN WIA scanners in browsers and upload to the server side, which can be written in any script (Java, C# VB ASP.NET, PHP, Python, Ruby). JPEG, PDF, TIFF are supported.

```js
function scanToWebPageAndUpload() {
  scanner.scan(displayImagesOnPage, {
    "twain_cap_setting" : {
        "ICAP_PIXELTYPE" : "TWPT_RGB", // Color
        "ICAP_SUPPORTEDSIZES" : "TWSS_USLETTER" // Paper size: TWSS_USLETTER, TWSS_A4, ...
    }, 
    "output_settings" : [
        { "type" : "return-base64", "format" : "jpg"} // return images to web page
        { "type": "upload", "format": "pdf", // upload as PDF
            "upload_target": { 
                "url": "https://asprise.com/scan/applet/upload.php?action=dump"
            }
        }
    ]
  });
}
```

## Installation

```bash
bower install scanner
```

## Features

  * Cross-Browser Support: Chrome, Edge, Firefox and IE
  * Integrate To Pages Within An Hour
  * Fast Flatbed And ADF Scanning
  * Generates Thumbnails & Upload To Web Servers Directly
  * Multiple output formats: JPG, PDF, PDF/A, TIFF, CCITT G4
  * Barcode Reading & Blank Page Detection
  * Cloud Ready; Easy Deployment

## Docs & Community

  * [Developer's Guide to ScannerJs](http://asprise.com/scan/scannerjs/docs/html/scannerjs-javascript-guide.html)
  * [Sample code on Github](https://github.com/Asprise/scannerjs.javascript-scanner-access-in-browsers-chrome-ie.scanner.js)
  * For more details, please visit the [Scanner.js homepage](http://asprise.com/document-scan-upload-image-browser/direct-to-server-php-asp.net-overview.html)

## Quick Start

Install Scanner.js:

```bash
bower install scanner
```

Include scanner.js into your page:

```html
<script src="bower_components/scanner/dist/scanner.js"></script>
```

You may then start to call Scanner.js functions:

```html
<button type="button" onclick="scan();">Scan</button> <!-- Triggers scan -->   
<div id="images"/> <!-- Displays scanned images  -->

<script type="text/javascript" >
// Need to upload scanned images to server or save them on hard disk? Please refer to the dev guide: http://asprise.com/document-scan-upload-image-browser/ie-chrome-firefox-scanner-docs.html
// For more scanning code samples, please visit https://github.com/Asprise/scannerjs.javascript-scanner-access-in-browsers-chrome-ie.scanner.js

var scanRequest = {
    "use_asprise_dialog": true, // Whether to use Asprise Scanning Dialog
    "show_scanner_ui": false, // Whether scanner UI should be shown
    "twain_cap_setting": { // Optional scanning settings
        "ICAP_PIXELTYPE": "TWPT_RGB" // Color
    },
    "output_settings": [{
        "type": "return-base64",
        "format": "jpg"
    }]
};

/** Triggers the scan */
function scan() {
    scanner.scan(displayImagesOnPage, scanRequest);
}

/** Processes the scan result */
function displayImagesOnPage(successful, mesg, response) {
    if (!successful) { // On error
        console.error('Failed: ' + mesg);
        return;
    }
    if (successful && mesg != null && mesg.toLowerCase().indexOf('user cancel') >= 0) { // User cancelled.
        console.info('User cancelled');
        return;
    }
    var scannedImages = scanner.getScannedImages(response, true, false); // returns an array of ScannedImage
    for (var i = 0;
        (scannedImages instanceof Array) && i < scannedImages.length; i++) {
        var scannedImage = scannedImages[i];
        var elementImg = scanner.createDomElementFromModel({
            'name': 'img',
            'attributes': {
                'class': 'scanned',
                'src': scannedImage.src
            }
        });
        (document.getElementById('images') ? document.getElementById('images') : document.body).appendChild(elementImg);
    }
}
</script>
```

[Developer's Guide to ScannerJs](http://asprise.com/scan/scannerjs/docs/html/scannerjs-javascript-guide.html)
| [Sample code on Github](https://github.com/Asprise/scannerjs.javascript-scanner-access-in-browsers-chrome-ie.scanner.js)
