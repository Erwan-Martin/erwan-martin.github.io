---
# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
# main page (index.html)
---

{%- if page.img %}
  {%- capture home_img_background_style -%} style="background-image:url('{{ page.img | relative_url }}');" {%- endcapture -%}
{%- endif -%}

<div class="multipurpose-container home-heading-container">
  <div class="home-heading" {{ home_img_background_style }}>
    <div class="home-heading-message">
      <h1>{{ page.title }}</h1>
      {%- if page.subtitle %}
        <p>{{ page.subtitle }}</p>
      {% endif -%}
    </div>
  </div>
  <div class="home-intro-text markdown-style">
    {{ content }}
  </div>
</div>

{%- if site.posts.size > 0 %}
<div class="multipurpose-container new-posts-container">
  <h1>New Articles</h1>
  <ul class="new-posts">
  {%- for post in site.posts limit: 5 -%}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}
        <span>{{ post.date | date: "%b %-d, %Y" }}</span>
      </a>
    </li>
  {% endfor -%}
    <li>
      <a href="{{ '/blog/' | relative_url }}">View More ...</a>
    </li>
  </ul>
</div>
{% endif -%}
