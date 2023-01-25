<script>
  export let sectionName;
</script>

<header>
  <h1>{sectionName}</h1>
  {#if sectionName === "TODO"}
    <button on:click>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 645.65 645.65">
        <path
          d="m588.25,272.61h-215.22V57.39c0-31.57-22.6-57.39-50.22-57.39s-50.22,25.83-50.22,57.39v215.22H57.39c-31.57,0-57.39,22.6-57.39,50.22s25.83,50.22,57.39,50.22h215.22v215.22c0,31.57,22.6,57.39,50.22,57.39s50.22-25.83,50.22-57.39v-215.22h215.22c31.57,0,57.39-22.6,57.39-50.22s-25.83-50.22-57.39-50.22h0Z"
          style="fill: currentColor;"
        />
      </svg>
    </button>
  {/if}
</header>

<style lang="scss">
  @use "../variables.scss" as *;
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
    color: white;
    background-color: white;
    background: $gradientDone;
    transition: scale 0.25s ease-out;

    svg {
      width: 0.75rem;
      height: 0.75rem;
      transition: all 0.1s ease-in-out;
    }
    &:hover {
      background-color: $slatan-200;
      color: white;
      border: none;
      transform: scale(1.1);
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
    &:focus-visible {
      outline: 3px solid #6d72a8;
      outline-offset: 2px;
    }
  }
</style>
