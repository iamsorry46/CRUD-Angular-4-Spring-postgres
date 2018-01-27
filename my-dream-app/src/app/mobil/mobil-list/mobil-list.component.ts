import { Component, OnInit } from '@angular/core';
import { Mobil } from "../mobil";
import { MobilService } from "../mobil.service";
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-mobil-list',
  templateUrl: './mobil-list.component.html',
  styleUrls: ['./mobil-list.component.css'],
  providers: [MobilService]
})
export class MobilListComponent implements OnInit {

 private mobils: Mobil[];

 constructor(private router: Router,
             private mobilService: MobilService) { }
 
  ngOnInit() {
    this.getAllMobils();
  }
 
  getAllMobils() {
    this.mobilService.findAll().subscribe(
      mobils => {
        this.mobils = mobils;
      },
      err => {
        console.log(err);
      }
 
    );
  }

  redirectNewMobilPage() {
     
    this.router.navigate(['/mobil/create']);
  }
 
  editMobilPage(mobil: Mobil) {
    if (mobil) {
      this.router.navigate(['/mobil/edit',mobil.id]);
    }
  }
 
  deleteMobil(mobil: Mobil) {
    if (mobil) {
      this.mobilService.deleteMobilById(mobil.id).subscribe(
        res => {
          this.getAllMobils();
          this.router.navigate(['/mobil']);
          console.log('done');
        }
      );
    }
  }
 
}