# **Netflix Clone Project**

This project is a **Netflix clone** built using **React.js** and powered by the **TMDB (The Movie Database) API** to display a wide range of movies and TV shows. It provides users with a familiar and interactive interface reminiscent of the popular streaming platform, Netflix.

## **Table of Contents**
- [**Demo**](#demo)
- [**Features**](#features)
- [**Technologies Used**](#technologies-used)
- [**Setup and Usage**](#setup-and-usage)
- [**Getting a TMDB API Key**](#getting-a-tmdb-api-key)
- [**Contributing**](#contributing)
- [**License**](#license)

## **Demo**

[**Live Demo**](https://m-jawa-d.github.io/NetFlix_Clone/)


## **Features**

- **Movie and TV Show Catalog**: Browse and search for a vast collection of movies and TV shows from TMDB's extensive database.

- **Responsive Design**: The application is designed to be responsive and user-friendly on various devices, including desktops, tablets, and mobile phones.

- **Real-Time Updates**: Content updates in real-time with the latest releases and popular titles from TMDB.

- **Trailer Previews**: Watch trailers for selected movies and shows.

## **Technologies Used**

- **React.js**: A JavaScript library for building user interfaces.

- **TMDB API**: The Movie Database API provides access to a vast collection of movie and TV show data.

- **CSS**: Styling the application for a user-friendly interface.

- **Axios**: A promise-based HTTP client for making requests to the TMDB API.

## **Setup and Usage**

1. **Clone the repository**:
   ```shell
   git clone https://github.com/m-Jawa-d/NetFlix_Clone.git
   ```

2. **Navigate to the project directory**:
   ```shell
   cd NetFlix_Clone
   ```

3. **Install dependencies**:
   ```shell
   npm install
   ```

4. **Add your TMDB API key**:
   ```shell
   cp .env.example .env
   ```
   Then open `.env` and replace `your_tmdb_api_key_here` with your own key (see [Getting a TMDB API Key](#getting-a-tmdb-api-key)).

5. **Start the app**:
   ```shell
   npm start
   ```

## **Getting a TMDB API Key**

1. Create a free account at [themoviedb.org](https://www.themoviedb.org/signup).
2. Go to **Settings → API** (or open [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)).
3. Request an API key (choose **Developer** / personal use).
4. Copy your **API Key (v3 auth)**.
5. Paste it into your local `.env` file:
   ```env
   REACT_APP_TMDB_API_KEY=your_actual_key_here
   ```
6. Restart the dev server if it was already running (`npm start`).

> **Note:** Never commit your real `.env` file. Only `.env.example` is tracked in git.
