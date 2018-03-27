<template>
  <div class="bg-clouds with-navbar">
    <section class="module-progress-bar">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style="width: 32%;">
          <span class="sr-only">33% Complete</span>
        </div>
      </div>
    </section>
    <section class="module-onboarding container">
      <div class="onboarding wrapper m-b-25">
        <h1 class="text-center">Import your properties</h1>

        <div class="coming-soon">
          <h4 class="text-center">
              Coming Soon: Upload properties via your
              property management software!
          </h4>

          <div class="clearfix">
            <div class="software software-rentpost">
              <img class="img-responsive" src="../../assets/images/rentpost.png" alt="">
            </div>
            <div class="software software-resman">
              <img class="img-responsive" src="../../assets/images/resman.png" alt="">
            </div>
            <div class="software software-yardi">
              <img class="img-responsive" src="../../assets/images/yardi.png" alt="">
            </div>
            <div class="software software-rentmanager">
              <img class="img-responsive" src="../../assets/images/rentmanager.png" alt="">
            </div>
          </div>
        </div>

        <div class="row text-center upload-header">
          <h4 >Upload your properties via csv.</h4>

          <span>
            <router-link :to="{name: 'ManuallyImport'}" >Download the template here.</router-link>
          </span>
        </div>

        <div class="dropbox m-b-50">
          <vue-dropzone
            ref="fileUploadZone"
            id="dropzone"
            :options="dropzoneOptions"
            v-on:vdropzone-sending="sendingEvent"
            @vdropzone-success="vsuccess"
          ></vue-dropzone>
        </div>

        <button class="uploadBtn"
          name="Upload Properties"
          value="Upload Properties"
          id="uploadBtnCsv"
          @click="sendProperties"
        >
          Upload Properties
        </button>
        <div class="text-center">
          <router-link :to="{name: 'ManuallyImport'}">Enter your properties manually</router-link>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'

export default {
  name: 'Hello',
  data () {
    return {
      dropzoneOptions: {
        url: process.env.API_ENDPOINT + '/properties-bulk/import',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        addRemoveLinks: true,
        uploadMultiple: false,
        headers: { 'access-control-request-headers': '', },
        acceptedFiles: '.csv',
        autoProcessQueue: false,
        dictDefaultMessage: 'Drag files here or click to browse. \n' +
        '50MB max file size. All files must be .CSV',
      },
    }
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
  methods: {
    sendProperties () {
      this.$refs.fileUploadZone.dropzone.processQueue()
    },
    sendingEvent (file, xhr, formData) {
      formData.append('teamId', 1) // TODO change to use store.user
    },
    vsuccess (file, response) {
      // Todo store details
      this.$router.push({ name: 'ImportFinish', })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .dropzone {
    outline: 2px dashed lightblue; /* the dash box */
    outline-offset: -10px;
    color: dimgray;
    padding: 20px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
    background: url('/static/images/upload.svg') no-repeat 50% 20%;
    border: 0px solid rgba(0, 0, 0, 0.3);
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }
  .coming-soon {
    background: #f5f6fA;
    width: 419px;
    padding: 25px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 35px;
  }

  .upload-form {
    position: relative;
    margin-bottom: 60px;
  }

  .fs_icon {
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
  }

  .software {
    float: left;
  }

  .software:not(:last-child) {
    margin-right: 24px;
    margin-top: 10px;
  }

  .software-rentpost {
    width: 59px;
  }

  .software-resman {
    width: 56px;
  }

  .software-yardi {
    width: 73px;
  }

  .software-rentmanager {
    width: 108px;
  }

  .upload-header {
    margin-bottom: 35px;
  }

  .uploadBtn {
    display: block;
    margin: 0 auto 40px;
    text-transform: uppercase;
    color: #fff;
    background: #8ec549;
    padding: 10px 35px;
    font-weight: 400;
    letter-spacing: 2px;
    border: 0;
  }

  .entries {
    display: block;
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .vue-dropzone {
    transition: background-color 0.2s linear;
  }
</style>
