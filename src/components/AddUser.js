import React from "react"

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: "", 
            last_name: "", 
            patronymic: "",
            age: 1,
            isHappy: false
        }
    }
    render() {
           return (
                <form>
                    <input placeholder="Имя" onChange={(e) => this.setState({ first_name: e.target.value })} />
                    <input placeholder="Фамилия" onChange={(e) => this.setState({ last_name: e.target.value })} />
                    <input placeholder="Отчество" onChange={(e) => this.setState({ patronymic: e.target.value })} />
                    <input placeholder="Возраст" onChange={(e) => this.setState({ age: e.target.value })} />
                    <label htmlFor="isHappy">Счастлив?</label>
                    <input type='checkbox' id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked })} />
                    <button type="button" onClick={() => this.props.onAdd({
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        patronymic: this.state.patronymic,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                    })}>Добавить</button>
                </form>
           )
    }
}

export default AddUser