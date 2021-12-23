interface Props {
  num: number;
}

function Double(props: Props) {

  const { num } = props; // object destructuring

  return (
    <div>Le double de {num} est { num * 2 }</div>
  )
}

export default Double;