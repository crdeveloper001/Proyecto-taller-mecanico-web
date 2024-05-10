import React from 'react'
import './index.css';
export const NotFoundPage = () => {
  return (
    <div className="not-found-container">
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <img src="/not-found-illustration.png" alt="Not Found Illustration" />
    <Link to="/">Go back to the dashboard</Link>
  </div>
  )
}
