export const useServiceDropdownOpen = () => useState("serviceDropdownIsOpen", () => false)
export const useScrollBeyondFold = () => useState("isScrollBeyondFold", () => false)
export const useScrollingDown = () => useState("isScrollingDown", () => false)
export const useHeaderClickable = () => useState("headerClickable", () => true)
export const useHeaderState = () => useState("headerState", () => "open")

