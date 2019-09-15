<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">R.Sabirov</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/skills">Skills</b-nav-item>
          <b-nav-item to="/certificates">Certificates</b-nav-item>
          <b-nav-item to="/contacts">Contacts</b-nav-item>
          <b-nav-item to="/articles">Articles</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form action="/docs/CV%20R.Sabirov.pdf">
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="light">Download CV</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container>
      <b-card>
        <router-view/>
      </b-card>
    </b-container>
  </div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About me</router-link> |
      <router-link to="/skills">Skills</router-link> |
      <router-link to="/certificates">Certificates</router-link> |
      <router-link to="/contacts">Contacts</router-link> |
      <router-link to="/articles">Articles</router-link> |
      <a href="/docs/CV%20R.Sabirov.pdf" target="_blank">Download CV</a>
    </div>
    <router-view/>
  </div> -->
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
      background-color: #343a40!important;
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
