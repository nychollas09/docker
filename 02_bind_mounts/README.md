# Bind Mounts

É um meio de "refletir" (montar) um diretório específico da máquina para dentro de um diretório do container em questão.

PS: Mesmo depois do container ser iniciado, qualquer alteração em qualquer arquivo ou pasta do caminho especificado, vai ser refletido dentro do container.

<br>

### Maneira "antiga" de realizar o bind mounts

```bash
# Executa o bind mount no container especificado

docker run -d --name nginx -p 8080:80 -v CAMINHO_DA_PASTA_A_SER_MONTADA:CAMINHO_DENTRO_DO_CONTAINER_ONDE_A_PASTA_VAI_SER_MONTADA nginx

# EX:

docker run -d --name nginx -p 8080:80 -v ~/ambiente_de_desenvolvimento/CODE_EDUCATION/jornada_docker/bind_mounts/html:/usr/share/nginx/html nginx
```

<br>

### Maneira mais atual de realizar o bind mounts

```bash
# "--mount" = Especifica que o Mount será realizado

# "type" = Especifica o tipo do mount que será realizado

# "source" = Caminho na máquina da pasta que será refletida no container

# "target" = Caminho no container onde será refletido o mount

# PS: "$(pwd)" funciona como uma abreviação para o caminho absoluto que seria informado, ele pega o caminho relativo de onde o comando está sendo executado.

docker run -d --name nginx -p 8080:80 --mount type=TIPO_DO_MOUNT,source=CAMINHO_DA_PASTA_A_SER_MONTADA,target=CAMINHO_DENTRO_DO_CONTAINER_ONDE_A_PASTA_VAI_SER_MONTADA

# EX:

docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=/usr/share/nginx/html
```

<br>

## Diferença entre "-v" e "--mount"

Com o "-v", mesmo que o caminho da pasta na máquina não exista, ele cria e efetua o bind mount dentro do caminho do especificado do container.

Já o "--mount", avisa que o caminho da pasta na máquina não existe e não consegue efetuar o bind mount.
