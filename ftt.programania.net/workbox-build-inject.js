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
