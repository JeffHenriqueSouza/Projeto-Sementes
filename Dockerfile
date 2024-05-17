# Use uma imagem Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

# Instale as dependências do projeto
RUN npm install

# Exponha a porta em que a aplicação está executando
EXPOSE 4000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "run", "start:prod"]
