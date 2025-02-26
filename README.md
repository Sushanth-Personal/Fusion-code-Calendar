# 📅 Monthly Calendar App

A responsive monthly calendar application built with **React** and styled using **CSS Grid**. The app dynamically generates a monthly view, highlighting the current month in a **blue gradient** while dimming the previous and next month's overflow dates.

## 🌟 Features

✅ **Responsive Grid Layout** – Uses **CSS Grid** to structure the calendar in a clean format.
✅ **Dynamic Month Navigation** – Navigate between months seamlessly.
✅ **Event Display** – Each day can hold multiple events, displayed with icons.
✅ **Highlighted Current Month** – The active month is visually distinct using a gradient blue background.
✅ **Muted Overflow Days** – Days from previous and next months are dimmed for better clarity.

## 🖼️ UI Preview

![Calendar UI Preview](https://your-image-url.com)

## 🛠️ Tech Stack

- **React.js** – Component-based UI development.
- **CSS Grid** – Flexible layout for the calendar.
- **JavaScript (ES6+)** – Dynamic event handling and rendering.

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/monthly-calendar-app.git
   cd monthly-calendar-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Open in browser:**
   The app will run on `http://localhost:5173` (if using Vite) or `http://localhost:3000` (if using Create React App).

## 📂 Project Structure

```
monthly-calendar-app/
│-- src/
│   ├── components/
│   │   ├── Calendar.jsx
│   │   ├── Navigation.jsx
│   │   └── EventIcons.jsx
│   ├── styles/
│   │   ├── Calendar.css
│   │   └── Event.css
│   ├── App.jsx
│   └── main.jsx
│-- public/
│-- package.json
│-- README.md
```

## 🎨 Styling

The calendar is styled using **CSS Grid** for a clean and structured monthly layout. Key styles include:

- `.mDay.currentMonth` → **Blue gradient for the active month**
- `.mDay.prevMonth, .mDay.nextMonth` → **Dimmed style for non-active month days**
- `.mEvent` → **Event badges with category-specific colors**

🚀 **Enjoy using the Monthly Calendar App!** 🎉

