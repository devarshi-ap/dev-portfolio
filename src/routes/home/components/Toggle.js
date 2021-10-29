function Toggle() {
    return (
        <div className="toggle">
            <span>
                <i className="fas fa-adjust" id="adjust-icon"></i>
            </span>
            <label for="toggle-box" className="switch">
                <input type="checkbox" name="toggle-theme" id="toggle-box"/>
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default Toggle;