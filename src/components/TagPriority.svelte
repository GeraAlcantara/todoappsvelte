<script>
  export let priority;
</script>

{#if priority === "high"}
  <div class="high">
    <span>{priority} priority </span>
  </div>
{:else if priority === "med"}
  <div class="medium">
    <span>{priority} priority </span>
  </div>
{:else if priority === "low"}
  <div class="low">
    <span>{priority} priority </span>
  </div>
{/if}

<style lang="scss">
  div {
    border-radius: 1rem;
    color: white;
    font-weight: 300;
    text-transform: capitalize;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-sizing: content-box;
    span {
      user-select: none;
      padding: 0.15rem 1rem;
    }
  }
  .high {
    background: $gradientHigh;
  }
  .medium {
    background: $gradientMed;
  }
  .low {
    background: $gradientLow;
  }
</style>
