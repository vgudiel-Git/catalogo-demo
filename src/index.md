{% for product in collections.products %}
  {% set thumb = product.data.images and product.data.images[0] %}
  <div class="product-card">
    <a href="{{ product.url }}">
      <img src="{{ thumb.image if thumb else '/assets/images/default.jpg' }}" 
           alt="{{ thumb.alt if thumb else product.data.title }}">
      <h2>{{ product.data.title }}</h2>
      <p class="price">{{ product.data.price }}</p>
    </a>
    <a class="btn-whatsapp" href="https://wa.me/16263941200" target="_blank" rel="noopener">
      Comprar por WhatsApp
    </a>
  </div>
{% endfor %}
