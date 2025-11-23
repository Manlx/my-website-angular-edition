import { Route, Routes } from '@angular/router';

import { 
  ConvertAge, 
  Home, 
  ImageBattle 
} from '@scenes';

// Complete this mess later
type PathChildren = {[key in string]: MappedPath}

class MappedPath {
  path: string = ''
  children: PathChildren = {}
  parent?: MappedPath = undefined
  route?: Route = undefined

  constructor(route: Route, children: PathChildren = {}, parent: MappedPath | undefined = undefined){

    this.path = route.path || '';
    this.children = children
    this.parent = parent;
  }

  addChildren(children: MappedPath[]){
    for (const child of children) {

      child.parent = this;

      this.children[child.path] = child;
    }

  }

}

function BuildPath() {}

export const allPaths: MappedPath = new MappedPath({
  component: Home,
  path: '',
  title: 'Home'
})

export const routes: Routes = [
  {
    component: Home,
    path: '',
    title: 'Home'
  },
  {
    component: ConvertAge,
    path: 'convert-age',
    title: 'Convert Age'
  },
  {
    component: ImageBattle,
    path: 'image-battle',
    title: 'image-battle'
  }
];
