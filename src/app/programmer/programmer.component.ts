import { Component, OnInit } from '@angular/core';
//To aactivate the route and get the parameter
import { ActivatedRoute } from '@angular/router';
//Services
import { ProgrammerService } from '../programmer.service';
import { MessageProgrammerService } from '../message-programmer.service'
//model
import { Programmer } from './programmer';
//Bootstrap modal
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

//Alerts bootstrap
interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-programmer',
  templateUrl: './programmer.component.html',
  styleUrls: ['./programmer.component.css']
})
export class ProgrammerComponent implements OnInit {
  programmers: Programmer[];
  prog: Programmer;

  //variables to programmer
  id: number;
  nombre: string;
  perfil:string;
  lan_favorito: string;
  git_address: string;

  alert: Alert = {
    type: '',
    message: '',
  }

  constructor(private ps: ProgrammerService,private route: ActivatedRoute,private modalService: NgbModal, private msg:MessageProgrammerService) { }

  ngOnInit() {
    this.allProgrammers();
  }

  allProgrammers(): void{
    this.ps.getAllProgrammers().subscribe(programmers =>(this.programmers = programmers));
  }

  addProgrammer(){
    this.ps.addProgrammer(this.nombre,this.perfil,this.lan_favorito,this.git_address).subscribe((data) => {
      this.alert = {
        type: 'success',
        message: 'Programmer agregado correctamente',
      }
      console.log(data)
      this.msg.setMessage("Programmer added")
      this.modalService.dismissAll()
    })
  }

  showProg(programmer){
    this.prog = programmer;
    console.log(this.prog);
    /*this.ps.showProgrammer(this.id).subscribe((res) => {

    });*/
    alert('Ups botón en desarrollo');
  }

  deleteProg(){
    alert('Ups botón en desarrollo');
  }

  //To open modal
  open(content){
    this.modalService.open(content);
  }

  //Alerts
  close(alert: Alert) {
    alert.type = ''
    alert.message = ''
    this.alert = {
      type: '',
      message: ''
    }
  }

}
