<template>
  <div id="Grid" class="main-container">
    <h1>Grid view</h1>
    <p v-show="isLoading">
      Loading...
    </p>
    <section v-show="!isLoading">
      <div v-show="selectedPhotoId" class="modal">
        <photo-details
          :url="detailedCollection[selectedPhotoId] && detailedCollection[selectedPhotoId].full_picture"
          :author="detailedCollection[selectedPhotoId] && detailedCollection[selectedPhotoId].author"
          :camera="detailedCollection[selectedPhotoId] && detailedCollection[selectedPhotoId].camera"
          :tags="detailedCollection[selectedPhotoId] && detailedCollection[selectedPhotoId].tags"
          @close-photo-details-modal="closePhotoDetailsModal"
        />
      </div>
      <a :key="index" v-for="index in totalPages"
        class="page-link" :class="{'selected': index === selectedPage}"
        @click.prevent="selectPage(index)"
      >{{index}}</a>
      <ul>
        <li :key="index" v-for="(picture, index) in thumbnailCollection[selectedPage]">
          <a @click.prevent="showImageDetails(picture.id)">
            <img :src="picture.cropped_picture" />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import PhotoDetails from './PhotoDetails'
import { apiURL } from '../constants'

export default {
  name: 'Grid',
  props: {
    token: String
  },
  components: {
    PhotoDetails
  },
  data() {
    return {
      isLoading: true,
      thumbnailCollection: {},
      detailedCollection: {},
      totalPages: null,
      selectedPage: 1,
      selectedPhotoId: null
    }
  },
  mounted() {
    this.getPaginatedPictures()
  },
  methods: {
    getPaginatedPictures() {
      const CI = this
      const options = {
        headers: { Authorization: `Bearer ${CI.token}` },
        params: { page: CI.selectedPage }
      }
      // Only fetch from API if we haven't fetched that data set yet
      if (CI.thumbnailCollection[CI.selectedPage] === undefined) {
        CI.isLoading = true
        axios.get(apiURL + '/images' , options)
          .then(response => {
            const { data } = response
            if (!CI.totalPages) CI.totalPages = data.pageCount

            CI.thumbnailCollection[CI.selectedPage] = data.pictures
            CI.isLoading = false
          })
          .catch(error => {
            // Handle error
            // TODO: if invalid token re-run auth
            console.log('error: ', error);
            CI.isLoading = false
          })
      }
    },
    getPhotoDetails() {
      const CI = this
      const options = {
        headers: { Authorization: `Bearer ${CI.token}` }
      }
      // Only fetch from API if we haven't fetched that data set yet
      if (CI.detailedCollection[CI.selectedPhotoId] === undefined) {
        CI.isLoading = true
        axios.get(apiURL + `/images/${CI.selectedPhotoId}` , options)
          .then(response => {
            const { data } = response
            CI.detailedCollection[CI.selectedPhotoId] = data
            CI.isLoading = false
          })
          .catch(error => {
            // handle error
            // TODO: if invalid token re-run auth
            console.log('error: ', error);
            CI.isLoading = false
          })
      }
    },
    selectPage(id) {
      const CI = this
      CI.selectedPage = id;
    },
    showImageDetails(id) {
      const CI = this
      // CI.$router.push({ path: `/photo/${id}` })
      CI.selectedPhotoId = id
    },
    closePhotoDetailsModal() {
      const CI = this
      CI.selectedPhotoId = null
    }
  },
  watch: {
    selectedPage: function () {
      const CI = this
      CI.getPaginatedPictures()
    },
    selectedPhotoId: function (newValue) {
      const CI = this
      if (newValue !== null) CI.getPhotoDetails()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-container {
    position: relative;
  }
  div.modal {
    position: absolute;
    width: 60vw;
    height: 80vh;
    top: 0vh;
    left: 20vw;
    background: slategray;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  li {
    list-style-type: none;
    padding: 10px;
  }
  a {
    cursor: pointer;
  }
  a.page-link {
    margin: 5px 10px;
  }
  a.selected {
    color: blue;
    font-weight: bold;
  }
</style>
