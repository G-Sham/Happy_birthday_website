# 🎂 Interactive Celebration Platform

A highly personalized, full-stack web application built to deliver a digital birthday experience. Unlike static greeting cards, this application offers interactive elements, real-time feedback, and persistent memory storage.

## ✨ Features

* **Interactive "Challenge" UI:** A play-centric verification screen ("Are we best friends?") with conditional "Yes/No" logic.
* **Digital Time Capsule:** A form-based "Letter" module that saves heartfelt messages to the database.
* **Memory Gallery:** A responsive photo grid optimized for mobile and desktop views.
* **Audio Integration:** Persistent background audio player for immersive user experience.

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS (custom animations & gradients)
* **Backend:** Firebase (Firestore & Hosting)
* **Language:** TypeScript

## 🚀 How to Run

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Visit `http://localhost:3000`

## ⚙️ Customization Guide

This project is designed to be easily personalized. Here is where to find the key assets:

### 1. Text & Messages (`src/lib/constants.ts`)
| Feature | Variable Name | Description |
| :--- | :--- | :--- |
| **The Letter** | `letterContent` | The main message content in the "Time Capsule". |
| **Pink Hearts** | `floating-component` | Text inside the standard floating heart elements. |
| **Red Hearts** | `floating-special-component` | Text inside the special/rare floating elements. |
| **Photo Notes** | `memoryWallContent` | The captions displayed under each memory photo. |

### 2. Media Assets
* **Photos:** Add your images to the `/public/photos` folder.
* **Voice Note:** Place your `.mp3` file inside `/public/audio`.

### 3. UI Components
* **Bottom Question:** To edit the interactive question at the footer, modify the text inside:
  `src/components/home/InteractiveApology.tsx`

### For the live website: https://happy-birthday-website-iota.vercel.app/
