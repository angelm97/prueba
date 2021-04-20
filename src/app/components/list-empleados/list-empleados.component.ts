import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  empleados: any[] = [];

  constructor(private service:EmpleadoService) { 
         
  }

  ngOnInit(): void { 
   this.getAll();

  }

  async getAll(){
    this.service.getAllEmployer().subscribe(data => {
      this.empleados = [];
      data.forEach(element => {
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });

    });   
  }

   async delete(id){
    
    try {
      await this.service.deleteEmployer(id);
       console.log('borrado');
    } catch (error) {
      console.log(error);
    }

 
    
  }

}
