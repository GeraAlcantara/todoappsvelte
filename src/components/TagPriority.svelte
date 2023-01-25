<script>
  export let priority;
</script>

<div class={priority}>
  <span>{priority} priority </span>
</div>

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
  .med {
    background: $gradientMed;
  }
  .low {
    background: $gradientLow;
  }
</style>
