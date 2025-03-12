// Configuración del cliente MQTT
const client = mqtt.connect('wss://test.mosquitto.org:8081'); // Broker público

client.on('connect', () => {
  console.log('Conectado al broker MQTT');
  client.subscribe('sensor/data'); // Suscribirse al tópico
});

client.on('message', (topic, message) => {
  if (topic === 'sensor/data') {
    const data = JSON.parse(message.toString());
    document.getElementById('temp').textContent = data.temperature;
    document.getElementById('hum').textContent = data.humidity;
  }
});
