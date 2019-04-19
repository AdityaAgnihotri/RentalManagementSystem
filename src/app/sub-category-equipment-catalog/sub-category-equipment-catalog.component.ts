import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-sub-category-equipment-catalog',
  templateUrl: './sub-category-equipment-catalog.component.html',
  styleUrls: ['./sub-category-equipment-catalog.component.css']
})
export class SubCategoryEquipmentCatalogComponent implements OnInit {
  dealers_id: any;
  branchId: any;
  item: any;
  filteredArray: any[];
  selectedName: any;
  filteredSubCategoryArray: any[];


  constructor(private homeService: HomeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.homeService.currentMessage.subscribe(res => {
      this.item = res;
    })
  }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.dealers_id = params['delId'];
      this.branchId = params['branchId'];
      this.selectedName = params['name'];
      !(this.item === "message") ? this.setCategories(this.item) : this.getData();
      // !(this.item === "message") ? this.setCat([this.item],this.dealers_id, this.branchId,this.selectedName) : this.getData();

    });
  }


  getData(): any {
    this.homeService.loadData().subscribe((res: any) => {
      if (res && res.locations) {
        let filtereditem = res.locations.filter(x => x.dealers_id === this.dealers_id);
        filtereditem.length > 0 ? this.setCategories(filtereditem[0]) : filtereditem = [];
        // filtereditem.length > 0 ? this.setCat([filtereditem[0]], this.dealers_id, this.branchId,this.selectedName) : filtereditem = [];

      }
    }, err => {
      console.log(err);
    })
  }


  setCategories(item): any {

    if (item && item.branches) {
      item.branches.forEach(x => {
        if (x.branch_id === this.branchId) {
          if (x.categories) {
            x.categories.forEach(y => {
              if (y.name === this.selectedName) {
                this.filteredSubCategoryArray = [];
                if (y.subcategories) {
                  y.subcategories.forEach(z => {
                    this.filteredSubCategoryArray.push({
                      name: z.name, image: `assets/img/subcategory/${z.image}`
                    })
                  })
                }
              }
            })
          }
        }
      })
    }
  }
  // setCat(array,delerId, branchId, catName) {
  //   var filteredArray = array.find(x=> x.dealers_id == delerId).branches.
  //   find(x=> x.branch_id == branchId).categories.
  //   find(x=> x.name == catName).subcategories; 
  //   filteredArray.forEach(element => {
  //     this.filteredSubCategoryArray.push({
  //       name: element.name, image: `assets/img/subcategory/${element.image}`
  //     })
  //   });
  // }
}
