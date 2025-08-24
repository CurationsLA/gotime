# Development Navigation

The Curations website includes a development-only navigation bar that appears at the top of all pages when running in development mode.

## Features

- **Automatic Detection**: Only shows in development environment (`NODE_ENV=development`)
- **Production Safe**: Automatically hidden on production domains (`curations.cc`, `www.curations.cc`)
- **Quick Access**: Provides direct links to all pages and sections
- **Non-Intrusive**: Uses minimal space and can be manually hidden
- **Visual Indicators**: Highlights current page and provides hover effects

## Usage

The dev navigation will automatically appear when:
1. Running in development mode (`npm run dev`)
2. Not on a production domain

## Navigation Links

- 🏠 Home
- About
- All Services
- 🍽️ Restaurant & Biz
- 🤖 AI Discovery
- 📰 Public Relations
- 🎨 Creative Campaigns
- 🤝 Influencer & UGC
- 🗞️ Newsletters
- 🛠️ Branding Toolkit
- 👥 Youth Curators
- 📤 Outbox
- Contact

## Hiding the Navigation

Click the "Hide" button in the top-right corner of the dev navigation to hide it for the current session. Refresh the page to restore it.

## Styling

The dev navigation uses:
- Black background with lime green text (`#EBF998`)
- Hot pink accents (`#FF69B4`) for branding and hover states
- Monospace font for technical appearance
- Compact height to minimize screen space usage

The main navigation automatically adjusts its position when the dev navigation is active.