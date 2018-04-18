<template>
    <vue-modal :name="modalName"
               :adaptive="true"
               height="auto"
               :scrollable="true"
               @closed="onClose"
               @before-open="onBeforeOpen"
    >
        <template v-if="isBulk">
            <section class="module-onboarding container">
                <div class="onboarding wrapper m-b-25">
                    <h1 class="text-center">Import your properties</h1>

                    <div class="row text-center upload-header">
                        <h4>Upload your properties via csv.</h4>
                        <a href="/static/files/template.csv" download>Download the template here.</a>
                    </div>

                    <div class="dropbox m-b-75">
                        <vue-dropzone
                                ref="fileUploadZone"
                                id="dropzone"
                                :options="dropzoneOptions"
                                v-on:vdropzone-sending="sendingEvent"
                                @vdropzone-success="vsuccess"
                                @vdropzone-error="verror"
                        ></vue-dropzone>
                    </div>
                    <div class="alert alert-danger" role="alert" v-if="error.length > 0">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span class="sr-only">Error:</span>
                        {{error}}
                    </div>

                    <button class="uploadBtn"
                            name="Upload Properties"
                            value="Upload Properties"
                            id="uploadBtnCsv"
                            :disabled="!canUpload"
                            @click="sendProperties"
                    >
                        Upload Properties
                    </button>

                    <a @click="switchBulk()" class="entries">Enter your properties manually
                    </a>
                </div>
            </section>
        </template>
        <template v-else>
            <SinglePropertyImport @on-done="manualDone"></SinglePropertyImport>
            <div>
                <a @click="switchBulk()" class="entries">Import CSV file</a>
            </div>
        </template>
    </vue-modal>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'
import SinglePropertyImport from './SinglePropertyImport'

export default {
  name: 'import-modal',
  props: [ 'modalName', ],
  data () {
    return {
      isBulk: true,
      error: '',
      canUpload: true,
      dropzoneOptions: {
        url: process.env.API_ENDPOINT + '/properties-bulk/import',
        thumbnailWidth: 150,
        maxFilesize: 50,
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
    SinglePropertyImport,
  },
  methods: {
    onClose (event) {
      this.$emit('on-done')
    },
    onBeforeOpen () {
      this.error = ''
    },
    sendProperties () {
      this.canUpload = false
      this.$refs.fileUploadZone.dropzone.processQueue()
    },
    sendingEvent (file, xhr, formData) {
      formData.append('teamId', this.$store.state.team.id)
    },
    vsuccess (file, response) {
      this.canUpload = true
      this.error = ''
      this.$modal.hide(this.modalName)
    },
    verror (file, message, xhr) {
      this.canUpload = true
      this.error = message.error
    },
    switchBulk () {
      this.isBulk = !this.isBulk
    },
    manualDone () {
      this.$modal.hide(this.modalName)
    },
  },
}
</script>

<style scoped>
    .dropzone {
        outline: 2px dashed lightblue; /* the dash box */
        outline-offset: -10px;
        color: dimgray;
        padding: 10px 10px;
        min-height: 200px; /* minimum height */
        position: relative;
        cursor: pointer;
        background-repeat: no-repeat;
        background-image: url('/static/images/upload.svg');
        background-position: center;
        border: 0px solid rgba(0, 0, 0, 0.3);
    }

    .input-file {
        opacity: 0; /* invisible but it's there! */
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }

    .dropzone .dz-message {
        text-align: center;
        margin: 10em 0 5em;
    }

    .dropbox:hover {
        background: lightblue; /* when mouse over to the drop zone, change color */
    }

    .dropbox p {
        font-size: 1.2em;
        text-align: center;
        padding: 70px 0 0;
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
        cursor:pointer;
    }

    .vue-dropzone {
        transition: background-color 0.2s linear;
    }
</style>
