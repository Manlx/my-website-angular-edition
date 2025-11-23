import {
  Component, 
} from '@angular/core';

import { 
  RandomImageFetcher 
} from "@components";


@Component({
  templateUrl: './image-battle.html',
  styleUrl: './image-battle.css',
  selector: 'image-battle',
  imports: [RandomImageFetcher]
})
export class ImageBattle{

}