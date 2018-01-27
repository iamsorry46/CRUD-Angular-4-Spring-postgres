import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SopirService} from "../sopir.service";
import {Sopir} from "../Sopir";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-sopir-create',
    templateUrl: './sopir-create.component.html',
    styleUrls: ['./sopir-create.component.css'],
    providers: [SopirService]
})
export class SopirCreateComponent implements OnInit, OnDestroy {

    id: number;
    sopir: Sopir;

    sopirForm: FormGroup;
    private sub: any; //update sopir

    constructor(private route: ActivatedRoute,
        private router: Router,
        private sopirService: SopirService) {}

    ngOnInit() {
    
        this.sub = this.route.params.subscribe(params => { //get id update sopir
            this.id = params['id'];
        });

        this.sopirForm = new FormGroup({
            namaSopir: new FormControl('', Validators.required),
            alamatSopir: new FormControl('', Validators.required),
            kelaminSopir: new FormControl('', Validators.required),
            lahirSopir: new FormControl('', Validators.required),
            telpSopir: new FormControl('', Validators.required)
        });

        if (this.id) { //edit form
      this.sopirService.findById(this.id).subscribe(
        sopir => {
            this.id = sopir.id;
            this.sopirForm.patchValue({
            namaSopir: sopir.namaSopir,
            alamatSopir: sopir.alamatSopir,
            kelaminSopir: sopir.kelaminSopir,
            lahirSopir: sopir.lahirSopir,
            telpSopir: sopir.telpSopir,
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
        if (this.sopirForm.valid) {
            if (this.id) {
                let sopir: Sopir = new Sopir(this.id,
                    this.sopirForm.controls['namaSopir'].value,
                    this.sopirForm.controls['alamatSopir'].value,
                    this.sopirForm.controls['kelaminSopir'].value,
                    this.sopirForm.controls['lahirSopir'].value,
                    this.sopirForm.controls['telpSopir'].value);
                    this.sopirService.updateSopir(sopir).subscribe();
            } else {
                let sopir: Sopir = new Sopir(null,
                    this.sopirForm.controls['namaSopir'].value,
                    this.sopirForm.controls['alamatSopir'].value,
                    this.sopirForm.controls['kelaminSopir'].value,
                    this.sopirForm.controls['lahirSopir'].value,
                    this.sopirForm.controls['telpSopir'].value);
                this.sopirService.saveSopir(sopir).subscribe();
            }
        }
        this.sopirForm.reset();
        this.router.navigate(['/sopir']);
    }

    redirectSopirPage() {
        this.router.navigate(['/sopir']);
    }
}