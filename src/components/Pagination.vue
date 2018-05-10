<template>
    <div class="pagination-container">
        <div>Show</div>
        <select v-model="pageSize" @change="pageSizeChange">
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
        <div style="margin-right:18px;">Per Page</div>
        <div @click="goToFirstPage" class="svg-wrapper">
            <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
                <title>Combined Shape</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5">
                    <g id="Pagination" transform="translate(-20.000000, -5.000000)" fill="#A4A4A4">
                        <g id="Group">
                            <path d="M27,19 C23.1340068,19 20,15.8659932 20,12 C20,8.13400675 23.1340068,5 27,5 C30.8659932,5 34,8.13400675 34,12 C34,15.8659932 30.8659932,19 27,19 Z M31.4267888,12.5840694 C31.5308598,12.5133012 31.620637,12.423524 31.6914053,12.319453 C32.0019605,11.8627541 31.8834877,11.2407717 31.4267888,10.9302165 L29.2051672,9.41951371 C29.0393261,9.3067418 28.8434083,9.2464402 28.6428571,9.2464402 C28.0905724,9.2464402 27.6428571,9.69415545 27.6428571,10.2464402 L27.6428571,13.2678457 C27.6428571,13.4683968 27.7031587,13.6643147 27.8159306,13.8301557 C28.1264859,14.2868546 28.7484683,14.4053275 29.2051672,14.0947722 L31.4267888,12.5840694 Z M26.4267888,12.5840694 C26.5308598,12.5133012 26.620637,12.423524 26.6914053,12.319453 C27.0019605,11.8627541 26.8834877,11.2407717 26.4267888,10.9302165 L24.2051672,9.41951371 C24.0393261,9.3067418 23.8434083,9.2464402 23.6428571,9.2464402 C23.0905724,9.2464402 22.6428571,9.69415545 22.6428571,10.2464402 L22.6428571,13.2678457 C22.6428571,13.4683968 22.7031587,13.6643147 22.8159306,13.8301557 C23.1264859,14.2868546 23.7484683,14.4053275 24.2051672,14.0947722 L26.4267888,12.5840694 Z"
                                  id="Combined-Shape"
                                  transform="translate(27.000000, 12.000000) scale(-1, 1) translate(-27.000000, -12.000000) "></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <div @click="downPage" class="svg-wrapper">
            <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
                <title>Combined Shape</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5">
                    <g id="Pagination" transform="translate(0.000000, -5.000000)" fill="#A4A4A4">
                        <g id="Group">
                            <path d="M7,19 C3.13400675,19 0,15.8659932 0,12 C0,8.13400675 3.13400675,5 7,5 C10.8659932,5 14,8.13400675 14,12 C14,15.8659932 10.8659932,19 7,19 Z M9.69150015,12.6983213 C9.8120028,12.6208553 9.91445504,12.5184031 9.99192103,12.3979004 C10.2905732,11.9333304 10.1560702,11.3146166 9.69150015,11.0159644 L6.54075759,8.99048702 C6.37946026,8.88679588 6.19175162,8.8316655 6,8.8316655 C5.44771525,8.8316655 5,9.27938075 5,9.8316655 L5,13.8826202 C5,14.0743718 5.05513038,14.2620805 5.15882152,14.4233778 C5.4574737,14.8879479 6.07618755,15.0224509 6.54075759,14.7237987 L9.69150015,12.6983213 Z"
                                  id="Combined-Shape"
                                  transform="translate(7.000000, 12.000000) scale(-1, 1) translate(-7.000000, -12.000000) "></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <div>
            Page
        </div>
        <input type="number" style="width:40px;" min="1" :max="maxPages" v-model="displayCurrent"
                    @change="changeInput" :disabled="disabled"/>
        <div>
            of {{maxPages}}
        </div>
        <div @click="upPage" class="svg-wrapper">
            <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
                <title>Combined Shape</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5">
                    <g id="Pagination" transform="translate(0.000000, -5.000000)" fill="#A4A4A4">
                        <g id="Group">
                            <path d="M7,19 C3.13400675,19 0,15.8659932 0,12 C0,8.13400675 3.13400675,5 7,5 C10.8659932,5 14,8.13400675 14,12 C14,15.8659932 10.8659932,19 7,19 Z M9.69150015,12.6983213 C9.8120028,12.6208553 9.91445504,12.5184031 9.99192103,12.3979004 C10.2905732,11.9333304 10.1560702,11.3146166 9.69150015,11.0159644 L6.54075759,8.99048702 C6.37946026,8.88679588 6.19175162,8.8316655 6,8.8316655 C5.44771525,8.8316655 5,9.27938075 5,9.8316655 L5,13.8826202 C5,14.0743718 5.05513038,14.2620805 5.15882152,14.4233778 C5.4574737,14.8879479 6.07618755,15.0224509 6.54075759,14.7237987 L9.69150015,12.6983213 Z"
                                  id="Combined-Shape"
                                  transform="translate(7.000000, 12.000000) scale(1, 1) translate(-7.000000, -12.000000) "></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <div @click="goToLastPage" class="svg-wrapper">
            <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
                <title>Combined Shape</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5">
                    <g id="Pagination" transform="translate(-20.000000, -5.000000)" fill="#A4A4A4">
                        <g id="Group">
                            <path d="M27,19 C23.1340068,19 20,15.8659932 20,12 C20,8.13400675 23.1340068,5 27,5 C30.8659932,5 34,8.13400675 34,12 C34,15.8659932 30.8659932,19 27,19 Z M31.4267888,12.5840694 C31.5308598,12.5133012 31.620637,12.423524 31.6914053,12.319453 C32.0019605,11.8627541 31.8834877,11.2407717 31.4267888,10.9302165 L29.2051672,9.41951371 C29.0393261,9.3067418 28.8434083,9.2464402 28.6428571,9.2464402 C28.0905724,9.2464402 27.6428571,9.69415545 27.6428571,10.2464402 L27.6428571,13.2678457 C27.6428571,13.4683968 27.7031587,13.6643147 27.8159306,13.8301557 C28.1264859,14.2868546 28.7484683,14.4053275 29.2051672,14.0947722 L31.4267888,12.5840694 Z M26.4267888,12.5840694 C26.5308598,12.5133012 26.620637,12.423524 26.6914053,12.319453 C27.0019605,11.8627541 26.8834877,11.2407717 26.4267888,10.9302165 L24.2051672,9.41951371 C24.0393261,9.3067418 23.8434083,9.2464402 23.6428571,9.2464402 C23.0905724,9.2464402 22.6428571,9.69415545 22.6428571,10.2464402 L22.6428571,13.2678457 C22.6428571,13.4683968 22.7031587,13.6643147 22.8159306,13.8301557 C23.1264859,14.2868546 23.7484683,14.4053275 24.2051672,14.0947722 L26.4267888,12.5840694 Z"
                                  id="Combined-Shape"
                                  transform="translate(27.000000, 12.000000) scale(1, 1) translate(-27.000000, -12.000000) "></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    current: Number,
    count: Number,
    disabled: Boolean,
  },
  computed: {
    maxPages () {
      return Math.ceil(this.count / this.pageSize)
    },
  },
  watch: {
    current: function (newVal, oldVal) {
      this.displayCurrent = newVal
    },
  },
  data () {
    return {
      pageSize: 10,
      displayCurrent: 1,
    }
  },
  mounted () {
    this.displayCurrent = this.current
  },
  methods: {
    changeInput () {
      this.emitPage(parseInt(this.displayCurrent))
    },
    pageSizeChange () {
      this.emitPage(1)
    },
    goToFirstPage () {
      this.emitPage(1)
    },
    goToLastPage () {
      this.emitPage(this.lastPage)
    },
    upPage () {
      this.emitPage(this.current + 1)
    },
    downPage () {
      this.emitPage(this.current - 1)
    },
    emitPage (page) {
      if (!this.disabled) {
        if (page >= 1 && page <= this.maxPages) {
          this.$emit('change', { page, pageSize: this.pageSize, })
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.svg-wrapper{
    display:flex;
    flex-basis: content;
}
.pagination-container{
    display:flex;
    flex-wrap: wrap;
    flex-direction:row;
    align-items: center;
    justify-content:flex-end;
    padding: 10px 6px;

    input[type="number"]{
        height:21px;
    }

    * {
        margin:0 2px;
    }
}
</style>
