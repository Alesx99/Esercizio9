# 🚀 Pipeline CI/CD Completa

Questo progetto dimostra una pipeline CI/CD completa utilizzando GitHub Actions.

## 📋 Caratteristiche

- ✅ **Lint & Test**: Verifica qualità codice e test unitari
- 🐳 **Build Docker**: Costruzione automatica immagini Docker
- 🚀 **Deploy**: Distribuzione automatica in produzione
- 📢 **Notifiche**: Alert in caso di fallimento
- 🔒 **Sicurezza**: Audit di sicurezza automatico

## 🏗️ Struttura

```
esercizio9/
├── .github/workflows/ci-cd.yml  # Pipeline principale
├── test/app.test.js             # Test unitari
├── package.json                 # Configurazione Node.js
├── Dockerfile                   # Configurazione Docker
├── index.js                     # Applicazione di esempio
├── .eslintrc.js                 # Configurazione ESLint
├── jest.config.js               # Configurazione Jest
└── README.html                  # Documentazione dettagliata
```

## 🚀 Quick Start

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd esercizio9
   ```

2. **Installa dipendenze**
   ```bash
   npm install
   ```

3. **Testa localmente**
   ```bash
   npm run lint
   npm test
   npm start
   ```

4. **Push su GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

5. **Verifica Actions**
   - Vai su GitHub → Actions
   - Controlla che la pipeline si sia attivata

## 📖 Documentazione

Per una guida completa e dettagliata, apri `README.html` nel browser.

## 🔧 Personalizzazione

### Cambiare Versione Node.js
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'  # Cambia qui
```

### Aggiungere Notifiche Slack
```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    channel: '#deployments'
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## 🛠️ Tecnologie Utilizzate

- **GitHub Actions**: Automazione CI/CD
- **Node.js**: Runtime JavaScript
- **Docker**: Containerizzazione
- **Jest**: Testing framework
- **ESLint**: Linting del codice
- **Express**: Web framework

## 📞 Supporto

Per domande o problemi:
1. Controlla la sezione Troubleshooting in `README.html`
2. Verifica i log delle Actions su GitHub
3. Esegui i test localmente per debug

---

**🎯 Obiettivo**: Automatizzare completamente il processo di sviluppo, test e deploy! 