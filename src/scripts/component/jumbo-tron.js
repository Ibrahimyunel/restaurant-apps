class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="jumbotron">
        <div class="main-img">
            <img src="./images/hero-image_1.jpg" alt="">
        </div>
        <div class="main-text">
          <h1>Just find your location and choose what you want to eat
              <div>&gt; But don't forget to pay the bill afterwards 😄</div>
              And then enjoy your food...
          </h1>
        </div>
      </section>
    `;
  }
}

customElements.define('jumbo-tron', Jumbotron);
