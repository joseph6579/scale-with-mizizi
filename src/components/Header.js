export function createHeader() {
  return `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a href="/" class="logo" data-link>
            <div class="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <!-- Premium gradients -->
                  <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#2563eb;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
                  </linearGradient>
                  
                  <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
                  </linearGradient>
                  
                  <linearGradient id="rootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
                    <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.6" />
                  </linearGradient>
                  
                  <!-- Subtle shadow -->
                  <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#000000" flood-opacity="0.1"/>
                  </filter>
                  
                  <!-- Inner glow -->
                  <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <!-- Background circle with premium gradient -->
                <circle cx="16" cy="16" r="15.5" fill="url(#primaryGradient)" filter="url(#softShadow)"/>
                
                <!-- Inner circle for depth -->
                <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
                
                <!-- Main logo content -->
                <g transform="translate(16, 16)">
                  <!-- Central growth point -->
                  <circle cx="0" cy="-6" r="2.5" fill="url(#accentGradient)" filter="url(#innerGlow)"/>
                  
                  <!-- Sophisticated root system -->
                  <g stroke="url(#rootGradient)" stroke-width="1.5" stroke-linecap="round" fill="none">
                    <!-- Primary roots -->
                    <path d="M0 -3 Q-4 2 -6 8 Q-7 10 -8 12" opacity="0.9"/>
                    <path d="M0 -3 Q4 2 6 8 Q7 10 8 12" opacity="0.9"/>
                    <path d="M0 -3 Q0 4 0 10" opacity="0.8"/>
                    
                    <!-- Secondary root branches -->
                    <path d="M-3 4 Q-5 6 -6 9" stroke-width="1" opacity="0.7"/>
                    <path d="M3 4 Q5 6 6 9" stroke-width="1" opacity="0.7"/>
                    <path d="M-1 7 Q-3 9 -4 11" stroke-width="0.8" opacity="0.6"/>
                    <path d="M1 7 Q3 9 4 11" stroke-width="0.8" opacity="0.6"/>
                    
                    <!-- Tertiary fine roots -->
                    <path d="M-5 8 L-7 10" stroke-width="0.6" opacity="0.5"/>
                    <path d="M5 8 L7 10" stroke-width="0.6" opacity="0.5"/>
                    <path d="M-2 9 L-3 11" stroke-width="0.5" opacity="0.4"/>
                    <path d="M2 9 L3 11" stroke-width="0.5" opacity="0.4"/>
                  </g>
                  
                  <!-- Growth indicators (scaling elements) -->
                  <g fill="url(#accentGradient)" opacity="0.8">
                    <circle cx="-4" cy="-8" r="1" filter="url(#innerGlow)"/>
                    <circle cx="4" cy="-8" r="1" filter="url(#innerGlow)"/>
                    <circle cx="0" cy="-10" r="1.2" filter="url(#innerGlow)"/>
                  </g>
                  
                  <!-- Subtle upward arrows for "Scale" -->
                  <g stroke="rgba(255,255,255,0.6)" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.7">
                    <path d="M-6 -4 L-4 -6 L-2 -4"/>
                    <path d="M2 -4 L4 -6 L6 -4"/>
                  </g>
                  
                  <!-- Premium accent dots -->
                  <g fill="rgba(255,255,255,0.3)">
                    <circle cx="-8" cy="-2" r="0.5"/>
                    <circle cx="8" cy="-2" r="0.5"/>
                    <circle cx="-6" cy="6" r="0.5"/>
                    <circle cx="6" cy="6" r="0.5"/>
                  </g>
                </g>
                
                <!-- Outer ring for premium feel -->
                <circle cx="16" cy="16" r="15.5" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"/>
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