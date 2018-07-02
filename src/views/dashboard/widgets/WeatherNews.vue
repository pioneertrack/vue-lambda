<template>
    <WcCard>
        <div slot="header">
            Weather News
        </div>
        <div slot="content">
            <div v-for="n in news" class="news-element" v-bind:key="n.title">
                <div class="news-image">
                    <div class="news-image-container">
                        <img :src="n.image"/>
                    </div>
                </div>
                <div class="news-info">
                    <div class="news-date">
                        {{n.pubDate | dateFormat}}
                    </div>
                    <div>
                        <p class="news-description">
                            {{n.description}}
                        </p>
                    </div>
                    <div>
                        <a target="_blank" :href="n.link">Read More...</a>
                    </div>
                </div>
            </div>
        </div>
    </WcCard>
</template>

<script>
import WcCard from '../../../components/WcCard'
import moment from 'moment'

export default {
  name: 'weather-events',
  props: [ 'news', ],
  components: {
    WcCard,
  },
  filters: {
    dateFormat (val) {
      var date = moment(val, 'ddd MMM DD HH:mm:ss GMT-0400 (Eastern Daylight Time)')
      if (date.isValid) {
        return date.format('MMM Do, YYYY')
      } else {
        return ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.news-element{
    display:flex;
    padding: 14px 0;
    border-bottom: 1px solid rgb(222, 226, 230);

    &:last-child{
        border-bottom: none;
    }

    .news-image{
      padding:0 20px;
      flex: 1;
      width: 40px;

      .news-image-container{
        overflow:hidden;
        height:100%;
      }
    }

    .news-description{
        text-align:left;
        margin: 4px 0;
    }

    .news-info{
        flex: 2;
        padding-right:8px;
    }

    .news-date{
        font-size: 10px;
        font-style: italic;;
    }
}

</style>
