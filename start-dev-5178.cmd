@echo off
cd /d C:\Users\rnakxg\.codex\roshan-portfolio
set NPM_CONFIG_OFFLINE=false
set HTTP_PROXY=
set HTTPS_PROXY=
set ALL_PROXY=
set GIT_HTTP_PROXY=
set GIT_HTTPS_PROXY=
call npm install --cache .npm-cache --prefer-online --registry=https://registry.npmjs.org/
call npm run dev -- --port 5178