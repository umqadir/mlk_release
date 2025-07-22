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
  <h1>{{ post.title }}</h1>
  <div class="post-date">{{ post.date | date: "%b %d, %Y" }}</div>
  {{ post.content }}
</article>
{% endfor %}