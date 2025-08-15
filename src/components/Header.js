export function createHeader() {
  return `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a href="/" class="logo" data-link>
            <div class="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
                  </linearGradient>
                  <linearGradient id="logoAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <circle cx="16" cy="16" r="16" fill="url(#logoGradient)"/>
                <g transform="translate(8, 6)">
                  <rect x="7" y="14" width="2" height="6" fill="url(#logoAccent)" rx="1"/>
                  <circle cx="8" cy="12" r="3" fill="url(#logoAccent)" opacity="0.9"/>
                  <circle cx="6" cy="10" r="2.5" fill="url(#logoAccent)" opacity="0.7"/>
                  <circle cx="10" cy="10" r="2.5" fill="url(#logoAccent)" opacity="0.7"/>
                  <circle cx="8" cy="8" r="2" fill="url(#logoAccent)" opacity="0.8"/>
                  <path d="M7 20 L4 22 M9 20 L12 22 M8 20 L8 22" stroke="url(#logoAccent)" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
                </g>
                <g transform="translate(20, 8)">
                  <path d="M2 8 L6 4 L6 6 L10 6 L10 8 L6 8 L6 10 Z" fill="white" opacity="0.9"/>
                  <path d="M2 12 L6 8 L6 10 L10 10 L10 12 L6 12 L6 14 Z" fill="white" opacity="0.7"/>
                </g>
              </svg>
            </div>
            <span>Scale With Mizizi</span>
          </a>
          
          <ul class="nav-menu">
            <li><a href="/" class="nav-link" data-link>Home</a></li>
            <li><a href="/services" class="nav-link" data-link>Services</a></li>
            <li><a href="/assessment" class="nav-link" data-link>Assessment</a></li>
            <li><a href="/about" class="nav-link" data-link>About</a></li>
            <li><a href="/contact" class="nav-link" data-link>Contact</a></li>
            <li><a href="/assessment" class="btn btn-primary" data-link>Get Started</a></li>
          </ul>
          
          <button class="mobile-menu-toggle">☰</button>
        </nav>
      </div>
    </header>
  `
}