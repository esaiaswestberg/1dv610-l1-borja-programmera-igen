<script lang="ts">
  import strEmpty from '$lib/strEmpty'
  import Icon from '@iconify/svelte'
  import Button from '../components/Button.svelte'
  import Input from '../components/Input.svelte'
  import TextButton from '../components/TextButton.svelte'
  import User from '../components/User.svelte'

  let name: string = 'Esaias'
  let inputError: string = ''
  let welcomeMessageShown: boolean = true

  const resetPage = () => {
    name = ''
    inputError = ''
    welcomeMessageShown = false
  }

  const resetError = () => (inputError = '')

  const submitName = () => {
    if (strEmpty(name)) {
      inputError = 'Du måste fylla i ditt namn'
      return
    }

    resetError()
    welcomeMessageShown = true
  }
</script>

<div class="flex flex-col gap-4 items-center justify-center h-screen">
  <div class="flex flex-col w-full max-w-md gap-4">
    {#if welcomeMessageShown}
      <User {name} />

      <TextButton on:click={resetPage}>
        <Icon icon="material-symbols:arrow-back-ios-rounded" class="w-4 h-5" />
        Gå tillbaka
      </TextButton>
    {:else}
      <Input label="Namn" placeholder="Fyll i ditt namn" bind:value={name} bind:errorMessage={inputError} on:input={resetError} />
      <Button on:click={submitName}>Skicka</Button>
    {/if}
  </div>
</div>
