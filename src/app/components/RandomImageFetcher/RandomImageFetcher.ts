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

  RightMainImage = ''
  RightMainImageBackUp = ''

  LeftMainImage = ''
  LeftMainImageBackUp = ''

  PastLeftImages: PastImageData[] = []

  PastRightImages: PastImageData[] = []

  async FetchNewImage(){

    const newImageData = await fetch('https://picsum.photos/640/360')

    if (!newImageData.ok){

      console.error("Failed to fetch Image")

      return '';
    }

    const imageBlob = await newImageData.blob()

    const imageUrlObject = URL.createObjectURL(imageBlob)

    return`url(${imageUrlObject})`
  }

  async FetchRightImage(){

    const newImage = await this.FetchNewImage()

    const self = this;

    if (!!newImage){

      if (!!this.RightMainImage){

        this.PastRightImages.push({    
          isMainImage: false,    
          imageData: this.RightMainImage,
          onClick() {

            if (this.isMainImage){

              self.RightMainImage = self.RightMainImageBackUp
            } else {

              self.RightMainImage = this.imageData;
            }

            this.isMainImage != this.isMainImage
          }
        })
      }
  
      this.RightMainImage = newImage;

      this.RightMainImageBackUp = newImage;
    }
  }

  async FetchLeftImage(){

    const newImage = await this.FetchNewImage()

    const self = this;

    if (!!newImage){

      if (!!this.LeftMainImage) {

        this.PastLeftImages.push({    
          isMainImage: false,    
          imageData: this.LeftMainImage,
          onClick() {

            if (this.isMainImage){

              self.LeftMainImage = self.LeftMainImageBackUp
            } else {

              self.LeftMainImage = this.imageData;
            }

            this.isMainImage != this.isMainImage
          }
        })
      }
  
      this.LeftMainImage = newImage;
      
      this.LeftMainImageBackUp = newImage;
    }
  }
}