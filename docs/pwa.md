
## PWA

- https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive
- [actualización del service worker y la caché] (https://developers.google.com/web/tools/workbox/modules/workbox-broadcast-cache-update)
- [¿otro ejemplo de actualización?](https://github.com/googlearchive/workbox-microsite/blob/master/src/themes/scripts/sw-controller.js#L18)
- [leer sobre el tema](https://www.google.com/search?num=20&safe=off&ei=bNUpXN3VA9uR1fAP7omooAs&q=workbox+update+cache&oq=workbox+update&gs_l=psy-ab.1.2.35i39l2j0j0i22i30.3378.5102..10170...2.0..0.117.330.0j3......0....1..gws-wiz.......0i71j35i304i39j0i13j0i8i13i30.rDtywOx9aEU)
- lighthouse
- manifest a pelo
- https://github.com/Polymer/pwa-helpers
- workbox 
- repasar cosas a poner en el html: https://github.com/Polymer/pwa-starter-kit/blob/master/index.html
- https://www.hartwell-insurance.com/sw.js
- pwa: workbox + webpack plugins

### Webpack + workbox snippets

- manifest.json / webpack-manifest-plugin

```js
    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,

//precaching
      // -- por el webpack-copy-plugin cogiendo todos los html/bundles, etc...

//runtimecaching
      runtimeCaching: [
//carga rest api de cache si no hay conexion
      {
        urlPattern: new RegExp('(.*)/admin/(.*)'),
        handler: 'networkFirst'
      },
//carga css de cache y busca actualizacion
        {
          urlPattern: /\.(?:css)$/,
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'css',
          },
        },
//si tienes la imagen carga de cache y si no internet
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|ico)$/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 20,
            },
          },
        },
      ]
    })
```

### PWA / pjax

- https://www.google.es/search?q=pwa+pjax
- https://github.com/jbmoelker/progressive-enhancement-resources#page-navigation
- https://www.google.es/search?q=pwa+turbolinks
- https://github.com/defunkt/jquery-pjax

- https://developers.google.com/web/tools/lighthouse/
- https://www.netlify.com/blog/2018/09/21/international-service-worker-caching-awareness-day/
