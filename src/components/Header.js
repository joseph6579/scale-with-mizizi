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
                
                <!-- Background circle -->
                <circle cx="16" cy="16" r="16" fill="url(#logoGradient)"/>
                
                <!-- Minimalist root system -->
                <g transform="translate(16, 8)">
                  <!-- Main trunk/stem -->
                  <rect x="-1" y="8" width="2" height="8" fill="white" rx="1"/>
                  
                  <!-- Root branches - clean lines -->
                  <path d="M0 16 L-6 20 M0 16 L6 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <path d="M0 18 L-4 22 M0 18 L4 22" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  
                  <!-- Growth indicators -->
                  <circle cx="-3" cy="6" r="1.5" fill="url(#logoAccent)" opacity="0.9"/>
                  <circle cx="3" cy="6" r="1.5" fill="url(#logoAccent)" opacity="0.9"/>
                  <circle cx="0" cy="4" r="2" fill="url(#logoAccent)"/>
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