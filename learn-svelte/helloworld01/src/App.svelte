<script lang="ts">
  import CheckBoxBinding from './Bindings/CheckBoxBinding.svelte'
  import GroupBinding from './Bindings/GroupBinding.svelte'
  import InputBinding from './Bindings/InputBinding.svelte'
  import NumberInput from './Bindings/NumberInput.svelte'
  import SelectBinding from './Bindings/SelectBinding.svelte'
  import SelectMultiple from './Bindings/SelectMultiple.svelte'
  import TextareaBinding from './Bindings/TextareaBinding.svelte'
  import AwaitRandomNumber from './Events/AwaitRandomNumber.svelte'
  import Color from './Events/Color.svelte'
  import Counted from './Events/Counted.svelte'
  import Counter from './Events/Counter.svelte'
  import EventDispatcher from './Events/EventDispatcher.svelte'
  import PressBigButton from './Events/PressBigButton.svelte'
  import RemoveThings from './Events/RemoveThings.svelte'
  import BeforeUpdate from './LifeCycles/BeforeUpdate.svelte'
  import OnMount from './LifeCycles/OnMount.svelte'
  import TickLifeCycle from './LifeCycles/TickLifeCycle.svelte'
</script>

<Counter />
<hr />
<Counted />
<hr />
<Color />
<hr />
<RemoveThings />
<hr />
<AwaitRandomNumber />
<hr />
<!-- <DomEventMouse /> -->

<!-- Event Modifier -->
<button type="button" on:click|once={() => alert('WTF')}> CLick ME </button>
<hr />
<EventDispatcher />
<hr />
<PressBigButton />
<hr />
<InputBinding />
<hr />
<NumberInput />
<hr />
<CheckBoxBinding />
<hr />
<SelectBinding />
<hr />
<GroupBinding />
<hr />
<SelectMultiple />
<hr />
<TextareaBinding />
<hr />
<!-- <OnMount /> -->
<hr />
<BeforeUpdate />
<hr />
<TickLifeCycle />

<style>
  hr {
    margin-top: 2em;
    border: 3px solid green;
    width: 800px;
  }
</style>
