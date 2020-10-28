const { Cookify } = require('cookify');

window.top.cookify = new Cookify;

cookify.init({
    "name": "eric",
    "cookies": {
        "analytics": {
            "name": "Analytics",
        },
    },
});