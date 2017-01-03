<template>
  <div class="container">

    <md-sidenav class="main-sidebar md-left md-fixed" ref="main-sidebar">
      <md-toolbar class="pizzap-logo" md-theme="white">
        <router-link exact to="/">
          <img src='./assets/img/logo.png' alt="Vue">
          <span>Pizzap'</span>
        </router-link>
      </md-toolbar>

      <div class="main-sidebar-links">
        <md-list class="md-dense">
          <md-list-item>
            <!--<md-icon>home</md-icon>-->
            <router-link exact to="/">Bienvenue</router-link>
          </md-list-item>

          <md-list-item>
            <!--<md-icon>list</md-icon>-->
            <router-link exact to="/pizzas">Nos pizzas</router-link>
          </md-list-item>

          <md-list-item>
            <!--<md-icon>send</md-icon>-->
            <router-link exact to="/order">Votre commande</router-link>
          </md-list-item>
        </md-list>
      </div>
    </md-sidenav>

    <transition name="md-router" appear>
      <router-view></router-view>
    </transition>

  </div>
</template>

<style lang="scss">
  /* Transitions - Based on Angular Material */

  $swift-ease-out-duration: .4s !default;
  $swift-ease-out-timing-function: cubic-bezier(.25, .8, .25, 1) !default;
  $swift-ease-out: all $swift-ease-out-duration $swift-ease-out-timing-function !default;

  $swift-ease-in-duration: .3s !default;
  $swift-ease-in-timing-function: cubic-bezier(.55, 0, .55, .2) !default;
  $swift-ease-in: all $swift-ease-in-duration $swift-ease-in-timing-function !default;

  $swift-ease-in-out-duration: .5s !default;
  $swift-ease-in-out-timing-function: cubic-bezier(.35, 0, .25, 1) !default;
  $swift-ease-in-out: all $swift-ease-in-out-duration $swift-ease-in-out-timing-function !default;

  $swift-linear-duration: .15s !default;
  $swift-linear-timing-function: linear !default;
  $swift-linear: all $swift-linear-duration $swift-linear-timing-function !default;

  /* Elevation - Based on Angular Material */

  $shadow-key-umbra-opacity: .2 !default;
  $shadow-key-penumbra-opacity: .14 !default;
  $shadow-ambient-shadow-opacity: .12 !default;

  $material-shadow-2dp: 0 1px 5px rgba(#000, $shadow-key-umbra-opacity),
  0 2px 2px rgba(#000, $shadow-key-penumbra-opacity),
  0 3px 1px -2px rgba(#000, $shadow-ambient-shadow-opacity) !default;

  /* Others */

  $sizebar-size: 280px;

  [v-cloak] {
    display: none;
  }

  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  body {
    display: flex;
  }

  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    transition: $swift-ease-out;
    @media (min-width: 1281px) {
      padding-left: $sizebar-size;
    }
  }

  .main-sidebar.md-sidenav {
    .md-sidenav-content {
      width: $sizebar-size;
      display: flex;
      flex-flow: column;
      @media (min-width: 1281px) {
        top: 0;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        box-shadow: $material-shadow-2dp;
      }
    }
    .md-backdrop {
      @media (min-width: 1281px) {
        opacity: 0;
        pointer-events: none;
      }
    }
    .md-toolbar {
      min-height: 232px;
      border-bottom: 1px solid rgba(#000, .12);
    }
    .pizzap-logo {
      font-size: 24px;
      a {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        color: inherit;
        text-decoration: none;
        &:hover {
          color: inherit;
          text-decoration: none;
        }
      }
      img {
        width: 160px;
        margin-bottom: 16px;
      }
    }
    .main-sidebar-links {
      overflow: auto;
      .md-inset .md-list-item-container {
        padding-left: 36px;
      }
      .md-list-item-container {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  .main-content {
    padding: 16px;
    flex: 1;
    overflow: auto;
    background-color: #fff;
    transform: translate3D(0, 0, 0);
    transition: $swift-ease-out;
    transition-delay: .2s;
  }

  .md-router-enter-active,
  .md-router-leave-active {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    @media (min-width: 1281px) {
      left: $sizebar-size;
    }
    .main-content {
      opacity: 0;
      overflow: hidden;
    }
  }

  .md-router-leave-active {
    z-index: 1;
    transition: $swift-ease-in;
    transition-duration: .25s;
  }

  .md-router-enter-active {
    z-index: 2;
    transition: $swift-ease-out;
    .main-content {
      transform: translate3D(0, 7%, 0);
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: ''
      }
    },
    methods: {
      toggleSidenav () {
        this.$refs['main-sidebar'].toggle()
      },
      closeSidenav () {
        this.$refs['main-sidebar'].close()
      }
    }
  }

</script>
