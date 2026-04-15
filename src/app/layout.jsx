// src/app/layout.jsx
import './globals.css'
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Mailvah | B2B Lead Sourcing & Verification',
  description: 'Predictable Lead Sourcing. Unbreakable Deliverability.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050810] text-slate-300 font-sans selection:bg-sky-500/30">
        <Navbar />
        {/* The 'children' below represents whatever page you are currently on */}
        <main className="pt-20"> 
          {children}
        </main>
      </body>
    </html>
  )
}
