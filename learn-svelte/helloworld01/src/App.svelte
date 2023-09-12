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
  import BindingStore from './Stores/BindingStore.svelte'
  import CustomStore from './Stores/CustomStore.svelte'
  import DerivedStore from './Stores/DerivedStore.svelte'
  import ReadableStore from './Stores/ReadableStore.svelte'
  import WritableStore from './Stores/WritableStore.svelte'
  import Tweens from './advance/Motion/Tweens.svelte'
  import Springs from './advance/Motion/Springs.svelte'
  import Fade from './advance/Motion/Fade.svelte'
  import Fly from './advance/Motion/Fly.svelte'
  import FadeNFly from './advance/Motion/FadeNFly.svelte'
  import CustomCssTransitions from './advance/Motion/transition/customCssTransitions.svelte'
  import Todo from './advance/Motion/transition/todos/Todo.svelte'
  import ColorCanvas from './advance/action/ColorCanvas.svelte'
  import Dimension from './advance/Dimension.svelte'
</script>

<!-- <Counter />
<hr />
<Counted />
<hr />
<Color />
<hr />
<RemoveThings />
<hr />
<AwaitRandomNumber />
<hr /> -->
<!-- <DomEventMouse /> -->

<!-- Event Modifier -->
<!-- <button type="button" on:click|once={() => alert('WTF')}> CLick ME </button>
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
<hr /> -->
<!-- <OnMount /> -->
<!-- <hr />
<BeforeUpdate />
<hr />
<TickLifeCycle /> -->

<!-- Stores -->
<!-- 
<WritableStore />
<hr />
<ReadableStore />
<hr />
<DerivedStore />
<hr />
<CustomStore />
<hr />
<BindingStore /> -->

<!-- Advanced -->
<!-- <Tweens /> -->
<!-- <hr /> -->
<!-- <Springs /> -->
<!-- <Fade /> -->
<!-- <hr /> -->
<!-- <Fly /> -->
<!-- <hr /> -->
<!-- <FadeNFly /> -->
<!-- <hr /> -->
<!-- <CustomCssTransitions /> -->
<!-- <hr /> -->
<!-- <Todo /> -->
<!-- <hr /> -->
<!-- <ColorCanvas /> -->
<!-- <hr /> -->
<!-- <Dimension /> -->

<style>
  hr {
    margin-top: 2em;
    border: 3px solid green;
    width: 800px;
  }
</style>
