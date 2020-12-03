import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html",
  styles: ["./customers-list.component.scss"]
})
export class CustomersListComponent implements OnInit {

  filteredCustomers: any[] = [];
  customersOrderTotal = 0;
  currencyCode = "USD";

  constructor() {}
  ngOnInit(): void {}
}
