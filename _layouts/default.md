<!doctype html>
<html lang="{{ site.lang }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {% if page.title and page.url != "/" %}{% assign full_title = page.title | append: " · " | append: site.title %}{% else %}{% assign full_title = site.title | append: " · " | append: site.tagline %}{% endif %}
  <title>{{ full_title }}</title>
  <meta name="description" content="{{ page.description | default: page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 }}">
  <link rel="canonical" href="{{ page.url | absolute_url }}">
  <meta property="og:title" content="{{ full_title }}">
  <meta property="og:description" content="{{ page.description | default: site.description | strip_html | normalize_whitespace | truncate: 160 }}">
  <meta property="og:image" content="{{ '/assets/img/default/profile_pic.jpg' | absolute_url }}">
  <meta property="og:url" content="{{ page.url | absolute_url }}">
  <meta name="theme-color" content="#0f1512">
  <link rel="icon" href="{{ '/assets/img/favicons/favicon.ico' | relative_url }}">
  <link rel="apple-touch-icon" href="{{ '/assets/img/favicons/apple-touch-icon.png' | relative_url }}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
  <link rel="stylesheet" href="{{ '/assets/css/site.css' | relative_url }}">
  <script>
    try { var t = localStorage.getItem('theme'); if (t) document.documentElement.dataset.theme = t; } catch (e) {}
  </script>
</head>
<body class="{{ page.body_class }}">
  <a class="skip" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="wrap header-inner">
      <a class="brand" href="{{ '/' | relative_url }}">Erwan Martin</a>
      <nav class="site-nav" aria-label="Main">
        {% assign nav = "CV:/cv/|Publications:/publications/|Projects:/projects/|Blog:/blog/" | split: "|" %}
        {% for item in nav %}{% assign parts = item | split: ":" %}
        <a href="{{ parts[1] | relative_url }}"{% if page.url contains parts[1] %} aria-current="page"{% endif %}>{{ parts[0] }}</a>
        {% endfor %}
        <button class="theme-toggle" type="button" aria-label="Toggle dark mode" title="Toggle dark mode">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
        </button>
      </nav>
    </div>
  </header>

  <main id="main">
    {{ content }}
  </main>

  <footer class="site-footer">
    <div class="wrap footer-inner">
      <div>
        <p class="footer-name">Erwan Martin</p>
        <p class="muted">Neuroscientist &amp; bio-engineer · Paris, France</p>
      </div>
      <ul class="contact-links">
        <li><a href="mailto:{{ site.author.email }}">Email</a></li>
        <li><a href="https://github.com/{{ site.author.github }}">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn</a></li>
        <li><a href="https://www.researchgate.net/profile/{{ site.author.researchgate }}">ResearchGate</a></li>
      </ul>
    </div>
    <div class="wrap"><p class="muted small">© {{ site.time | date: "%Y" }} Erwan Martin</p></div>
  </footer>
  <script src="{{ '/assets/js/site.js' | relative_url }}" defer></script>
</body>
</html>
