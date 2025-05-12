<script lang="ts">
  import type { Item } from "../types/item";

  let inventory: Item[] = $state([]);

  const addItemToBag = (item: Item) => {
    inventory.push(item);
  };

  export const bag = {
    get items() {
      return inventory;
    },
    addItemToBag: (item:Item) => addItemToBag(item),
  };
</script>
