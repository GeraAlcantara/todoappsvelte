<script>
  import { createEventDispatcher } from "svelte";
  // dispatch values from form
  const dispatch = createEventDispatcher();
  // create a new todo object

  function newTodo() {
    dispatch("newTodo", {
      title: textTitle,
      description: txtDesc,
      priority: selectedPriority,
    });
  }
  function handleNewTodo() {
    newTodo();
    textTitle = "";
    txtDesc = "";
    selectedPriority = "";
  }

  let textTitle = "";
  let txtDesc = "";
  let selectedPriority = "";
  let priorities = [
    {
      id: 1,
      name: "High",
    },
    {
      id: 2,
      name: "Med",
    },
    {
      id: 3,
      name: "Low",
    },
  ];
</script>

<div class="addTodos-wrapper">
  <form on:submit|preventDefault={handleNewTodo}>
    <label for="priority">
      <h2>Select Priority</h2>
      <select name="priority" bind:value={selectedPriority} required>
        {#each priorities as priority}
          <option value={priority.name}>{priority.name}</option>
        {/each}
      </select>
    </label>

    <label for="title">
      <h2>Todo Title</h2>
      <input name="title" type="text" placeholder="Add todo chavo 🚀" bind:value={textTitle} required />
    </label>

    <label for="description">
      <h2>description</h2>
      <textarea name="description" placeholder="Describe el Todo 🤓" rows="5" bind:value={txtDesc} />
    </label>

    <button>Add todo</button>
  </form>
</div>

<style lang="scss">
  @use "../variables.scss" as *;
  @use "../sass/utils.scss" as *;
  .addTodos {
    &-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background-color: $bgCardColor-Dark;
      border-radius: 10px;
      padding: 1rem;
      @media (prefers-color-scheme: light) {
        background-color: $bgCardColor;
      }
      @include media("lg") {
        gap: 2rem;
        padding: 2rem;
      }
      h2 {
        line-height: normal;
        margin: 0;
        font-size: 1rem;
        text-transform: capitalize;
      }
      form {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        label {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
      }

      button {
        background-color: red;
        background: $gradientLow;
        color: white;
        text-transform: capitalize;
      }
      input,
      textarea {
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: $bgCardColor-Dark;
        box-shadow: 0 0 0 1px $slatan-200;
        font-size: 1.25rem;
        @media (prefers-color-scheme: light) {
          background-color: $bgCardColor;
        }
        &:focus {
          box-shadow: 0 0 0 1px $slatan-200;
        }
        &::placeholder {
          color: $slatan-200;
        }
      }
      select {
        padding: 0.25rem;
        border: none;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        background-color: $bgCardColor-Dark;
        box-shadow: 0 0 0 1px $slatan-200;
        font-size: 1.25rem;
        @media (prefers-color-scheme: light) {
          background-color: $bgCardColor;
        }
        &:focus {
          box-shadow: 0 0 0 1px $slatan-200;
        }
      }
    }
  }
</style>
