<script>
  export let sectionName;
  export let open = false;
  $: btnName = open ? "close New Todo" : "Add New Todo";
</script>

<header>
  <h1>{sectionName}</h1>
  {#if sectionName === "TODO"}
    <button name={btnName} title={btnName} on:click>
      {#if open}
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.11 483.12">
          <path
            d="m464.75,393.74l-152.18-152.18,152.18-152.18c22.32-22.32,24.6-56.56,5.07-76.09s-53.78-17.25-76.09,5.07l-152.18,152.18L89.37,18.36C67.05-3.96,32.81-6.24,13.28,13.29s-17.25,53.78,5.07,76.09l152.18,152.18L18.35,393.75c-22.32,22.32-24.6,56.56-5.07,76.09s53.78,17.25,76.09-5.07l152.18-152.18,152.18,152.18c22.32,22.32,56.56,24.6,76.09,5.07s17.25-53.78-5.07-76.09h-.01Z"
            style="fill: currentColor;"
          />
        </svg>
      {:else if !open}
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 645.65 645.65">
          <path
            d="m588.25,272.61h-215.22V57.39c0-31.57-22.6-57.39-50.22-57.39s-50.22,25.83-50.22,57.39v215.22H57.39c-31.57,0-57.39,22.6-57.39,50.22s25.83,50.22,57.39,50.22h215.22v215.22c0,31.57,22.6,57.39,50.22,57.39s50.22-25.83,50.22-57.39v-215.22h215.22c31.57,0,57.39-22.6,57.39-50.22s-25.83-50.22-57.39-50.22h0Z"
            style="fill: currentColor;"
          />
        </svg>
      {/if}
    </button>
  {/if}
</header>

<style lang="scss">
  @use "../variables.scss" as *;
  header {
    min-height: 50px;
    width: 100%;
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
