<script>
  import { BoardStore, uid } from "../lib/data";
  import { clsx } from "clsx";
  import SectionTitle from "./SectionTitle.svelte";
  import Card from "./Card.svelte";
  import AddTodo from "./AddTodo.svelte";

  /* state */
  let newtodo = false;
  function handleNewTodo() {
    newtodo = !newtodo;
  }
  /* end state */

  /* Handle dispatched events  */

  function handleAddTodo(event) {
    let [title, description, priority] = [event.detail.title, event.detail.description, event.detail.priority];
    console.log(`title: ${title}, description: ${description}, priority: ${priority}`);
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
    BoardStore.update((columns) => {
      // entrar al objeto que tiene el title de todo
      let columnaTodo = columns.find((col) => col.title === "TODO");
      // y agregarle el nuevo todo dentro de el objeto cards en un paradigma functional
      console.log(columnaTodo);
      columnaTodo.cards = [...columnaTodo.cards, data];
      return columns;
    });
    newtodo = false;
  }

  /* end Handle events */
</script>

<!-- key react en svelte es on each block add (column.id) -->
{#each $BoardStore as column (column.id)}
  <section class="wrapperColumn" id={column.id}>
    <div
      class={clsx("colorband", {
        "colorband-green": column.title === "TODO",
        "colorband-orange": column.title === "In Progress",
        "colorband-blue": column.title === "Done",
      })}
    />
    <SectionTitle sectionName={column.title} on:click={handleNewTodo} />
    <!-- cards estan empty  -->

    <!-- checar en que columna estoy  -->
    {#if column.title === "TODO"}
      {#if newtodo}
        <AddTodo on:newTodo={handleAddTodo} />
      {/if}
    {/if}
    <!-- si es columna todo poner cards status.todo -->
    {#each column.cards as todo (todo.id)}
      <Card
        title={todo.title}
        description={todo.description}
        comments={todo.comments}
        attachments={todo.attachments}
        avatarsrc={todo.avatar}
        priority={todo.priority}
      />
    {/each}
  </section>
{/each}

<style lang="scss">
  @use "../sass/utils" as *;
  @use "../variables.scss" as *;
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
    background-color: $bgSectionColor-Dark;
    border-radius: 20px;
    @include media("md") {
      max-width: 450px;
    }
    @media (prefers-color-scheme: light) {
      background-color: $bgSectionColor;
    }
  }
</style>
