# Volumes

É uma maneira mais prática de compartilhar dados com um ou mais container sem a problemática do path absoluto ou relativo dos arquivos a serem compartilhados.

## Comandos básicos

```bash
# Exibe todos os volumes disponíveis

docker volume ls
```

```bash
# Cria uma volume com o nome especificado

docker volume create VOLUME_NAME
```

```bash
# Exibe as informações do volume especificado

docker volume inspect VOLUME_NAME
```

```bash
# Remeo todos o "execesso" de volume que não foram utilizados no último container executado

docker volume prune
```

## Mapeando volume para container

```bash
# Efetua o mapeamento do volume especificado para o container

docker run -d -p 8080:80 --name nginx --mount type=volume,source=VOLUME_NAME,target=CAMINHO_DENTRO_DO_CONTAINER nginx

# ou

docker run -d -p 8080:80 --name nginx -v VOLUME_NAME:CAMINHO_DENTRO_DO_CONTAINER nginx

# EX:

docker run -d -p 8080:80 --name nginx --mount type=volume,source=meuvolume,target=/app nginx

# ou

docker run -d -p 8080:80 --name nginx -v meuvolume:/app nginx
```

PS: O mesmo volume pode ser compartilhado em mais de um container e sempre será efetuado o bind de informações, ou seja, se o container1 adicionar um arquivo dentro do volume que foi compartilhado, essa alteração sera refletida em qualquer outro container que utilize o mesmo volume.
