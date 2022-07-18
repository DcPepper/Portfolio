function ToggleSwitch({ toggle, handleToggle, sToggle }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            {!toggle ? "Afficher tout" : "Masquer tout"}
            <label className="toggle-switch">

                <input type="checkbox" checked={toggle} onChange={handleToggle} />
                <span className="switch" />
            </label>
        </div>
    );
}

export default ToggleSwitch