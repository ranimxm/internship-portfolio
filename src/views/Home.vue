<template>
  <!-- =========================main======================== -->
      <main class="home-main" id="home-main">
          <div class="intro">
              <h1 data-text="Hi, I'm Ranim.">Hi, I'm Ranim.</h1>
              <h4>Always wonder why im doing this</h4>
          </div>

          <div class="go-down-container">
              <p>Excited to see my work hah?</p>
              <a href="#work" class="go-down"></a>
          </div>
      </main>
    

      <!-- =====================================work============================================== -->
      <section class="projects-section" id="work">
          <h1>My projects</h1>

          <div class="projects-container">
              <ol class="projects-list reveal">
                  <li class="project-item ">
                    <router-link to="/MusicApp">
                          <figure class="item-top">
                              <img src="/img/gojo.png">
                          </figure>
                          <figcaption class="item-caption">
                              <h2>Music Application using PWA</h2>
                              <p>View more</p>
                          </figcaption>
                      </router-link>
                  </li>
                  <li class="project-item">
                    <router-link to="/Twitter">
                          <figure class="item-top">
                              <img src="/img/gojo.png">
                          </figure>
                          <figcaption class="item-caption">
                              <h2>Recreated Twitter partly using MongoDB</h2>
                              <p>View more</p>
                          </figcaption>
                      </router-link>
                  </li>
                  <li class="project-item">
                    <router-link to="/amw">
                          <figure class="item-top">
                              <img src="/img/gojo.png">
                          </figure>
                          <figcaption class="item-caption">
                              <h2>AMW Veranda using PHP</h2>
                              <p>View more</p>
                          </figcaption>
                      </router-link>
                  </li>
              </ol>
          </div>

      </section>
</template>

