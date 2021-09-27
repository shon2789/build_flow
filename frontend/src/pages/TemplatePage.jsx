import React from 'react'
import { TemplateList } from '../components/templates/TemplateList'

export const TemplatePage = () => {

    if (window.innerWidth < 850) {
        window.scrollTo({ top: 0 })
    }

    return (
        <TemplateList />
    )
}
