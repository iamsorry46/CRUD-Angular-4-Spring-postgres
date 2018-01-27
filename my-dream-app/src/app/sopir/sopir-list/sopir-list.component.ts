import { Component, OnInit } from '@angular/core';
import { Sopir } from "../sopir";
import { SopirService } from "../sopir.service";
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-sopir-list',
  templateUrl: './sopir-list.component.html',
  styleUrls: ['./sopir-list.component.css'],
  providers: [SopirService]
})
export class SopirListComponent implements OnInit {
 
 private sopirs: Sopir[];
 
 constructor(private router: Router,
             private sopirService: SopirService) { }
 
  ngOnInit() {
    this.getAllSopirs();
  }
 
  getAllSopirs() {
    this.sopirService.findAll().subscribe(
      sopirs => {
        this.sopirs = sopirs;
      },
      err => {
        console.log(err);
      }
 
    );
  }

  redirectNewSopirPage() {
     
    this.router.navigate(['/sopir/create']);
  }
 
  editSopirPage(sopir: Sopir) {
    if (sopir) {
          this.router.navigate(['/sopir/edit/', sopir.id]);
    }
  }
 
  deleteSopir(sopir: Sopir) {
    if (sopir) {
      this.sopirService.deleteSopirById(sopir.id).subscribe(
        res => {
          this.getAllSopirs();
          this.router.navigate(['/sopir']);
          console.log('done');
        }
      );
    }
  }
 
}