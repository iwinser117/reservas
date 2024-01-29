
export default function Category(props) {
  console.log(props.params);
  const { categories } = props;
  console.log(categories);
  return <h1>Categoria dinámica: {props.params?.rutasDina}</h1>;
}
