import { inject } from '@angular/core';
import { CanActivateFn , Router} from '@angular/router';
import { GlobalserviceService } from '../services/globalservice.service';


export const canActivateGuard: CanActivateFn = (route, state) => {
  
  let type = localStorage.getItem("type") 
  if(type=="user"){
    const route = inject(Router)
    route.navigateByUrl('')
    return false
  }
  return true;
};
