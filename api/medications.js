import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Medications Database
const medications = [
  {
    patientId: "P001",
    patientName: "James Mitchell",
    antibiotic: "Meropenem",
    startDate: "2024-02-10",
    daysOn: 5,
    dose: "1g IV q8h",
    wardId: "AM01"
  },
  {
    patientId: "P002",
    patientName: "Sarah Johnson",
    antibiotic: "Piperacillin-tazobactam",
    startDate: "2024-02-08",
    daysOn: 7,
    dose: "4.5g IV q6h",
    wardId: "ICU02"
  },
  {
    patientId: "P003",
    patientName: "Robert Chen",
    antibiotic: "Ceftriaxone",
    startDate: "2024-02-09",
    daysOn: 6,
    dose: "2g IV q12h",
    wardId: "MED03"
  }
];

// GET all medications
app.get('/api/medications', (req, res) => {
  res.json(medications);
});

// GET specific patient medication
app.get('/api/medications/:patientId', (req, res) => {
  const med = medications.find(m => m.patientId === req.params.patientId);
  if (med) {
    res.json(med);
  } else {
    res.status(404).json({ error: 'Patient not found' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;
