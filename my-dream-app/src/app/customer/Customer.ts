export class Customer {

  id: number;
  namaCustomer: string;
  alamatCustomer: string;
  kelaminCustomer: string;
  telpCustomer: string;
 

  constructor(id: number, namaCustomer: string, alamatCustomer: string, kelaminCustomer: string, telpCustomer: string){
    this.id = id;
    this.namaCustomer = namaCustomer;
    this.alamatCustomer = alamatCustomer;
    this.kelaminCustomer = kelaminCustomer;
    this.telpCustomer = telpCustomer;
    
  }

}