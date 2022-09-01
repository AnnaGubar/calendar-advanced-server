1. `npm init -y`
2. `npm i json-server` 
3. создаем `server.js` -> подключение json-server
4. создаем `db.json` с примером 
5. добавляем команду-скрипт в package.json -> ` "start": "node server.js"` 
  - `npm start` - запуск сервера
6. `heroku login`
7. `git init`
8. создаем файл `Procfile` -> `web: node server.js` команда запуска сервера
9. `touch .gitignore`
10. `git status` - проверить какие файлы необходимо занести в .gitignore
11. `git add .` -> `git commit -m "название комита"`
12. `heroku create -a example-app-server` - создание 
13. `git remote -v` - правильные ли url
14. `git push heroku main` 

