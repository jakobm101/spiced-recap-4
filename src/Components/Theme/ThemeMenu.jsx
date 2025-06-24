import Select from "./Select"

export default function ThemeMenu({addTheme, themes}) {
    return (
        <>

        <Select themes={themes}/>
            <button onClick={addTheme}>Add</button>
        </>
    )
}