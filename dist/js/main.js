requirejs.config({
    "baseUrl": "dist/js/lib",
    "paths": {
      "main": "../app",
      "jquery": "jquery.min",
      "bootstrap": "bootstrap.min",
      "core": "core-min",
      "base64": "enc-base64-min",
      "hmac-sha1": "hmac-sha1",
      "sha1": "sha1-min",
      "sha3": "sha3-min",
      "sha256": "sha256-min",
      "sha512": "sha512"
    }
});

// Load the main app module to start the app
requirejs(["main/app"]);

/* different length of SHA-3  */
function selectLength(leng) {
	length = leng;
}