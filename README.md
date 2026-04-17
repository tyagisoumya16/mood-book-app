# Mood-based-book-finder

#Who is this for?

This app is designed for people who enjoy reading but often struggle to decide what to read next. Instead of searching randomly, users can simply select their current mood.

#Problem:
While exploring books online, I realized that most platforms require users to know what they are looking for. But many times, the real problem is not "finding a book", it's "deciding what to read".

Solution
I built a mood-based book discovery app where users can either:
- Select a mood (happy, sad, romantic, etc.)
- Or search for a specific topic

The app then fetches relevant books using the Open Library API.

#Features:
- Mood-based recommendations
- Search functionality
- Responsive design (mobile + desktop)
- Loading state handling
- Error handling for failed requests
- Graceful empty state when no results found

#Key Decisions:
- Used React for component-based structure
- Chose Tailwind CSS for faster UI development
- Limited results to improve performance and readability
- Focused on handling edge cases (loading, empty, error)

#Challenges:
One challenge was handling inconsistent data from the API (missing covers, authors). I handled this by adding fallback UI.

#What I would improve?
- Add bookmarking (save books)
- Improve recommendation logic (more personalized)
- Add filters (genre, year)

Live Demo
mood-book-cbr3qrznr-tyagisoumya16s-projects.vercel.app

Video link:

https://drive.google.com/file/d/1Ho3wOY2z4-W2Ii0-JnqZvqNGIUOa1r9b/view?usp=drivesdk

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


