# express-cors-proxy
Simple Express server to enable CORS.

## Configuration
`package.json` => Remove `cors` if you want to allow every origins <br>
`server.js` => Change `port` if you don't set an PORT environnement variable

## Usage
`http://your_server_ip:8080/?url=<url_to_cors_here>`

## Proxy with Apache
Apache configuration for a `/sub_path/`
```
<Location /cors/ >
  RewriteEngine On
  RewriteRule /cors/(.*) http://127.0.0.1:8889/%1 [P,NC,L]
</Location>
```

For `/`, just remove `<Location>` and use `/(.*)` instead of `/cors/(.*)`

# Credits / Sources
10% from https://www.telerik.com/blogs/supporting-cors-by-proxying-requests-with-express <br>
85% from https://github.com/ccoenraets/cors-proxy <br>
5% from https://www.npmjs.com/package/cors#configuring-cors <br>

## +
To set a usage limit, use `body-parser` like in [this repo](https://github.com/ccoenraets/cors-proxy)
