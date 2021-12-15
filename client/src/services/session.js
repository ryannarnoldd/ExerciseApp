import router from "../router";
import { Login, Register } from "./users";
import { Add } from "./posts";
import { Log } from "./exercises";
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";

const session = {
    user: null,
    messages: [],       // {text: string, type: string }
    toRoute: '/feed',
    async Login(handle, password) {

        try {
            const response = await Login(handle, password);

            this.user = response.user;

            router.push(this.toRoute);

        } catch (error) {
            this.Error(error);
        }
    },
    async Register(user) {

        try {
            const response = await Register(user);

            this.user = response.user;

            router.push(this.toRoute);

        } catch (error) {
            this.Error(error);
        }
    },
    // Once a post is added, go to the feed.
    async Add(post) {

        try {
            const response = await Add(post);

            this.user = response.user;

            router.push(this.toRoute);

        } catch (error) {
            this.Error(error);
        }
    },
    async Log(exercise) {

        try {
            const response = await Log(exercise);

            this.user = response.user;

            router.push(this.toRoute);

        } catch (error) {
            this.Error(error);
        }
    },
    Error(error) {
        console.error(error);
        const msg = error.msg ?? error;

        this.messages.push({ text: msg, type: 'warning' })
        NotificationProgrammatic.open({
            duration: 5000,
            message: msg,
            variant: 'danger',
            type: 'danger',
            closable: true,

        })

    }
};

export default session;

//export function