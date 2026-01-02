<div align="center">
  <img 
    src="https://raw.githubusercontent.com/XdAdrish/Jeevan_Aahar/refs/heads/main/Frontend/client/public/favicon.png" 
    width="90"
    alt="Jeevan Aahar Logo"
  />
  <h1>JEEVAN AAHAR</h1>

<p align="left">
	<em>A Meal. A Smile. A Life. - Connecting surplus food with those in need</em>
</p>

<p align="left">
	<img src="https://img.shields.io/github/last-commit/XdAdrish/Jeevan_Aahar?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/XdAdrish/Jeevan_Aahar?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/XdAdrish/Jeevan_Aahar?style=default&color=0080ff" alt="repo-language-count">
</p>
<p>
    🌐 <a href="https://jeevan-aahar.vercel.app/" target="_blank">
      Live Project Website
    </a>
  </p>
</div>
<br clear="right">

<details><summary>Table of Contents</summary>

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#-usage)
  - [🧪 Testing](#-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

</details>
<hr>

## 📍 Overview

**Jeevan Aahar** is a comprehensive food donation platform that bridges the gap between food donors (restaurants, caterers, households) and recipients (NGOs, individuals in need). The platform enables efficient food waste management while fighting hunger in communities through real-time donation tracking, geolocation-based matching, and secure authentication.

Built with modern web technologies, Jeevan Aahar provides:
- **For Donors**: Easy food listing, pickup scheduling, and donation impact tracking
- **For Recipients**: Browse available donations, request food, and receive meals
- **Real-time Updates**: Track donation status from pickup to delivery
- **Location-based Matching**: Smart geospatial sorting to connect nearby donors and recipients

---

## 👾 Features

### Core Functionality
- **🔐 Firebase Authentication**: Secure user authentication with role-based access control (donor/recipient)
- **📍 Geolocation Services**: Location-based donation sorting and matching using MongoDB geospatial indexing
- **📊 Real-time Dashboards**: 
  - Donor dashboard with donation statistics and history
  - Recipient dashboard showing available donations nearby
- **🎯 Smart Donation Wizard**: Multi-step form for easy food donation submission with image upload
- **📱 Responsive Design**: Mobile-first UI built with React, TypeScript, and Tailwind CSS
- **🔔 Status Tracking**: Monitor donations through stages: Pending → In Process → Completed/Rejected
- **📈 Impact Analytics**: Track total meals donated, families helped, and food waste reduced

### Technical Features
- **Type-safe Development**: Full TypeScript implementation on frontend
- **Modern UI Components**: shadcn/ui component library with Radix UI primitives
- **Form Validation**: React Hook Form with Zod schema validation
- **State Management**: React Context API for authentication state
- **API Integration**: RESTful backend with Express.js and MongoDB
- **Cloud Deployment**: Vercel-ready frontend and backend configurations

---

## 📁 Project Structure

```sh
└── Jeevan_Aahar/
    ├── Backend
    │   ├── src
    │   │   ├── app.js              # Express app configuration
    │   │   ├── index.js            # Server entry point
    │   │   ├── config/             # Firebase Admin SDK setup
    │   │   ├── controllers/        # Request handlers
    │   │   ├── db/                 # MongoDB connection
    │   │   ├── middlewares/        # Auth, RBAC, profile validation
    │   │   ├── models/             # Mongoose schemas
    │   │   ├── routes/             # API route definitions
    │   │   └── utils/              # Helper functions
    │   ├── package.json
    │   └── vercel.json
    └── Frontend
        └── client
            ├── src
            │   ├── App.tsx         # Main app component with routing
            │   ├── components/     # Reusable UI components
            │   ├── config/         # Firebase client config
            │   ├── contexts/       # React contexts (Auth)
            │   ├── hooks/          # Custom React hooks
            │   ├── lib/            # Utility functions
            │   ├── pages/          # Page components
            │   └── services/       # API service layers
            ├── package.json
            ├── tailwind.config.ts
            ├── tsconfig.json
            └── vite.config.ts
```

### 📂 Project Index

<details open>
	<summary><b><code>JEEVAN_AAHAR/</code></b></summary>
	<details>
		<summary><b>Backend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/package.json'>package.json</a></b></td>
				<td>Backend dependencies: Express, MongoDB, Mongoose, Firebase Admin SDK, CORS</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/vercel.json'>vercel.json</a></b></td>
				<td>Vercel deployment configuration for serverless backend</td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/app.js'>app.js</a></b></td>
						<td>Express application setup with CORS, middleware, and route configuration</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/index.js'>index.js</a></b></td>
						<td>Server initialization and MongoDB connection</td>
					</tr>
					</table>
					<details>
						<summary><b>config</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/config/firebaseAdmin.js'>firebaseAdmin.js</a></b></td>
								<td>Firebase Admin SDK initialization for server-side authentication</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>models</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/models/formDonation.model.js'>formDonation.model.js</a></b></td>
								<td>Mongoose schema for food donations with geolocation, status tracking, and donor/recipient references</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/models/user.models.js'>user.models.js</a></b></td>
								<td>User profile schema with role-based fields (donor/recipient) and completion status</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>middlewares</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/middlewares/firebase.js'>firebase.js</a></b></td>
								<td>Firebase token verification middleware for protected routes</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/middlewares/rbac.js'>rbac.js</a></b></td>
								<td>Role-based access control middleware for donor/recipient permissions</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/middlewares/profileCompletion.js'>profileCompletion.js</a></b></td>
								<td>Middleware to ensure user profile completion before accessing features</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>controllers</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/controllers/donationcontrollers.js'>donationcontrollers.js</a></b></td>
								<td>Handles donation CRUD operations, status updates, and geospatial queries</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/controllers/auth.controller.js'>auth.controller.js</a></b></td>
								<td>Authentication logic including signup with role assignment</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/controllers/user.controller.js'>user.controller.js</a></b></td>
								<td>User profile management and updates</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>routes</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/routes/formDonation.route.js'>formDonation.route.js</a></b></td>
								<td>API routes for donation operations</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/routes/user.route.js'>user.route.js</a></b></td>
								<td>API routes for user profile management</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Backend/src/routes/healthCheck.routes.js'>healthCheck.routes.js</a></b></td>
								<td>Health check endpoint for monitoring</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details>
		<summary><b>Frontend</b></summary>
		<blockquote>
			<details>
				<summary><b>client</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/package.json'>package.json</a></b></td>
						<td>Frontend dependencies: React, TypeScript, Vite, TailwindCSS, shadcn/ui, Firebase, React Router</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/vite.config.ts'>vite.config.ts</a></b></td>
						<td>Vite build configuration with React SWC plugin</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/tailwind.config.ts'>tailwind.config.ts</a></b></td>
						<td>Tailwind CSS configuration with custom theme and animations</td>
					</tr>
					</table>
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/App.tsx'>App.tsx</a></b></td>
								<td>Main application component with React Router setup and protected routes</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/main.tsx'>main.tsx</a></b></td>
								<td>Application entry point with React 18 root rendering</td>
							</tr>
							</table>
							<details>
								<summary><b>pages</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/pages/LandingPage.tsx'>LandingPage.tsx</a></b></td>
										<td>Homepage with hero section, features, impact stats, and team information</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/pages/DonatePage.tsx'>DonatePage.tsx</a></b></td>
										<td>Food donation form page with multi-step wizard</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/pages/DonateDashboardPage.tsx'>DonateDashboardPage.tsx</a></b></td>
										<td>Donor dashboard showing donation history and statistics</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/pages/RequestDashboardPage.tsx'>RequestDashboardPage.tsx</a></b></td>
										<td>Recipient dashboard displaying available donations</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/pages/AuthPage.tsx'>AuthPage.tsx</a></b></td>
										<td>Authentication page with login/signup functionality</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/pages/ProfileCompletionPage.tsx'>ProfileCompletionPage.tsx</a></b></td>
										<td>Profile setup page for new users</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/pages/ProfilePage.tsx'>ProfilePage.tsx</a></b></td>
										<td>User profile management page</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>components</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/components/ProtectedRoute.tsx'>ProtectedRoute.tsx</a></b></td>
										<td>Route guard component for authentication and role-based access</td>
									</tr>
									</table>
									<details>
										<summary><b>layout</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/components/layout/Navbar.tsx'>Navbar.tsx</a></b></td>
												<td>Navigation bar with responsive menu and user authentication state</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/components/layout/Footer.tsx'>Footer.tsx</a></b></td>
												<td>Footer component with links and social information</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/components/layout/Layout.tsx'>Layout.tsx</a></b></td>
												<td>Main layout wrapper with navbar and footer</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>dashboard</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/components/dashboard/DonorDashboard.tsx'>DonorDashboard.tsx</a></b></td>
												<td>Donor-specific dashboard with donation analytics and history</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/components/dashboard/RecipientDashboard.tsx'>RecipientDashboard.tsx</a></b></td>
												<td>Recipient dashboard showing nearby available donations</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>donate</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/components/donate/DonationWizard.tsx'>DonationWizard.tsx</a></b></td>
												<td>Multi-step donation form with validation and image upload</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>ui</b></summary>
										<blockquote>
											<table>
											<tr>
												<td colspan="2">50+ shadcn/ui components including buttons, forms, dialogs, cards, tables, and more</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>contexts</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/contexts/AuthContext.tsx'>AuthContext.tsx</a></b></td>
										<td>Authentication context provider with Firebase integration</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>services</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/services/authService.ts'>authService.ts</a></b></td>
										<td>Authentication API service layer</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/services/donationService.ts'>donationService.ts</a></b></td>
										<td>Donation API service layer</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/XdAdrish/Jeevan_Aahar/blob/master/Frontend/client/src/services/userService.ts'>userService.ts</a></b></td>
										<td>User profile API service layer</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with Jeevan Aahar, ensure your runtime environment meets the following requirements:

- **Node.js**: v16.x or higher
- **npm**: v8.x or higher
- **MongoDB**: v5.x or higher (local or MongoDB Atlas)
- **Firebase Project**: With Authentication and Firestore enabled

### ⚙️ Installation

#### 1. Clone the Repository

```sh
git clone https://github.com/XdAdrish/Jeevan_Aahar
cd Jeevan_Aahar
```

#### 2. Backend Setup

```sh
cd Backend
npm install
```

Create a `.env` file in the `Backend` directory:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:8080
NODE_ENV=development

# Firebase Admin SDK (from Firebase Console > Project Settings > Service Accounts)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
```

#### 3. Frontend Setup

```sh
cd ../Frontend/client
npm install
```

Create a `.env` file in the `Frontend/client` directory:

```env
# Firebase Client SDK (from Firebase Console > Project Settings > General)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Backend API URL
VITE_API_URL=http://localhost:8000/api/v1
```

### 🤖 Usage

#### Development Mode

**Start Backend Server:**

```sh
cd Backend
npm run dev
# Server runs on http://localhost:8000
```

**Start Frontend Development Server:**

```sh
cd Frontend/client
npm run dev
# Application runs on http://localhost:8080
```

#### Production Build

**Backend:**

```sh
cd Backend
npm start
```

**Frontend:**

```sh
cd Frontend/client
npm run build
npm run preview
```

### 🧪 Testing

Currently, the project uses manual testing. Automated test suites are planned for future releases.

**Manual Testing Checklist:**
- ✅ User authentication (signup/login)
- ✅ Profile completion flow
- ✅ Donation creation and submission
- ✅ Dashboard data display
- ✅ Role-based access control
- ✅ Geolocation-based sorting

---

## 📌 Project Roadmap

### Completed Features
- [X] **User Authentication**: Firebase-based authentication with role management
- [X] **Donation Management**: Create, view, and track food donations
- [X] **Geolocation Services**: Location-based donation matching
- [X] **Responsive UI**: Mobile-first design with modern components
- [X] **Dashboard Analytics**: Impact statistics and donation history

---

## 🔰 Contributing

We welcome contributions from the community! Here's how you can help:

- **💬 [Join the Discussions](https://github.com/XdAdrish/Jeevan_Aahar/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/XdAdrish/Jeevan_Aahar/issues)**: Submit bugs found or log feature requests.
- **💡 [Submit Pull Requests](https://github.com/XdAdrish/Jeevan_Aahar/pulls)**: Review open PRs, and submit your own.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine.
   ```sh
   git clone https://github.com/YOUR_USERNAME/Jeevan_Aahar
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b feature/your-feature-name
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Follow Code Standards**:
   - Use TypeScript for frontend code
   - Follow ESLint rules
   - Write meaningful commit messages
   - Add comments for complex logic
6. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'feat: Add new feature X'
   ```
7. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin feature/your-feature-name
   ```
8. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
9. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch.

</details>



---



## 🙌 Acknowledgments

### Team 404_Not_Found
- **Adrish Maji** 
- **Arnik Das** 
- **Sayani Halder** 
- **Sayantan Gope** 

### Technologies & Libraries
- [React](https://react.dev/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Firebase](https://firebase.google.com/) - Authentication & hosting
- [MongoDB](https://www.mongodb.com/) - Database
- [Express.js](https://expressjs.com/) - Backend framework
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM


---

<div align="center">
  <p><strong>Made with ❤️ by Team 404_Not_Found</strong></p>
  <p><em>A Meal. A Smile. A Life. 🍽️✨/em></p>
</div>
