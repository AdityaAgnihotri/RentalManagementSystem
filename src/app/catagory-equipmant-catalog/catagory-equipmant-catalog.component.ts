import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catagory-equipmant-catalog',
  templateUrl: './catagory-equipmant-catalog.component.html',
  styleUrls: ['./catagory-equipmant-catalog.component.css']
})
export class CatagoryEquipmantCatalogComponent implements OnInit {
  item: any;
  dealers_id: any;
  branchId: any;
  filteredArray: any = [];


  constructor( private homeService: HomeService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.homeService.currentMessage.subscribe(res => {      
      this.item = res;   
     })
   }



  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.dealers_id = params['delId'];
      this.branchId = params['branchId'];
      !(this.item === "message")? this.setCategories(this.item) : this.getData();      
    });
  }




  getData(): any {
    this.homeService.loadData().subscribe((res: any) => {
      if(res && res.locations){              
        let item =  res.locations.filter(x => x.dealers_id === this.dealers_id);
        item.length>0? this.setCategories(item[0]): item = [];
      }
    }, err => {
      console.log(err);
    })
  }




  setCategories(item): any {
    item.branches.filter( x => {
      if(x.branch_id === this.branchId) {
        this.filteredArray = [];
        x.categories.filter(y => {
          this.filteredArray.push({
            name: y.name, image: `assets/img/${y.image}`, 
            subCategory: y.subcategories.length>0? true: false
          })          
        } )
      }
    })    
  }



  navigateToSubCategory(name) {    
    this.router.navigateByUrl(`sub-cat?delId=${this.dealers_id}&branchId=${this.branchId}&name=${name}`);
  }

}
