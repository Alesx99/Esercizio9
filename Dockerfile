# Dockerfile per l'applicazione Node.js
FROM node:18-alpine

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file di dipendenze
COPY package*.json ./

# Installa le dipendenze
RUN npm ci --only=production

# Copia il codice sorgente
COPY . .

# Espone la porta 3000
EXPOSE 3000

# Comando per avviare l'applicazione
CMD ["npm", "start"] 