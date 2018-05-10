<template>
  <div class='wc-card'>
    <form class="wc-form">
    <h1>Please re-enter your passsword to edit</h1>

    <div :class="['wc-form__block', {'wc-form__block--err': hasError}]">
      <label for="confirm-password">Password</label>
      <input type="password" class="wc-card__input" id="password">
      <input class="btn" type="submit" name="edit" value="Submit" @click.prevent="done" >
      <p class="wc-card__errorMsg">{{ errorMsg }}</p>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'VerifyPassword',
  data () {
    return {
      errorMsg: 'Password Incorrect.',
      hasError: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.wc-card{
  padding: 20px 40px;
  font-family: Open Sans;
  font-size: 12px;
  width: 400px;
  background-color: white;
  color: #9ca4ab;

  h1 {
      text-align:center;
      margin-top: 1em;
      margin-bottom: 0.3em;
  }

  &__error {
    margin: 0px;
    text-align: left;
    color: lighten(red, 10);
    font-size: 12px;
  }

  &__block {
    &--err {
      .wc-form__input {
        border-color: lighten(red, 10);
      }
    }
  }
}

</style>
