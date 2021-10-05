import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { DynamicCmp } from '../dynamic-cmps/DynamicCmp';
import { webAppService } from '../services/web-app.service';

export const PublishPage = () => {
    const { webAppId } = useParams();
    const [webApp, setWebApp] = useState(null)
    const [editorSize, setEditorSize] = useState(window.innerWidth)

    useEffect(() => {
        const loadWebApp = async () => {
            const webApp = await webAppService.getById(webAppId)
            setWebApp(webApp)
        }
        loadWebApp()

        window.addEventListener('resize', onChangeEditorSize)

        return () => {
            window.removeEventListener('resize', onChangeEditorSize)
        }

    }, [webAppId])

    const onChangeEditorSize = () => {
        setEditorSize(window.innerWidth)
    }

    if (!webApp) return <h1>Loading....</h1>
    return (
        <div>
            {webApp && webApp.children.map(cmp => {
                return <DynamicCmp cmp={cmp} isPublished={true} editorWidth={editorSize} onChangeEditorSize={onChangeEditorSize} />
            })}
        </div>
    )
}
