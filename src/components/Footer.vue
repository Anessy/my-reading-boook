<template>
  <v-footer
    app
    absolute
    color="#2E3742"
    class="footer mt-1"
    height="160px"
    width="100%">
    <div class="footer__wrap">
      <div class="footer__wrap_title">КНИГОМАНЬЯК</div>
      <div class="footer__wrap_text">
        Все права защищены.Использование материалов данного
        <br> сайта возможно только со ссылкой на источник.
      </div>
    </div>
  </v-footer>
</template>

<script>

  export default {
    name: 'Footer',
    components: {}
  }
</script>

<style scoped lang="scss">
  .footer {
    background-color: #2E3742;
    padding: 50px 64px;
    margin-bottom: -160px;

    &__wrap {
      color: #FFFFFF;

      &_title {
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 8px;
      }

      &_text {
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
</style>
