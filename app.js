const express = require('express');
const mqtt = require('mqtt');
const app = express();
const port = process.env.PORT || 3000;

// Conexión al broker MQTT
const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
  console.log('Conectado al broker MQTT');
});

// Ruta para obtener datos del sensor
app.get('/sensor-data', (req, res) => {
  client.subscribe('sensor/data', (err) => {
    if (!err) {
      client.on('message', (topic, message) => {
        const data = JSON.parse(message.toString());
        res.json(data);
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
