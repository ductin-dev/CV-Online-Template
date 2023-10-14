docker-compose stop
docker image rmi giangcv-fe:latest
docker load -i ./build.tar
docker-compose up -p "GiangCV" -d