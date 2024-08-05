import dropDownMenu from './modules/dropdownMenu'
import { useDynamicAdapt } from './modules/dynamic-adapt'
import generalSlider from './modules/general-slider'

function handleDOMContentLoaded() {
	generalSlider()
	dropDownMenu()
	useDynamicAdapt("max")
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)
