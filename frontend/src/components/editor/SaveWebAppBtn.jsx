import React from 'react'
import { toPng } from 'html-to-image';
import { uploadImg } from '../../services/screen-shot.service';
import { webAppService } from '../../services/web-app.service';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/actions/user.action';
import { store } from 'react-notifications-component';

export const SaveWebAppBtn = ({ onSaveWebApp }) => {


  
    const dispatch = useDispatch();

    const handle = () => {
        onSaveWebApp().then((webApp) => {

            // Saved successfully msg
            store.addNotification({
                message: "Saved Successfully!",
                type: "success",
                insert: "top",
                container: "top-right",
                fontFamily: "Lato regular,sans-serif",
                animationIn: ["animate__animated", "animate__backInRight"],
                animationOut: ["animate__animated", "animate__backOutRight"],
                dismiss: {
                    duration: 3000,
                    onScreen: true
                }
             });

            //  Uploading msg
            const uploadingId = store.addNotification({
                message: "Uploading media to cloud...",
                type: "info",
                insert: "top",
                container: "top-right",
                fontFamily: "Lato regular,sans-serif",
                animationIn: ["animate__animated", "animate__backInRight"],
                animationOut: ["animate__animated", "animate__backOutRight"],
                dismiss: {
                    duration: 0,
                    onScreen: true
                }
             });

            const elWebAppBuilder = document.querySelector('.web-app-builder')

            toPng(elWebAppBuilder, { cacheBust: true, quality: 0.2, style:{width: '100%', margin: '0', outline: 'none'}})
            .then((dataUrl) => {
              uploadImg(dataUrl)
               .then(url => {
                   console.log(url)
                   webApp.image = url;
                   webAppService.save(webApp)
                   dispatch(setUser())

                   store.removeNotification(uploadingId)
                   
                   // Success msg
                  store.addNotification({
                   message: "Your project is ready to view!",
                   type: "success",
                   insert: "top",
                   container: "top-right",
                   fontFamily: "Lato regular,sans-serif",
                   animationIn: ["animate__animated", "animate__backInRight"],
                   animationOut: ["animate__animated", "animate__backOutRight"],
                   dismiss: {
                       duration: 3000,
                       onScreen: true
                   }
                });
                })
             })
            .catch((err) => {
              console.log(err)
            })
        })
    }

    return (
        <svg onClick={() => { handle() }} className="editor-save-btn" width="94" height="90" viewBox="0 0 94 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="47" cy="45" rx="47" ry="45" fill="#2B3039" />
            <path d="M66.682 33.182L58.818 25.318C57.9741 24.4741 56.8295 24 55.6361 24H30.5C28.0147 24 26 26.0147 26 28.5V61.5C26 63.9853 28.0147 66 30.5 66H63.5C65.9853 66 68 63.9853 68 61.5V36.3639C68 35.1705 67.5259 34.0259 66.682 33.182ZM47 60C43.6863 60 41 57.3137 41 54C41 50.6863 43.6863 48 47 48C50.3137 48 53 50.6863 53 54C53 57.3137 50.3137 60 47 60ZM56 31.4512V40.875C56 41.4963 55.4963 42 54.875 42H33.125C32.5037 42 32 41.4963 32 40.875V31.125C32 30.5037 32.5037 30 33.125 30H54.5487C54.8472 30 55.1333 30.1185 55.3442 30.3295L55.6705 30.6558C55.775 30.7602 55.8578 30.8842 55.9144 31.0207C55.9709 31.1572 56 31.3035 56 31.4512Z" fill="#F2EFE7" />
        </svg>
    )
}
