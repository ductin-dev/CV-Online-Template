docker-compose down --rmi all
docker load -i ./build.tar
docker-compose -p "GiangCV" up -d