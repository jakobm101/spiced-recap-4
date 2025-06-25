import Select from "./Select"

export default function ThemeMenu({addTheme, themes, changeTheme, currentThemeId}) {
    return (
        <>

        <Select themes={themes} changeTheme={changeTheme} currentThemeId={currentThemeId}/>
            <button onClick={addTheme}>Add</button>
        </>
    )
}