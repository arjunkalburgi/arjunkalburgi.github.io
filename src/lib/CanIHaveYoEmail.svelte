<script>
  import { fade } from 'svelte/transition';

  let emailInput;
  let emailSent = false;
  let submitEmail = () => {
    if (!emailInput) return false;

    fetch('https://formcarry.com/s/Mmwa-p-fN', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email: emailInput })
    })
      .then((_) => (emailSent = true))
      .catch((error) => console.log(error));
    return false;
  };
</script>

<div class="have_yo_email_container">
  {#if !emailSent}
    <form on:submit|preventDefault={submitEmail} out:fade>
      <input type="email" id="email" placeholder="put-your@email.here" bind:value={emailInput} />
      <button type="submit">⇨</button>
    </form>
    <label for="email" out:fade>
      enter your email and I'll reach out! Let's talk about your ideas
    </label>
  {:else}
    <p in:fade={{ delay: 1000 }}>whoohoo - email received! I'll reach out to you soon 😄</p>
  {/if}
</div>

<style lang="scss">
  .have_yo_email_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    form {
      position: relative;
      width: 250px;

      input {
        border: 1px solid #ddd;
        border-radius: 1px;
        width: 250px;
        padding: 5px 0 5px 0.4rem;
        font-size: 0.9rem;

        &:active,
        &:focus-visible {
          outline: none;
          border: 1px solid blue;
        }

        &::placeholder {
          font-size: 0.9rem;
        }
      }

      button {
        cursor: pointer;
        font-size: 0.9rem;
        background: none;
        border: 1px solid transparent;
        border-radius: 1px;
        position: absolute;
        right: -8px;
        top: 0px;
        bottom: 0px;
        padding: 0px 7px;

        &:focus-visible,
        &:active {
          outline: none;
          border: 1px solid blue;
        }
      }
    }

    label,
    p {
      font-size: 0.9rem;
      margin: 0.25rem 0;
    }
  }
</style>
