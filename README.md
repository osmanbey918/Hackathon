# Dubai Restaurant - Hackathon Project

A modern, full-stack restaurant web application built with React, Redux Toolkit, and Firebase. This project allows users to browse a menu, place orders, manage their cart, and provides admin and user dashboards. The app features authentication, real-time menu management, and a beautiful, responsive UI.

## Features

- **User Authentication**: Sign up, log in, and log out with Firebase Auth.
- **Role-based Dashboards**: Separate dashboards for users and admins.
- **Menu Management**: Browse, search, and filter menu items. Admins can add new dishes with images.
- **Cart & Orders**: Add items to cart, update quantities, place orders, and view order history.
- **Admin Panel**: View all menu items and orders.
- **About & Contact Pages**: Learn about the restaurant and contact the team.
- **Responsive Design**: Modern glassmorphism UI, mobile-friendly.

## Tech Stack

- **Frontend**: React, Redux Toolkit, React Router DOM
- **Backend/Database**: Firebase (Firestore, Auth, Storage)
- **Styling**: CSS (custom, glassmorphism)
- **Testing**: Jest, React Testing Library

## Folder Structure

```
├── public/                # Static files and index.html
├── src/
│   ├── assets/            # Images and PDFs
│   ├── components/        # Reusable UI components
│   ├── config/            # Firebase configuration
│   ├── pages/             # Page components (Home, Menu, About, etc.)
│   ├── routing/           # App routing
│   ├── store/             # Redux store and slices
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── ...
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/osmanbey918/Hackathon.git
   cd Hackathon
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Firebase Setup:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Replace the config in `src/config/fireBaseConfig.js` with your own Firebase credentials if needed.

4. **Start the development server:**
   ```sh
   npm start
   # or
   yarn start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

### Build for Production

```sh
npm run build
```

### Deploy

This project is configured for GitHub Pages deployment:

```sh
npm run deploy
```

## Scripts

- `npm start` – Start development server
- `npm run build` – Build for production
- `npm test` – Run tests
- `npm run deploy` – Deploy to GitHub Pages

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

---

*Made with ❤️ for Hackathon by Osman Bey and team.*
