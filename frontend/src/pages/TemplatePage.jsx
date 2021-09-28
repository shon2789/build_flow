import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TemplateList } from '../components/templates/TemplateList'
import { loadWebApps } from '../store/actions/web-app.action'

export const TemplatePage = () => {

    const dispatch = useDispatch()
    const templates = useSelector(state => state.webAppModule.webApps)

    useEffect(() => {
        dispatch(loadWebApps())
    },[])

    if (window.innerWidth < 850) {
        window.scrollTo({ top: 0 })
    }

    return (
        <TemplateList templates={templates} />
    )
}
