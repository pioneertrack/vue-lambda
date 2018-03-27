<template>
  <div class="bg-clouds with-navbar">
    <section class="module-progress-bar">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100" style="width: 58%;">
          <span class="sr-only">58% Complete</span>
        </div>
      </div>
    </section>
    <section class="module-onboarding container">
      <div class="onboarding wrapper">
        <h2 class="p-b-30 text-center">All 58,006 properties successful imported</h2>
        <svg class="circular-center" width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs></defs>
          <g id="Ready-for-Dev" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Onboard---Import-Successful" transform="translate(-540.000000, -289.000000)">
              <circle id="Oval" fill="#79BFE8" cx="580" cy="329" r="40"></circle>
              <path d="M555.576923,332.9 C555.192308,332.52 555,331.95 555,331.57 C555,331.19 555.192308,330.62 555.576923,330.24 L558.269231,327.58 C559.038462,326.82 560.192308,326.82 560.961538,327.58 L561.153846,327.77 L571.730769,338.98 C572.115385,339.36 572.692308,339.36 573.076923,338.98 L598.846154,312.57 L599.038462,312.57 C599.807692,311.81 600.961538,311.81 601.730769,312.57 L604.423077,315.23 C605.192308,315.99 605.192308,317.13 604.423077,317.89 L573.653846,349.43 C573.269231,349.81 572.884615,350 572.307692,350 C571.730769,350 571.346154,349.81 570.961538,349.43 L555.961538,333.47 L555.576923,332.9 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
            </g>
          </g>
        </svg>
        <h1 class="p-t-30 text-center">3</h1>
        <h2 class="p-b-30 text-center">You have properties to review for possible claims</h2>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Crypto Info',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .circular-center {
    -webkit-transform-origin: center center;
    width: 100%;
    margin: auto;
  }
</style>
