---
title: "Mi Catálogo"
layout: layouts/base.njk
---

<section class="product-grid">
  {% for product in collections.products %}
    <div class="product-card">
      <a href="{{ product.url }}">
        <img src="{{ product.data.image }}" alt="{{ product.data.title }}">
        <h2>{{ product.data.title }}</h2>
        <p class="price">{{ product.data.price }}</p>
      </a>
    </div>
  {% endfor %}
</section>
