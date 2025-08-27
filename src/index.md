---
title: "Mi Catálogo"
layout: layouts/base.njk
---

<section class="product-grid">
  {% for product in collections.products %}
    {% set thumb = null %}

    {# Use first gallery image if it exists #}
    {% if product.data.images and product.data.images | length > 0 %}
      {% set thumb = product.data.images[0] %}
    {% elseif product.data.image %}
      {% set thumb = { "image": product.data.image, "alt": product.data.title } %}
    {% endif %}

    <div class="product-card">
      <a href="{{ product.url }}">
        {% if thumb %}
          <img src="{{ thumb.image }}" alt="{{ thumb.alt | default(product.data.title) }}">
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
