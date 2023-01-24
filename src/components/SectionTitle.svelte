<script>
  import DotMenu from "../assets/menudots.svg";
  export let name;
</script>

<header>
  <h1>{name}</h1>
  <button>
    <img src={DotMenu} alt="menu" />
    <!-- make 3 dot menu -->
  </button>
</header>

<style lang="scss">
  header {
    h1 {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: normal;
      margin: 0;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  button {
    img {
      width: 1.5rem;
      height: auto;
    }
  }
</style>
