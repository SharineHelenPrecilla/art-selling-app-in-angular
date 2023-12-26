import { Component , OnInit } from '@angular/core';
import { ArtService} from '../services/art/art.service';
import { Art } from '../shared/models/art';
import { ActivatedRoute } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  arts:Art[] = [];
  constructor(private artService:ArtService, private route:ActivatedRoute) { }

  ngOnInit() : void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
       this.arts= this.artService.getAllArtsBySearchTerm(params['searchTerm']);
      else if(params['tag'])
       this.arts = this.artService.getAllArtsByTag(params['tag']);
      else
        this.arts = this.artService.getAll();
    })


  }

}


