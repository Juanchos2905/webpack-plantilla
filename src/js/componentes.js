export const saludar = (nombre) => {
  console.log('Creando etiqueta H1')
  const h1 = document.createElement('h1')
  h1.innerText = `hola, ${nombre}`
  document.body.append(h1)
}
