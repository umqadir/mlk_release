---
layout: default
---

{% assign posts = site.posts %}
{% if posts.size > 1 %}
<nav class="post-nav">
  {% for post in posts %}
    <a href="#{{ post.title | slugify }}">{{ post.title }}</a>{% unless forloop.last %} | {% endunless %}
  {% endfor %}
</nav>
{% endif %}

{% for post in posts %}
<article id="{{ post.title | slugify }}">
  <div class="post-date">{{ post.date | date: "%b %d, %Y" }}</div>
  <div class="post-content">
    <h1>{{ post.title }}</h1>
    {{ post.content }}
  </div>
</article>
{% endfor %}