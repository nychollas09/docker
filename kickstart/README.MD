# Kickstart

## Comandos básicos

```bash
# Exibe todos os containers em execução na máquina
docker ps

# Exibe todos os container ativos ou inativos existentes na máquina
docker ps -a
```

```bash
# Executa o container com o nome informado
docker run IMAGE_NAME

# Especificando a imagem e a versão
docker run IMAGE_NAME:IMAGE_VERSION
```

## Interação com o container

```bash
# "-i" = Interactive Mode, mantem o STDIN ativo para segurar o processo do container rodando

# "-t" = TTY, habilita a opção de rodar comandos no contexto do container

# O que vinher depois da espeficação da imagem a ser utilizada, vai ser executado dentro do contexto do container
docker run -it ubuntu:lastest bash

# ou

docker run -i -t ubuntu:lastest bash
```

```bash
# Exibe todos os containers em execução na máquina
docker ps
```
