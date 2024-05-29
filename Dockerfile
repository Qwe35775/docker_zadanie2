FROM node:alpine

LABEL author="Dawid Smarzak"

# optymalizacja cache
RUN apk add --no-cache nodejs npm

# tworzenie katalogu w kontenerze
WORKDIR /app

# kopiowanie plikow do utworzengo katalogu
COPY server.js /app/server.js

RUN apk add --update curl && \
rm -rf /ar/cache/apk/*

# instalowanie zaleznosci aplikacji
RUN npm init -y && npm install http

# okreslanie portu
ENV PORT=8080

# otworzenie wybranego portu
EXPOSE $PORT

HEALTHCHECK --interval=10s --timeout=3s \
 CMD curl -f http://localhost:8080/ || exit 1

# uruchomienie serwera 
CMD ["node", "server.js"]
