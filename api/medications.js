export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const medications = [
    {
      patientId: "P001",
      patientName: "James Mitchell",
      antibiotic: "Meropenem",
      startDate: "2024-02-10",
      daysOn: 5,
      wardId: "AM01"
    },
    {
      patientId: "P002",
      patientName: "Sarah Johnson",
      antibiotic: "Piperacillin-tazobactam",
      startDate: "2024-02-08",
      daysOn: 7,
      wardId: "ICU02"
    },
    {
      patientId: "P003",
      patientName: "Robert Chen",
      antibiotic: "Ceftriaxone",
      startDate: "2024-02-09",
      daysOn: 6,
      wardId: "MED03"
    }
  ];

  const path = req.url || '/';
  
  if (path === '/' || path === '/api/medications') {
    return res.status(200).json(medications);
  }

  const patientId = path.split('/').pop();
  const med = medications.find(m => m.patientId === patientId);
  
  if (med) {
    return res.status(200).json(med);
  }
  
  return res.status(404).json({ error: 'Not found' });
}
