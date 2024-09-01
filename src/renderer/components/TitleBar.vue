<script setup lang="ts">
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { X, Maximize, Minus, Minimize } from "lucide-vue-next";
import { ref } from "vue";

const isMaximized = ref(false);

function close() {
  window.app.close();
}
function minimize() {
  window.app.minimize();
}
function maximize_restore() {
  window.app.maximizeRestore();
}

window.electronAPI.onMaximized(() => (isMaximized.value = true));
window.electronAPI.onRestored(() => (isMaximized.value = false));
</script>

<template>
  <div class="w-full flex border-b-[1px] border-secondary">
    <Menubar class="border-0">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled> New Incognito Window </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset> Toggle Fullscreen </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset> Hide Sidebar </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy"> Andy </MenubarRadioItem>
            <MenubarRadioItem value="benoit"> Benoit </MenubarRadioItem>
            <MenubarRadioItem value="Luis"> Luis </MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset> Edit... </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset> Add Profile... </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
    <div class="w-full" style="-webkit-app-region: drag"></div>
    <button
      class="p-2 hover:bg-secondary transition-all"
      @click="minimize()"
      title="Minimize"
    >
      <Minus />
    </button>
    <button
      class="p-2 hover:bg-secondary transition-all"
      @click="maximize_restore()"
      :title="isMaximized ? 'Restore' : 'Maximize'"
    >
      <Maximize v-if="!isMaximized" class="h-5" />
      <Minimize v-else class="h-5" />
    </button>
    <button
      class="p-2 hover:bg-destructive transition-all"
      @click="close()"
      title="Close"
    >
      <X />
    </button>
  </div>
</template>
