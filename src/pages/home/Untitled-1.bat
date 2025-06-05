<!-- HTML (same as your structure) -->
<div class="page">
  <!-- Left Filter Section -->
  <aside class="filter">
    <h2>Women's Wear</h2>
    <ul>
      <li><a href="#">Sarees</a></li>
      <li><a href="#">Kurtis</a></li>
      <li><a href="#">Lehengas</a></li>
    </ul>
  </aside>

  <!-- Right Image Grid -->
  <section class="products">
    <div class="product-box"><img src="saree1.jpg" alt="Saree 1"></div>
    <div class="product-box"><img src="saree2.jpg" alt="Saree 2"></div>
    <div class="product-box"><img src="saree3.jpg" alt="Saree 3"></div>
    <div class="product-box"><img src="saree4.jpg" alt="Saree 4"></div>
    <!-- Add more product-box divs as needed -->
  </section>
</div>

<!-- CSS -->
<style>
.page {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}
.filter {
  width: 220px;
  background: #f8f8f8;
  padding: 24px 16px;
  border-right: 1px solid #ddd;
}
.filter h2 {
  margin-top: 0;
  font-size: 1.3em;
}
.filter ul {
  list-style: none;
  padding: 0;
}
.filter li {
  margin: 12px 0;
}
.filter a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
.products {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  padding: 32px;
  overflow-y: auto;
  height: 100vh;
  background: #fff;
}
.product-box {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
}
.product-box img {
  max-width: 100%;
  max-height: 180px;
  border-radius: 6px;
}
</style>