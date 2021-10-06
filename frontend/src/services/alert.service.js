import { store } from 'react-notifications-component';

export const alertMessage = (message, type, duration = 0) => {
    return store.addNotification({
        message,
        type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__backInRight"],
        animationOut: ["animate__animated", "animate__backOutRight"],
        dismiss: {
            duration,
            onScreen: true
        }
    });
}

export const workTogetherMessage = () => {
    return store.addNotification({
        message: "Share this link with your team, and start working together!",
        title: "Copied to clipboard",
        type: "info",
        insert: "bottom",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__backInLeft"],
        animationOut: ["animate__animated", "animate__backOutDown"],
        dismiss: {
            duration: 6000,
            onScreen: true
        }
    });
}


export const removeMessage = (messageId) => {
    store.removeNotification(messageId)
}