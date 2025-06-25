import Select from "./Select"

export default function ThemeMenu({addTheme, themes, changeTheme}) {
    return (
        <>

        <Select themes={themes} changeTheme={changeTheme}/>
            <button onClick={addTheme}>Add</button>
        </>
    )
}