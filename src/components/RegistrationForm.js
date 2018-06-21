import react from 'React'


export class RegistrationForm extends react.component{
  render(){
    return(
      <form>
      <input type="text" name="userName">
      <input type="password" name="password">
      <input type="submit" value="submit">
      </form>
    )
  }
}
