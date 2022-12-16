import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { routes } from 'src/routes.helper';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public actualPage: string = '';
  public routes: string[] = routes;
  public isThePageMovies: boolean = false;

  constructor(
    private location: Location,
    private movieService: MovieHandlerService
  ) { }

  async ngOnInit(): Promise<void> {
    this.actualPage = this.location.path()
    this.isThePageMovies = await this.movieService.isTheFirstPage(this.routes, this.actualPage);
  }

  public previusPageButton(): void {
    this.location.back();
  }

}
