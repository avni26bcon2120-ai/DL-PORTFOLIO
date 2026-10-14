# Avni Bindal - Personal Portfolio Website (DL-PORTFOLIO)

A complete, modern, responsive personal portfolio website crafted for a first-year **B.Tech Computer Science Engineering** student at **JECRC University, Jaipur**.

---

## ✨ Features & Design Aesthetic

- **Pinterest-Inspired Aesthetic**: Soft warm neutral background (`#FAF8F5`), chic editorial serif headings (*Playfair Display*), clean modern typography (*Plus Jakarta Sans*), warm terracotta/rose accent palette, rounded bento cards, and smooth hover elevations.
- **Working Light / Dark Mode**: One-click toggle with smooth transitions and persistent theme storage in `localStorage`.
- **Responsive Layout**: Designed and tested for mobile devices, tablets, and laptops with a collapsible mobile navigation drawer.
- **Downloadable Portfolio Summary**: Built-in modal providing two printable formats:
  1. Instant download of `Avni_Bindal_Portfolio_Summary.txt`.
  2. Print or "Save as PDF" using a custom `@media print` stylesheet.
- **Smooth Navigation & Scroll Reveal**: Smooth scrolling to sections with dynamic active link indicators and subtle fade-up card entrance animations.
- **Student-Focused & Honest**: Accurately reflects beginner-level skills in C, HTML, CSS, JavaScript, and hackathon teamwork without inflated claims.
- **Interactive Contact Features**: Click-to-copy email button with instant toast feedback, social placeholders, and a local demo contact form.

---

## 📁 Project Structure

```text
DL-PORTFOLIO/
├── index.html                       # Semantic HTML5 single-page structure
├── styles.css                       # Complete CSS styling, animations, themes & print rules
├── script.js                        # Theme switching, nav logic, download handler & UI feedback
├── Avni_Bindal_Portfolio_Summary.txt# Formatted printable portfolio text summary
└── README.md                        # Documentation and local preview guide
```

---

## 🚀 How to Preview the Website Locally

You can preview the website on your computer in just a few seconds using any of these simple methods:

### Method 1: Double-Click (Easiest)
1. Open File Explorer and navigate to:
   ```text
   C:\Users\Avni Bindal\OneDrive\Documents\DL-PORTFOLIO
   ```
2. Double-click on `index.html`.
3. It will immediately open in your default browser (Google Chrome, Microsoft Edge, etc.).

### Method 2: From PowerShell / Command Prompt
Run this single command in your PowerShell terminal:
```powershell
Start-Process "c:\Users\Avni Bindal\OneDrive\Documents\DL-PORTFOLIO\index.html"
```

### Method 3: Using VS Code "Live Server" (Optional)
If you use Visual Studio Code:
1. Open the `DL-PORTFOLIO` folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/index.html` with automatic hot-reloading when you make edits.

---

## ✏️ How to Customize Your Placeholders

Whenever you want to update your details, open `index.html` in VS Code or Notepad:

1. **Email (Contact Section)**:
   - Search for `your.email@example.com` and replace it with your verified email address.
2. **Verified Profiles (Already Connected)**:
   - LinkedIn: `https://www.linkedin.com/in/avni-bindal-81b0b8428`
   - GitHub: `https://github.com/avni26bcon2120-ai`
3. **Hackathon Name & Dates**:
   - In the **Achievements** section, search for `[Editable Placeholder: e.g., JECRC University Hackathon]` and type your actual event name.
4. **Upcoming Projects**:
   - Update the **C Data Structures Mini-Project** card once you build new semester projects!

---

## 🧪 How to Test the Profile Links & Contact Section

### 1. Testing the LinkedIn Button:
- Click the external link button beside **LinkedIn Profile**.
- It will open `https://www.linkedin.com/in/avni-bindal-81b0b8428` in a **new browser tab**.

### 2. Testing the GitHub Button:
- Click the external link button beside **GitHub Profile**.
- It will open `https://github.com/avni26bcon2120-ai` in a **new browser tab**.

### 3. Testing the Email Placeholder:
- Click the **"Copy"** button beside `your.email@example.com`.
- Confirm that the button changes to "Copied!" and a toast notification confirms the email placeholder was copied.

---

## 🛠️ Technologies Used
- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3**: CSS Custom Properties (Variables), Flexbox, CSS Grid, media queries, print styling.
- **JavaScript (ES6+)**: `localStorage`, `IntersectionObserver`, Clipboard API, DOM event handling.
- **Google Fonts**: *Playfair Display* & *Plus Jakarta Sans*.
