<script>
  import DotMenu from "../assets/menudots.svg";
  export let sectionName;
</script>

<header>
  <h1>{sectionName}</h1>
  {#if sectionName === "TODO"}
    <button>
      <img src={DotMenu} alt="menu" />
    </button>
  {/if}
</header>

<style lang="scss">
  header {
    min-height: 50px;
    h1 {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: normal;
      margin: 0;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    img {
      width: 1.5rem;
      height: auto;
    }
  }
</style>
