import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  isLoggedIn: boolean = false;

  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  itemsFor : any = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
  ];

  selectedItemId: number | undefined;
  selectedItemTitle!: string;


  onSelectionChange(event: any) {
    this.selectedItemId = event.target.value;
    const selectedItem : any = this.itemsFor.find((itemFor: any) => itemFor.id === Number(this.selectedItemId));
    this.selectedItemTitle = selectedItem?.title;
    console.log("item for", selectedItem);
  }

  isHighlighted = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  customStyles = {
    'background-color': 'green',
    'color': 'black',
    'font-weight': 'bold'
  };

  isStyle = false;

  toggleStyle() {
    this.isStyle = !this.isStyle;
  }


  constructor() {}

  ngOnInit(): void {

  }
}
