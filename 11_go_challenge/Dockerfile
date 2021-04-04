FROM golang AS build

WORKDIR /usr/src/app

COPY main.go .

RUN go build main.go

FROM scratch

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/main .

ENTRYPOINT [ "./main" ]