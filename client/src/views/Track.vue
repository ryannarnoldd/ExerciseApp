<template>
    <div class="container is-max-desktop">
        <h1 class="title has-text-centered">Track Your Fitness</h1>
        <h6 class="subtitle">This is where you will be able to track your exercise and progress, either entering times manually or trying out built-in exercise stopwatch.</h6>

        <div class="field is-horizontal">
            <form action="" method="post">
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
                        <div class="field">
                            <div class="control">
                                <button class="button is-dark is-centered">Start</button>
                                <button class="button is-dark is-centered">Stop</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>