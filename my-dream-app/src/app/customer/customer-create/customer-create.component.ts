import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {Customer} from "../Customer";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-customer-create',
    templateUrl: './customer-create.component.html',
    styleUrls: ['./customer-create.component.css'],
    providers: [CustomerService]
})
export class CustomerCreateComponent implements OnInit, OnDestroy {
    
    id: number;
    customer: Customer;
    
    customerForm: FormGroup;
    private sub: any; //update customer

    constructor(private route: ActivatedRoute,
        private router: Router,
        private customerService: CustomerService) {}

    ngOnInit() {
    
        this.sub = this.route.params.subscribe(params => { 
            this.id = params['id'];
        });

        this.customerForm = new FormGroup({
            namaCustomer: new FormControl('', Validators.required),
            alamatCustomer: new FormControl('', Validators.required),
            kelaminCustomer: new FormControl('', Validators.required),
            telpCustomer: new FormControl('', Validators.required)
        }); 

        if (this.id) { //edit form
      this.customerService.findById(this.id).subscribe(
        customer => {
            this.id = customer.id;
            this.customerForm.patchValue({
            namaCustomer: customer.namaCustomer,
            alamatCustomer: customer.alamatCustomer,
            kelaminCustomer: customer.kelaminCustomer,
            telpCustomer: customer.telpCustomer,
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
    if (this.customerForm.valid) {
      if (this.id) {
        let customer: Customer = new Customer(this.id,
          this.customerForm.controls['namaCustomer'].value,
          this.customerForm.controls['alamatCustomer'].value,
          this.customerForm.controls['kelaminCustomer'].value,
          this.customerForm.controls['telpCustomer'].value);
        this.customerService.updateCustomer(customer).subscribe();
      } else {
        let customer: Customer = new Customer(null,
	     this.customerForm.controls['namaCustomer'].value,
          this.customerForm.controls['alamatCustomer'].value,
          this.customerForm.controls['kelaminCustomer'].value,
          this.customerForm.controls['telpCustomer'].value);
          this.customerService.saveCustomer(customer).subscribe();
      }
     }
      this.customerForm.reset();
      this.router.navigate(['/customer']);
  }

  redirectCustomerPage() {
    this.router.navigate(['/customer']);

  }
}  

