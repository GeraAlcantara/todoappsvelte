<script>
  import AddTodo from "./components/AddTodo.svelte";
  import Card from "./components/Card.svelte";
  import SectionTitle from "./components/SectionTitle.svelte";
  import { todosList } from "./lib/data.js";
  const todos = $todosList;
  let newtodo = true;
  // 1.- add a new todo input form
  // add a new todo button submit to write to store
  // add a handle to delete a todo base on id
  // add a handle complete todo and move to colum done
  // change color of the card when is done to visualize the change
  // add a handle to move todo to in progress
  //implement a svelte self to create columns TODO, IN PROGRESS, DONE and move the cards between them and update the store with the new status
</script>

<main>
  <section class="wrapperColumn">
    <div class="colorband colorband-green" />
    <SectionTitle sectionName="TODO" />
    <!-- each todos as todo -->
    {#if newtodo}
      <AddTodo />
    {/if}
    {#each todos as todo (todo.id)}
      {#if todo.status === "todo"}
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
    <div class="colorband colorband-orange" />
    <SectionTitle sectionName="In Progress" />
    <!-- each todos as todo -->
    {#each todos as todo (todo.id)}
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
    <SectionTitle sectionName="Review" />
    <!-- each todos as todo -->
    {#each todos as todo}
      {#if todo.status === "done"}
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
  @use "./sass/utils" as *;

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
      background: $gradientDone;
    }
    &-green {
      background: $gradientMed;
    }
  }

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
