const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Mock BioGPT status
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    model: 'BioGPT-Large-Quantized',
    compressionEngine: 'ScaleDown v1.0.2',
    gpu: 'Simulated (T4)'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
