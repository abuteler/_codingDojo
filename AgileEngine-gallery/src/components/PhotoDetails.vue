<template>
  <div id="PhotoDetails" class="main-container">
    <a @click.prevent="close" class="close action">Close</a>
    <p v-if="isLoading">
      Loading...
    </p>
    <section v-else>
      <img :src="url" />
      <figcaption class="caption">
        <h2>Author: {{author}}</h2>
        <h3>Camera: {{camera}}</h3>
        <h4>Tags: {{tags}}</h4>
      </figcaption>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PhotoDetails',
  props: {
    url: String,
    author: String,
    camera: String,
    tags: String
  },
  methods: {
    close () {
      const CI = this
      CI.$emit('close-photo-details-modal')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: underline;
    cursor: pointer;
  }
  .close.action {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    background: #00000090;
    padding: 10px;
  }
  .caption {
    position: absolute;
    bottom: 10%;
    left: 25%;
    width: 50%;
    color: orange;
    font-weight: normal;
    text-align: left;
    background: #00000090;
    padding: 10px;
  }
  h2 {
    font-size: 1.3em;
  }
  h2, h3, h4 {
    margin: 10px;
  }
</style>
