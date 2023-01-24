<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>
  count is {count}
</button>

<style lang="scss">
  @use "../sass/utils" as *;
  button {
    @include media("md") {
      background-color: red;
    }
  }
</style>
