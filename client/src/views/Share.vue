<template>
    <div class="container is-max-desktop">
        <form action="" method="post">
            <h2 class="title is-2 has-text-centered is-capitalized">Share Your Exercise!</h2>
            <h6 class="subtitle has-text-centered">Share your exercies with your friends and the rest of the world.</h6>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Exercise Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="name" placeholder="Exercise Name">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Description</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <textarea class="textarea" type="description" placeholder="Description"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button class="button is-dark is-centered">Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
</template>

<script>
export default {

}
</script>