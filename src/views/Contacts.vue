<template>
<div>
<div class="card text-center">
            <div class="card-body">
                <h5 class="card-title text-secondary">Contacts</h5>
                <!-- <p class="card-text text-dark">E-mail: <a href="mailto:rob.sabirov@gmail.com" class="font-weight-bold text-info">rob.sabirov@yandex.com</a>
                </p> -->
                <a 
                class="fab fa-facebook-square fa-3x text-secondary" 
                href="https://www.facebook.com/robert.sabirov" 
                target="_blank" 
                title="facebook.com/robert.sabirov">
                  <font-awesome-icon :icon="['fab', 'facebook-square']"/>
                </a>
                <a 
                class="fab fa-twitter-square fa-3x text-secondary" 
                href="https://www.twitter.com/rob_sabirov" 
                target="_blank" 
                title="twitter.com/rob_sabirov">
                  <font-awesome-icon :icon="['fab', 'twitter-square']" />
                </a>
                <a 
                class="fab fa-github-square fa-3x text-secondary" 
                href="https://github.com/hydra13/" 
                target="_blank" 
                title="github.com/hydra13">
                  <font-awesome-icon :icon="['fab', 'github-square']" />
                </a>
                <a 
                class="fas fa-envelope-square fa-3x text-secondary" 
                href="mailto:rob.sabirov@gmail.com" 
                target="_blank" 
                title="rob.sabirov@gmail.com">
                  <font-awesome-icon :icon="['fas', 'envelope-square']" />
                </a>
            </div>
        </div>
</div>
</template>

<script>
export default {
    name: 'Contacts'
}
</script>

<style lang="scss" scoped>
.card-body {
  padding: 1.25rem;
}
</style>