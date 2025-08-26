---
title: "Mi Catálogo"
layout: layouts/base.njk
---

<section class="product-grid">
  {% for product in collections.products %}
    {% set thumb = (product.data.images and product.data.images.length > 0) ? product.data.images[0] : null %}
    <div class="product-card">
      <a href="{{ product.url }}">
        {% if thumb %}
          <img src="{{ thumb.image }}" alt="{{ thumb.alt }}">
        {% else %}
          <img src="/assets/images/default.jpg" alt="{{ product.data.title }}">
        {% endif %}
        <h2>{{ product.data.title }}</h2>
        <p class="price">{{ product.data.price }}</p>
      </a>
      <a class="btn-whatsapp" href="https://wa.me/16263941200" target="_blank" rel="noopener">
        Comprar por WhatsApp
      </a>
    </div>
  {% endfor %}
</section>
