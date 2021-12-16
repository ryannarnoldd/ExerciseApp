<template>
    <div class="container my-5 mt-5 mx-5 px-5">
        <h2 class="title is-2 has-text-centered is-capitalized">Contact Us</h2>
        <h6 class="subtitle has-text-centered">Email us with any questions or inquiries, or call us at (845) 123-4567.</h6>
        
        <form action="mailto:help@fitizen.com" method="GET">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">From</label>
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
                    <label class="label"></label>
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
                    <label class="label">Topic</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow">
                        <div class="control">
                            <div class="select is-fullwidth" type="topic">
                                <select>
                                    <option>General</option>
                                    <option>Exercise</option>
                                    <option>Manage Account</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Subject</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="subject" placeholder="Subject">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Message</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <textarea class="textarea" subject="message" placeholder="How we can help?"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button onclick="location.href='mailto:help@fitizen.com';" class="button is-dark">Send</button>
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