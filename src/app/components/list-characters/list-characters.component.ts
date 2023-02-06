import { CharactersServiceService } from './../../services/characters-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  characters: any;
  info: any;

  search = '';
  page = 1;

  loading = true;

  constructor(
    private charactersService: CharactersServiceService
  ) { }

  ngOnInit(): void {
    this.listCharacters(1);
  }

  listCharacters(page : number) {
    this.loading = true;
    this.charactersService.listCharacters(this.search, page).subscribe((response: any) => {
      console.log(response)
      if (this.page == 1) {
        this.characters = response.results;
        this.info = response.info;
      }else{
        console.log(page)
        this.characters = this.characters.concat(response.results);
      }
      this.loading = false;
    })
  }

  clear() {
    this.search = '';
    this.listCharacters(1);
  }

  loadMore() {
    this.page = this.page + 1;
    this.listCharacters(this.page);
  }
}
