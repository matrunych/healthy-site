const fetchHabitslist = () => (dispatch) => {
    fetch('/habitslist').then(resp => {
        return resp.json();
    }).then(body => {

        this.setState({
            habitslist: body
        })
    })
}