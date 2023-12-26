import { Component, Input, OnInit} from '@angular/core';
import { Tag } from '../shared/models/tag';
import { ArtService } from '../services/art/art.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  @Input()
  artPageTags?:string[]

  @Input()
  justifyContent:string = 'center';
  tags?:Tag[];
  constructor(private artService : ArtService) { }

  ngOnInit(): void {
    if(!this.artPageTags)
    this.tags = this.artService.getAllTags();
  }
}
