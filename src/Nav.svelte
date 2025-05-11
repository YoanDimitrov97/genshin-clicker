<script lang="ts">
    let { currentView = $bindable() } = $props();
</script>

<nav>
    <button onclick={() => (currentView = "home")}>
        <img
            src="https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Sword_Unaligned.png"
            alt=""
        />
    </button>
    <button onclick={() => (currentView = "wish")}>
        <img
            src="https://static.wikia.nocookie.net/gensin-impact/images/4/48/System_Wish.png"
            alt=""
        />
    </button>
    <button onclick={() => (currentView = "artifacts")}>
        <img
            src="https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Inventory_Artifacts.png"
            alt=""
        />
    </button>
</nav>

<style>
    nav {
        background: #000;
        height: 100vh;
    }

    nav button:first-child {
        margin-top: 20px;
    }

    nav button {
        background-color: #000;
        border: none;
        margin-bottom: 20px;
        width:100%;
    }

    img {
        width: 40px;
        margin: 0 auto;
    }
</style>
