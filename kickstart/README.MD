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
docker run -it ubuntu:latest bash

# ou

docker run -i -t ubuntu:latest bash
```

```bash
# Exibe todos os containers em execução na máquina
docker ps
```

## Remoção do container

```bash
# "--rm" = Assim que o processo do container acabar, o container vai ser excluido, evitando ficar obsolento.
docker run -it --rm ubuntu:latest bash
```

PS: O container morre quando o processo rodando acaba.

## Exposição de portas

A imagem do NGinx tem por padrão a porta 80 exposta para a máquina que está executando o container, porém, não é acessivel, sendo necessário realizar o redirecionamento das portas.

```bash
# "-p" = Efetua o redirecionamento da porta do container (inacessível) para uma porta disponível na máquina (Docker Host).

# Acessando a porta 8080 do Docker Host, vai ser refletida a porta 80 do Docker container.

# A porta 80 é exportado por padrão pela imagem nginx

docker run -p PORTA_DISPONÍVEL_NA_MAQUINA:PORTA_EXPOSTA_PELO_CONTAINER nginx

docker run -p 8080:80 nginx
```

## Desassociando o processo do container do terminal

```bash
# "-d" = detach, Efetua a desassociação do processo do terminal com o processo do container

docker run -d -p 8080:80 nginx
```
