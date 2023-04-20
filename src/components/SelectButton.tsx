import './SelectButtonStyle.css'

type SelectButtonProps = {
    leftButtonAction: () => void,
    rightButtonAction: () => void,

    value: string | undefined,
}

function SelectButton(prop: SelectButtonProps) {
    var style: React.CSSProperties = {
        display: "flex",
        justifyContent: "space-between"
    }
    var buttonStyle: React.CSSProperties = {
    }
    return (
        <div style={style}>
            <button className="SelectButtonItem" onClick={prop.leftButtonAction}>&lt;</button>
            <span>{prop.value}</span>
            <button className="SelectButtonItem" onClick={prop.rightButtonAction}>&gt;</button>
        </div>
    )
}

export default SelectButton;