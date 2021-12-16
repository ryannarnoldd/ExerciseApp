<template>
    <div class="container is-max-desktop">
        <h2 class="title is-2 has-text-centered is-capitalized">Check Your Progress with Reports!</h2>
        <h6 class="subtitle has-text-centered">
            This is where you are able to see the trends and progress of your fitness journey all in one location.
            <br>
            This is an upcoming feature to make sure you are kept accountable and on track.
        </h6>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Calories (ckal)</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded">
                        <progress class="progress is-danger" value="80" max="100">80%</progress>
                    </p>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Move (minute)</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded">
                        <progress class="progress is-info" value="60" max="100">60%</progress>
                    </p>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Stand (hours)</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded">
                        <progress class="progress is-success" value="20" max="100">20%</progress>
                    </p>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Dedication (%)</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded">
                        <progress class="progress is-link" value="67" max="100">67%</progress>
                    </p>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Steps</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <b>Daily Average: 6783 steps.</b>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <b>Weekly Average: 3573 steps.</b>
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