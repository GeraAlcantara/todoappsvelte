<script>
  import svelteLogo from "./assets/svelte.svg";
  import Card from "./components/Card.svelte";
  import SectionTitle from "./components/SectionTitle.svelte";
  import Counter from "./lib/Counter.svelte";
  import { todosList } from "./lib/data.js";
</script>

<main>
  <section class="wrapperColumn">
    <div class="colorband colorband-orange" />
    <SectionTitle name="In Progress" />
    <!-- each todos as todo -->
    {#each todosList as todo (todo.id)}
      {#if todo.status === "inProgress"}
        <Card
          title={todo.title}
          description={todo.description}
          comments={todo.comments}
          attachments={todo.attachments}
          avatarsrc={todo.avatar}
          priority={todo.priority}
        />
      {/if}
    {/each}
  </section>
  <section class="wrapperColumn">
    <div class=" colorband colorband-blue" />
    <SectionTitle name="Review" />
    <!-- each todos as todo -->
    {#each todosList as todo}
      {#if todo.status === "review"}
        <Card
          title={todo.title}
          description={todo.description}
          comments={todo.comments}
          attachments={todo.attachments}
          avatarsrc={todo.avatar}
          priority={todo.priority}
        />
      {/if}
    {/each}
  </section>
</main>

<style lang="scss">
  @use "./variables.scss" as *;
  .colorband {
    background-color: red;
    position: absolute;
    top: 0;
    left: 0;
    height: 10px;
    width: 100%;
    &-orange {
      background: $gradientInProgress;
    }
    &-blue {
      background: $gradientReview;
    }
  }
  main {
    display: flex;
    gap: 4rem;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    padding: 4rem;
  }

  .wrapperColumn {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 450px;
    padding: 1rem;
    background-color: $bgSectionColor;
    border-radius: 20px;
  }
</style>
