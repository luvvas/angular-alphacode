import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  rowData = [
    { name: "Lucas Machado", birthday: "16/12/1999", email: "lmachado72@outlook.com", profession: "Desenvolvedor Full-stack", telephone: "41997083462", cellphone: "41997083462" },
    { name: "Lucas Machado", birthday: "16/12/1999", email: "lmachado72@outlook.com", profession: "Desenvolvedor Full-stack", telephone: "41997083462", cellphone: "41997083462" },
    { name: "Lucas Machado", birthday: "16/12/1999", email: "lmachado72@outlook.com", profession: "Desenvolvedor Full-stack", telephone: "41997083462", cellphone: "41997083462" },
  ];

  colDefs: ColDef[] = [
    { field: "name", headerName: "Nome" },
    { field: "birthday", headerName: "Data de Nascimento" },
    { field: "email", headerName: "E-mail" },
    { field: "profession", headerName: "Profissão" },
    { field: "telephone", headerName: "Telefone" },
    { field: "cellphone", headerName: "Celular" },
    { field: "", headerName: "Actions", headerClass: "header-cell", width: 250, cellRenderer: this.actionRender.bind(this) }
  ];

  actionRender(params: any) {
    let div = document.createElement('div');
    let htmlCode = ' <button type="button" class="btn editar"><img src="assets/editar.png" height="15px"></button>\n' +
    '<button type="button" class="btn excluir"><img src="assets/excluir.png" height="20px"></button>\n'

    div.innerHTML = htmlCode;
  
    // handle edit button
    let editButton = div.querySelector('.editar')
    //@ts-ignore
    editButton?.addEventListener('click', () => {
      // this.editProductDetails(params)
      console.log('clicked editar')
    })

    // handle delete button
    let deleteButton = div.querySelector('.excluir')
    //@ts-ignore
    deleteButton?.addEventListener('click', () => {
      // this.deleteProductDetails(params)
      console.log('clicked excluir')
    })
    return div;
  }
}
