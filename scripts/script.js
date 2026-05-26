var alumnos = [{Nombre:'Rafa', Grupo: 'I'}, {Nombre: 'Miguel', Grupo: 'A'}, {Nombre: 'Luis', Grupo: 'E'}, {Nombre: 'Rebeca', Grupo: 'F'}, {Nombre: 'Erick', Grupo: 'G'}]

const table = document.createElement('table')
table.border = '1'
const tbody = document.createElement('tbody')

const encabezado = Object.keys(alumnos[0])
const filaE = document.createElement('tr')

encabezado.forEach(titulo => {
    const th = document.createElement('th')
    th.textContent = titulo
    filaE.appendChild(th)
})
tbody.appendChild(filaE)

alumnos.forEach(item => {
    const fila = document.createElement('tr')
    
    encabezado.forEach(clave => {
        const celda = document.createElement('td')
        celda.textContent = item[clave]
        fila.appendChild(celda)
    })
    tbody.appendChild(fila)
})

table.appendChild(tbody)

document.getElementById('content').appendChild(table)

function cambiar() {
    const titulo = document.getElementById('title')
    const entrada = document.getElementById('entrada')

    

    if(alumnos.some(alumnos => alumnos.Nombre === entrada.value)){
        titulo.textContent = 'El alumno que usted busca existe!'
        titulo.style.color = 'green'
    }else{
        titulo.textContent = 'Error, el alumno no existe'
        titulo.style.color = 'red'
    }
}