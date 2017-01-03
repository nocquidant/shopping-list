<template>
  <page-content page-title="Bienvenue :)">
    <div class="main-content">
      <div class="welcome">
        <span class="md-display-3">Bienvenue chez {{nom}} !</span>
        <br>
        <span class="md-display-1">{{slogan}}</span>
      </div>
    </div>
  </page-content>
</template>

<style lang="scss" scoped>
  .main-content {
    position: relative;
    max-width: 960px;
  }
  .welcome {
    text-align: center;
  }
</style>

<script>
  export default {
    data () {
      return {
        nom: '',
        slogan: ''
      }
    },
    mounted: function () {
      this.$http.get(process.env.BASE_URL + '/api/gui/welcome').then((response) => {
        this.nom = response.body.nom
        this.slogan = response.body.slogan
      }, (response) => {
        console.log('Got error: ' + JSON.stringify(response))
      })
    }
  }
</script>



