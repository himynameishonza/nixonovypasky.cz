const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: [
            'images.unsplash.com',
            'digitalni.zeleznakoule.cz',
            'protiproudu.net',
            'koule.s3.eu-central-1.amazonaws.com',
            'www.zeleznakoule.cz',
        ],
    },

    crossOrigin: 'anonymous',
};
