import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TemplateList } from '../components/templates/TemplateList'
import { loadWebApps } from '../store/actions/web-app.action'

export const TemplatePage = () => {

    const dispatch = useDispatch()
    let templates = useSelector(state => state.webAppModule.webApps)
    // Todo: filter locally the templates by isTemplate === true
    useEffect(() => {
        dispatch(loadWebApps({ isTemplate: true }))
    }, [])


    if (window.innerWidth < 850) {
        window.scrollTo({ top: 0 })
    }

    return (
        <TemplateList templates={templates} />
    )
}
