<script lang="ts">
  import Button from '../components/Button.svelte'
  import Input from '../components/Input.svelte'
</script>

<div class="flex flex-col gap-4 items-center justify-center h-screen">
  <div class="flex flex-col w-full max-w-md gap-4">
    <Input label="Namn" placeholder="Fyll i ditt namn" value="" />
    <Button>Skicka</Button>
  </div>
</div>
