import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";

type PastImageData = {
  imageData: string
  onClick: () => void
  isMainImage: boolean
}

@Component({
  styleUrl:'./RandomImageFetcher.css',
  templateUrl: './RandomImageFetcher.html',
  selector: 'random-image-fetcher',
  imports: [NgStyle]
})
export class RandomImageFetcher{

  MainImage = ''
  MainImageBackUp = ''
  PastImages: PastImageData[] = []

  async FetchNewImage(){

    const newImageData = await fetch('https://picsum.photos/900/500')

    if (!newImageData.ok){

      console.error("Failed to fetch Image")

      return '';
    }

    const imageBlob = await newImageData.blob()

    const imageUrlObject = URL.createObjectURL(imageBlob)

    return`url(${imageUrlObject})`
  }

  async FetchImage(){

    const newImage = await this.FetchNewImage()

    const self = this;

    if (!!newImage){

      if (!!this.MainImageBackUp){

        this.PastImages.push({    
          isMainImage: false,    
          imageData: this.MainImageBackUp,
          onClick() {

            if (this.isMainImage){

              self.MainImage = self.MainImageBackUp
              console.warn('Current image')
            } else {

              self.MainImage = this.imageData;
              console.warn('Past  Image')
            }

            this.isMainImage = !this.isMainImage
          }
        })
      }
  
      this.MainImage = newImage;

      this.MainImageBackUp = newImage;
    }
  }
}