<script>
  import { BoardStore } from "./lib/data.js";
  import AddTodo from "./components/AddTodo.svelte";
  import Card from "./components/Card.svelte";
  import SectionTitle from "./components/SectionTitle.svelte";
  import { uid } from "./lib/data.js";
  import Columns from "./components/Columns.svelte";

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
    BoardStore.update((todos) => [...todos, data]);
    newtodo = false;
  }
</script>

<svelte:head>
  <title>Todo App made with svelte</title>
</svelte:head>

<main>
  <Columns />
</main>

<style lang="scss">
  @use "./variables.scss" as *;
  @use "./sass/utils" as *;

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
</style>
