# Especifica a imagem base
FROM node:14

# Define o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia o arquivo package.json e package-lock.json (se disponível)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia os arquivos do projeto para o diretório de trabalho
COPY . .

# Torna o script de entrada executável e o configura como ponto de entrada
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

# Expõe a porta 3000
EXPOSE 3000

# Define o script de entrada como ponto de entrada
ENTRYPOINT ["./entrypoint.sh"]
