import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="/">Home</a>
          <a className="link link-hover" href="/Course">Course</a>
          <a className="link link-hover" href="/About">About us</a>
        </nav>

        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* X.com (formerly Twitter) Icon */}
            <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            {/* Youtube Icon */}
            <a href="https://www.youtube.com/@educro" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            {/* Facebook Icon */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M22.23 0h-20.46c-.98 0-1.77.8-1.77 1.77v20.46c0 .98.8 1.77 1.77 1.77h20.46c.98 0 1.77-.8 1.77-1.77v-20.46c0-.98-.8-1.77-1.77-1.77zm-13.85 20.29h-3.6v-11.3h3.6v11.3zm-1.8-12.91c-1.14 0-2.06-.93-2.06-2.08 0-1.14.93-2.08 2.06-2.08 1.15 0 2.08.93 2.08 2.08 0 1.15-.93 2.08-2.08 2.08zm13.65 12.91h-3.6v-5.6c0-1.34-.02-3.07-1.86-3.07-1.86 0-2.14 1.45-2.14 2.95v5.72h-3.6v-11.3h3.4v1.5h.05c.47-.9 1.62-1.84 3.3-1.84 3.54 0 4.2 2.33 4.2 5.36v6.28z"></path>
              </svg>
            </a>
          </div>
        </nav>

        <aside>
          <p>Copyright © 2025 - All right reserved by CyberNinjas</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
