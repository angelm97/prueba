import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private firestore: AngularFirestore) { }

  getAllEmployer():Observable<any>{
    return this.firestore.collection('empleados').snapshotChanges();
  }


  createEmployer(employer:any ):Promise<any>{
    return this.firestore.collection('empleados').add(employer);
  }

  deleteEmployer(id:string):Promise<any>{
    return this.firestore.collection('empleados').doc(id).delete();
  }

  getById(id:string ): Observable<any>{
    return this.firestore.collection('empleados').doc(id).snapshotChanges();
  }

  update(id:string, data:any){
    this.firestore.collection('empleados').doc(id).update(data);
  }
}
