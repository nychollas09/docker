# Mysql e Node.js

```yml
version: "3"

services:
  db:
    image: mysql:8
    command: --innodb-use-native-aio=0
    container_name: mysql
    restart: always
    tty: true
    volumes:
      - ./database:/var/lib/mysql
    environment:
      - MYSQL_DATABASE=nodedb
      - MYSQL_ROOT_PASSWORD=root
    networks:
      - node-network

networks:
  node-network:
    driver: bridge
```
