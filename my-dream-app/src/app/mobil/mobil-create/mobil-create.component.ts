import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MobilService} from "../mobil.service";
import {Mobil} from "../Mobil";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-mobil-create',
    templateUrl: './mobil-create.component.html',
    styleUrls: ['./mobil-create.component.css'],
    providers: [MobilService]
})
export class MobilCreateComponent implements OnInit, OnDestroy {
    
    id: number;
    mobil: Mobil;
    
    mobilForm: FormGroup;
    private sub: any; //update mobil

    constructor(private route: ActivatedRoute,
        private router: Router,
        private mobilService: MobilService) {}

    ngOnInit() {
    
        this.sub = this.route.params.subscribe(params => { 
            this.id = params['id'];
        });

        this.mobilForm = new FormGroup({
            merkMobil: new FormControl('', Validators.required),
            namaMobil: new FormControl('', Validators.required),
            jenisMobil: new FormControl('', Validators.required),
            platMobil: new FormControl('', Validators.required)
            
        }); 

        if (this.id) { //edit form
      this.mobilService.findById(this.id).subscribe(
        mobil => {
            this.id = mobil.id;
            this.mobilForm.patchValue({
            merkMobil: mobil.merkMobil,
            namaMobil: mobil.namaMobil,
            jenisMobil: mobil.jenisMobil,
            platMobil: mobil.platMobil,
          });
         },error => {
          console.log(error);
         }
      );
 
    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.mobilForm.valid) {
      if (this.id) {
        let mobil: Mobil = new Mobil(this.id,
          this.mobilForm.controls['merkMobil'].value,
          this.mobilForm.controls['namaMobil'].value,
          this.mobilForm.controls['jenisMobil'].value,
          this.mobilForm.controls['platMobil'].value);
        this.mobilService.updateMobil(mobil).subscribe();
      } else {
        let mobil: Mobil = new Mobil(null,
          this.mobilForm.controls['merkMobil'].value,
          this.mobilForm.controls['namaMobil'].value,
          this.mobilForm.controls['jenisMobil'].value,
          this.mobilForm.controls['platMobil'].value);
          this.mobilService.saveMobil(mobil).subscribe();
      }
     }
      this.mobilForm.reset();
      this.router.navigate(['/mobil']);
  }

  redirectMobilPage() {
    this.router.navigate(['/mobil']);

  }
}  

