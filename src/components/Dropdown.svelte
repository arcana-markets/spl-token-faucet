<script lang="ts">
    import { writable } from 'svelte/store';
    import { tokens } from '$lib'; // Assuming this imports an array of tokens, each with `name`, `publicKey`, `decimals`, and `imageUrl`.
    import { Button, Dropdown, DropdownItem, Avatar } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
  
    // Token selection store
    const selectedToken = writable(tokens[0]); // Default to the first token
  
    // Function to handle token selection
    function selectToken(token) {
      selectedToken.set(token);
    }
  </script>
  
  <Button>
    Select a token
    <ChevronDownOutline class="w-3 h-3 ml-2 text-white dark:text-white" />
  </Button>
  <Dropdown class="w-48 overflow-y-auto py-1 h-48">
    {#each tokens as token}
      <DropdownItem class="flex items-center text-base font-semibold gap-2" on:click={() => selectToken(token)}>
        <Avatar src={token.imageUrl} size="xs" alt={token.name} />
        {token.name}
      </DropdownItem>
    {/each}
  </Dropdown>
  
  <!-- Displaying Selected Token -->
  <div>
    <h2 class="text-xl font-bold mt-5">Selected Token</h2>
    <div class="mt-3">
      {#if $selectedToken}
        <div class="flex items-center gap-4">
          <Avatar src={$selectedToken.imageUrl} size="lg" alt={$selectedToken.name} />
          <div>
            <p class="text-lg font-semibold">{$selectedToken.name}</p>
            <p>Decimals: {$selectedToken.decimals}</p>
          </div>
        </div>
      {/if}
    </div>
  </div>
  
  <style>
    /* Additional styling here */
  </style>
  