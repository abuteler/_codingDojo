const mapaMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const formatearFecha = fechaISO => {
  const date = new Date(fechaISO);
  return `${date.getDate()} de ${mapaMeses[date.getMonth()-1]} de ${date.getFullYear()}`;
}
