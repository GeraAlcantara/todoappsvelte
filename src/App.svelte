<script>
  import { CARDS, CardsStore } from "./lib/data.js";
  import AddTodo from "./components/AddTodo.svelte";
  import Card from "./components/Card.svelte";
  import SectionTitle from "./components/SectionTitle.svelte";
  import { uid } from "./lib/data.js";

  // sort the id of the todos

  let newtodo = false;
  function handleNewTodo() {
    newtodo = !newtodo;
  }

  function handleAddTodo(event) {
    let [title, description, priority] = [event.detail.title, event.detail.description, event.detail.priority];
    /* console.log(`title: ${title}, description: ${description}, priority: ${priority}`); */
    if (title === "" || priority === "") {
      alert("Please fill all the fields");
      return;
    }

    let data = {
      id: uid(),
      priority: priority.toLowerCase(),
      title: title,
      description: description,
      comments: 0,
      attachments: 0,
      status: "todo",
      avatar: "/images/avatar_2.jpg",
    };
    // update the store with the new todo in a functional paradigm
    CardsStore.update((todos) => [...todos, data]);
    newtodo = false;
  }

  // 1.- add a new todo input form
  // add a new todo button submit to write to store
  // add a handle to delete a todo base on id
  // add a handle complete todo and move to colum done
  // change color of the card when is done to visualize the change
  // add a handle to move todo to in progress
  //implement a svelte self to create columns TODO, IN PROGRESS, DONE and move the cards between them and update the store with the new status
</script>

<svelte:head>
  <title>Todo App made with svelte</title>
</svelte:head>

<main>
  <section class="wrapperColumn">
    <div class="colorband colorband-green" />
    <SectionTitle sectionName="TODO" on:click={handleNewTodo} open={newtodo} />
    <!-- each todos as todo -->
    {#if newtodo}
      <AddTodo on:newTodo={handleAddTodo} />
    {/if}
    <!-- todo: new todo card to top of the list -->

    {#each $CardsStore as todo (todo.id)}
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
    {#each $CardsStore as todo (todo.id)}
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
    <SectionTitle sectionName="Done" />
    <!-- each todos as todo -->
    {#each $CardsStore as todo}
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
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 450px;
    padding: 1rem;
    background-color: $bgSectionColor;
    border-radius: 20px;
    @include media("md") {
      max-width: 450px;
    }
  }
</style>
