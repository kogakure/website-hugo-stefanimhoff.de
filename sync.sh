#!/bin/sh
rsync -v -r --delete \
            --exclude '.DS_Store' \
            --exclude '.git/' \
            --exclude 'config.toml' \
            --exclude 'config.production.toml' \
            --exclude 'gulp/config.js' \
            --exclude 'node_modules/' \
            --exclude 'build/' \
            --exclude 'app/static/.htaccess' \
            --exclude 'app/static/.htpasswd' \
            --exclude 'app/static/LiveSearchSiteAuth.xml' \
            --exclude 'app/static/y_key_dc6ca9ea04c4d2d2.html' \
            --exclude 'app/static/googleeac4fc886a6f9f8d.html' \
            --exclude 'app/static/BingSiteAuth.xml' \
            --exclude 'app/static/pinterest-428b1.html' \
            --exclude 'app/assets/images/xing/' \
            --exclude 'app/assets/images/artikel/' \
            --exclude 'app/content/articles/' \
            --exclude 'app/data/articles/' \
            --exclude 'app/layouts/partials/head/mint.html' \
            --exclude 'app/layouts/partials/head/tracking.html' \
            --exclude 'sync.sh' \
            . /Users/kogakure/Code/github/kogakure/stefanimhoff.de-hugo/
