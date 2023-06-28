# Definir a imagem base
FROM node:14

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos do projeto para o diretório de trabalho
COPY package.json package-lock.json /app/

# Instalar as dependências do projeto
RUN npm ci

# Copiar todo o código fonte para o diretório de trabalho
COPY . /app

# Expor a porta do aplicativo
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
