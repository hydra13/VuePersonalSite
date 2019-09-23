<template>
  <div id="app">
    <b-container>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">R.Sabirov</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/skills">Skills</b-nav-item>
            <b-nav-item to="/certificates">Certificates</b-nav-item>
            <b-nav-item to="/contacts">Contacts</b-nav-item>
            <b-nav-item to="/posts">Posts</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form action="/docs/CV%20R.Sabirov.pdf">
              <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="light">Download CV</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <b-card>
        <router-view />
      </b-card>

      <!-- <footer class="page-footer font-small blue">
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav class="ml-auto">
            <div class="success">© 2019 Copyright:</div>
            <b-nav-item to="/">R.Sabirov aka Hydra13</b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </footer>-->
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background-color: #343a40 !important;
  min-height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
