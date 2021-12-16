<template>
  <div class="container is-max-desktop">
    <h1 class="title has-text-centered">Settings</h1>
    <h6 class="subtitle has-text-centered">
      This is where you can manage many settings to make your
      <em>Fitizen</em> experience better and more comfortable.
      <br />
      This is not currently in use, but will soon be added.
    </h6>

    <form action="" method="post">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Color</label>
        </div>
        <div class="field-body">
          <div class="field">
            <span class="control is-expanded">
              <div class="control">
                <div class="select is-fullwidth" type="theme">
                  <select aria-placeholder="Color Theme">
                    <option>Default</option>
                    <option>Pride</option>
                    <option>Dark</option>
                    <option>Light</option>
                    <option>Horror</option>
                    <option>Green</option>
                    <option>Blue</option>
                    <option>Custom</option>
                  </select>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Nickname</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="pname" placeholder="Nickname" />
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Date</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="checkbox" /> Use European Date Format
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label"></div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-dark is-centered">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>