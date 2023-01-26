<script>
  import { BoardStore, uid } from "../lib/data";
  import { clsx } from "clsx";
  import SectionTitle from "./SectionTitle.svelte";
  import Card from "./Card.svelte";
  import AddTodo from "./AddTodo.svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";

  /* state */
  let newtodo = false;
  function handleNewTodo() {
    newtodo = !newtodo;
  }
  /* end state */

  /* Handle dispatched events  */
  function handleAddTodo(event) {
    let [title, description, priority] = [event.detail.title, event.detail.description, event.detail.priority];
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
    BoardStore.update((columns) => {
      let columnaTodo = columns.find((col) => col.title === "TODO");
      columnaTodo.cards = [...columnaTodo.cards, data];
      return columns;
    });
    newtodo = false;
  }
  /* end Handle events */

  /* Drag and Drop logic */
  let hoveringOverColumn = null;
  function dragStart(event, columnIndex, cardIndex) {
    // The data we want to make available when the element is dropped
    // is the index of the item being dragged and
    // the index of the basket from which it is leaving.
    const data = { columnIndex, cardIndex };
    /**
     * The setData() method of the DataTransfer interface sets the data type and the value of the dragged data.
     * https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer
     */
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
  }
  function drop(event, columnIndex) {
    event.preventDefault();
    // json y data could be one liner but I like to be verbose
    const json = event.dataTransfer.getData("text/plain");
    const data = JSON.parse(json);

    // remover the card from column
    // Update the store
    BoardStore.update((columns) => {
      // step 1 splice returns an array of the removed elements
      const [card] = columns[data.columnIndex].cards.splice(data.cardIndex, 1);
      // step 2 add the removed elements to the new column
      columns[columnIndex].cards = [...columns[columnIndex].cards, card];
      hoveringOverColumn = null;
      return columns;
    });
  }
  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      };
    },
  });
  /* END Drag and Drop logic */
</script>

<!-- key react en svelte es on each block add (column.id) -->
{#each $BoardStore as column, ColumnIndex (column)}
  <section class="wrapperColumn">
    <div
      class={clsx("colorband", {
        "colorband-green": column.title === "TODO",
        "colorband-orange": column.title === "In Progress",
        "colorband-blue": column.title === "Done",
      })}
    />
    <SectionTitle sectionName={column.title} on:click={handleNewTodo} open={newtodo} />
    <!-- cards estan empty  -->
    <div>
      <!-- checar en que columna estoy  -->
      {#if column.title === "TODO"}
        {#if newtodo}
          <AddTodo on:newTodo={handleAddTodo} />
        {/if}
      {/if}
      <!-- si es columna todo poner cards status.todo -->
      <ul
        class:hovering={hoveringOverColumn === column.title}
        on:dragenter={() => (hoveringOverColumn = column.title)}
        on:dragleave={() => (hoveringOverColumn = null)}
        on:drop={(event) => drop(event, ColumnIndex)}
        on:dragover={(event) => event.preventDefault()}
      >
        <!-- if column.card is and empty array -->

        {#if column.cards.length === 0}
          <div class="itemCard" style="">
            <li style="height: 30px; min-width:250px" />
          </div>
        {/if}

        {#each column.cards as card, cardIndex (card.id)}
          <div class="itemCard" in:receive={{ key: cardIndex }} out:send={{ key: cardIndex }} animate:flip>
            <li draggable="true" on:dragstart={(event) => dragStart(event, ColumnIndex, cardIndex)}>
              <Card
                title={card.title}
                description={card.description}
                comments={card.comments}
                attachments={card.attachments}
                avatarsrc={card.avatar}
                priority={card.priority}
              />
            </li>
          </div>
        {/each}
      </ul>
    </div>
  </section>
{/each}

<style lang="scss">
  @use "../sass/utils" as *;
  @use "../variables.scss" as *;

  .itemCard {
    display: inline-flex;
    width: 100%;
  }

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

  .hovering {
    border-color: orange;
    border: 1px solid orange;
  }
  ul {
    list-style: none;
    display: flex; /* required for drag & drop to work when .item display is inline */
    flex-direction: column;
    min-height: calc(100vh - 150px); /* needed when empty */
    padding: 0;
    padding: 0.5rem;
    gap: 1rem;
  }
  // reset li styles
  li {
    margin: 0;
    padding: 0;
    width: 100%;
  }
</style>
