import React from 'react'
import "./content.css"
import { About } from './about/about'
import { Experiences } from './experience/experiences'
import { Educations } from './education/educations'
import { Testimonals } from './testimonal/testimonals'
import { Contact } from './contact/contact'
export const Content = () => {
  return (
    <div className="main-content pull-right">
        <About/>
        <Experiences/>
        <Educations/>
        <Testimonals/>
        <Contact/>
    </div>
  )
}
