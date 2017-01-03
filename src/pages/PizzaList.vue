<template>
  <page-content page-title="Nos pizzas">
    <div class="main-content">
      <div class="pizzas">
        <div v-for="pizza of pizzas" class="pizza">
          <md-card>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{pizza.nom}}</div>
                <div class="md-subhead">{{pizza.description}}</div>
              </md-card-header-text>
              <md-button class="md-icon-button md-raised md-dense" md-direction="bottom left">
                  <md-icon>add</md-icon>
              </md-button>
            </md-card-header>
          </md-card>
        </div>
      </div>
    </div>
  </page-content>
</template>

<style lang="scss" scoped>
  .main-content {
    flex: 1;
  }

  .pizzas {
    position: relative;
    max-width: 960px;
    margin: auto;
  }

  .pizza {
    padding-bottom: 5px;
  }
</style>

<script>
  export default {
    data () {
      return {
        pizzas: [
          {
            nom: 'sdfsdoj',
            description: 'sd fsd fdsoifsdq fsqdoofsdoifsoiu fs fsdoi oqsfdoifsqdoi'
          },
          {
            nom: 'sdfsdoj',
            description: 'sd fsd fdsoifsdq fsqdoofsdoifsoiu fs fsdoi oqsfdoifsqdoi'
          },
          {
            nom: 'sdfsdoj',
            description: 'sd fsd fdsoifsdq fsqdoofsdoifsoiu fs fsdoi oqsfdoifsqdoi'
          },
          {
            nom: 'sdfsdoj',
            description: 'sd fsd fdsoifsdq fsqdoofsdoifsoiu fs fsdoi oqsfdoifsqdoi'
          },
          {
            nom: 'sdfsdoj',
            description: 'sd fsd fdsoifsdq fsqdoofsdoifsoiu fs fsdoi oqsfdoifsqdoi'
          },
          {
            nom: 'sdfsdoj',
            description: 'sd fsd fdsoifsdq fsqdoofsdoifsoiu fs fsdoi oqsfdoifsqdoi'
          },
          {
            nom: 'sdfsdoj',
            description: 'sd fsd fdsoifsdq fsqdoofsdoifsoiu fs fsdoi oqsfdoifsqdoi'
          },
          {
            nom: 'sdfsdoj',
            description: 'sd fsd fdsoifsdq fsqdoofsdoifsoiu fs fsdoi oqsfdoifsqdoi'
          },
          {
            nom: 'sdfsdoj',
            description: 'sd fsd fdsoifsdq fsqdoofsdoifsoiu fs fsdoi oqsfdoifsqdoi'
          }
        ]
      }
    },
    mounted: function () {
      this.$http.get(process.env.BASE_URL + '/api/gui/pizzas').then((response) => {
        this.pizzas = response.body
      }, (response) => {
        console.log('Got error: ' + JSON.stringify(response))
      })
    }
  }

</script>
