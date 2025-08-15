export function createHeader() {
  return `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a href="/" class="logo" data-link>
            <div class="logo-icon">A</div>
            <span>Apex Financial</span>
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