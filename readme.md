# Video Call App - Vercel Deployment

A peer-to-peer video calling app that works worldwide using WebRTC and PeerJS.

## Features
- ✅ Works on **any WiFi/network** (not just local)
- ✅ Persistent Device IDs (saved across refreshes)
- ✅ Real-time peer-to-peer video and audio
- ✅ Mobile-optimized interface
- ✅ Mute/unmute controls
- ✅ No backend server needed
- ✅ Free to deploy on Vercel

## Deploy to Vercel

### Option 1: Quick Deploy (Recommended)

1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! Share the URL with friends

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## How It Works

This app uses **PeerJS** - a free WebRTC signaling service that:
- Connects users peer-to-peer
- Works globally (not just same WiFi)
- Requires no backend server
- Is completely free

## Usage

1. **Open the app** on both devices (can be on different networks/WiFi)
2. **Copy your Device ID** - shown at the top
3. **Share your ID** with the person you want to call (via WhatsApp, SMS, etc.)
4. **Get their Device ID** and paste it in the "Make a Call" section
5. **Tap "Call"** and wait for them to accept
6. **Grant permissions** for camera and microphone

## Device IDs

- Each device gets a unique ID like: `user-abc123def-1234567890`
- IDs are saved in localStorage (persist across page refreshes)
- You can generate a new ID anytime with "Generate New ID"
- Share this ID with others to receive calls

## Files Structure

```
.
├── index.html      # Main app (includes HTML, CSS, JS)
├── vercel.json     # Vercel configuration
└── README.md       # This file
```

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Icons**: Remixicon
- **WebRTC**: Peer-to-peer video/audio
- **Signaling**: PeerJS (free public server)
- **Hosting**: Vercel (free)

## Browser Support

Works on all modern browsers:
- ✅ Chrome/Edge (desktop & mobile)
- ✅ Firefox (desktop & mobile)
- ✅ Safari (iOS 11+, macOS)

## License

MIT
