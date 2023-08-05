<main>
  <h1>todos</h1>
  <section>
    <form>
      <input type="checkbox" id="toggle-all" class="" />
      <label aria-label="Mark all as complete" for="toggle-all"
        >Mark as complete</label
      >
      <input
        id="new-todo"
        class="new-todo"
        placeholder="what needs to be done?"
        type="text"
      />
    </form>
    <ul class="">
      <li class="">
        <div>
          <div>
            <input id="todo" class="" type="checkbox" />
            <label aria-label="check todo" class="" for="todo" />
          </div>
          <span class="">Todo 1</span>
          <button aria-label="Remove todo" class="" />
        </div>
        <!-- <input class="" type="text" /> -->
      </li>
    </ul>

    <div>
      <span>0 left</span>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear completed</button>
    </div>
  </section>
</main>
