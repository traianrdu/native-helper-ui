import React from 'react'
import ConvertableForm from "../../components/ConvertableForm";

/**
 * Creates the page
 * @returns default android to ios page
 */
export default function AndroidToIOS() {
  return (
    <div>
        LOGO
        {renderLogo()}
        {renderLogo()}
        {renderLogo()}
        {renderLogo()}
        {renderLogo()}
        <ConvertableForm />
    </div>
    
  )
}

/**
 * Renders logo
 * @returns logo
 */
function renderLogo() {
    return (
        <div>
            log
        </div>
    )
}