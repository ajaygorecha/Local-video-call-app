const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Store connected clients
const clients = new Map();

// Create WebSocket server
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n✅ Server running on http://0.0.0.0:${PORT}`);
    console.log(`📱 Access from other devices on same WiFi using your local IP`);
    console.log(`   Example: http://192.168.1.x:${PORT}\n`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('New client connected');
    
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            
            switch (data.type) {
                case 'register':
                    // Register client with their device ID
                    clients.set(data.deviceId, ws);
                    ws.deviceId = data.deviceId;
                    console.log(`📱 Device registered: ${data.deviceId}`);
                    console.log(`   Total devices: ${clients.size}`);
                    break;
                    
                case 'offer':
                case 'answer':
                case 'ice-candidate':
                case 'hang-up':
                    // Forward signaling messages to target device
                    const targetWs = clients.get(data.to);
                    if (targetWs && targetWs.readyState === WebSocket.OPEN) {
                        targetWs.send(JSON.stringify(data));
                        console.log(`📤 ${data.type} from ${data.from} to ${data.to}`);
                    } else {
                        // Send error back to sender
                        ws.send(JSON.stringify({
                            type: 'error',
                            message: 'Target device not found or offline'
                        }));
                        console.log(`❌ Target ${data.to} not found`);
                    }
                    break;
            }
        } catch (error) {
            console.error('Error handling message:', error);
        }
    });
    
    ws.on('close', () => {
        if (ws.deviceId) {
            clients.delete(ws.deviceId);
            console.log(`📱 Device disconnected: ${ws.deviceId}`);
            console.log(`   Total devices: ${clients.size}`);
        }
    });
    
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

console.log('WebSocket server ready for connections');
