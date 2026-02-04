import 'dotenv/config';
import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import { initScheduler } from './services/scheduler.js';
import { initDatabase } from './services/database.js';
import apiRoutes from './routes/api.js';
import webhookRoutes from './routes/webhook.js';
import dashboardRoutes from './routes/dashboard.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Handlebars setup for dashboard
app.engine('handlebars', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '../views/layouts'),
  partialsDir: path.join(__dirname, '../views/partials'),
  helpers: {
    eq: (a, b) => a === b,
    lt: (a, b) => a < b,
    formatDate: (date) => new Date(date).toLocaleDateString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric'
    }),
    formatPercent: (num) => {
      if (num === null || num === undefined) return 0;
      return Math.round(num * 100);
    },
    json: (obj) => JSON.stringify(obj),
    divide: (a, b) => b !== 0 ? a / b : 0,
    subtract: (a, b) => a - b,
    range: (start, end) => Array.from({ length: end - start }, (_, i) => start + i),
    heatLevel: (rate) => {
      if (rate === null || rate === undefined) return 0;
      if (rate < 0.4) return 1;
      if (rate < 0.6) return 2;
      if (rate < 0.7) return 3;
      if (rate < 0.85) return 4;
      return 5;
    },
    lookup: (obj, key) => obj ? obj[key] : null
  }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views'));

// Routes
app.use('/api', apiRoutes);
app.use('/webhook', webhookRoutes);
app.use('/', dashboardRoutes);

// Initialize
async function start() {
  try {
    // Initialize database
    initDatabase();
    console.log('✓ Database initialized');

    // Initialize scheduler
    initScheduler();
    console.log('✓ Scheduler initialized');

    // Start server
    app.listen(PORT, () => {
      console.log(`\n🇪🇸 Spanish Verb Learner running at http://localhost:${PORT}`);
      console.log(`   Dashboard: http://localhost:${PORT}/`);
      console.log(`   Webhook:   http://localhost:${PORT}/webhook/whatsapp`);
    });
  } catch (error) {
    console.error('Failed to start:', error);
    process.exit(1);
  }
}

start();
