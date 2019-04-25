
// https://medium.com/@webmaxru/workbox-4-implementing-refresh-to-update-version-flow-using-the-workbox-window-module-41284967e79c

const {injectManifest} = require('workbox-build');

let workboxConfig = {
    globDirectory: 'dist',
    globPatterns: [
        'index.html',
        'assets/site.webmanifest',
        '**/*.{js,png,html,css}'
    ],
    swSrc: 'src/sw.js',
    swDest: 'dist/sw.js'
};

injectManifest(workboxConfig)
    .then(({count, size}) => {
        console.log(`Generated ${workboxConfig.swDest}, which will precache ${count} files, totaling ${size} bytes.`);
    });
