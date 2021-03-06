## Запуск приложения

##### Для стандартного процесса разработки достаточно установить Docker Desktop на свой ЭВМ и из корня проекта запустить команду `npm run bootstrap`. Что она делает:
##### 1) Пуллит, собирает и запускает докер-контейнер монги, при этом локальный порт `27017` начинает проксировать запросы на локальный для контейнера порт `27107` командой `docker run --name mongo -v $(pwd)/mongo/data:/data/db -p 27017:27017 -d mongo`. Это означает, что по `localhost:27017` вы теперь имеете доступ к базе данных.
##### 2) Запускает `webpack --watch` в директории клиента, который собирает `dist` и начинает слушать изменения файлов. В случае, если он ловит эти изменения, дёргается пересборка и собирается новый `dist`.
##### 3) Запускает `nodemon` (из-под `ts-node`) для сервера, который также следит за изменениями в серверной части и перезапускает интерпретацию при найденных изменениях. Сервер слушает `3000` сокет, по индексу (`/`) отдаёт то, что собралось вебпаком в папке `dist` клиента. По различным ручкам, типа `localhost:3000/api/v1/users` отдаёт то, что мы описываем.

## Глава про Docker

### Лезем в контейнер:
##### 1) Достаём id (`container_id`) интересующего контейнера по его имени (`name`): `docker ps | grep <name>` 
##### 2) Лезем в терминал внутри контейнера: `docker exec -it <container_id> bash`

### Про убийства:
##### Убиваем все процессы: `docker kill $(docker ps -a -q)`
##### Стираем все процессы: `docker rm $(docker ps -a -q)`
##### Стираем все образы: `docker rmi $(docker images -q)`

### Поднимаем инстанс docker-compose:
##### Из корня проекта: `docker-compose up`

## Глава про Nginx

##### Собственно запуск: `docker run -d --name nginx -p 8080:80 -v $(pwd)/web/src:/var/www -v $(pwd)/nginx/nginx.conf:/etc/nginx/nginx.conf --link server:server nginx`
##### Важно: это не запустится без работающего в контейнера сервера, тк они линкуются и nginx хочет бегать по ручке `/ping` для создания правильного мнения о том, живой ли инстанс.

## Техническая инфа:
##### Автогенерация тайпингов из JSON: `https://transform.now.sh/json-to-ts-interface/`.
##### Nodemon в девелопе по CTRL+C падает с `exit(130)` из-за `https://github.com/remy/nodemon/issues/1390`, на проде не отразится, но некрасиво выглядит в деве(
##### Ворнинги типа `enoent ENOENT: no such file or directory, open '.../package.json'` появляются из-за того, что после создания симлинок в node_modules на локальный для проекта src, npm думает, что они - нормальные модули, и начинает рекурсивно их обходить в поисках декларации зависимостей из package.json. Отказываться от симлинок не хочется, а решения, кроме как фильтровать stdout, я пока не придумал; мешает не сильно, и так сойдёт.
##### Чиним бут докер-вм `screen ~/Library/Containers/com.docker.docker/Data/vms/0/tty`

## Конвенции:
##### Ветку в гите именуем как `<typeoffix>/<ticket>-<brief description>`. Пример: `feature/VKPROJECT-1-new-convention`.

##### Префиксуем типы через `T`, интерфейсы через `I`.

## TODO:

#### Add Jest tests
