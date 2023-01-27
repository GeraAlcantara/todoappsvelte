<script>
  import Columns from "./components/Columns.svelte";
</script>

<!-- 
  
  
  <meta property="og:url" content="https://www.jaguarek.dev//rd/modelo-3d-loop-animation"><meta property="og:image" content="https://www.jaguarek.dev/socialCards/rdAirplaneSocialog.jpg"><meta property="og:image:alt" content="Avion 3D con loop animacion">
 -->
<svelte:head />

<main>
  <Columns />
</main>

<style lang="scss">
  @use "./variables.scss" as *;
  @use "./sass/utils" as *;

  main {
    display: flex;
    gap: 1rem;
    min-height: 100vh;
    max-width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    @include media("md") {
      flex-direction: row;
      align-items: flex-start;
      padding: 2rem;
    }
    @include media("lg") {
      gap: 2rem;
    }
    @include media("xl") {
      gap: 3rem;
    }
    @include media("xxl") {
      gap: 4rem;
    }
  }
</style>
