// Native components
import Head from 'next/head'

// Components
import Navbar from '@/components/navbar/Navbar';

// Hooks
import { useState, useEffect } from 'react'

// Home main function
export default function Home() {

  // Setting state to theme
  const [theme, setTheme] = useState("light");

  // Add/Remove dark class whenever the theme is changed
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  // Switches theme based on current state and click
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Returns the app itself
  return (
    <>
      <main className="min-h-screen min-w-screen darkMode">

      </main>
    </>
  )
}
