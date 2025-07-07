const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware per parsing JSON
app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Applicazione CI/CD funzionante!',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Route di health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Route di test
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Test endpoint funzionante!',
    data: {
      random: Math.random(),
      timestamp: new Date().toISOString()
    }
  });
});

// Avvia il server
app.listen(port, () => {
  console.log(`✅ Server avviato sulla porta ${port}`);
  console.log(`🌐 Applicazione disponibile su http://localhost:${port}`);
  console.log(`🏥 Health check su http://localhost:${port}/health`);
});

module.exports = app; 