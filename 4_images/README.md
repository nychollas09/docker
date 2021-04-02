# Images

## Comandos básicos

```bash
# Exibe todos as imagens baixadas na máquina

docker images
```

```bash
# Baixa a imagem na versão especificada

docker pull IMAGE_NAME:IMAGE_TAG
```

```bash
# Destroi a imagem na versão especificada

docker rmi IMAGENAME:IMAGE_TAG
```

## Comandos Dockerfile

```Dockerfile
# Especifica a partir de qual imagem vai trabalhar

FROM nginx:latest

# Acessa o path especificado dentro do container (Caso não exista, ele cria)

WORKDIR /app

# Executa o comando especificado dentro do container

RUN apt-get update && \
    apt-get install -y

# Copia uma pasta específica da máquina para dentro do container

# PS: O path é definido a partir de onde está o Dockerfile

# COPY PATH_DA_PASTA_NA_MAQUINA PATH_DENTRO_DO_CONTAINER

COPY html /usr/share/nginx/html
```

## Buildando imagem customizada

```bash
# Efetua o build de uma imagem a partir das instruções do Dockerfile

# "-t" = Especifica o usuário do Docker Registry (Seja o padrão DockerHub, ou outro Container Registry pre configurado) com o nome da imagem e a tag (versão).

docker build -t CONTAINER_RESGISTRY_USER/IMAGE_NAME:IMAGE_TAG DOCKERFILE_PATH

# EX:

docker build -t nichollasf/nginx-with-vim:latest .
```
