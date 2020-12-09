import { Component, OnInit, Input } from "@angular/core";

import { ICustomer } from "../../shared/interfaces";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html",
  styles: ["./customers-list.component.scss"]
})
export class CustomersListComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: ICustomer[] = [];
  customersOrderTotal = 0;
  currencyCode = "USD";
  tableSchema: string[];

  constructor() {
    this.tableSchema = ["Name", "City", "Order Total"];
  }
  ngOnInit(): void {
    this.calculateOrders();
  }

  calculateOrders(): void {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(prop: string): void {
    // A sorter service will handle the service
    console.log(prop);
  }
}
