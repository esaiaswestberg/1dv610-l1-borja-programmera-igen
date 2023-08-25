<script lang="ts">
  import strEmpty from '$lib/strEmpty'
  import Icon from '@iconify/svelte'
  import Button from '../components/Button.svelte'
  import Input from '../components/Input.svelte'
  import TextButton from '../components/TextButton.svelte'
  import User from '../components/User.svelte'

  let name: string = ''
  let inputError: string = ''
  let userPageShown: boolean = false

  const resetPage = () => {
    name = ''
    inputError = ''
    userPageShown = false
  }

  const resetError = () => (inputError = '')

  const submitName = () => {
    if (strEmpty(name)) {
      inputError = 'Du måste fylla i ditt namn'
      return
    }

    resetError()
    userPageShown = true
  }
</script>

{#if !userPageShown}
  <div class="flex flex-col gap-4 items-center justify-center h-screen overflow-y-auto p-4">
    <div class="flex flex-col w-full max-w-md gap-4">
      <Input label="Namn" placeholder="Fyll i ditt namn" bind:value={name} bind:errorMessage={inputError} on:input={resetError} />
      <Button on:click={submitName}>Skicka</Button>
    </div>
  </div>
{/if}

{#if userPageShown}
  <div class="flex flex-col gap-4 items-center overflow-y-auto p-4">
    <div class="flex flex-col w-full max-w-md gap-4">
      <User {name} />

      <TextButton on:click={resetPage}>
        <Icon icon="material-symbols:arrow-back-ios-rounded" class="w-4 h-5" />
        Gå tillbaka
      </TextButton>
    </div>
  </div>
{/if}
