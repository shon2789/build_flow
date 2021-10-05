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


export const removeMessage = (messageId) => {
    store.removeNotification(messageId)
}