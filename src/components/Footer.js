import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span> Simply Recipes</span>. Built with{" "}
        <a href="https://www.gatsby.js.com/">Gatsby JS</a>
      </p>
    </footer>
  )
}

export default Footer
