import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Pedidos',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Inserir',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['order/create']
          },
          {
            label: 'Listar',
            icon: 'pi pi-fw pi-list',
            routerLink: ['order/list']
          },
        ],
      },
      {
        label: 'Produtos',
        icon: 'pi pi-fw pi-clone',
        items: [
          {
            label: 'Inserir',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['product/create']
          },
          {
            label: 'Listar',
            icon: 'pi pi-fw pi-list',
            routerLink: ['product/list']
          },
        ],
      },
      {
        label: 'Caixa',
        icon: 'pi pi-fw pi-wallet',
        items: [
          {
            label: 'Fluxo de Caixa',
            icon: 'pi pi-fw pi-dollar',
            routerLink: ['cash']
          },
        ],
      },
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Adicionar',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['customer/create'],
          },
          {
            icon: 'pi pi-fw pi-bars',
            label: 'Listar',
            routerLink: ['customer/list'],
          },
          // {
          //   label: 'Buscar',
          //   icon: 'pi pi-fw pi-users',
          //   items: [
          //     {
          //       label: 'Busca efetiva',
          //       icon: 'pi pi-fw pi-filter',
          //     },
          //   ],
          // },
        ],
      },
      {
        label: 'Cronograma',
        icon: 'pi pi-fw pi-calendar-times',
      },
    ];
  }
}
