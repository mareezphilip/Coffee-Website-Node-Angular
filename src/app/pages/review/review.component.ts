import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalserviceService } from 'src/app/services/globalservice.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  review: any = ""
  allreviews: any[] = []
  fullarr: any[] =[]
  arr: any[] = []
  full: any
  randarr: any[] = []
  rand: any
  constructor(private activate: ActivatedRoute, private service: GlobalserviceService) { }
  ngOnInit() {
    
    this.activate.paramMap.subscribe((param :any)=> {


      this.service.getallreview().subscribe(res => {
        this.allreviews = res.data
        
        this.allreviews.forEach(item => {
          this.full = item.rate
         
      
          this.fullarr = Array(this.full).fill(1);
          
          this.randarr = Array(5-this.full).fill(1);
        

      
        })
      }

      )

    })

  }
}
