export default interface Menu {
  function(): unknown;
  title: string,
  icon?: string,
  description?: DescriptionMenu,


}

interface DescriptionMenu {
  text: string,
  img: string,
  descripcion: string,
  
}