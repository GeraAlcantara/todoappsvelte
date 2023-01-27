<script>
  import Columns from "./components/Columns.svelte";
</script>

<!-- 
  
  
  <meta property="og:url" content="https://www.jaguarek.dev//rd/modelo-3d-loop-animation"><meta property="og:image" content="https://www.jaguarek.dev/socialCards/rdAirplaneSocialog.jpg"><meta property="og:image:alt" content="Avion 3D con loop animacion">
 -->
<svelte:head>
  <title>Todo App made with svelte</title>
  <meta property="og:image:width" content="1280" />
  <meta property="og:image:height" content="640" />
  <meta property="og:site_name" content="https://sveltetodoboard.netlify.app/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Todo App made with svelte" />
  <meta
    name="description"
    content="Sin saber svelte aprendimos del tutorial lo basico y pusimos el conocimiento en practica aka movimos las manitas y creamos un Todo App pero con tablero Kaban"
  />
  <meta
    property="og:description"
    content="Sin saber svelte aprendimos del tutorial lo basico y pusimos el conocimiento en practica aka movimos las manitas y creamos un Todo App pero con tablero Kaban"
  />
  <meta property="og:url" content="https://sveltetodoboard.netlify.app/images/socialCardSvelte.jpg" /><meta
    property="og:image"
    content="https://sveltetodoboard.netlify.app/images/socialCardSvelte.jpg"
  /><meta property="og:image:alt" content="Tablero kaban hecho con svelte" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@geralcantara79" />
  <meta name="twitter:creator" content="@geralcantara79" />
</svelte:head>

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
