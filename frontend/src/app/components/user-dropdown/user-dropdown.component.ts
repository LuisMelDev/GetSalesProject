import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import Popper from 'popper.js';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  providers:[AuthService]
})
export class UserDropdownComponent implements OnInit {

  public usuario: any;
  constructor(
    private _authService:AuthService,
    private _router: Router
  ){
    
  }

  dropdownPopoverShow = false;
  @ViewChild('btnDropdownRef', { static: false }) btnDropdownRef: ElementRef;
  popper = document.createElement('div');
  ngOnInit() {
    this.popper.innerHTML = `
    <div class="bg-white text-base z-60 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" #popoverDropdownRef>
  <a href="javascript:void(0)" id="panelUser" class="text-sm py-2 px-4 font-normal block w-full  bg-transparent  text-gray-800">
    Panel de usuario
  </a>
  <div class="h-0 my-2 border border-solid border-gray-200"></div>
  <a href="javascript:void(0)" id="logout" class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800">
    Cerrar sesión
  </a>
</div>`;
    this.usuario = this._authService.getIdentity()
    // console.log(this.usuario)
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
      this.destroyPopper();
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }
  destroyPopper() {
    this.popper.parentNode.removeChild(this.popper);
  }
  createPoppper() {
    new Popper(this.btnDropdownRef.nativeElement, this.popper, {
      placement: 'bottom-end',
    });
    this.btnDropdownRef.nativeElement.parentNode.insertBefore(
      this.popper,
      this.btnDropdownRef.nativeElement.nextSibling
    );
    document.getElementById('logout').addEventListener('click', ()=>{
      this.logout();
    })
    document.getElementById('panelUser').addEventListener('click', ()=>{
      this._router.navigate(['/main/panel-usuario'])
    })
  }

  logout(){
    this._authService.logout();
    this._router.navigate(['/login'])
  }
}
