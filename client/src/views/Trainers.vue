<template>
    <div class="container is-max-desktop">
            <h2 class="title is-2 has-text-centered is-capitalized">Apply to be a Trainer!</h2>
            <h6 class="subtitle has-text-centered">There are no current trainers so apply to be one to help others.
                <br>
                This is an upcoming feature to make sure you are kept accountable and on track.
            </h6>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="fname" placeholder="First Name">
                        </p>
                    </div>
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="lname" placeholder="Last Email">
                        </p>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Email</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="email" placeholder="Email">
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Experience/Gender</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded">
                            <input class="input" type="number" min="0" placeholder="Years of Experience">
                        </p>
                    </div>
                    <div class="field">
                        <span class="control is-expanded">
                            <div class="control">
                                <div class="select is-fullwidth" type="topic">
                                    <select>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Non-binary</option>
                                        <option>Prefer not to say</option>
                                    </select>
                                </div>
                            </div>

                        </span>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button class="button is-dark is-centered">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {

}
</script>