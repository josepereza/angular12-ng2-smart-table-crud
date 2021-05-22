import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
  }
  persona={
    id:0,
    name:'',
    username:'',
    email:''
  }
  personas:any[]=[]
  title = 'borrar66';
  settings = {
    mode: 'internal', // internal|external
    selectMode: 'single', // single|multi
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      custom: [],
      position: 'left', // left|right
    },
    pager:{
      perPage:5
    },
    delete: {
      confirmDelete: true,

      deleteButtonContent: '<i class="fa fa-trash" style="font-size:32px"></i>',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel',
      
      
    },
    add: {
      confirmCreate: true,
      addButtonContent:'crear'
    },
    edit: {
      confirmSave: true,
      editButtonContent:'editar'
    },
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };
  ngOnInit() {
    
 
  }
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },

    // ... list of items

    {
      id: 3,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    },
    {
      id: 4,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 5,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },

    // ... list of items

    {
      id: 6,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    },
    {
      id: 7,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 8,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },

    // ... list of items

    {
      id: 9,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];

  onDeleteConfirm(event:any) {
    console.log("Delete Event In Console")
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event:any) {
    if (window.confirm('Are you sure you want to create?')) {
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event:any) {
    if (window.confirm('Are you sure you want to save?')) {
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

}
