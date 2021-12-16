<template>
    <div class="container is-max-desktop">
        <h1 class="title has-text-centered">Track Your Fitness</h1>
        <h6 class="subtitle has-text-centered">The built-in stopwatch is a great way to keep track of your exercises!
            <br>
            Just click the button below to start the timer and see the time you have spent on each exercise.
        </h6>

        <div class="field is-horizontal">
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">Exercise</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span class="control is-expanded">
                                <div class="control">
                                    <div class="select is-fullwidth" type="sport">
                                        <select>
                                            <option>Running</option>
                                            <option>Cycling</option>
                                            <option>Disc Sports</option>
                                            <option>Table Tennis</option>
                                            <option>Mixed Cardio</option>
                                            <option>Outdoor Walk</option>
                                            <option>Disc Sports</option>
                                            <option>Baseball</option>
                                            <option>Basketball</option>
                                            <option>Soccer</option>
                                            <option>Pool Swim</option>
                                            <option>Flexability</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div class="field">
                            <p class="control is-expanded is-centered">
                                <b>{{counter}} seconds.</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label"></div>
                    <div class="field-body">
                                <button class="button is-dark" type="submit" @click="start" >Start</button>
                                <button class="button is-light" type="submit" @click="stop">Stop</button>
                                <button class="button is-red" type="submit" @click="reset">Reset</button>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    // Create a working counter by seconds.
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        // Start the counter.
        this.start();
    },
    methods: {
        // Start the counter.
        start() {
            this.interval = setInterval(() => {
                this.counter++;
            }, 1000);
        },
        // Stop the counter.
        stop() {
            clearInterval(this.interval);
        },
        // Reset the counter.
        reset() {
            this.counter = 0;
        }
    }

}
</script>