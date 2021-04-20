import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';


@Component({
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})
export class CreateEmpleadosComponent implements OnInit {
  
  datos:any;
  id:string;

  constructor(
    private service:EmpleadoService,
    private aRouter: ActivatedRoute
  
    ) { 
      this.datos = {
        name:'',
        surname: '',
        iDi:'',
        salary:''
      };

      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  async ngOnInit(){

    this.getById();
    
  }

   async createEmployer(form){
    try {
      

      if (this.id === null) {
        const res = await this.service.createEmployer(form.value);
        form.reset();
      } else {
        const res = await this.service.update(this.id,form.value);
        form.reset();
      }
      
    } catch (error) {
      console.log(error);
    }
    
  }

  getById(){

    const id = this.id;

    if (id !== null) {
      this.service.getById(id).subscribe(data=>{

        const res = data.payload.data();
      
        this.datos = {
          name: res.name,
          surname: res.surname,
          dId: res.dId,
          salary: res.salary
        };

      })
    }

    
    

  }

}
